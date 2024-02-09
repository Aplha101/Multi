const TOKEN = "MTE0MjkyMTU2NzA4MTM0MTAzOA.GXO_5L.Gpj0VNBL3av7pDibnErdYOAOp0HWtCkgWJL9l4"
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('OK');
});
server.listen(5000);
console.log("this works")
const secret = process.env['TOKEN']

const {
  Client,
  GatewayIntentBits,
  EmbedBuilder
} = require('discord.js');
const prefix = ";"
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
  ],
});



const wel = '1142937807027974206'
const wfl = '1157461418669518989'
const logs = "1166599968920969267"
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
  client.channels.cache.get(logs).send(`🟢Logged in as ${client.user.tag}!`)
  client.user.setActivity(";help | Observing indecisive");
})
client.on('guildMemberRemove', (e) => {
  const memberchannel = e.guild.channels.cache.get('1142938017162608650');
  memberchannel.setName(`
╰ʚ-members = ${e.guild.memberCount}`)
  const levem = new EmbedBuilder()
    .setTitle("Left the server!!")
    .setColor("#522475")
    .setDescription(`✧･ﾟ: <@${e.id}> :･ﾟ✧ \n Goodbye , we hope to see you again!!`)
    .setThumbnail(e.user.displayAvatarURL({
      dynamic: true, size: 4096
    }))
    .setImage("https://cdn.discordapp.com/attachments/1042960928297189497/1156497239749951498/Genshin-Impact-Inazuma.png?ex=651b1e3c&is=6519ccbc&hm=d5853dcf68c5ba4b96eaea292416f578ae728d28bc2be9e68ba8a528d3a91866&")
    .setTimestamp()

  client.channels.cache.get(wel).send({
    embeds: [levem]
  })

});


client.on("guildMemberAdd", e => {

  const memberchannel = e.guild.channels.cache.get('1142938017162608650');
  memberchannel.setName(`
╰ʚ-members = ${e.guild.memberCount}`)
  const welem = new EmbedBuilder()
    .setTitle("༻✦Welcome!!✦༺")
    .setColor("#6c6294")
    .setDescription(`꒱ \n Hi, <@${e.user.id}> welcome to ${e.guild.name}! You're descender ${e.guild.memberCount}! ˚
Remember to check out:
┊⁠╭ʚ﹕ <#1104191886685638736> ₊
┊⁠┊✩꒱・<#1104056009674194966> 
┊⁠╰ʚ﹕ <#1042960928297189497> ₊
 𝐄𝐧𝐣𝐨𝐲 𝐲𝐨𝐮𝐫 𝐬𝐭𝐚𝐲!`)
    .setThumbnail(e.user.displayAvatarURL({
      dynamic: true, size: 4096
    }))
    .setImage("https://cdn.discordapp.com/attachments/1042960928297189497/1159298122284011590/latest.png?ex=65308383&is=651e0e83&hm=c183f6eb65c1158affaa5e0313b1a6d5e97236e513400f4dd739db2493f95cfd&")
    .setTimestamp()

  client.channels.cache.get(wel).send({
    embeds: [welem]
  })

});


