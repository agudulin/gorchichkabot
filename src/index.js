const Telegraf = require('telegraf')
const { getQuote } = require('gorchichka')

const messages = require('./messages')

const { NODE_ENV, BOT_TOKEN_PROD, BOT_TOKEN_DEV } = process.env
const token = NODE_ENV === 'production' ? BOT_TOKEN_PROD : BOT_TOKEN_DEV
const app = new Telegraf(token)

app.command('start', ctx => ctx.replyWithMarkdown(messages.start))
app.command('help', ctx => ctx.replyWithMarkdown(messages.help))

app.hears(/так/i, ctx => ctx.reply(getQuote()))
app.hears(/ишо/i, ctx => ctx.reply(getQuote()))

app.startPolling()
