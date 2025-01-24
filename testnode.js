cont express = require('express');
cont axios = require('axios');
cont app = express();

app.use(express.json());

app.post('/node', async (req, res) => {
  console.log('Recu depuis php', req.body)
  
// Envoie des donnees a python 
  try{
    const response  = await axios.post('http://localhost/5000/python', req.body);
    console.log('reponse de Python', response.data)
    res.json(response.data); // Renvoyer la reponse a php  
  } catch (err){
    console.log('Erreur avec python', err.message);
    res.status(500).send('Erreur avec le service python')
  }
});

app.listen(3000, () => console.log('Ecoute sur le port 3000'));
  
