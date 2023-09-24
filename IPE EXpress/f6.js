const exp = require('express')
const app = exp()
const ss = require('express-session')
app.use(exp.static(__dirname,{index:"f6.html"}))
app.use(ss(
    {
        resave:true,
        saveUninitialized:true,
        secret:"helloworld"
    }
));
//  session is possible only get method
app.get("/savesession",(req,res)=>
{
    if(!req.session.uname)
    {
        req.session.uname = req.query.name
        res.redirect('/fetchsession')
    }
    else{
        console.log("session is already set...");
    }
})

app.get("/fetchsession",(req,res)=>
{
    res.send(`</<h2>${req.session.uname}</h2><br/><a href="/delete_ss">Logout</a>`)
})
app.get("/delete_ss",(req,res)=>
{
    req.session.destroy();
    res.redirect("/")
})
const port = 3004
app.listen(port,console.log(`http://localhost:${port}`))
