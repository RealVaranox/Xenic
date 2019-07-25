const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`)
    bot.user.setActivity("owo", { type: "PLAYING"});
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    
 if(cmd === `${prefix}epic`){
     return message.channel.send("gamer");
 }
 if(cmd === `${prefix}say`){
     return message.channel.send(args);
    }

 if(cmd === `${prefix}kick`){
     let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
     if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You're not allowed to do that.");
     let kReason = args.join(" ").slice(22);
     if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("Stop trying to kick staff.");
     if (!kUser) return message.channel.send("Cannot find user, try someone that exists.");
     message.guild.member(kUser).kick(kReason);
     message.channel.send("Kicked user for" + " " + kReason);
     return;
 }
 if(cmd === `${prefix}help`){
     let helpEmbed = new Discord.RichEmbed()
         .setTitle("Help")
         .setColor("8525e5")
         .setDescription("Xenic is a simple bot that does things like moderate the server, and also fun commands.")
         .addField("Help:", "The command you just used")
         .addField("WIP Say:", "The bot says what you tell it to say.")
         .addField("Kick:", "Kick people causing trouble in the server.")
         .addField("Status:", "Changes the bot status.")
     message.channel.send(helpEmbed);
 }

});

bot.login(botconfig.token);