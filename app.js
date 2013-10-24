var express  = require('express'),
    getvoice = require('./getvoice'),
    os       = require('os');

var app = express();

app.configure(function () {
   app.use(express.logger('dev'));
   app.use(express.bodyParser());
});

app.post('/voice', getvoice.voice);

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000);
console.log();
console.log('Waiting for SendGrid POST on ' + os.hostname() + ':' + process.env.port + '/voice ...');
console.log('Open your browser to ' + os.hostname() + ' to hear incoming email.');
