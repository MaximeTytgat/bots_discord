const Discord = require('discord.js');
const bot = new Discord.Client();
const settings = require('./settings.json');


bot.on('ready', () => {
    console.log("I'm Online");
});

const Day = new Date();
const H = Day.getHours(); 
let M = Day.getMinutes();
if (M <= 9) { M = `0${M}` };
const HM = `${H}${M}`;
const prefix = "²²";
console.log(`${H}:${M}`);

try {
bot.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(prefix + "strawpoll")) {
        console.log(message.content);
        const data = message.content.slice(12);
        if (data === "") {
            message.channel.send(`²²strawpoll Question, Réponce-1, Réponce-2`)
            return;
        }
        const oui = data.split(", ")
        console.log(oui);
        message.delete()
        message.channel.send(`${oui[0]} @here`)
        message.channel.send(`${oui[1]}`)
        .then(msg => msg.react('✅'))
        message.channel.send(`${oui[2]}`)
        .then(msg => msg.react('❌'))
    };

    if (message.content === prefix + "ayy") {
        console.log(message.content);
        message.delete()
        message.channel.send(`**Role Menu: Les Elos**
React to give yourself a role.
        
<:UNRANKED:669477946129645568>  : **NON CLASSÉ**
        
<:IRON:668725018125139974>  : **IRON**
        
<:BRONZE:668175305113862175>  : **BRONZE**
        
<:SILVER:668176066770108447>  : **SILVER**
        
<:GOLD:668164473869303829>  : **GOLD**
        
<:PLATINIUM:668176251525267456>  : **PLATINE**
        
<:DIAMOND:668176526662959125>  : **DIAMANT**`)
.then(async msg => {
    await msg.react('669477946129645568');
    await msg.react('668725018125139974');
    await msg.react('668175305113862175');
    await msg.react('668176066770108447');
    await msg.react('668164473869303829');
    await msg.react('668176251525267456');
    await msg.react('668176526662959125');
    const filter = (reaction, user) => reaction.emoji.name === "669477946129645568";

    msg.awaitReactions(filter, { max: 1, time: 30000, errors: ['time'] })
    .then(Collected => {
        const reaction = Collected.first();
        switch (reaction) {
            case '669477946129645568':
                message.member.addRole("691634451326697533")
                message.channel.send("***OUI***")
                break;
            case '668725018125139974':
                
                break;
            case '668175305113862175':
                
                break;
            case '668176066770108447':
                
                break;
            case '668164473869303829':
                
                break;
            case '668176251525267456':
                
                break;
            case '668176526662959125':
                
                break;
            default:
            message.channel.send("***NON***")
                break;
        }

    })
    .catch(Collected => {
        console.error(Collected)
        console.log("error reaction");
        message.channel.send("***NON2***")
    });
})
    };

    if (message.content === prefix + 'ping') {
        message.channel.send(`Pong!  \`${message.createdTimestamp - Date.now()} ms\``);
    };

});
} catch (e) {
    console.error(e)
}
bot.login(settings.token)