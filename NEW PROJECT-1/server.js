// Import required modules
const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
const cors=require('cors');
const bcrypt=require('bcryptjs');
const { rmSync } = require('fs');
const SaltRound=10;
// Initialize Express app
const app = express();

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://127.0.0.1:27017/db_5418', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Define a Mongoose schema for your data
const formDataSchema = new mongoose.Schema({}, { strict: false });


// Create a Mongoose model based on the schema
const FormData = mongoose.model('FormData', formDataSchema);
//registerdata schema
const registerformdata=new mongoose.Schema({
    username:String,
    email:String,
    password:String
});
const RegisterData=mongoose.model('RegisterData',registerformdata);

app.use(cors());
// Middleware to parse JSON data
app.use(express.json());
app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()); 


app.use(bodyParser.urlencoded({ extended: true })); 


app.use(upload.array()); 
app.use(express.static('public'));

// CRUD operations using Mongoose functions
app.get('/', function(req, res){
    res.render('form');
 });
 app.get('/register',(req,res)=>{
    res.render('register');
 })
 app.get('/login',(req,res)=>{
    res.render('login');
 })

 //Handling post requests 
 app.post('/registerdata',(req,res)=>{
    try{
        if(req.body.newpassword === req.body.conformpassword)
        {
            bcrypt.hash(req.body.newpassword,SaltRound,function(err,hash){
                const newuserData=new RegisterData({
                    username:req.body.username,
                    email:req.body.email,
                    password:hash
                });
                newuserData.save();
                res.render('login');
            });
            
        }
        else{
            res.send(`alert('passwords not matched!..')`);
        }
    }catch(err){
        res.status(400).json({message:err.message});
    }
 });
 app.post('/logindata',async(req,res)=>{
    try{
        const username=req.body.username;
        const password=req.body.password;
        
        await RegisterData.findOne({email:username},function(err,founduser){
            if(err)
            {
                console.log(err);
            }
            else{
                if(founduser){
                    bcrypt.compare(password,founduser.password,function(err,result){
                        if(result === true)
                        {
                            res.render('Homepage');
                        }
                    });
                }
            }
        });

    }
    catch(err){
        res.status(400).json({message:err.message});
    }
 });
// Create operation
app.post('/formdata', async (req, res) => {
    try {
        const newFormData = new FormData(req.body);
        await newFormData.save();
        res.status(201).json(newFormData);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
app.get('/formdata', async (req, res) => {
    try {
        const formDataList = await FormData.find();
        res.json(formDataList);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Start the Express server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});