const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PortfolioSchema = new Schema({
    title: {
        type: String
    },
    summary: {
        type: String
    },
    link: {
        type: String
    },
    img: {
        type: String
    }
});

const Portfolio = mongoose.model("Portfolio", PortfolioSchema);

module.exports = Portfolio;