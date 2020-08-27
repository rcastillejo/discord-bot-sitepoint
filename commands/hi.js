module.exports = {
  name: 'hi',
  description: 'Hello!',
  execute(msg, args) {
    if (msg.mentions.users.size) {
      const taggedUser = msg.mentions.users.first();
      const fromUser = msg.author.username;
      msg.channel.send(`Hola ${taggedUser.username} cómo estás? de parte de ${fromUser}`);
    } else {
      msg.channel.send('Hola a todos, cómo están?, dice ${fromUser}');
    }
  },
};
