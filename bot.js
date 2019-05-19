const Discord = require('discord.js');
const bot = new Discord.Client();
const token = "token"

bot.on('ready', function(message){
    console.log("Ready");
})

bot.on('message', (message) => {
    if(message.content == ".Worm King") {
        message.reply("MHS_Worm in the worm king!");
    }
});



bot.on('message', (message) => {
    if(message.content == ".Worm Beauty") {
        message.reply("The beauty of worms is 100% compared to humans!");
    }
});



bot.on('message', (message) => {
    if(message.content == ".Worm Gay") {
        message.reply("Worm's are 50% gay!");
    }
});



bot.on('message', (message) => {
    if(message.content == "**.Bold**") {
        message.reply("**You are a bold wormy!**");
    }
});



bot.on('message', (message) => {
    if(message.content == "***~~.Bold/Strike/Italic~~***") {
        message.reply("***~~Damn that's a lot of typing~~***");
    }
});



bot.on('message', (message) => {
    if(message.content == "~~.Strike~~") {
        message.reply("~~Thunder Bolt!~~");
    }
});

bot.on('message', (message) => {
    if(message.content == ".Spam Dnke") {
        message.reply("@dnke#2252  @dnke#2252  @dnke#2252  @dnke#2252  @dnke#2252  @dnke#2252  @dnke#2252  @dnke#2252  @dnke#2252  @dnke#2252  @dnke#2252  @dnke#2252  @dnke#2252  @dnke#2252  @dnke#2252  @dnke#2252  @dnke#2252  @dnke#2252  @dnke#2252 @dnke#2252  @dnke#2252  @dnke#2252  @dnke#2252  @dnke#2252 @dnke#2252  @dnke#2252  @dnke#2252");        message.reply("@dnke#2252  @dnke#2252  @dnke#2252  @dnke#2252  @dnke#2252  @dnke#2252  @dnke#2252  @dnke#2252 ");        message.reply("@dnke#2252  @dnke#2252  @dnke#2252  @dnke#2252  @dnke#2252  @dnke#2252  @dnke#2252  @dnke#2252 ");
    }
});

bot.login(process.env.BOT_TOKEN);
