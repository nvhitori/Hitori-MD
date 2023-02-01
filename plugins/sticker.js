import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler = async(m, { conn }) => {
await m.reply(`*_${name} @${m.sender.split(`@`)[0]}..._*`)
  let res = await fetch('https://api.waifu.pics/nsfw/blowjob')
  let json = await res.json()
  let stiker = await sticker(null, json.url, global.packname, global.author)
  if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, { asSticker: true })
  throw stiker.toString()
}
handler.help = ['henstick', 'tic']
handler.tags = ['nsfw']
handler.command = /^(henstick|tic)$/i
handler.premium = true

export default handler
