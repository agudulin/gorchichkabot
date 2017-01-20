require('dotenv/config')
const { Composer, Markup } = require('micro-bot')
const { getQuote } = require('gorchichka')

const messages = require('./messages')

const formatQuote = ({ quote, song, album }) => `
${quote.title}

_${song.title} (${album.title} ${album.year})_
`

const app = new Composer()

app.command('start', (ctx) =>
  ctx.replyWithMarkdown(messages.start, Markup
    .keyboard([['так', 'ишо']])
    .resize()
    .extra()
  )
)
app.command('help', ctx => ctx.replyWithMarkdown(messages.help))
app.hears(/(так)|(ишо)/i, ctx => ctx.replyWithMarkdown(formatQuote(getQuote({ details: true }))))

module.exports = app
