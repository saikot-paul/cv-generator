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

  const experienceArray = req.query.experienceArray || []
  const exp = experienceArray.map( (element) => `- ${element}`).join('\n')
  const primer = 'Transform each bullet point in the experience section wrapped in """ """" below to fit the STAR (Situation, Task, Action, Result) format. Each transformed bullet point should be a full complete sentence embodying the essence of the STAR format. Each revised bullet point needs to start with an action word. Return only the revised version.'
  const prompt = `${primer} \n\n"""\n\n${exp}\n\n"""`
  
  console.log(prompt)
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
        model: 'command-light',
        prompt: prompt, 
        max_tokens: 600,
        temperature: 0.3,
        k: 135,
        stop_sequences: ["\n"],
        return_likelihoods: 'NONE'
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
