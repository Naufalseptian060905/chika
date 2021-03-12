const Discord = require("discord.js");
const bot = new Discord.Client();
const express = require('express')
const client = new Discord.Client({ disableMentions: 'everyone' });
client.aliases = new Discord.Collection();
client.commands = new Discord.Collection();

client.aliases = new Discord.Collection();
client.snipes = new Map();

const app = express ()
app.listen(process.env.PORT)
app.get("/", (req, res) => {
  res.sendStatus(200);
});

client.on('messageDelete', (message, channel) => {
  client.snipes.set(message.channel.id, {
      content: message.content,
      author: message.author.tag,
      image: message.attachments.first() ? message.attachments.first() : null
  })
})

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  
  
  if (message.content === 'Welcome') {
    message.channel.send('<a:happy:802552812092260373> <a:welcome1:802552740160864277><a:welcome2:802552799711723561> <a:happy:802552812092260373>');
  }
  if (message.content === 'welcome') {
    message.channel.send('<a:happy:802552812092260373> <a:welcome1:802552740160864277><a:welcome2:802552799711723561> <a:happy:802552812092260373>');
  }
  if (message.content === 'Welkam') {
    message.channel.send('<a:russiandance:772092613708742697> <a:welcome1:802552740160864277><a:welcome2:802552799711723561> <a:russiandance:772092613708742697>');
  }
  if (message.content === 'welkam') {
    message.channel.send('<a:russiandance:772092613708742697> <a:welcome1:802552740160864277><a:welcome2:802552799711723561> <a:russiandance:772092613708742697>');
  }
  if (message.content === 'Duar') {
    message.channel.send('Duar ya meledak anj!!!,bukannya kabur malah duar');
  }
  if (message.content === 'duar') {
    message.channel.send('<:nmax:802872505324535839>');
  }
  if (message.content === 'Warkop') {
    message.channel.send(':tada: **HAPPY 50 BOOST** :tada:');
  }
  if (message.content === 'Makasih') {
    message.channel.send('Selalu ada dan sudah ada');
  }
  if (message.content === 'makasih') {
    message.channel.send('Selalu ada dan sudah ada');
  }
  if (message.content === 'Yeuu') {
    message.channel.send('Goblok <a:tonjok:802776116301135872>');
  }
  if (message.content === 'yeuu') {
    message.channel.send('Goblok <a:tonjok:802776116301135872>');
  }
  if (message.content === 'Run') {
    message.channel.send('Kabur !!! <a:run2:802778515866255371>');
  }
  if (message.content === 'run') {
    message.channel.send('Kabur !!! <a:run2:802778515866255371>');
  }
  if (message.content === 'Parming kuy') {
    message.channel.send('Gassssss!!! <a:parming:802779138678849566>');
  }
  if (message.content === 'parming kuy') {
    message.channel.send('Gassssss!!! <a:parming:802779138678849566>');
  }
  if (message.content === 'Huak') {
    message.channel.send('CUIH!!! <a:cuihh:772092679324565514>');
  }
  if (message.content === 'huak') {
    message.channel.send('CUIH!!! <a:cuihh:772092679324565514>');
  }
  if (message.content === 'Misi') {
    message.channel.send('Monggo tot,eh matteot');
  }
  if (message.content === 'misi') {
    message.channel.send('Monggo tot,eh matteot');
  }
  if (message.content === 'Hadeh') {
    message.channel.send('Bre bre');
  }
  if (message.content === 'hadeh') {
    message.channel.send('Bre bre');
  }
  if (message.content === 'Welkom') {
    message.channel.send('Hallo salken :wave:,Jangan lupa ambil role di <#804396301641973810> dan jangan sungkan untuk nimbrung <a:metal:790817199702409258>');
  }
  if (message.content === '+invite') {
    message.channel.send('https://discord.com/oauth2/authorize?client_id=800127042204074045&scope=bot&permissions=36826112');
  }
  if (message.content === 'Dahlah') {
    message.channel.send('<a:ngambek:803281968690233356>');
  }
  if (message.content === '+server') {
    message.channel.send('https://discord.gg/warkop');
  }
  if (message.content === 'Welcrot') {
    message.channel.send('<:Tiod:802987553082048523> :heart: <:akucantip:790994490545668096>');
  }
  if (message.content === 'welcrot') {
    message.channel.send('<:Tiod:802987553082048523> :heart: <:emoji_59:790994490545668096>');
  }
  if (message.content === 'Pudidi') {
    message.channel.send('Apa anjg?!');
  }
  if (message.content === 'Nonong') {
    message.channel.send('Apa sayang?kangen?');
  }
  if (message.content === 'Mbun') {
    message.channel.send('IZINKAN AKU MENCIUMTAIMU UNTUK TERAKHIR KALINYA');
  }
  if (message.content === 'BUBAR') {
    message.channel.send('BUBAR ANJG BUBAR,SERVERNYA MAU DIDELETE!!!');
  }
});

client.on('message', async message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;


    let prefix = (process.env.prefix);
    let msg = message.content.toLowerCase();
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let command = args.shift().toLowerCase();
    let sender = message.author;
    const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
    if (message.content.match(prefixMention)) {
      return message.reply(`**Prefix Saya : \`${prefix}\`**, **Untuk musik:** &`);
    }

  if(!message.content.startsWith(prefix)) return undefined;
  message.prefix = prefix;

    if(!msg.startsWith(prefix)) return;//---------------------

    try {
        let commandFile = require(`./cmds/${command}.js`); 
        commandFile.run(client, message, args); 
    } catch(e) { 
        console.log(e.message); 
    } finally { 
        console.log(`${message.author.tag} menggunakan command: ${command} di ${message.guild.name}`);
    }

  });


  client.on("ready", async() => {
  
    function randomStatus() {
  let status = [`discord.gg/warkop`, `mention to see prefix`] 
  let rstatus = Math.floor(Math.random() * status.length)
  
  client.user.setActivity(status[rstatus], {type: "PLAYING" });
}; setInterval(randomStatus, 5000)

client.user.setStatus('online').then(console.log).catch(console.error);
  console.log(`Logged in as : ${client.user.tag}`);
  console.log(`${client.user.username} is ready!`)
}, 30000)

client.login(process.env.TOKEN);
