const Telegraf = require('telegraf')
const { getQuote } = require('gorchichka')

const messages = require('./messages')

const app = new Telegraf(process.env.BOT_TOKEN)

app.command('start', ctx => ctx.replyWithMarkdown(messages.start))
app.command('help', ctx => ctx.replyWithMarkdown(messages.help))

app.hears(/так/i, ctx => ctx.reply(getQuote()))
app.hears(/ишо/i, ctx => ctx.reply(getQuote()))

app.startPolling()
