var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'z886I0146v3434',
    database: 'guessgame'
});


const insertRound = ({ player_name, range_from, range_to, player_number, guess_count }) => {

    const query =
        'INSERT INTO `rounds` (player_name, range_from, range_to, player_number, guess_count ) values (?,?,?,?,?);';

    const promise = new Promise((resolve, reject) => {
        connection.query(query, [player_name, range_from, range_to, player_number, guess_count], function (error, results, fields) {
            if (error) {
                reject(error);
            }
            resolve(results);
        });
    });
    return promise;
}

const insertguess = ({ round_id, guess }) => {

    const query =
        'INSERT INTO `guesses` VALUES (default, ?,?);';

    const promise = new Promise((resolve, reject) => {
        connection.query(query, [round_id, guess], function (error, results, fields) {
            if (error) {
                reject(error);
            }
            resolve(results);
        });
    });
    return promise;
}

module.exports = { insertRound, insertguess }