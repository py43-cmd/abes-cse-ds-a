// const Promise = require('promise');
//  const MongoClient = require('mongodb').MongoClient;
//  const url = 'mongodb://localhost:27017';
// MongoClient.connect(url).then(function(err,db){
//       db.colllection('test').updateOne({name:'test'},{$set:{name:'test1'}}).then(function(result){
//           console.log(result);
//       }).catch(function(err){
//           console.log(err);
//       }                                         
// ).catch(function(err){
//     console.log(err);
// })  
async function f(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
}
f().catch(alert);
   

