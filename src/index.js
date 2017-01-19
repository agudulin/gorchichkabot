const Telegraf = require('telegraf')
const { Markup } = Telegraf
const { getQuote } = require('gorchichka')

const messages = require('./messages')

const formatQuote = ({ quote, song, album }) => `
${quote.title}

_${song.title} (${album.title} ${album.year})_
`

const { NODE_ENV, BOT_TOKEN_PROD, BOT_TOKEN_DEV } = process.env
const token = NODE_ENV === 'production' ? BOT_TOKEN_PROD : BOT_TOKEN_DEV
const app = new Telegraf(token)

app.command('start', (ctx) =>
  ctx.replyWithMarkdown(messages.start, Markup
    .keyboard([['так', 'ишо']])
    .resize()
    .extra()
  )
)
app.command('help', ctx => ctx.replyWithMarkdown(messages.help))
app.hears(/(так)|(ишо)/i, ctx => ctx.replyWithMarkdown(formatQuote(getQuote({ details: true }))))

app.startPolling()
