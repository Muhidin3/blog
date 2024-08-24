const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))



let titles =['home','Day1','Day 2']
let contents = [
    `Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
        sed diam nonummy nibh euismod tincidunt ut laoreet dolore
        magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
        quis nostrud exerci tation ullamcorper suscipit lobortis
        nisl ut aliquip ex ea commodo consequat. Duis autem vel
        eum iriure dolor in hendrerit in vulputate velit esse 
        molestie consequat, vel illum dolore eu feugiat nulla
        facilisis at vero eros et accumsan et iusto odio
        dignissim qui blandit praesent luptatum zzril 
        delenit augue duis dolore te feugait nulla facilisi.`,
    `nisl ut aliquip ex ea commodo consequat. Duis autem vel
        eum iriure dolor in hendrerit in vulputate velit esse 
        molestie consequat, vel illum dolore eu feugiat nulla
        facilisis at vero eros et accumsan et iusto odio
        dignissim qui blandit praesent luptatum zzril 
        delenit augue duis dolore te feugait`,
    `Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
        sed diam nonummy nibh euismod tincidunt ut laoreet dolore
        magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
        quis`
]

app.get('/',(req,res)=>{
    res.render('index',{
        title:titles,
        content:contents

    })
})

app.get('/compose',(req,res)=>{
    res.render('compose')
})

app.post('/compose',(req,res)=>{
    titles.push(req.body.title)
    contents.push(req.body.content);
    readme()
    res.redirect('/')
    
})
function readme() {
    for (let i = 0; i < titles.length; i++) {
        const title = titles[i];
        const content = contents[i]

        app.get('/' + title.replace(' ','-'),(req,res)=>{
            res.render('eachblog',{
                title:title,
                content:content
            })
        })
        
    }
    
}
readme()


app.listen(3000|| process.env.PORT,()=> console.log('server started on 3000'))