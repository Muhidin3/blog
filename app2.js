const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Peoples')


const ppleSchema = new mongoose.Schema({
    _id:Number,
    name: String,
    age: Number
})
const ppl = mongoose.model('peoplescollection',ppleSchema)

const person1 = new ppl({
    _id: 2,
    name:'Abdulfetah',
    age:5
})
// person1.save()

async function update() {
    await ppl.deleteOne({_id:2})
    console.log('deleted');
    
}
update()

