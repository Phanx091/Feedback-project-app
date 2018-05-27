const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');



router.post('/', (req,res) => {
    const post_id = req.body;
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                       VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [post_id.feeling, post_id.understanding, post_id.support, post_id.comments])
    .then((result) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('Error on router.post', error);
        res.sendStatus(500);
    });
}); // end of router.post





router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "feedback";`;
    pool
     .query(queryText)
     .then(results => {
         res.send(results.row);
     })
     .catch(error => {
        console.log(`router.get/projects ${error}`);
        res.sendStatus(500);
     });
}); // end of router.get

module.export = router;

