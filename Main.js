const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true });
const botconfig = require("./botconfig.json");

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

bot.on("message" , async message => {

    // CHECK CHANNEL TYPE
    if(message.channel.type === "dm)") return;
    if(message.author.bot)return;
    
    
    // SET PREFIX
    let prefix = botconfig.prefix;

    // CHECK PREFIX, DEFINE ARGS & COMMAND
    if(!message.content.startsWith(prefix)) return;
    let args = message.content.slice(prefix.length).trim().split(/+/g);
    let cmd;
    cmd = args.shift().toLowerCase();
    let command;
    let commandfile = bot.commands.get(cmd.slice(prefix.length));

    //RUN COMMANDS
    if(bot.commands.has(cmd)); {
        command = bot.commands.get(cmd);
    }  else if (bot.aliases.has(cmd)) {
        command = bot.commands.get(bot.aliases.get(cmd));
    }


})

bot.login(botconfig.token);
