import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://saipulanuar.herokuapp.com/api/maker/harta-tahta?apikey=KingOfBear&text=${response[0]}`
  conn.sendFile(m.chat, res, 'KingOfBear.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['hartatahtacustom', 'htc'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(hartatahtacustom|htc)$/i
handler.limit = true

export default handler
