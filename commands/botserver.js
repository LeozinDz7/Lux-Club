module.exports = {
    name: "serverlist",
    description: "Mostra a lista de servidores que o bot está",
    run: async (client, message, args, storage) => {
  
     if (!['408785710368423967'].includes(message.author.id))
      return message.reply(
        "Apenas o criador do bot pode utilizar esse comando!")
  
  client.guilds.cache.map(g => message.author.send(`➡ ${g.name}・||${g.id}||`))
  
  message.author.send(`Totalizando ${client.guilds.cache.size} servidores`)
    }
  }