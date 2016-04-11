var restify = require('restify'),
    builder = require('botbuilder'),
    server  = restify.createServer();

// create bot and dialogs
var bot = new builder.BotConnectorBot({
  appId: 'YourAppId',
  appSecret: 'YourAppSecret'
});
bot.add('/', function(session){
  session.send('Hello world!');
});

// set up restify server
server.post('/api/messages', bot.verifyBotFramework(), bot.listen());
server.listen(process.env.port || 3978, function(){
  console.log('%s listening to %s', server.name, server.url);
});
