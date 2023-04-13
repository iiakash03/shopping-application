const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient;

let _db

const mongoConnect=(callback)=>{
    MongoClient.connect('mongodb+srv://Akash8958:Akash8958@cluster0.5oflop9.mongodb.net/shop')
.then(client=>{
    console.log('connected')
    _db=client.db();
    callback();
})
.catch(err=>{
    console.log(err)
})
}

const getdb=()=>{
  if(_db){
    return _db;
  }
  throw 'no databse found';
}

exports.mongoConnect=mongoConnect;
exports.getdb=getdb;