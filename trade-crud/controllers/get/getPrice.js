const Price = require("../../model/price")
exports.getPrice = (req,res)=>{
    Price.find()
    .then((result)=>{
        res.json(result)
    })
    .catch(err => console.log(err))
}