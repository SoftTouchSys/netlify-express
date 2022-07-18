const mongoose = require("mongoose");

const listingSchema = mongoose.Schema({

  Listing: String,
  Description: String,
  Type: String,
  Monetization: String,
  Net_Profit: String,
  Asking_Price: String,
  Bids: Number,
  End_Time: String,
  Industry: String,
  Country: String,
  Image_Link: String,
  Url: String,
  Category: String,
  created: { type: Date, default: Date.now }

});



module.exports = mongoose.model("Listings", listingSchema);