const mongoose = require("mongoose")

const Schema = mongoose.Schema

const PriceSchema = new Schema({
    BTC_USD:{
        type : String
    },
    BTC_EUR:{
        type : String
    },
    USD_R:{
        type : String
    },
    EUR_R:{
        type : String
    },
    BTC_R:{
        type : String
    },
},{timestamps:true})


module.exports = mongoose.model("Price",PriceSchema)