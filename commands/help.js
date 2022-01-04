const Discord = require("discord.js");

module.exports = {
    name: "help com reação by ferinha",
    description: "clique na reação, e a msg será editada :)",
    author: "ferinha heher",

run: async(client, message, args) => { //embed do painel inicial
    let embed = new Discord.MessageEmbed()
    .setTitle(`Painel de comandos`)
    .setThumbnail(message.author.displayAvatarURL())
    .setDescription(`Veja meus comandos:

\n🔗 Utilidade \n⚙ Moderação \n🤣 Diversão \n👑 Outros
⠀`)
    .setFooter(`${message.author.tag}`)
    .setColor("#009dff")    
    message.channel.send(`${message.author}`, embed).then(msg => {
      msg.react("◀️")
      msg.react("🔗")
      msg.react("⚙")
      msg.react("🤣")
      msg.react("👑")

      let filtro0 = (r, u) => r.emoji.name === '◀️' && u.id === message.author.id;
      let filtro1 = (r, u) => r.emoji.name === '🔗' && u.id === message.author.id;
      let filtro2 = (r, u) => r.emoji.name === '⚙' && u.id === message.author.id;
      let filtro3 = (r, u) => r.emoji.name === '🤣' && u.id === message.author.id;
      let filtro4 = (r, u) => r.emoji.name === '👑' && u.id === message.author.id;
      

      let coletor0 = msg.createReactionCollector(filtro0);
      let coletor = msg.createReactionCollector(filtro1);
      let coletor2 = msg.createReactionCollector(filtro2);
      let coletor3 = msg.createReactionCollector(filtro3);
      let coletor4 = msg.createReactionCollector(filtro4);

      coletor0.on("collect", c => { //embed do painel inicial (editada)

        let ferinha = new Discord.MessageEmbed()
      .setTitle(`Painel de comandos`)
      .setThumbnail(message.author.displayAvatarURL())
      .setDescription(`Veja meus comandos:

\n🔗 Utilidade \n⚙ Moderação \n🤣 Diversão \n👑 Outros
⠀`)
      .setFooter(`${message.author.tag}`)
      .setColor("#009dff")   
        
     
        msg.edit(`${message.author}`, ferinha)
      })


      coletor.on("collect", c => { //embed do painel de utilidade (editada)

        let fera = new Discord.MessageEmbed()
        .setTitle(`🔗 Utilidade 🔗`)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`${message.author.tag}`)
        .setDescription(`**Bug - para estar reportando alum bug para nossa Staff**\n⠀ \n**Sugerir - Para dar alguma sugestão**\n⠀ \n**Avaliar - Para dar alguma nota aos nossos**\n⠀ \n**Ticket - Para abrir um ticket**\n`)
        .setColor("#009dff")
        

        msg.edit(`${message.author}`, fera)
      })

      coletor2.on("collect", c => { //embed do painel de moderação (editada)

        let fera = new Discord.MessageEmbed()
        .setTitle(`⚙ Moderação ⚙`)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`${message.author.tag}`)
        .setDescription(`**Embed - Para eu enviar mensagem em embed**\n⠀ \n**clear - Para limpar o chat de 1-99**\n⠀ \n**say - Para enviar mensagem sem ser embed**\n⠀ \n**ban - Para dar ban em algum usuário**\n⠀ \n**Unban - Para retirar o ban de algum usuário**\n⠀ \n**Lock - Para trancar algum canal**\n⠀ \n**Unlock - Para destrancar algum canal**\n⠀`)
        .setColor("#009dff")
        

        msg.edit(`${message.author}`, fera)
      })

      coletor3.on("collect", c => { //embed do painel de diversão (editada)

        let ferinha = new Discord.MessageEmbed()
        .setTitle(`🤣 Diversão 🤣`)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`${message.author.tag}`)
        .setDescription(`\n**Avatar (@user) - Para ver o avatar de um usuário.**\n \n**Kiss (@user) - Para Beijar alguém**\n \n**hug (@user) - Para Abraçar alguém**\n \n**status (@user) - Para ver o status de alguém**\n \n**slap (@user) - Para bater em alguém**\n `)
        .setColor("#009dff")

        msg.edit(`${message.author}`, ferinha)
      })

      coletor4.on("collect", c => { //embed de outros cmds (editada)

        let ferauwu = new Discord.MessageEmbed()
        .setTitle(`👑 Outros 👑`)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`${message.author.tag}`)
        .setDescription(` \n**Uptime - Para saber quantas horas o Bot está online**\n \n**play - Para o Bot tocar música**\n \n**Lista - Para saber a playlist das músicas**\n \n**info - Para saber mais sobre o Bot**\n`)
        .setColor("#009dff")

        msg.edit(`${message.author}`, ferauwu)
      })
    })
  }
}