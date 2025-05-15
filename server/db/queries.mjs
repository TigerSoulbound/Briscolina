import sqlite from "sqlite3"

const db = new sqlite.Database('../data/games.db', (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the games database.');
    }
})

export function shutdown () {
    db.close((err) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log('Closed the database connection.');
        }
    });
}

export function retrievePlayers () {
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

export function retrieveGames () {
    return new Promise((resolve, reject) => {
        const sql = `SELECT game_id, date, type, P1.name AS player, P2.name AS partner, score, has_played, has_won 
                    FROM games G, players P1, game_types T
                    LEFT JOIN players P2 ON G.partner_id = P2.id
                    WHERE G.player_id = P1.id AND G.game_type_id = T.id
                    ORDER BY game_id, player_id`;

        db.all(sql, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        })
    })
}