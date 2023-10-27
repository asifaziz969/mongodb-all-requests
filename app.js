const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");



const fruitSchema =new mongoose.Schema({  
    name: String ,
    rating: Number, 
    review: String
});

const Fruit = mongoose.model("Fruit",fruitSchema );

const fruit = new Fruit({  
name: "apple",
rating:7,
review:"pretty solid as fruit"
 });


fruit.save();

const orange= new Fruit({
    name: "orange",
    rating: 5,
    review:"it tastes good"

})
const banana= new Fruit({
    name: "banana",
    rating: 3,
    review:"it tastes bad"

})
const kivi= new Fruit({
    name: "kivi",
    rating: 1,
    review:"it tastes very bad"

})

const defaultItem= [orange,banana,kivi];

Fruit.insertMany(defaultItem,{
    if(err){
      console.log(err);
    }
 
  });


const personSchema =new mongoose.Schema({  
    name: String ,
    age: Number, 
   
});

const Person = mongoose.model("Person",personSchema );

const person = new Person({  
name: "asif",
ratig:22,

 });


person.save();


