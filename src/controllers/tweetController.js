const dbConnection = require('../dbConfig');

const TweetController = {

    getAll: (req, res, next) => {
        dbConnection
          .query(`SELECT *
          FROM "tweets"`)
          .then((data) => {
              return res.json(data.rows);
          })
          .catch((e) => console.log(e));
    },
    getById: (req, res, next) => {
        const { id } = req.params;
        dbConnection
          .query(`SELECT *
          FROM "tweets" WHERE tweet_id=${id}`)
          .then((data) => {
              return res.json(data.rows);
          })
          .catch((e) => console.log(e));
    },
};

module.exports = TweetController;