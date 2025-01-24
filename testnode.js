cont express = require('express');
cont axios = require('axios');
cont app = express();

app.use(express.json());

app.post('/node', async (req, res) => {
  console.log('Recu depuis php', req.body)
  
