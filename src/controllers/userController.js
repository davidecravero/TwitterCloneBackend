const dbConnection = require('../dbConfig');

const UserController = {

    getAll: (req, res, next) => {
        res.send('All users');
    },
    getById: (req, res, next) => {
        const { id } = req.params;
        res.send(`User with id ${id}`);
    },
    getMessagesById: (req, res, next) => {
        const { id } = req.params;+
        res.send(`All messages by user ${id}`);
    },
};

module.exports = UserController;