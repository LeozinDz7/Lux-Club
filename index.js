const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client({intents: 8}); //Criação de um novo Client
const enmap = require('enmap');
const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandos
const moment = require('moment');
const db = require("quick.db")

client.queue = new Map()

client.on("ready", () =>{
 const canal_log_on = client.channels.cache.get('917223777333559326')
  const dono = client.users.cache.get('408785710368423967')
  const dono2 = "<@408785710368423967>"

  const emb = new Discord.MessageEmbed()
.setTitle('Estou Online novamente!')
.setDescription('Estive offline, precisei tirar um tempo para manutenção de args...')
.setColor('#009dff')
.setFooter(`${dono.username} me ligou!`)
.setTimestamp()
.setThumbnail('https://c.tenor.com/0hjOGLFaQa0AAAAd/lofi-girl-lofi.gif')
  canal_log_on.send(`${dono2}`, emb)
})

client.on('ready', async () => {
    console.log(`Loagado em [ ${client.user.username} ] com sucesso!`);
    console.log(`Bot de música (Leozin)`);
})

client.on('message', message => {
  if (message.author.bot) return;
  if (message.channel.type == 'dm') return;
  if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
  if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

 const args = message.content
     .trim().slice(config.prefix.length)
     .split(/ +/g);
 const command = args.shift().toLowerCase();

 try {
     const commandFile = require(`./commands/${command}.js`)
     commandFile.run(client, message, args);
 } catch (err) {

   let emoji_fera = "❌";
   let ferinha_author = message.author;
   let prefixo_fera = config.prefix;
   let comando_inexistente = `${prefixo_fera}${command}`;

   message.channel.send(`${emoji_fera} | ${ferinha_author} O comando \`${comando_inexistente}\` não existe!`).then(msg=>{msg.delete({timeout:5000})});

 console.error('Erro:' + err);
}
});

client.on("message", message => {
    if (message.author.bot) return;
    if (message.channel.type == 'Leozin')
    return
    if(message.content == `<@${client.user.id}>` || message.content == `<@!${client.user.id}>`) {
    return message.channel.send(`🔮 | Olá ${message.author}, veja meus comandos com **${config.prefix}help**!`)
    }
    });

client.on("ready", () => {

let activities = [

`🌌 Olá sou Gekkō. 🌌`,

`🤔 Peça ajuda com: ${config.prefix}help 📌`,

`🌠 Atualmente em ${client.guilds.cache.size} servidores`,

`📋 Gerenciando ${client.users.cache.size} pessoas`,

`💎 Chame seus amigos.`,

`❤ Criador:!$2 Leozin#2155 💎`,

],

i = 0;

setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {

type: "PLAYING",

}), 1000 * 60);

client.user

.setStatus("")

.catch(console.error);

console.log("Estou Online!")
});


client.on("message", async message => {
if (message.author.bot) return;
if (message.channel.type === "dm") return;
if (!message.content.startsWith(config.prefix)) return;
`if (message.content.startsWith(<@!${client.user.id}) || message.content.startsWith(<@${client.user.id})) return`;

let args = message.content.split(" ").slice(1);
let command = message.content.split(" ")[0];
command = command.slice(config.prefix.length);
try {
  `let commandFILE = require(./commands/${command}.js)`;
  `delete require.cache[require.resolve(./commands/${command}.js)]`;
  return commandFILE.run(client,message, args);
} catch (err) {
    console.error("Erro:" + err);
}
});


client.on("guildMemberAdd", async (member) => { 

  let guild =  client.guilds.cache.get("905262381293269043"); // ID do Servidor
  let channel = client.channels.cache.get("905262381750439972"); // ID do Canal
  let emoji = member.guild.emojis.cache.find(emoji => emoji.name === "KannaSip");

   if (guild != member.guild) {
    return console.log("Entrou no servidor.");
   } else {

      let embed = new Discord.MessageEmbed()
      .setColor("#009dff") // Cor da barra lateral
      .setAuthor(member.user.tag, member.user.displayAvatarURL()) // Nick + Foto do Usuário que entrou
      .setTitle(`${emoji} Bem Vindo(a) ${emoji}`) // Titulo
      .setImage("https://c.tenor.com/I1JtFdfmNP8AAAAC/bem-vindo-cute.gif") // Imagem abaixo da descrição.
      .setDescription(`${member.user} ***Espero que goste de nosso servidor!***\nVocê foi o(a) **${member.guild.memberCount}** membro do nosso servidor!\n**Passe em:**
      <#905262382102757448>
      <#905262382102757454>
      <#905262382102757455>`) // Descrição 
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })) // Foto do usuário que entrou
      .setFooter('ID do usuário: ' + member.user.id) // Id do usuário
      .setTimestamp();

    await channel.send(embed);
  }
});

client.on("guildMemberRemove", async (member) => { 

  let guild = await client.guilds.cache.get("905262381293269043");
  let channel = await client.channels.cache.get("905262381750439973");
  let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === "SagiriShy");
  if (guild != member.guild) {
    return console.log("Algum pela saco saiu do servidor. Mas não é nesse, então tá tudo bem :)");
   } else {
      let embed = await new Discord.MessageEmbed()
      .setColor("#009dff")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`${emoji} Adeus! ${emoji}`)
      .setImage("https://tibiaking.com/uploads/monthly_2020_04/gif2.gif.5553f109c808efc35d89726effbda098.gif")
      .setDescription(`**${member.user.username}**, saiu do servidor! :broken_heart:`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setFooter("Código de !$2 Leozin#2155")
      .setTimestamp();

    channel.send(embed);
  }
});

client.login(process.env.TOKEN); //Ligando o Bot caso ele consiga acessar o token
