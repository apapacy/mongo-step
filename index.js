const { MongoClient } = require("mongodb");
// Connection URI
const uri =
  "mongodb://root:password@localhost:27018,localhost:27019,localhost:27020,localhost:27021/?writeConcern=majority&maxPoolSize=200";
// Create a new MongoClient
const client = new MongoClient(uri);
async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    let test = await client.db('proba').collection('proba').find({}, {limit:10}).toArray();
    const promises = [];
    for (let i = 0; i < 100000; i++) {
      const p = client.db('proba').collection('proba').insertOne({key: `i=${i}`});
      promises.push(p);
    }
    await Promise.all(promises)
    console.log(test);
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);