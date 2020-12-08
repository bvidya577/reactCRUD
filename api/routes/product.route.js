const express = require('express'); 
const path = require('path');
const app = express(); 
const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
const productRoutes = express.Router();
let Product = require('../models/Product.ts');

productRoutes.route('/add').post(function (req, res) {  
   console.log('wwwwww')
  let product = new Product(req.body);  
  console.log('rrr')
  product.save()  
    .then(product => {  
      res.status(200).json({'Product': 'Product has been added successfully'});  
    })  
    .catch(err => {  
    res.status(400).send("unable to save to database");  
    });  
});  
// Defined get data(index or listing) route  
productRoutes.route('/all').get(function (req, res) {  console.log('all');
  Product.find(function (err, products){  
    if(err){  
      console.log(err);  
    }  
    else {  
      res.json(products);  
      console.log(products);
    }  
  });  
});  
// Defined edit route  
productRoutes.route('/edit/:id').get(function (req, res) {  console.log('edit');
  let id = req.params.id;  
  Product.findById(id, function (err, product){  
      res.json(product);  
  });  
});  
//  Defined update route  
productRoutes.route('/update/:id').post(function (req, res) {  console.log('update');
  Product.findById(req.params.id, function(err, product) {  
    if (!product)  
      res.status(404).send("Record not found");  
    else {  
      product.ProductName = req.body.ProductName;  
      product.ProductDescription = req.body.ProductDescription;  
      product.ProductPrice = req.body.ProductPrice;  
 product.save().then(product => {  
          res.json('Update complete');  
      })  
      .catch(err => {  
            res.status(400).send("unable to update the database");  
      });  
    }  
  });  
});  
// Defined delete | remove | destroy route  
productRoutes.route('/delete/:id').get(function (req, res) {  
    Product.findByIdAndRemove({_id: req.params.id}, function(err, product){  
        if(err) res.json(err);  
        else res.json('Successfully removed');  
    });  
});  
module.exports = productRoutes;