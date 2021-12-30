let scraper = require('@bochilteam/scraper')

let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
  await m.reply('Loading...')
  if (args[0].includes('mobile')) args[0].replace('mobile', '')
  let res = await scraper.twitterdl(args[0])
  for (let i = 0; i < res.length; i++) {
    if (res[0].isVideo === true) {
      conn.sendFile(m.chat, res[0].url, '', '', m)
    } else conn.sendFile(m.chat, res[i].url, '', '', m)
  }
}
handler.help = ['twitter'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^twitter$/i

handler.limit = true

module.exports = handler
