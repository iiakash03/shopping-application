const getdb=require('../util/database').getdb;
const mongodb=require('mongodb');

class Product{
  constructor(title,price,imageUrl,description,id,userId){
    this.title=title;
    this.price=price;
    this.imageUrl=imageUrl;
    this.description=description;
    this._id=id?new mongodb.ObjectId(id):null;
    this.userId=userId
    
  }
  static deleteById(prodId){
    const db=getdb();
    return db.collection('product').deleteOne({_id:new mongodb.ObjectId(prodId)})
    .then(result=>{
      console.log("deleted")
    })
    .catch(err=>{
      console.log(err)
    })
  }
  save(){
    const db=getdb();
    let dbOp;

    if(this._id){
      dbOp=db.collection('product').updateOne({_id:new mongodb.ObjectId(this._id)},{
        $set:this  
      })

    }else{
      dbOp=db.collection('product').insertOne(this);
    }
    
    return db.collection('product').insertOne(this)
    .then(result=>{
      console.log(result);
    })
    .catch(err=>{
      console.log(err);
    }); 
  }

  static fetchAll(){
    const db=getdb();
    return db.collection('product').find().toArray()
    .then(products=>{
      console.log(products,"ghgghcvghv")
      return products;
    })
    .catch(err=>{
      console.log(err)
    })
    
  }

  static findById(prodId){
    const db=getdb();
    return db.collection('product')
    .findOne({_id:new mongodb.ObjectId(prodId)})
    .then(product=>{
      console.log(product)
      return product
    })
    .catch(err=>{
      console.log(err)
    })
    
  }
}


module.exports=Product;