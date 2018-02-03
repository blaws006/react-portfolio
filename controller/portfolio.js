const db = require("../models");

//Find all portfolio objects in db
module.exports = {
    findAll: function (req, res) {
        db.Portfolio.find(req.query)
        .then(function (dbPortfolio) {
            res.json(dbPortfolio);
            console.log(dbPortfolio);
        })
        .catch(function (err) {
            res.json(err);
        })
    }
}