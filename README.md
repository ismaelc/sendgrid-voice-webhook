## SendGrid Parse API demo + Mashape and Firebase

This node.js app uses SendGrid's [Inbound Parse API](http://sendgrid.com/docs/API_Reference/Webhooks/parse.html) (Webhook) to pull an email's subject, which is then read out on a webpage.  It uses this Mashape [text-to-speech](https://www.mashape.com/montanaflynn/text-to-speech#!documentation) API to convert text to audio.  It also uses [Firebase](http://firebase.com) to store data and do a callback to the webpage to play the audio.

### Try the app

You can go to this [page](http://afternoon-brook-5754.herokuapp.com/) to try the app.

### Tutorial and Configuration

You can find the tutorial explaining the basic components of the code [here](http://jsfiddle.net/ismaelc/XWrYr/embedded/result/).
To configure the service, you need to copy `config-sample.js` to `config.js` with the required values:

    config.mashape = {};
    config.mashape.key = "Get your Mashape key from https://www.mashape.com/keys";

    config.firebase = {};
    config.firebase.hostname = "Create your Firebase from https://www.firebase.com/";

You also need to update `public/index.html` with your Firebase:

    //TODO: Create your own Firebase at http://firebase.com/
    var myDataRef = new Firebase('https://<your own firebase>.firebaseio.com/');

