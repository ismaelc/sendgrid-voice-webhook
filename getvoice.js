var unirest = require('unirest'),
    fs      = require('fs'),
    Firebase= require('firebase'),
    config  = require('./config');

var myRootRef = new Firebase(config.firebase.hostname);

// Method POSTed to by Sendgrid's Inbound Parse API (Webhooks) - http://bit.ly/11h7K2P
// 1.  Accepts 'subject' and 'text' 
// 2.  Calls a Mashape text-to-speech API on 'subject'
// 3.  Pushes resulting mp3 to Firebase to initiate hook to play mp3 from index.html
 
exports.voice = function (req, res) {

   var subj = req.body.subject;
   var text = req.body.text;
  
   var request = unirest.get("https://montanaflynn-text-to-speech.p.mashape.com/speak?text=" + subj)
     .headers({ 
       "X-Mashape-Authorization": config.mashape.key,
     })
     .encoding('binary')
     .end(function (response) {
        myRootRef.push({subj: subj, text: text, voice: response.response.body});
     });
}
