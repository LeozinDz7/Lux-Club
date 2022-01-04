const Discord = require("discord.js");

exports.run = async (client, message, args) => {      
  const sayMessage = args.join(' ');
  message.delete().catch(O_o => {});
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`**:no: | Você não tem permissão para utilizar esse comando**`)
  message.delete().catch(O_o => {});
      const embed = new Discord.MessageEmbed()
      .setColor('#009dff')
      .setDescription(sayMessage)
      .setFooter(`Publicado por ${message.author.username}`)
      .setTimestamp(new Date())
  message.channel.send(embed).then (msg => {
      msg.react("✅")
      msg.react("❌")
  })
}