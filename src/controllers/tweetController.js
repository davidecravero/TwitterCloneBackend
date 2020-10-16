const dbConnection = require('../dbConfig');

const TweetController = {

    getAll: (req, res, next) => {
        res.send('All tweets');
    },
    getById: (req, res, next) => {
        const { id } = req.params;
        res.send(`All tweets by user ${id}`);
    },
};

module.exports = TweetController;