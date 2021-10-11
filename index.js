const express = require('express');
const apiKeyAuth = require('api-key-auth');

const app = express();

// Create the collection of api keys
const apiKeys = new Map();
apiKeys.set('123456789', {
  id: 1,
  name: 'app1',
  secret: 'secret1'
});
apiKeys.set('987654321', {
  id: 2,
  name: 'app2',
  secret: 'secret2'
});

// Your function to get the secret associated to the key id
function getSecret(keyId, done) {
    console.log("keyId", keyId)
  if (!apiKeys.has(keyId)) {
      //It has validated the api key
    return done(new Error('Unknown api key'));
  }
  console.log("validated")
  const clientApp = apiKeys.get(keyId);
  console.log("ClientApp", clientApp)

  //
  done(null, clientApp.secret, {
    id: clientApp.id,
    name: clientApp.name
  });
}

app.use(apiKeyAuth({ getSecret }));

app.get('/protected', (req, res) => {
  res.send(`Hello ${req.credentials.name}`);
});

app.listen(2088, () => console.log(`Started on port :2088`));                                                                 