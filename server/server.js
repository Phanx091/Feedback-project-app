/** ----------CONST ---------- **/
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

/** ----------ROUTE INCLUDES ---------- **/
const feedbackRouter = require('./routes/feedback.router');

/** ----------BODY PARSER MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));

/** ---------- SERVE STATIC ROUTES ---------- **/
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/api/feedback', feedbackRouter); 

/** ---------- PORT SERVER ---------- **/
const PORT = process.env.PORT || 5000;

/** ---------- START SERVER ---------- **/
app.listen(PORT, function () {
    console.log(`Listening on port: ${PORT}`);
});


