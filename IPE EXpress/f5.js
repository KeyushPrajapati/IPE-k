const exp = require('express')
const app = exp()
const multer = require('multer');
// Multer is a node.js middleware for handling multipart/form-data, which is  primarily used for uploading files.
const path = require('path')

const storage = multer.memoryStorage(); //store file in memory

const upload = multer({
    storage:storage,
    limits:{ fileSize:1000000}, //1MB limit
    fileFilter:(req,file,cd) =>{
        // check file format
        const allowedFormats = ['.jpg','.jpeg','.png'];
        const fileExt = path.extname(file.originalname).toLowerCase();
        // console.log(fileExt)
        if(allowedFormats.includes(fileExt))
        {   console.log('cd call back')
            cd(null,true);
        }
        else{
            console.log('cd error')
            cd(new Error('Invalid file format'))
        }
    },
})

// serve the HTML form
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/f5.html');
});

// handle filr upload
app.post('/upload',upload.single('file'),(req,res)=>
{
    if(!req.file){
        return res.status(400).send('No file upload.');
    }
    res.status(200).send('File upload successfully !!')
})
const port=3020
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});