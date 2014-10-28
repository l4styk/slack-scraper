'use strict';
var request = require('request');
var fs = require('fs');
var prevMessage = require('../message.json');

function retrieve (prevTimeStamp, channel, callBack) {
  var slackURL = "https://slack.com/api/channels.history";
  var options = {
    uri: slackURL,
    qs: {
//      oldest: prevTimeStamp,
      oldest: 0,
      token: process.env.SLACK_API_TOKEN,
      channel: channel
    }
  };

//make oldTimeStamp into it's own function
//make writeFileSync into it's own function
//make jsonstuff a global variable, or have those other functions be in a giant cool function


  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      fs.writeFileSync('message.json', body);
      //make a file from the json, so stuff can be grabbed from it
    }
    if (body){
      try{
        var jsonstuff = JSON.parse(body);
        //grabs jsonfile as an object
      }catch(e){
        alert(e);
        //do more then just alert, if there is an alert, stop doing stuff with all this corrupt data
      }
      var oldTimeStamp = (jsonstuff.messages[0].ts);
      //sets most recent message's timestamp as a var
      console.log(jsonstuff);
      console.log(oldTimeStamp);
    }

    //maybe I don't need lines 26-27, we think 28 should be moved to line 40ish

    callBack(error, response);
  });
}

retrieve(1410902361.000009, 'C02HH9XQH', function(error, response){});

//to run the miner use the command 'nf start' in the terminal
