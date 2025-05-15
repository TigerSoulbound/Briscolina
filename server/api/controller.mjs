import * as queries from '../db/queries.mjs';

export function getPlayers(req, res) {
    queries.retrievePlayers()
        .then((players) => {
            res.status(200).json(players);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Error retrieving players');
        })
}

export function getGames(req, res) {
    queries.retrieveGames()
        .then((games) => {
            res.status(200).json(games);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Error retrieving games');
        })
}