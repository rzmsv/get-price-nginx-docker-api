const axios = require("axios")
const Price = require("../../model/price")
exports.postPrice =async (req,res,next)=>{
    try {
        setTimeout(()=>{
            axios.get("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,EUR&api_key=e9714dea87d92084018abcb8f843b39842d9b4a44352364ca2f5c783374db3a2")
                .then((result)=>{
                    // console.log(result.data)
                    axios.get("https://www.megaweb.ir/api/money")
                    .then((rialRisult)=>{
                        // console.log(rialRisult.data)
                        const bitR = parseFloat(rialRisult.data.buy_usd.price)/10 * result.data.USD
                    Price.create({
                        BTC_USD: result.data.USD,
                        BTC_EUR: result.data.EUR,
                        USD_R: parseFloat(rialRisult.data.buy_usd.price)/10,
                        EUR_R: parseFloat(rialRisult.data.buy_eur.price)/10,
                        BTC_R: parseFloat(rialRisult.data.buy_usd.price)/10 * result.data.USD
                    })
                    .then((saveDB)=>{
                        console.log(saveDB)
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
                    })
                    .catch((err)=>{
                        console.log(err,"Can not get API for rial")
                        next()
                    })
                })
                .catch(err=>{
                    console.log(err)
                    next()
                })

            this.postPrice()
        },5000)
    } catch (error) {
        console.log(error)
    }
    
}