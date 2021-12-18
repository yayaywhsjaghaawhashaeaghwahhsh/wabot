let handler = async (m, { conn }) => {
  m.reply('Loading...')
  let res = `https://api.ichikaa.xyz/api/randomimage/feet?apikey=79lJ9HEA`
  conn.sendFile(m.chat, res, 'feet.jpg', 'huu suka ama kaki', m)
}
handler.help = ['feet']
handler.tags = ['anime']

handler.command = /^(feet)$/i

module.exports = handler
