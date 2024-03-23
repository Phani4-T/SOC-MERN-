// Import required modules
const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
const cors=require('cors');
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

app.use(cors());
// Middleware to parse JSON data
app.use(express.json());
app.set('view engine', 'pug');
app.set('views', './');

app.use(bodyParser.json()); 


app.use(bodyParser.urlencoded({ extended: true })); 


app.use(upload.array()); 
app.use(express.static('public'));

// CRUD operations using Mongoose functions
app.get('/', function(req, res){
    res.render('form');
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
