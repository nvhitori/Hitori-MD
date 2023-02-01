import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Reply Gambar nya'
let media = await q.download()
let url = await uploadImage(media)
m.reply('Wait sabar lagi loading...')
await conn.sendFile(m.chat, await (await fetch(`https://api.zahwazein.xyz/photoeditor/jadianime?url=${url}&apikey=YOURAPIKEY`)).buffer(), 'anime.jpg', 'Ciee Jadi Anime :v', m)
}
handler.help = ['jadianime']
handler.tags = ['convert']
handler.command = /^(to|jadi)anime$/i
handler.limit = 5

export default handler