client.on("messageCreate", async msg => {
  const myRole = msg.guild.roles.cache.get('1104188580571652158');


  if (msg.content == ";count") {
    const server = msg.guild
    const count = server.memberCount
    const embed = new EmbedBuilder()
      .setTitle("༻✦Member count✦༺")
      .setColor("#ffffff")
      .setDescription(`There are currently ${count} members!!!`)

    msg.channel.send({ embeds: [embed] }).then((msg) => {
      msg.edit({ embeds: [embed] })
    })
  }


  if (msg.content === ';ping') {
    const startTime = Date.now();
    msg.reply('Pinging...').then(sent => {
      const endTime = Date.now();
      const ping = endTime - startTime;
      sent.edit(`Pong! Latency is ${ping}ms.`);
    });
  }


  if (msg.content === ";ily") {
    let hearts = ["❤️",
      "🧡",
      "💛",
      "💚",
      "💙",
      "💜",
      "🤎",
      "🖤",
      "🤍"]
    for (let i = 0; i <= 8; i++) {
      msg.react(hearts[i])
    }
  }
  if (msg.content === ";F") {
    msg.react("🇫")
  }
  if (msg.content.startsWith(';avatar')) {
    const user = msg.mentions.users.first() || msg.author;
    const avatarURL = user.displayAvatarURL({
      dynamic: true, size: 4096
    });
    const e = new EmbedBuilder()
      .setColor('#E389B9')
      .setTitle(`${user.tag}'s Avatar`)
      .setImage(avatarURL)
      .setTimestamp()

    msg.channel.send({
      embeds: [e]
    });
  }
  if (msg.content.startsWith(';8ball')) {
    function generateRandom(Array) {
      let random = Math.floor(Math.random() * Array.length)
      return Array[random]
    }

    let eight_ball_answers = [
      "It is certain.",
      "It is decidedly so.",
      "Without a doubt.",
      "Yes, definitely.",
      "You may rely on it.",
      "As I see it, yes.",
      "Most likely.",
      "Outlook good.",
      "Yes.",
      "Signs point to yes.",
      "Reply hazy, try again.",
      "Ask again later.",
      "Better not tell you now.",
      "Cannot predict now.",
      "Concentrate and ask again.",
      "Don't count on it.",
      "My reply is no.",
      "My sources say no.",
      "Outlook not so good.",
      "Very doubtful."
    ]
    msg.reply(generateRandom(eight_ball_answers))
  }
  if (msg.content.startsWith(';poll')) {
    let s = msg.content.split("|")
    let arr = s.map(word => [word]);
    const emo = ["1️⃣",
      "2️⃣",
      "3️⃣",
      "4️⃣",
      "5️⃣",
      "6️⃣",
      "7️⃣",
      "8️⃣",
      "9️⃣"];

    let option = arr[1]
    let question = arr[0]
    let removedItem = question[0].split(" ");
    removedItem.splice(0, 1);
    let result = removedItem.join(" ");
    let ops = option[0].split(",")

    const optionsText = ops.map((option, index) => `${emo[index]} → ${option}`).join('\n\n');

    const embed = new EmbedBuilder()
      .setColor("#95739c")
      .setDescription(`
      **__QUESTION__: ${result}**
      \n\n${optionsText}\n

      Poll created by <@${msg.author.id}>
      `)
    console.log(ops.length)
    msg.channel.send({
      embeds: [embed]
    }).then(m => {
      for (let i = 0; i <= ops.length - 1; i++) {
        m.react(emo[i])
      }
    })
  }
  function removeFirstElement(inputString,
    delimiter = ' ') {
    const parts = inputString.split(delimiter);
    if (parts.length > 1) {
      parts.shift()
      return parts.join(delimiter);
    } else {
      return "!! not a valid input";
    }
  }
  if (msg.content.startsWith(";say")) {
    const content = removeFirstElement(msg.content, ' ');
    msg.channel.send(content).then(() => {
      msg.delete();
    }).catch(err => {
      console.error('Error sending message:', err);
    });
  }

  const wflChannel = client.channels.cache.get(wfl)
  if (msg.content.startsWith(";wfl")) {
    if (msg.channel !== wflChannel) return
    msg.channel.send(`requested by <@${msg.author.id}>\n
${myRole.toString()}
Is this a Win/Fair/Lose?`
    ).then(msg => {
      msg.react("🇼")
      msg.react("🇫")
      msg.react("🇱")
    })
  }

  if (msg.content.startsWith(";info")) {
    const user = msg.member
    const embed = new EmbedBuilder()
      .setTitle(`${user.user.username}'s Information`)
      .setColor('#64a176')
      .setDescription(`
**Username:** ${user.user.username}\n
**Discriminator:** ${user.user.discriminator}\n
**ID:** ${user.user.id}\n
**Bot:** ${user.user.bot ? 'Yes' : 'No'}\n
**Roles:** \n${user.roles.cache.map(role => `<@&${role.id}>`).join(`\n`)}\n
**Joined At: **${user.joinedAt.toLocaleDateString()}
    `)
      .setThumbnail(user.user.displayAvatarURL({
        dynamic: true, size: 4096
      }))

    msg.reply({ embeds: [embed] });
  }


  // Create an array of command names and descriptions
  const commands = [
    { name: ';ping', description: 'Ping command' },
    { name: ';avatar', description: 'Shows user avatar' },
    { name: ';say', description: 'Says what you want it to say' },
    { name: ';poll', description: "Creates a poll \n use ;poll <question> | <option>,<option>... 9 options supported" },
    { name: ';wfl', description: 'creates a wfl request' },
    { name: ';info', description: 'shows info about the user' },
    { name: ';8ball', description: 'Ask the magic 8-ball a question' },
    { name: ';count', description: "Shows the server member count" },
    { name: ";F and ;ily", description: "fun comamnds for the bot to react to your message" },
    // Add more commands here...
  ];

  // Create the help command
  if (msg.content === ';help') {
    const embed = new EmbedBuilder()
      .setColor('#64a176')
      .setTitle('Bot Commands')
      .setDescription(commands.map(command => `**${command.name}:** ${command.description}`).join('\n'));

    msg.channel.send({ embeds: [embed] });
  }
  if (msg.content.startsWith(';embed')) {
    try {
      const [title, description, color , img] = msg.content.split('|').slice(1);

      if (title && description && color && img) {
        const embed = new EmbedBuilder()
          .setTitle(title.trim())
          .setDescription(description.trim())
          .setColor(color.trim())
        .setImage(img.trim())
        msg.channel.send({ embeds: [embed] });
      } else if(title && description && color && !img){
        const embed = new EmbedBuilder()
          .setTitle(title.trim())
          .setDescription(description.trim())
          .setColor(color.trim())
        msg.channel.send({ embeds: [embed] });
      }else {
        msg.channel.send("Invalid format! Please provide title, description, and color for the embed.");
      }
    } catch (error) {
      console.error('Error creating embed:', error);
      msg.channel.send('An error occurred while creating the embed.');
    }
  }
// embeds => mm , pilot , petsitting , leveling
  if(msg.content === ";pilot"){
    
const pilot = new EmbedBuilder()
  .setTitle("PILOT FORM")
      .setColor("#ffffff")
      .setDescription(`# __**Pilot form**__

  • AR / TL and server:
  • Account size:
  • Task (give details pls):
  • Time limit:
  • Fee:
  • Do/don't:

  • Login whenever or ask / ping for permission prior?

  • Ping when? (Eg: before logging in / after logging out, or both, or none)`)
      .setTimestamp();
    msg.channel.send( { embeds : [ pilot]})
  }
      
})


