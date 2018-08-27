const express = require('express');

const app = express();

// Home route
app.get('/home', (req, res) => {

    res.send('home');
});

// Get articles route
app.get('/articles/get', (req, res) => {
    let articles = [{
            id: 1,
            title: 'A-1',
            author: 'K.Z.',
            body: 'This is article one'
        },
        {
            id: 1,
            title: 'A-2',
            author: 'K.Z.',
            body: 'This is article two'
        },
        {
            id: 1,
            title: 'A-3',
            author: 'K.Z.',
            body: 'This is article three'
        }
    ]
    res.send({ articles: articles });
});

// Add article route
app.post('/articles/post', (req, res) => {
    res.send('Article posted');
});

app.listen(9000, () => {
    console.log('Server listening on port 9000...');
});