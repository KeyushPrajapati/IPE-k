const exp = require('express')
const app = exp()
const bp = require('body-parser')
app.use(bp.urlencoded({extended:true}));
const mg = require('mongoose')
const v = require('validator')
mg.connect("mongodb://127.0.0.1:27017/details")
.then(console.log('DB connected'))
.catch((err)=>{console.log(err)})

const myschema = new mg.Schema({
    name:{
        type:String,
        trim:true,
        minlength:[3,'min length is 3'],
        maxlength:[10,'max length is 10'],
        uppercase:true
    },
    email:{
        type:String,
        validate(val){
            if(!v.isEmail(val))
            {
                let k = 'invalid email'
                throw k
        }
    }},
    date:{
        type:Date,
        validate: {
            validator: (val) => {
              // Perform date validation
              const startDate = new Date('2010-01-01');
              const endDate = new Date('2022-12-31');
              return val >= startDate && val <= endDate;
            },
            message: 'Date valid between 1-1-2010 to 31-12-2022',
          },
    }

})

const userModel = new mg.model("details",myschema);

app.get('/',(req,res)=>
{
    res.sendFile(__dirname+'/F22.html')
})
app.post('/userinfo',(req,res)=>
{
    const userData = {
        name:req.body.name,
        email:req.body.email,
        date:req.body.newdate
    }

    const createDoc = async()=>
    {
        const sendData = await userModel.insertMany(userData)
        console.log(sendData)
    }
    createDoc();
    res.send('data added');
})
app.listen(3020)