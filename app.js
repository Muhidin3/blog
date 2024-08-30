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

app.get('/',(req,res)=>{
    async function blogsee() {
        let blogs = await blog.find()
        
        res.render('index',{a:blogs})
    }
    blogsee()
})

app.get('/compose',(req,res)=>{
    res.render('compose')
})
app.post('/compose',(req,res)=>{
    const blog1 = new blog({
        title: req.body.title,
        content:req.body.content
    })
    blog.insertMany([blog1])
    
    
    
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
