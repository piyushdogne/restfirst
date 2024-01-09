const connectDB = require('./db/connect')
const Product = require('./models/product')
const ProductJson = require('./product.json')


const start =  async () =>{

try {
     await connectDB();
     await Product.create(ProductJson);
     console.log("success db creation")
} catch (error) {
    console.log(error)
}

}
start()