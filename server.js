// Set Up Server
const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose'); 

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Mongoose Connection
mongoose.connect(DBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});


app.listen(port, () => {
    console.log('listening on: ' + port);
});