const express = require('express'),  
    bodyParser = require('body-parser'),  
    mongoose = require('mongoose'),  
    path = require('path'),
    config = require('./db'),
    cors = require('cors'),
    app = express();
    productRoute = require('./routes/product.route');  
    mongoose.Promise = global.Promise;  
    mongoose.connect(config.db, { useNewUrlParser: true }).then(  
      () => {console.log('Database is connected') },  
      err => { console.log('Can not connect to the database'+ err)}  
    );  

    app.use(bodyParser.json());  
    app.use(cors());  
    app.use('/products', productRoute);
    const port = process.env.PORT || 4000; 
    //will serve index.html for every page refresh.

    const server = app.listen(port, function(){  
    console.log('Listening on port ' + port);  
    });
    

