const express = require('express')
const axios = require('axios')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config.json')
const cohere = require('cohere-ai')
cohere.init(config.token)

const app = express();

const PORT = 3000;

app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())

app.get('/generate', async (req, res) => { 
  const experience = req.query.experience || null 

  if (experience === null) { 
    return error
  }

  const options = { 
    model: 'command-light',
    prompt: `Break this down into STAR. Return the situation, task, action and result given from the sentence below. 
    If something is not provided interpolate something reasonable from the sentence. Return in bullet point form. 
    '"""
    - ${experience}
    '"""`, 
    max_tokens: 226,
    temperature: 0,
    k: 108,
    stop_sequences: ['\n'],
    return_likelihoods: 'NONE'
  }
  try { 

    await cohere.generate(options)
    .then( (response) => res.send(response.body))

  }catch(error) { 
    console.log(error)
    res.status(500).send('Error has occurred')
  }
})



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
