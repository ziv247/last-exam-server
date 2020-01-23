var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'z886I0146v3434',
    database: 'guessgame'
});


const insertRound = ({ player_name, range_from, range_to, player_number, guess_count, guess }) => {

    const query =
        'INSERT INTO `rounds` (player_name, range_from, range_to, player_number, guess_count,guess ) values (?,?,?,?,?,?);';

    const promise = new Promise((resolve, reject) => {
        connection.query(query, [player_name, range_from, range_to, player_number, guess_count, guess], function (error, results, fields) {
            if (error) {
                reject(error);
            }
            resolve(results);
        });
    });
    return promise;
}

function getAll() {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM rounds"
        connection.query(query, (error, results, fields) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(results);
        });
    });
}



module.exports = { insertRound, getAll }