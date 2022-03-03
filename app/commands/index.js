const usersController = require('../controllers/users');
const standardController = require('../controllers/standard');

module.exports = (bot) => {
  bot
    .command('start', usersController.canReply, standardController.start)
    .command('help', usersController.canReply, standardController.help);
};
