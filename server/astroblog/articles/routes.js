const express = require('express');
const router = express.Router();
import db from '../db/database';
const ObjectId = require('mongojs').ObjectId;
const expressValidator = require('express-validator');

router.use(expressValidator());

// Get articles route
router.get('/', (req, res) => {
    db.articles.find((err, docs) => {
        if (!err) {
            res.send({ docs: docs });
        } else {
            console.log(err);
        }
    });
});

// Add article route
router.post('/', (req, res) => {

    req.checkBody('title', 'Title is required').notEmpty();
    req.checkBody('author', 'Author is required').notEmpty();
    req.checkBody('body', 'Body is required').notEmpty();

    const errors = req.validationErrors();

    if (!errors) {
        db.articles.insert(req.body, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send('Article posted');
            }
        });
    } else {
        console.log(errors);
    }

});

router.delete('/delete', (req, res) => {
    req.checkBody('id', 'ID is required').notEmpty();

    const error = req.validationErrors();

    if (!error) {
        const id = new ObjectId(req.body.id);
        db.articles.remove({ _id: id }, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send('Article deleted');
            }
        });
    } else {
        console.log(error);
    }
});

router.put('/update', (req, res) => {

    req.checkBody('id', 'ID is required').notEmpty();
    req.checkBody('title', 'Title is required').notEmpty();
    req.checkBody('author', 'Author is required').notEmpty();
    req.checkBody('body', 'Body is required').notEmpty();

    const errors = req.validationErrors();

    if (!errors) {
        const id = new ObjectId(req.body.id);
        db.articles.update({ _id: id }, { title: req.body.title, author: req.body.author, body: req.body.body }, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send('Article updated');
            }
        });
    } else {
        console.log(errors);
    }
});

module.exports = router;