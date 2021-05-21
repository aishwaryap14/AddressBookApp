console.log("Hello");
let express = require('express');
let expressValidator = require('express-validator');
let bodyParser = require('body-parser');
let cors = require('cors');
const mongoose = require('mongoose');
const { request } = require('express');
const router = require('./routes/routes');

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(expressValidator());
app.use('/', router);


mongoose.connect("mongodb://localhost:27017/address_Book_App", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then( () => {
    console.log("connected to databse !!!", );
})
.catch(err => {
    console.log("Not connected to the database", err);
    process.exit();
});

let server = app.listen(3000, () => {
    console.log("server is listening on port 3000");
})
