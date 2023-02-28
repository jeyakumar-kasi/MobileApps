const express   = require('express');
const mongoose  = require('mongoose');
const cors      = require('cors');
const morgan    = require('morgan');
const bodyParser= require('body-parser');   
const {readdirSync} = require('fs');        // in-built node module
require('dotenv').config();                 // load ".env" variables

// app
const app = express();


// db
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    //@deprecated
    //useCreateIndex: true,
    //useFindAndReplace: true 
    useUnifiedTopology: true
})
.then(() => console.log('DB is connected.'))
.catch((error) => console.log(`Connection Error. ${error}`));


// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json({limit: '2mb'}));


// load all routes
readdirSync('./routes').map((filename) => app.use('/api', require('./routes/' + filename)));

app.get('/', (req, res) => {
    res.status(200).json({
        'status': 200,
        'results': 'All OK!'
    })
});


// Run the server
const port = process.env.SERVER_PORT || 8000;
app.listen(port, () => console.log(`Server is running on ${port}...`));