client.login(secret)
const secret = process.env['TOKEN']
const {
  Client,
  GatewayIntentBits,
  EmbedBuilder
} = require('discord.js');
const prefix = ";"
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
  ],
});



const wel = '1142937807027974206'
const wfl = '1157461418669518989'
const logs = "1166599968920969267"
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
  client.channels.cache.get(logs).send(`🟢Logged in as ${client.user.tag}!`)
  client.user.setActivity(";help | Observing indecisive");
})
client.on('guildMemberRemove', (e) => {
  const memberchannel = e.guild.channels.cache.get('1142938017162608650');
  memberchannel.setName(`
╰ʚ-members = ${e.guild.memberCount}`)
  const levem = new EmbedBuilder()
    .setTitle("Left the server!!")
    .setColor("#522475")
    .setDescription(`✧･ﾟ: <@${e.id}> :･ﾟ✧ \n Goodbye , we hope to see you again!!`)
    .setThumbnail(e.user.displayAvatarURL({
      dynamic: true, size: 4096
    }))
    .setImage("https://cdn.discordapp.com/attachments/1042960928297189497/1156497239749951498/Genshin-Impact-Inazuma.png?ex=651b1e3c&is=6519ccbc&hm=d5853dcf68c5ba4b96eaea292416f578ae728d28bc2be9e68ba8a528d3a91866&")
    .setTimestamp()

  client.channels.cache.get(wel).send({
    embeds: [levem]
  })

});


