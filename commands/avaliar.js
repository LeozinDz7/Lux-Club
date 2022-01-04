const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const sayMessage = args.join(" ");
 message.delete().catch(O_o => {});
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
  
        .setTitle('***Avaliação Staff***')
        .setColor('#009dff')
        .setDescription(`**Autor da Avaliação.:** ${message.author}

**Avaliação:** ${sayMessage} `)
        .setTimestamp()
        .setThumbnail(avatar)
  await message.channel.send(embed);

}