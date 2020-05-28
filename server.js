/////////////////
// dependencies
/////////////////
const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose'); 
const Job = require('./models/jobs'); 
const methodOverride = require('method-override');
const jobsController = require('./controllers/jobs');
require('dotenv').config(); 
const db = mongoose.connection;


const MONGODB_URI =  `mongodb://localhost:27017/jobjournal`;

// Connect to Mongo
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true});

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

// open the connection to mongo
db.on('open' , ()=>{});

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//Controllers
app.use('/jobs', jobsController);


// listen
app.listen(3000, () => {
    console.log('listening on: 3000' );
});