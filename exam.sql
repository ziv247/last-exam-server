CREATE DATABASE guessgame;


CREATE TABLE rounds (
    id int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    player_name varchar(255),
    start_at datetime DEFAULT CURRENT_TIMESTAMP,
    range_from tinyint,
    range_to tinyint,
    player_number tinyint,
    guess_count tinyint,
    guesses varchar(255),
    primary key(id)
        
);