client.on("guildMemberAdd", e => {

  const memberchannel = e.guild.channels.cache.get('1142938017162608650');
  memberchannel.setName(`
╰ʚ-members = ${e.guild.memberCount}`)
  const welem = new EmbedBuilder()
    .setTitle("༻✦Welcome!!✦༺")
    .setColor("#6c6294")
    .setDescription(`꒱ \n Hi, <@${e.user.id}> welcome to ${e.guild.name}! You're descender ${e.guild.memberCount}! ˚
Remember to check out:
┊⁠╭ʚ﹕ <#1104191886685638736> ₊
┊⁠┊✩꒱・<#1104056009674194966> 
┊⁠╰ʚ﹕ <#1042960928297189497> ₊
 𝐄𝐧𝐣𝐨𝐲 𝐲𝐨𝐮𝐫 𝐬𝐭𝐚𝐲!`)
    .setThumbnail(e.user.displayAvatarURL({
      dynamic: true, size: 4096
    }))
    .setImage("https://cdn.discordapp.com/attachments/1042960928297189497/1159298122284011590/latest.png?ex=65308383&is=651e0e83&hm=c183f6eb65c1158affaa5e0313b1a6d5e97236e513400f4dd739db2493f95cfd&")
    .setTimestamp()

  client.channels.cache.get(wel).send({
    embeds: [welem]
  })

});


