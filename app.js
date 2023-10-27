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
ratig:7,
review:"pretty solid as fruit"
 });


fruit.save();



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


