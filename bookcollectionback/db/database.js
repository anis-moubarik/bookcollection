const sqlite3 = require('sqlite3').verbose();
const logger = require('../logger');

const SOURCE = "./db/books_23.db";

function createDbConnection() {
    let db = new sqlite3.Database(SOURCE, sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            logger.error(err.message);
            throw err;
        } else {
            logger.info('Connected to db');
        }
    });
    return db;
}


module.exports = createDbConnection;