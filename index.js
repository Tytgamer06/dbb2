const Discord = require("discord.js");

const TOKEN = "T0KEN"
const PREFIX = ";"


var fortunes = [
  "Ja",
  "Nee",
  "Misschien",
];

var servers = {};

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Ready")
});


bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "ping":
        message.channel.send("Pong!");
        break;
        case "info":
        message.channel.send("Ik ben gemaakt door: @Tytgamer#0724 ! DM hem voor opties en bugs!");
        break;
        case "8ball":
        if(args[1]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
        else message.channel.send("Ik kan je vraag niet lezen. Stel een vraag");
        break;
        case "help":
        message.channel.send("De hulp is geschreven in #denboombot !");
        break;

        default:
        message.channel.send("Dit is geen geldige command!");
    }
});


bot.login(TOKEN);
