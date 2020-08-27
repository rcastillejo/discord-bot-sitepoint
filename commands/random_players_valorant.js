const shuffle = require('shuffle-array');

module.exports = {
  name: 'random',
  description: 'Jugadores Aleatorios Valorant!',
  players: ['raze', 'jet', 'sova', 'machote', 'nigga', 'sage', 'cypher'],
  execute(message, args) {
    if (!message.mentions.users.size) {
      return message.reply('Etiqueta a tu team :D');
    }
    
    shuffle(this.players);

    let index = 0;
    message.mentions.users.map(taggedUser => {
        message.channel.send(`${taggedUser.username}: ${this.players[index++]}`);
    });
  },
};
