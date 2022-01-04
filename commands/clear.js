const Discord = require('discord.js');

module.exports = {
    config: {
        name: "clear",
        aliases: ['limpar', 'clear'],
    },
    run: async (client, message, args) => {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply({embed: new Discord.MessageEmbed()
.setDescription(`${message.author}** Você não tem permissão para usar este comando.**`) 
.setColor("#009dff") //Cor da embed
.setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
.setTimestamp(new Date())
});
        let quantia = args[0]
        if (!quantia) return message.reply({embed: new Discord.MessageEmbed()
          .setTitle(`Como usar ? f!limpar [quantia: 1 / 100]`) 
          .setColor('#009dff') 
        });
        if (isNaN(quantia)) return message.reply({embed: new Discord.MessageEmbed()
          .setTitle(`Por favor utilize somente numeros.`)        
          .setColor('#009dff') 
        });

        if (parseInt(quantia) > 100 || parseInt(quantia) < 1) return message.reply({embed: new Discord.MessageEmbed()
          .setTitle(`Somente posso apagar de 1 até 100 mensagens`)         
          .setColor('#009dff')
        });

        try {
        
            message.channel.bulkDelete(quantia);
            message.channel.send({embed: new Discord.MessageEmbed()

.setDescription(`${message.author}`)
.setTitle(`Total de mensagens apagadas: ${quantia}`)
.setColor("#009dff") 
});


const ferinha = new Discord.MessageEmbed()
.setDescription(`**Foram apagadas:** ${quantia} mensagens\n**No canal:** ${message.channel}\n**Pelo úsuario:** ${message.author}`)
        .setColor("#009dff")
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL());


        client.channels.cache.get("912449269745725490").send(ferinha);

      } catch (err) {
        console.log(err); 
      }
        }
      }