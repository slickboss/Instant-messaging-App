
// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'AC2a89372d3c1c39729672edaa7bdd7e7a';
const authToken = '5e5b99736661f353461a05bdb2d8f19b';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+13343261618',
     to: '+2347069722188'
   })
  .then(message => console.log(message.sid));





  