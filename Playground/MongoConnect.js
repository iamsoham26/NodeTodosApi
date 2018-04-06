// const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('Unable to connect to Server!');
  }
  console.log('Connected to MongoDB Server');
  const db = client.db('TodoApp');

  db.collection('Todos').insertOne({
    name: 'Soham',
    age: 22
  }, (err, result) => {
    if(err){
      return console.log('Unable to insert data into Database');
    }
    console.log(JSON.stringify(result.ops/*[0]._id.getTimestamp()*/, undefined, 1));
  });

  db.collection('Todos').insertOne({
    name: 'Bhargav',
    age: 18
  }, (err, result) => {
    if(err){
      return console.log('Unable to insert data into Database');
    }
    console.log(JSON.stringify(result.ops/*[0]._id.getTimestamp()*/, undefined, 1));
  });

  client.close();
});
