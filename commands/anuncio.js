const Discord = require("discord.js");

exports.run = async (client, message, args) => {      
  const baliza_staff = args.join(' ');
  const baliza_mention = message.mentions.users.first() || client.users.cache.get(args[0]);

  
  if (!baliza_mention) return message.channel.send(`🚫 | ${message.author} Mencione os novos staffs!`).then(msg => msg.delete({timeout: 110000}));
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`**Você não tem permissão para utilizar esse comando**`)
  message.delete().catch(O_o => {});

  const baliza_color = "#009dff"
      const embed = new Discord.MessageEmbed()
      .setColor(baliza_color)
      .setTitle("👨‍⚖️ | Novos Staffs \n")
      .setThumbnail('https://imgur.com/fqC6Ii8.gif')
      .addFields({
        name: "👏 Parabéns aos novos staffs do servidor!",
        value: baliza_staff
      })
      .setFooter(`${client.user.username}`, client.user.displayAvatarURL({dinamyc : true}))
      .setTimestamp(new Date())
      message.channel.send(embed);
}