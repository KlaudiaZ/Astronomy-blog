const express = require('express');
const router = express.Router();
import db from '../db/database';

// Get articles route
router.get('/', (req, res) => {
    db.articles.find((err, docs) => {
        if (err) {
            console.log(err);
        } else {
            res.send({ docs: docs });
        }
    });
});

// Add article route
router.post('/', (req, res) => {
    res.send('Article posted');
});

module.exports = router;