/** require dependencies */
const express = require("express");
const routes = require('./routes/');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');


const app = express();
const router = express.Router();
const url = process.env.MONGODB_URI || "mongodb://localhost:27017/hp";

const session = require('express-session');


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

app.use('/hp-api', router);

/**
 * Login and session
 */
app.use(session({secret:"myencryptionkey", resave:false, saveUninitalized : true}) );
/** start server */
app.listen(port, () => {
    console.log(`HP-Server started at port: ${port} Lets get the party going`);
});