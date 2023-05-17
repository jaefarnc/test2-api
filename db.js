

const mongoose= require('mongoose')
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://jaefar_b220032cs:HVwyeRM6x0VhpaAQ@cluster0.pq4if.mongodb.net/test0?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  useNewUrlParser: true,
  useUnifiedTopology: true
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");


  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// const newSchema = new mongoose.Schema({
//     username:{
//         type:String,
//         required:true
//     },
//     email:{
//         type:String,
//         required:true
//     },
//     password:{
//         type:String,
//         required:true
//     }
// })

async function connectToUser() {
  const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = client.db('test0');
  const collection = db.collection('User');
  return collection;
}

module.exports = connectToUser;

// const collection = mongoose.model("collection", newSchema)

// module.exports = collection