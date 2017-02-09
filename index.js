const { Composer, Markup } = require('micro-bot')
const { getQuote } = require('gorchichka')
const msg = require('./messages')

const app = new Composer()

app.command('start', (ctx) =>
  ctx.replyWithMarkdown(msg.start, Markup
    .keyboard([['так', 'ишо']])
    .resize()
    .extra()
  )
)
app.command('help', ctx => ctx.replyWithMarkdown(msg.help))
app.hears(/(так)|(ишо)/i, ctx => ctx.replyWithMarkdown(msg.formatQuote(getQuote({ details: true }))))

module.exports = app
