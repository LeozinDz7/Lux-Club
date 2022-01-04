const { MessageEmbed } = require('discord.js');

module.exports = {
    
        name: "status",
        aliases: ['sts'],
  
    run: async (client, message, args) => {

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;

        if (!user.presence.activities.length) {
            const sembed = new MessageEmbed()
                .setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic: true }))
                .setColor("GREEN")
                .setThumbnail(user.user.displayAvatarURL())
                .addField("**Sem status ** ", 'Este usuário não possui nenhum status personalizado!')
                .setFooter(message.guild.name, message.guild.iconURL())
                .setTimestamp()
            message.channel.send(sembed)
            return undefined;
        }

        user.presence.activities.forEach((activity) => {

            if (activity.type === 'CUSTOM_STATUS') {
                const embed = new MessageEmbed()
                    .setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic: true }))
                    .setColor("GREEN")
                    .addField("**Status**", `**Status personalizado** -\n${activity.emoji || "Nenhum Emoji"} | ${activity.state}`)
                    .setThumbnail(user.user.displayAvatarURL())
                    .setFooter(message.guild.name, message.guild.iconURL())
                    .setTimestamp()
                message.channel.send(embed)
            }
            else if (activity.type === 'PLAYING') {
                let name1 = activity.name
                let details1 = activity.details
                let state1 = activity.state
                let image = user.user.displayAvatarURL({ dynamic: true })

                const sembed = new MessageEmbed()
                    .setAuthor(`${user.user.username}'s Activity`)
                    .setColor(0xFFFF00)
                    .setThumbnail(image)
                    .addField("**Tipo**", "Jogando")
                    .addField("**App**", `${name1}`)
                    .addField("**Detalhes**", `${details1 || "Nenhum Detalhe aqui...."}`)
                    .addField("**Trabalhando em**", `${state1 || "Nenhum Detalhe fo trabalho"}`)
                message.channel.send(sembed);
            }
            else if (activity.type === 'LISTENING' && activity.name === 'Spotify' && activity.assets !== null) {

                let trackIMG = `https://i.scdn.co/image/${activity.assets.largeImage.slice(8)}`;
                let trackURL = `https://open.spotify.com/track/${activity.syncID}`;

                let trackName = activity.details;
                let trackAuthor = activity.state;
                let trackAlbum = activity.assets.largeText;

                trackAuthor = trackAuthor.replace(/;/g, ",")

                const embed = new MessageEmbed()
                    .setAuthor('Spotify Track Info', 'https://cdn.discordapp.com/emojis/408668371039682560.png')
                    .setColor("#009dff")
                    .setThumbnail(trackIMG)
                    .addField('Nome da música', trackName, true)
                    .addField('Album', trackAlbum, true)
                    .addField('Autor', trackAuthor, false)
                    .addField('Ouça a faixa', `${trackURL}`, false)
                    .setFooter(user.displayName, user.user.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed);
            }
        })
    }
}