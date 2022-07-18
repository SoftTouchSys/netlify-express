const express = require('express')
const bodyParser = require('body-parser')
const env = require('dotenv');
const cors = require('cors')
const listing_schema = require('./model/listing_schema');
const flippa = require('./flippa.json')

require('./config')




env.config();

const app =  express()
const port = process.env.PORT 

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())



app.get('/', (req,res)=>{
    res.send("Hello, How are you!")
    // listing_schema.insertMany(flippa,function(err,res){
    //     if(err){
    //         console.log(err)
    //     }else{
    //         console.log("u")
    //     }
    // })
})

app.get('/allListing', async (req, res)=>{
        
    var adsense = await listing_schema.find({"Category":"adsense"})
    var saas = await listing_schema.find({"Category":"saas"})
    var ecommerce = await listing_schema.find({"Category":"ecommerce"})
    var amazon = await listing_schema.find({"Category":"amazon"})
    var transact_market = await listing_schema.find({"Category":"transact-market"})
    var apps = await listing_schema.find({"Category":"apps"})
    var domains = await listing_schema.find({"Category":"domains"})

    var data = {domains,adsense,saas,ecommerce,amazon,transact_market,apps}

    // const tempObj = listing.reduce((acc, curr) => {
    //     if (curr.Category in acc) {
    //         acc[curr.Category].push({
    //             listings: curr,
                
    //         })
    //     } else {
    //         acc[curr.Category] = [{
    //             listings: curr,
                
    //         }]
    //     }
    //     return acc
    // }, {})
    
    // const reorganized = Object.keys(tempObj).map(key => ({
    //     label: key,
    //     listings: tempObj[key]
    // }))
    res.send(data)
    
    
})


app.listen(port,()=>console.log(`server is running on port: ${port}`))