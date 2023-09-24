const exp = require('express')
const app = exp()
// const ckp = require('cookie-parser')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000
app.set('view engine', 'pug');
app.set('views', __dirname);
// console.log(__dirname)
// call HTML file  
app.get("/",(req,res)=>{
    res.render('indexf4')
})

app.post('/login',(req,res)=>
{
    const userinfo = {
        username:req.body.name,
        division:req.body.division,
        subject:req.body.subject,
        email:req.body.email,
    }
    
    res.render('data_f4',{userinfo})
})
// app.get('/details',(req,res)=>
// {
    
// })
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });