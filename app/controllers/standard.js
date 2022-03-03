const usersManager = require('../managers/users');

module.exports = {

  async start(ctx, next) {
    const userName = usersManager.getUserName(ctx);
    const reply = `${userName}, hello! This is node-telegraf-skeleton!`;

    await ctx.replyWithChatAction('typing')
      .catch((e) => {
        console.error('start replyWithChatAction error:', e);
      });

    await ctx.reply(reply)
      .catch((e) => {
        console.error('start replyWithChatAction error:', e);
      });
    await next();
  },

  async help(ctx, next) {
    const reply = '/help - help';

    await ctx.replyWithChatAction('typing')
      .catch((e) => {
        console.error('help replyWithChatAction error:', e);
      });

    await ctx.reply(reply)
      .catch((e) => {
        console.error('help reply error:', e);
      });
    await next();
  },
};
