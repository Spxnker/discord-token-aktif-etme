const Discord = require('discord.js-selfbot')


const tokens = [
  "token",
  "token",
  "",
  "",
  "",
  "",
  ""
];

const chnls = [
  "Bağlanacağı kanal",
  "Bağlanacağı kanal",
  "Bağlanacağı kanal", 
  "Bağlanacağı kanal",
  "Bağlanacağı kanal",
  "Bağlanacağı kanal",
  "Bağlanacağı kanal",
  "Bağlanacağı kanal"
];

const spanker = [];
for (let index = 0; index < tokens.length; index++) {
    const token = tokens[index];
    const client = new Discord.Client();
    client.login(token);
    let spankek;
    client.on('ready', async () => {
        client.user.setStatus("ready");
        console.log(client.user.username);
        spankek = await client.channels.cache.get(chnls[index]).join().catch(err => console.error("Ses kanalına giriş başarısız")); // eğer bütün tokenleri aynı sese sokmak istiyorsan bu satırdaki kodu sil bro
    });

// eğer bütün tokenleri aynı ses kanalına sokmak istiyorsan başlarındaki // sil 

// const voicee = "buraya bütün tokenlerin bağlanacağı ses"
// const channel = client.channels.cache.get(voicee);
// client.on("ready", async () => {
// if (channel && channel.joinable) channel.join().console.log("Sese bağlandım bro");
// });
// setInterval(() => {
//   const channel = client.channels.cache.get(voicee);
//   if (!channel) return
//   channel.join();
// }, 1);


  }