client.on("messageCreate", async msg => {
  const myRole = msg.guild.roles.cache.get('1104188580571652158');


  if (msg.content == ";count") {
    const server = msg.guild
    const count = server.memberCount
    const embed = new EmbedBuilder()
      .setTitle("༻✦Member count✦༺")
      .setColor("#ffffff")
      .setDescription(`There are currently ${count} members!!!`)

    msg.channel.send({ embeds: [embed] }).then((msg) => {
      msg.edit({ embeds: [embed] })
    })
  }


  if (msg.content === ';ping') {
    const startTime = Date.now();
    msg.reply('Pinging...').then(sent => {
      const endTime = Date.now();
      const ping = endTime - startTime;
      sent.edit(`Pong! Latency is ${ping}ms.`);
    });
  }


  if (msg.content === ";ily") {
    let hearts = ["❤️",
      "🧡",
      "💛",
      "💚",
      "💙",
      "💜",
      "🤎",
      "🖤",
      "🤍"]
    for (let i = 0; i <= 8; i++) {
      msg.react(hearts[i])
    }
  }
  if (msg.content === ";F") {
    msg.react("🇫")
  }
  if (msg.content.startsWith(';avatar')) {
    const user = msg.mentions.users.first() || msg.author;
    const avatarURL = user.displayAvatarURL({
      dynamic: true, size: 4096
    });
    const e = new EmbedBuilder()
      .setColor('#E389B9')
      .setTitle(`${user.tag}'s Avatar`)
      .setImage(avatarURL)
      .setTimestamp()

    msg.channel.send({
      embeds: [e]
    });
  }
  if (msg.content.startsWith(';8ball')) {
    function generateRandom(Array) {
      let random = Math.floor(Math.random() * Array.length)
      return Array[random]
    }

    let eight_ball_answers = [
      "It is certain.",
      "It is decidedly so.",
      "Without a doubt.",
      "Yes, definitely.",
      "You may rely on it.",
      "As I see it, yes.",
      "Most likely.",
      "Outlook good.",
      "Yes.",
      "Signs point to yes.",
      "Reply hazy, try again.",
      "Ask again later.",
      "Better not tell you now.",
      "Cannot predict now.",
      "Concentrate and ask again.",
      "Don't count on it.",
      "My reply is no.",
      "My sources say no.",
      "Outlook not so good.",
      "Very doubtful."
    ]
    msg.reply(generateRandom(eight_ball_answers))
  }
  if (msg.content.startsWith(';poll')) {
    let s = msg.content.split("|")
    let arr = s.map(word => [word]);
    const emo = ["1️⃣",
      "2️⃣",
      "3️⃣",
      "4️⃣",
      "5️⃣",
      "6️⃣",
      "7️⃣",
      "8️⃣",
      "9️⃣"];

    let option = arr[1]
    let question = arr[0]
    let removedItem = question[0].split(" ");
    removedItem.splice(0, 1);
    let result = removedItem.join(" ");
    let ops = option[0].split(",")

    const optionsText = ops.map((option, index) => `${emo[index]} → ${option}`).join('\n\n');

    const embed = new EmbedBuilder()
      .setColor("#95739c")
      .setDescription(`
      **__QUESTION__: ${result}**
      \n\n${optionsText}\n

      Poll created by <@${msg.author.id}>
      `)
    console.log(ops.length)
    msg.channel.send({
      embeds: [embed]
    }).then(m => {
      for (let i = 0; i <= ops.length - 1; i++) {
        m.react(emo[i])
      }
    })
  }
  function removeFirstElement(inputString,
    delimiter = ' ') {
    const parts = inputString.split(delimiter);
    if (parts.length > 1) {
      parts.shift()
      return parts.join(delimiter);
    } else {
      return "!! not a valid input";
    }
  }
  if (msg.content.startsWith(";say")) {
    const content = removeFirstElement(msg.content, ' ');
    msg.channel.send(content).then(() => {
      msg.delete();
    }).catch(err => {
      console.error('Error sending message:', err);
    });
  }

  const wflChannel = client.channels.cache.get(wfl)
  if (msg.content.startsWith(";wfl")) {
    if (msg.channel !== wflChannel) return
    msg.channel.send(`requested by <@${msg.author.id}>\n
${myRole.toString()}
Is this a Win/Fair/Lose?`
    ).then(msg => {
      msg.react("🇼")
      msg.react("🇫")
      msg.react("🇱")
    })
  }

  if (msg.content.startsWith(";info")) {
    const user = msg.member
    const embed = new EmbedBuilder()
      .setTitle(`${user.user.username}'s Information`)
      .setColor('#64a176')
      .setDescription(`
**Username:** ${user.user.username}\n
**Discriminator:** ${user.user.discriminator}\n
**ID:** ${user.user.id}\n
**Bot:** ${user.user.bot ? 'Yes' : 'No'}\n
**Roles:** \n${user.roles.cache.map(role => `<@&${role.id}>`).join(`\n`)}\n
**Joined At: **${user.joinedAt.toLocaleDateString()}
    `)
      .setThumbnail(user.user.displayAvatarURL({
        dynamic: true, size: 4096
      }))

    msg.reply({ embeds: [embed] });
  }


  // Create an array of command names and descriptions
  const commands = [
    { name: ';ping', description: 'Ping command' },
    { name: ';avatar', description: 'Shows user avatar' },
    { name: ';say', description: 'Says what you want it to say' },
    { name: ';poll', description: "Creates a poll \n use ;poll <question> | <option>,<option>... 9 options supported" },
    { name: ';wfl', description: 'creates a wfl request' },
    { name: ';info', description: 'shows info about the user' },
    { name: ';8ball', description: 'Ask the magic 8-ball a question' },
    { name: ';count', description: "Shows the server member count" },
    { name: ";F and ;ily", description: "fun comamnds for the bot to react to your message" },
    // Add more commands here...
  ];

  // Create the help command
  if (msg.content === ';help') {
    const embed = new EmbedBuilder()
      .setColor('#64a176')
      .setTitle('Bot Commands')
      .setDescription(commands.map(command => `**${command.name}:** ${command.description}`).join('\n'));

    msg.channel.send({ embeds: [embed] });
  }
  if (msg.content.startsWith(';embed')) {
    try {
      const [title, description, color , img] = msg.content.split('|').slice(1);

      if (title && description && color && img) {
        const embed = new EmbedBuilder()
          .setTitle(title.trim())
          .setDescription(description.trim())
          .setColor(color.trim())
        .setImage(img.trim())
        msg.channel.send({ embeds: [embed] });
      } else if(title && description && color && !img){
        const embed = new EmbedBuilder()
          .setTitle(title.trim())
          .setDescription(description.trim())
          .setColor(color.trim())
        msg.channel.send({ embeds: [embed] });
      }else {
        msg.channel.send("Invalid format! Please provide title, description, and color for the embed.");
      }
    } catch (error) {
      console.error('Error creating embed:', error);
      msg.channel.send('An error occurred while creating the embed.');
    }
  }
// embeds => mm , pilot , petsitting , leveling
  if(msg.content === ";pilot"){
    
const pilot = new EmbedBuilder()
  .setTitle("PILOT FORM")
      .setColor("#ffffff")
      .setDescription(`# __**Pilot form**__

  • AR / TL and server:
  • Account size:
  • Task (give details pls):
  • Time limit:
  • Fee:
  • Do/don't:

  • Login whenever or ask / ping for permission prior?

  • Ping when? (Eg: before logging in / after logging out, or both, or none)`)
      .setTimestamp();
    msg.channel.send( { embeds : [ pilot]})
  }
      
})


client.login(TOKEN)