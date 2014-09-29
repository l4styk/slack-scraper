# slack-scraper

Scrapes and listens to Slack channels for messages, and sends monthly emails with archived messages.

## Install

Get the code, and set it up to run on [Heroku](https://www.heroku.com/). To do this, you'll need [Node.js](http://nodejs.org/) and the [Heroku toolbelt](https://toolbelt.heroku.com/). Once you've got those:

    git clone https://github.com/arielspear/slack-scraper.git
    cd slack-scraper
    vi .env # add your config values
    heroku create
    git push heroku master
    # scale worker dynos

Or, to run it locally, just do `foreman run npm start`.

## Config

The scraper will need a variety of configuration values to do its work. Put your configuration values in the `.env` file. Specifically, `.env` needs these values:

* `ORCHESTRATE_API_KEY`
* `SLACK_API_TOKEN`
* `MAILCHIMP_API_TOKEN`
* `NOTIFY_EMAILS`

## Tests

    foreman run npm test

## License

[MIT](http://opensource.org/licenses/MIT), yo.
