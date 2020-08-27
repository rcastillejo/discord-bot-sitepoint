module.exports = {
  name: '!kick',
  description: 'Kick!',
  execute(msg, args) {
    if (msg.mentions.users.size) {
      const taggedUser = msg.mentions.users.first();
      const fromUser = msg.author.username;
      msg.channel.send(`${fromUser} quiere eliminarte ${taggedUser.username}`);
    } else {
      msg.reply('Etiqueta a alguien xD!');
    }
  },
};
