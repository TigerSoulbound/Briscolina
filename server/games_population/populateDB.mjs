import sqlite from "sqlite3"

import fs from "fs"

const db = new sqlite.Database('../db/games.db', (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the games database.');
    }
});

db.run("DELETE FROM games", (err) => {
    if (err) {
        console.error("Error deleting data:", err)
    }
    else {
        console.log("Deleted all data from games table")
    }
})

const csvFilePath = "Briscolina_Punteggi.csv"
fs.readFile(csvFilePath, "utf8", (err, data) => {
    if (err) {
        console.error("Error reading the CSV file:", err)
    } else {
        const lines = data.split("\n").slice(1); // Split by lines and skip the header
        lines.forEach(line => {
            const columns = line.split(",").map(col => col.trim());

            let player_id;
            switch (columns[2]) {
                case "Andrea":
                    player_id = 1;
                    break;
                case "Pol":
                    player_id = 2;
                    break;
                case "Pietro":
                    player_id = 3;
                    break;
                case "Sam":
                    player_id = 4;
                    break;
                case "Tommy":
                    player_id = 5;
                    break;
                default:
                    player_id = 0; // Default value if no match
            }
            let partner_id;
            switch (columns[2]) {
                case "Andrea":
                    partner_id = 1;
                    break;
                case "Pol":
                    partner_id = 2;
                    break;
                case "Pietro":
                    partner_id = 3;
                    break;
                case "Sam":
                    partner_id = 4;
                    break;
                case "Tommy":
                    partner_id = 5;
                    break;
                default:
                    player_id = 0; // Default value if no match
            }
            const hasPlayed = columns[4] === "Si" ? true : false;
            const hasWon = columns[5] === "Si" ? true : false;
            let game_type_id;
            switch (columns[6]) {
                case "1vs1":
                    game_type_id = 1;
                    break;
                case "1vs1vs1":
                    game_type_id = 2;
                    break;
                case "2vs2":
                    game_type_id = 3;
                    break;
                default:
                    game_type_id = 0; // Default value if no match
            }

            const sql = `INSERT INTO games (game_id, date, game_type_id, player_id, partner_id, score, has_played, has_won) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
            db.run(sql, [columns[0], columns[1], game_type_id, player_id, partner_id, columns[3], hasPlayed, hasWon], (err) => {
                if (err) {
                    console.error("Error inserting data:", err)
                }
                else {
                    console.log("Inserted data:", columns)
                }
            });
        });
    }
})