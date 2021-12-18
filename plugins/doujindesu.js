let fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Input url'
  let res = await fetch(API('Velgrynd', '/api/doujindesu', { url: args[0] }, 'apikey'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { filename, cover, url } = json.result
  let buff = await conn.getFile(cover)
  await conn.sendFile(m.chat, url, `${filename}.pdf`, '', m, false, { asDocument: true, thumbnail: buff.data })
 }
handler.help = ['doujindesu'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^doujindesu$/i

handler.limit = true

module.exports = handler