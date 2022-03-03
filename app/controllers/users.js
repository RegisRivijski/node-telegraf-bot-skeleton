module.exports = {
  async canReply(ctx, next) {
    let canReply = true;
    await ctx.replyWithChatAction('typing')
      .catch((e) => {
        console.error('commandHelper canReply:', e.message, ctx.update.message.from.id);
        canReply = false;
      });

    if (canReply) await next();
  },
};
