const Telegraf = require('telegraf')
const { getQuote } = require('gorchichka')

const app = new Telegraf(process.env.BOT_TOKEN)

app.command('start', ctx => {
  console.log('start', ctx.from)
  ctx.reply('дратути!\n"так" или "ишо"?')
})

app.hears('так', ctx => ctx.reply(getQuote()))
app.hears('ишо', ctx => ctx.reply(getQuote()))

app.startPolling()
