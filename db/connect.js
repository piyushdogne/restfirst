require('dotenv').config();
const mgdb = require('mongoose')

const uri = process.env.MONGODB_URI
const connectDB = () => {  return mgdb.connect(uri) } 

module.exports = connectDB  