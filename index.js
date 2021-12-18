const express = require('express');
const bodyParser = require('body-parser');


var app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

require('./routes/property')(app);
require('./routes/user')(app);

app.get('/', (req,res)=> {
    res.send("API is up and running!");
})

app.listen(3000);
