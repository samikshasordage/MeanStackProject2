const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');

const URL = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(URL);

async function getConnection() {
  await client.connect();
  const db = client.db('RestoDash');
  const restoinfoCollection = db.collection('Restoinfo');
  return { restoinfoCollection };
}

router.get('/restaurent', async (req, res) => {
  const { restoinfoCollection } = await getConnection();
  const data = await restoinfoCollection.find().toArray();
  res.json(data);
});

router.get('/restaurent/:id', async (req, res) => {
  const { restoinfoCollection } = await getConnection();
  const id = parseInt(req.params.id); // Retrieve the ID from the request parameters and convert it to an integer
  const data = await restoinfoCollection.findOne({ id: id }); // Find the restaurant with the matching ID
  res.json(data);
});

router.post('/login', (req, res) => {
  let userData = req.body;

  if (userData.email === 'restoinfo' && userData.password === 'restoinfo') {
    let payload = { subject: 1 };
    let token = jwt.sign(payload, 'secretKey');
    res.status(200).send({ token });
  } else {
    res.status(401).send('Invalid Password');
  }
});

module.exports = router;
