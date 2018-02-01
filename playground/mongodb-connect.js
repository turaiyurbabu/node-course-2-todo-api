const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if(err){
    return console.log(' unable to connect with db');
  }
  console.log('connected with db');
  /*
  db.collection('Todos').insertOne({
    text:'something to do',
    completed:false
  },(err,result) =>{
    if(err){
      return console.log('Unable to insert todo',err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  });
  */

  db.collection('Users').insertOne({
    name:'Babu J',
    age:40,
    location:'Bangalore'
  }, (err,result) => {
    if(err) {
      return console.log('Unable to insert in users',err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  });

   db.close();
});
