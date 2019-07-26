const TOKEN = require('./token.json')['token'];

var TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(TOKEN, { polling: true, timeout: 500 });

// bot.on('new_chat_members', (ctx) => console.log(ctx.message.new_chat_members)) не работало чет

bot.on('message', function (message) {
    if (message.new_chat_members != undefined) {
        console.log(message.new_chat_member.username);
        console.log(message.new_chat_member.id);
        let msg = "Привет в чате! Прочитай гайды в закрепе. Это чат потока. Тут около 15+ 2-3 курсников и люди с твоего потока.  Мы тут только что ты помогать и травить байки)"
    }
});

bot.on('polling_error', (err) => {console.log(err)})