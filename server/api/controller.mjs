import * as queries from '../db/queries.mjs';

export function getPlayers(req, res) {
    const db = queries.connectDB();
    queries.retrievePlayers(db)
        .then((players) => {
            res.status(200).json(players);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Error retrieving players');
        })
        .finally(() => {
            queries.closeDB(db);
        });
}
