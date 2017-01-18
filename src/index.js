const Telegraf = require('telegraf')

const app = new Telegraf(process.env.BOT_TOKEN)

app.command('start', ctx => {
  console.log('start', ctx.from)
  ctx.reply('welcome')
})

app.hears('yo', ctx => ctx.reply('yoyo'))

app.startPolling()
