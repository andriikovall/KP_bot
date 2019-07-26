const TOKEN = require('./token.json')['token'];
var MSG = require('./greeting_msg.json')['text']
const PASS = require('./pass.json')['pass']

var TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(TOKEN, { polling: true, timeout: 500 });

// bot.on('new_chat_members', (ctx) => console.log(ctx.message.new_chat_members)) не работало чет

bot.on('message', function (message) {
    if (message.new_chat_members != undefined) {
        console.log(message.new_chat_member.username);
        console.log(message.new_chat_member.id);
        bot.sendMessage(message.chat.id, MSG)
    }
});

bot.onText(/\/change_text (.+)/, function onEchoText(msg, match) {
    let cmd = match[1].split(' ')
    if (cmd[0] == PASS) {
        MSG = cmd.slice(1).join(' ')
        bot.sendMessage(msg.chat.id, "Текст изменем")
    }
    // console.log(pass, new_msg)
    // if (pass == PASS) {
    //     MSG = new_msg
    //     
    // }
  });

bot.on('polling_error', (err) => {console.log(err)})