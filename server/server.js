const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const entryRouter = require('./routes/entry-route');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/

app.use('/api/entry', entryRouter); 

/** ---------- START SERVER ---------- **/
app.listen(PORT, function () {
    console.log(`Listening on port: ${PORT}`);
});


