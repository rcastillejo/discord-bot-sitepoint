module.exports = {
  name: '!kick',
  description: 'Kick!',
  execute(msg, args) {
    if (msg.mentions.users.size) {
      const taggedUser = msg.mentions.users.first();
      msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
    } else {
      msg.reply('Etiqueta a alguien xD!');
    }
  },
};
