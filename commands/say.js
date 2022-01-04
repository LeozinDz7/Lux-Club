const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.reply(
      "VOCÊ NÃO TEM PERMISSÃO PARA USAR ESSE COMANDO" 
    );
  
  const sayMessage = args.join(" ");
  message.delete().catch(O_o => {});
  
  
const embed = new Discord.MessageEmbed()
        .setColor('#009dff')
        .setDescription(`${sayMessage}`)
        .setTimestamp()
        .setFooter("Leozin - Bot Desenvolvido por Leozin.")
  await message.channel.send(embed);
}