// Dependencies 
var restful = require('node-restful'); 
var mongoose = restful.mongoose;
// Schema 
var productSchema = new mongoose.Schema({ 
  id: Number,
  name: String, 
  attribute: String, 
  power: Number 
});
// Return model 
module.exports = restful.model('Products', productSchema);