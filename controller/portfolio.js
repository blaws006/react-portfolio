const db = require("../models");

//Find all portfolio objects in db
module.exports = {
    findAll: function (req, res) {
        db.Portfolio.find(req.query)
        .sort({
            date: -1
        })
        .then(function (dbPortfolio) {
            res.json(dbPortfolio);
        })
        .catch(function (err) {
            res.json(err);
        });
    }
}