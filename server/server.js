const express = require('express');
const bodyParser = require('body-parser');
const articles = require('./astroblog/articles/routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/articles', articles);

app.listen(9000, () => {
    console.log('Server listening on port 9000...');
});