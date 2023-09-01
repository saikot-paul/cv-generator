const express = require('express')
const axios = require('axios')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config.json')

const app = express();

const PORT = 3000;

app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())

app.get('/generate', async (req, res) => {
  try {
    const options = {
      method: 'POST',
      url: 'https://api.cohere.ai/v1/generate',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: config.token,  
      }, 
      data:  { 
        max_tokens: 1200,
        model : 'command-light', 
        end_sequences : ['stop'], 
        temperature : 3.5, 
        p : 0.75, 
        num_generations : 1, 
        prompt: 'Please explain to me how LLMs work'
      }
    };

    const response = await axios.request(options);
    res.send(response.data); 
    
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).send('An error occurred');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
