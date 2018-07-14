/** require dependencies */
const express = require("express");
const routes = require('./routes/');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
var session = require('express-session');

const app = express();
const router = express.Router();
const url = process.env.MONGODB_URI || "mongodb://localhost:27017/hp";



/** connect to MongoDB datastore */
try {
    mongoose.connect(url, {
        //useMongoClient: true
    })    
} catch (error) {
    
}

let port = 5000 || process.env.PORT;

/** set up routes {API Endpoints} */
routes(router);

/** set up middlewares */
app.use(cors());
app.use(bodyParser.json());
app.use(helmet());
//app.use('/static',express.static(path.join(__dirname,'static')))
/**
 * Login and session
 */
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));

app.use('/hp-api', router);


var sess;

// app.use(session({
//     cookieName: 'session',
//     secret: 'random_string_goes_here',
//     duration: 30 * 60 * 1000,
//     activeDuration: 5 * 60 * 1000,
// }));

// app.use(session({secret:"myencryptionkey", resave:false, saveUninitalized : true}) );
/** start server */
app.listen(port, () => {
    console.log(`HP-Server started at port: ${port} Lets get the party going`);
});