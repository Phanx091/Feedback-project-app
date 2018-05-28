const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// ROUTER.post
router.post('/', (req, res) => {
    console.log('WATCHYA');
    const post_id = req.body;
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                       VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [post_id.feeling, post_id.understanding, post_id.support, post_id.comments])
    .then((result) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log(`ERROR on router.post api/feedback: ${error}`);
        res.sendStatus(500);
    });
}); // end of router.post

// ROUTER.get
router.get('/', (req, res) => {
    console.log('get 1234');
    const queryText = `SELECT * FROM "feedback";`;
    pool
     .query(queryText)
     .then(response => {
         res.send(response.rows)
         console.log('data:', response.rows);
     })
     .catch(error => {
        console.log(`ERROR on router.get api/feedback: ${error}`);
        res.sendStatus(500);
     });
}); // end of router.get

// ROUTER.delete
router.delete('/:id', (req,res) => {
    console.log(req.query);
    const deleteFeedback_id = req.params.id;
    const queryText = 'DELETE FROM "feedback" WHERE "id" = $1;';
    pool.query(queryText,[deleteFeedback_id]).then((response) => {
        res.sendStatus(200);
        console.log(`DELETE successful on router.delete api/feedback: ${response}`);
    })
    .catch((error) => {
        console.log(`ERROR on router.delete api/feedback: ${error}`);
        res.sendStatus(500);
    });
}); // end of router.delete 

module.exports = router;

