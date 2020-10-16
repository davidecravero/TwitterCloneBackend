const dbConnection = require('../dbConfig');

const UserController = {

    getAll: (req, res, next) => {
        dbConnection
          .query(`SELECT *
          FROM "users"`)
          .then((data) => {
              return res.json(data.rows);
          })
          .catch((e) => console.log(e));
    },
    getById: (req, res, next) => {
        const { id } = req.params;
        dbConnection
          .query(`SELECT *
          FROM "users" WHERE id=${id}`)
          .then((data) => {
              return res.json(data.rows);
          })
          .catch((e) => console.log(e));
    },
    getMessagesById: (req, res, next) => {
        const { id } = req.params;+
        res.send(`All messages by user ${id}`);
    },
};

module.exports = UserController;