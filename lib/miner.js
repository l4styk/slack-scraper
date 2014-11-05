'use strict';
var request = require('request');
var fs = require('fs');
var json2csv = require('json2csv');

function retrieve (prevTimeStamp, channel, callBack) {
  var jsonstuff = {};
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

//TODO: make oldTimeStamp into it's own function
//TODO: make writeFileSync into it's own function
//TODO: if statement about if TS doesn't exsist

  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      if (body){
        try{
          jsonstuff = JSON.parse(body);
        }catch(err){
          alert('Couldn\'t parse the JSON. ' + err);
        }
        var oldTimeStamp = (jsonstuff.messages[0].ts);
      }
    }

    json2csv({data: jsonstuff.messages, fields: ['type', 'user', 'ts', 'text']}, function(err, csv) {
      if (err) console.log(err);
      fs.writeFile('CSVMessages.csv', csv, function(err) {
        if (err) throw err;
        console.log(err);
      });
    });

    callBack(error, response);
  });
}

retrieve(1410902361.000009, 'C02HH9XQH', function(error, response){});

//to run the miner use the command 'nf start' in the terminal
