const express = require('express');
const router = express.Router();
const createDbFunction = require('../db/database');
const logger = require('../logger');

/* GET books listing. */
router.get('/', (req, res, next) => {
    //sanitize get parameters
    let limit = req.queryInt('limit') ?? 20;
    let offset = req.queryInt('offset') ?? 0;
    let sql = 'select * from books ORDER BY timestamp DESC LIMIT ' + limit + ' OFFSET ' + offset;
    logger.debug('SQL string: ' + sql);
    let db = createDbFunction();
    db.serialize(() => {
        db.all(sql, (err, row) => {
            if (err) {
                logger.error(err.message);
                res.status(500).json({messages: 'error opending db connection'});
                db.close();
            } else {
                logger.debug('Found rows : ' + row.length)
                res.status(200).json(row)
                db.close();
            }
        });
    });
});

/* POST new book */
router.post('/', (req, res, next) => {
    if (!req.body.author) {
        return next({status: 400, messages: 'author field is required'});
    }
    if (!req.body.title) {
        return next({status: 400, messages: 'title field is required'});
    }

    let author = req.bodyJson().author;
    let title = req.bodyJson().title;
    let sql = 'INSERT INTO books (title, author, timestamp) VALUES (?, ?, DATETIME())';
    let db = createDbFunction();
    db.run(sql, [title, author], function(err) {
       if (err) {
           logger.error(err);
           res.status(500).json({"messages": "error inserting book into the db"});
           db.close();
       } else {
           res.status(200).json({"messages": "book added succesfully"});
           db.close();
       }
    });
});

module.exports = router;
