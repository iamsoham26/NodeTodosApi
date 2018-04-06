// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('Unable to connect to Server!');
  }
  console.log('Connected to MongoDB Server');
  const db = client.db('TodoApp');

  // db.collection('Todos').deleteMany({name: 'Soham'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({_id : new ObjectID('5ac55516ddbd9e0dc8f46dd5')}).then((result) =>{
  //   console.log(result);
  // });

  db.collection('Todos').findOneAndDelete({age: 22}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

  client.close();
});
