# OpenAI

**Step 1** - node install openai in webserver

**Step 2** - Go to `https://platform.openai.com/account/api-keys` and generate new SECRET key

**Step 3** - Now open `app.js` and import `const { Configuration, OpenAIApi } = require('openai');`

**Step 4** - Add the SECRET key as env variable in the terminal using `export OPEN_API_KEY=.....`

**Step 5** - Add this snippet in `app.js`

```
const configuration = new Configuration({
  apiKey: process.env.OPEN_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function runCompletion() {
  try {
    console.log('Triggered!');
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: 'What is your name?',
    });
    console.log('response:', response.data.choices[0].text);
  } catch (error) {
    console.log(error);
  }
}

runCompletion();
```

<h3>Learning request Response</h3>
<h4>Request body attributes: </h4>

1. **max_tokens** : The maximum number of tokens to generate in the completion. Most models have a context length of **2048** tokens (except for the newest models, which support **4096**).
