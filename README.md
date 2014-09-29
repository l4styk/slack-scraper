# slack-scraper

Scrapes and listens to Slack channels for messages, and sends monthly emails with archived messages.

## Install

Get the code, and set it up to run on [Heroku](https://www.heroku.com/). To do this, you'll need [Node.js](http://nodejs.org/) and the [Heroku toolbelt](https://toolbelt.heroku.com/). Once you've got those:

    git clone https://github.com/arielspear/slack-scraper.git
    cd slack-scraper
    vi .env # add your config values
    heroku create
    git push heroku master
    # TODO scale worker dynos

Or, to run it locally, just do `foreman run npm start`.

## Workers

The scraper uses two workers to accomplish its hopes and dreams:

1. Mines messages from Slack on a [daily,weekly,monthly] basis.
2. On a [daily,weekly,monthly] basis, emails an archive to specified recipients.

The executables for our workers live in `/bin`, but their guts live in `/lib`. Their tests live under `/test`.

## Config

The scraper will need a variety of configuration values to do its work. Put your configuration values in the `.env` file. Specifically, `.env` needs these values:

* `ORCHESTRATE_API_KEY`
* `SLACK_API_TOKEN`
* `MAILGUN_API_TOKEN`
* `CHANNELS`: comma-separated list of Slack channels to watch.
* `NOTIFY_EMAILS`: comma-separated list of emails to send monthly reports to.

For reference, your `.env` file should look something like this:

    ORCHESTRATE_API_KEY=...
    SLACK_API_TOKEN=...
    MAILGUN_API_TOKEN=...
    CHANNELS=...
    NOTIFY_EMAILS=...

## Tests

    foreman run npm test

## License

[MIT](http://opensource.org/licenses/MIT), yo.
