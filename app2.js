const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Peoples')


const ppleSchema = new mongoose.Schema({
    name: String,
    age: Number
})
const ppl = mongoose.model('peoples collection',ppleSchema)

const person1 = new ppl({
    name:'John',
    age:37
})

person1.save()
