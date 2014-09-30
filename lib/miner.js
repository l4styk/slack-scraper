'use strict';
var request = require('request');
var fs = require('fs');

function retrieve (prevTimeStamp, channel, callBack) {
  var slackURL = "https://slack.com/api/channels.history";
  var options = {
    uri: slackURL,
    qs: {
      oldest: prevTimeStamp,
      token: process.env.SLACK_API_TOKEN,
      channel: channel
    }
  };

  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      fs.writeFileSync('message.txt', body);
    }
    callBack(error, response);
  });
}

retrieve(1410902361.000009, 'C02HH9XQH', function(error, response){});

//to run the miner use the command 'nf start' in the terminal
