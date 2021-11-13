const fetch = require('node-fetch');
const tmi = require('tmi.js');
const { BOT_USERNAME , OAUTH_TOKEN, CHANNEL_NAME, LINK_TIPEESTREAM, API_TIPEESTREAM } = require('./constants');

const options = {
	options: { debug: true },
	connection: {
    reconnect: true,
    secure: true,
    timeout: 180000,
    reconnectDecay: 1.4,
    reconnectInterval: 1000,
	},
	identity: {
		username: CHANNEL_NAME,
		password: OAUTH_TOKEN
	},
	channels: BOT_USERNAME
}
const client = new tmi.Client(options)
client.connect();

client.on('message', (channel, tags, message, self) => {
	// "Alca: Hello, World!"
	console.log(`${tags['display-name']}: ${message}`);
});

fetch(`${LINK_TIPEESTREAM}forever.json?apiKey=${API_TIPEESTREAM}`)
  .then(response => response.json())
  .then(data => {
    console.log("Hynaton a : "+data.datas.followers+" followers sur twitch et "+data.datas.details.youtube.followers)
  })