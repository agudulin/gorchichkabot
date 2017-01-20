const formatQuote = ({ quote, song, album }) => `
${quote.title}

_${song.title} (${album.title} ${album.year})_
`
const start = `
дратути!

скажите *так* или *ишо*
`
const help = `
подсказка

*так*: вернет случайную цитату из случайной композиции
*ишо*: сделает то же самое
`
module.exports = { formatQuote, help, start }
