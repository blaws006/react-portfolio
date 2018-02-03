const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var PortfolioSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true
    },
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

var Portfolio = mongoose.model("Portfolio", PortfolioSchema);

module.exports = Portfolio;