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

// mongoose connection
mongoose.connect(`mongodb://localhost:27017/jobjournal`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

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