import sqlite from "sqlite3"

export function connectDB () {
    return  new sqlite.Database('games.db', (err) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log('Connected to the games database.');
        }
    });
}

export function closeDB (db) {
    db.close((err) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log('Closed the database connection.');
        }
    });
}

export function retrievePlayers (db) {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM players";

        db.all(sql, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}