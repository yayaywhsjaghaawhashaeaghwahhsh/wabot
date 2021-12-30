let scraper = require('@bochilteam/scraper')

let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
  await m.reply('Loading...')
  if (args[0].includes('mobile')) args[0].replace('mobile', '')
  let res = await scraper.twitterdl(args[0])
  if (res[0].isVideo == true) return await conn.sendFile(m.chat, res[0].url, '', '', m)
  for (let i = 0; i < res.length; i++) {
    conn.sendFile(m.chat, res[i].url, '', '', m)
  }
}
handler.help = ['twitter'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^twitter$/i

handler.limit = true

module.exports = handler
