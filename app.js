const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/blogDB")

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.listen(3000)


const blogSchema = new mongoose.Schema({
    title:String,
    content:String
})

const blog = mongoose.model('blogs',blogSchema)

const blog1 = new blog({
    title: 'd',
    content:'dd'
})
// blog.insertMany([blog1])

async function blogsee() {
    const a = await blog.find()
    console.log(a[0].title);
}
blogsee()
console.log('aseeeeeeee');

let titles = ['a','b','c']
let contents = ['aa','bb',"cc"]
app.get('/',(req,res)=>{
    res.render('index',{a:titles,c:contents})
})
app.get('/compose',(req,res)=>{
    res.render('compose')
})
app.post('/compose',(req,res)=>{
    titles.push(req.body.title)
    titles.push(req.body.content)
    res.redirect('/')
    
})



// const fruitSchema = new mongoose.Schema ({
//     name: String,
//     rating: Number,
//     review:String
// });
// const Fruit = mongoose.model("Fruit", fruitSchema)
// const apple = new Fruit ({
//     name: "apple",
//     rating: 4,
//     review:"good"
// });

// const banana= new  Fruit({
//     name:'banana',
//     rating:5,
//     review:'ausome'
// })

// async function a(){
//     try {
//         const docs = await Fruit.find().limit(2)
//         // console.log(docs)      
        
//     } catch (error) {
//         console.log(error);
        
//     }finally{
//         mongoose.connection.close()
//     }
    
// }
// a()
