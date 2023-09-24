const exp =require('express')
const app = exp()
const multer = require('multer')
const path = require('path')
 var storage = multer.diskStorage({
    destination:"uploads",
    filename:function(req,file,cb)
    {
        cb(null,file.originalname);
    }
 });

const upload = multer({
    storage:storage
})

app.get('/',(req,res)=>
{
    res.sendFile(__dirname+'/f15.html');
});

app.post('/destination',upload.single('file'),(req,res)=>
{
    if(!req.file){
        return res.status(400).send('no file upload')
    }
    res.status(200).send('successfully upload')
})
const port=3020
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});