var express = require('express');
var router = express.Router();
const async = require('async');
const redis = require('redis');
const fs = require('fs');
let rawdata = fs.readFileSync('db/products.json');
let products = JSON.parse(rawdata);
const fetch = require('node-fetch');

const PORT = process.env.PORT || 5000;
const REDIS_PORT = process.env.REDIS_PORT  || 6379;

const client = redis.createClient(REDIS_PORT);


async function getRepo(req, res, next) {
   try {
      let search = req.query.search;
      const response = await fetch('https://api.github.com/search/repositories'+'?q='+search);
      const data = await response.json();
      res.send(data);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
}

router.get('/repos',getRepo);

async function signIn(req, res, next) {
    email = req.query.email;
    password = req.query.password;
    client.get(email, (err, data) => {
    if (err) throw err;
    console.log('data',data);
    if (data !== null) {
      if(data==password){
        res.send(data);
      }else{
          res.status(404).send(new Error('Invalid password'));
      }
    } else {
      next();
    }
  });
}

router.get('/signin',signIn);

async function updateFav(req, res, next) {
     fav = JSON.stringify(req.body);
     user = req.query.email
     let key = 'user-fav-'+user
     client.set(key, fav);
     res.send(req.query.fav);
}

router.post('/updateFav',updateFav);


async function getFav(req, res, next) {
    console.log('getFav');
    email = req.query.email;
    let key = 'user-fav-'+email
    client.get(key, (err, data) => {
    if (err) throw err;

    if (data !== null) {
      res.send(data);
    } else {
      next();
    }
  });
}

router.get('/getFav',getFav);


async function register(req, res, next) {
     query = req.query;
     client.set(query.email, query.password, redis.print);
     res.send(req.query);
}

router.post('/register',register);


module.exports = router;