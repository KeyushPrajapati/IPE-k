const exp = require('express')
const app = exp()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine','pug') //---- important !!
app.set('views',__dirname)  //---- important !!

app.get("/",(req,res)=>
{
    res.render('f7')
});
app.post("/student",(req,res)=>
{
    const studentData = {
        name:req.body.uname,
        email:req.body.uemail,
        course:req.body.ucourse,
    }
    res.render('display_f7',{studentData})
    
})
const port = 3005
app.listen(port,console.log(`http://localhost:${port}`))