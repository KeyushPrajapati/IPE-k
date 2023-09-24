const exp = require('express')
const app = exp()
const ckp = require('cookie-parser')
app.use(ckp())
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000

// call HTML file  
app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/f3.html')
})

// Get data from form using post method
app.post('/login',(req,res)=>
{
    const userinfo = {
        username:req.body.name,
        contact_number:req.body.cno,
        dob:req.body.dob,
        email:req.body.mail,
        message:req.body.msg,
        gender:req.body.gender,
    }
    res.cookie('userinfo',JSON.stringify(userinfo),{maxAge:24 * 60 * 60 * 1000,httpOnly:true})
    res.send('cookie saved <a href="/details">view</a>')
})

app.get('/details',(req,res)=>
{
    const usercookie = req.cookies.userinfo;
    const userdata = JSON.parse(usercookie);
    const detail = `
        username : ${userdata.username},
        number:${userdata.contact_number},
        dob:${userdata.dob},
        email:${userdata.email},
        gender:${userdata.gender},
        message:${userdata.message},
    `;
    res.send(detail+'<a href="/logout">logout</a>');

})
app.get('/logout',(req,res)=>
{
    res.clearCookie('userinfo');
    res.redirect("/");
})
app.listen(port, console.log(`connected --> ${port}`))