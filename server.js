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
const PORT = process.env.PORT || 3000;


const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/'+ `jobjournal`;

// Connect to Mongo
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true, useUnifiedTopology: true });

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

// open the connection to mongo
db.on('open' , ()=>{});

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//Controllers
app.use('/jobs', jobsController);


// listen
app.listen(PORT, () => {
    console.log('listening on: 3000' );
});