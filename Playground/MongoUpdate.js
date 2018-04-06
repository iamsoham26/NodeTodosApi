// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('Unable to connect to Server!');
  }
  console.log('Connected to MongoDB Server');
  const db = client.db('TodoApp');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5ac7c89706991e2a703232de')
  },{
    $set: {
      name: 'Soham'
    },
    $inc: {
      age: -4
    }
  },{
    returnOriginal: false
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  })

  client.close();
});
