// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('Unable to connect to Server!');
  }
  console.log('Connected to MongoDB Server');
  const db = client.db('TodoApp');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5ac5328b9b5c5c302886be8c')
  // }).toArray().then((docs) =>{
  //   console.log('Retrieving Todos....');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // });

  db.collection('Todos').find().count().then((count) =>{
    console.log('Retrieving counts....');
    console.log(JSON.stringify(count));
  });

  db.collection('Todos').find({
    age: 18
  }).toArray().then((docs) =>{
    console.log('Retrieving Todos....');
    console.log(JSON.stringify(docs, undefined, 2));
  });


  client.close();
});
