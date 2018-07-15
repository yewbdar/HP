/** require dependencies */
const express = require("express")
const routes = require('./routes/')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser');
const helmet = require('helmet')
const path = require('path')
var session = require('express-session');

const app = express()
const router = express.Router()
const url = "mongodb://Yewbdar:1Hulet3@ds237641.mlab.com:37641/hp";

/** connect to MongoDB datastore */
try {
    mongoose.connect(url, {
        //useMongoClient: true
    })    
} catch (error) {
    
}
let port = process.env.PORT || 5000

/** set up routes {API Endpoints} */
routes(router)

/** set up middlewares */
app.use(cors({credentials: true, origin: true}));
app.use(bodyParser.json())
app.use(helmet())
app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, 'index.html'));
});
app.use('/static',express.static(path.join(__dirname,'static')))
app.use('/uploads',express.static(path.join(__dirname,'uploads')))
app.use('/assets',express.static(path.join(__dirname,'assets')))

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

var sessionStore = new session.MemoryStore();

app.use(session({
    secret: 'new session key',
    store: sessionStore,
    resave: true,
    proxy: undefined,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000,
        secure: false,
        httpOnly: false
    }
}));

app.use('/hp-api', router);



/** start server */
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});