const algoliasearch = require('algoliasearch');
const dotenv = require('dotenv');
const firebase = require('firebase');

// load values from the .env file in this directory into process.env
dotenv.load();

// configure firebase
firebase.initializeApp({
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});
const database = firebase.database();

// configure algolia
const algolia = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_API_KEY
);
const indexA = algolia.initIndex(process.env.ALGOLIA_INDEX_NAME);


//2
var client = algoliasearch('HFQUKXNAV8', '56d906ecbc343485f7fc65d62016e72b');
var indexC = client.initIndex('Tourism');



