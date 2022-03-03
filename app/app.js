const config = require('config');
const { Telegraf } = require('telegraf');
const rateLimit = require('telegraf-ratelimit');
const ignoreOldMessages = require('telegraf-ignore-old-messages');
const commands = require('./commands/index');

const bot = new Telegraf(config.bot.API_TOKEN);
bot.use(rateLimit(config.bot.limit));
bot.use(ignoreOldMessages(1));
commands(bot);
bot.startPolling();
