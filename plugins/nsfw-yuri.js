import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
	
	  if (global.db.data.chats[m.chat].nsfw == false && m.isGroup) return conn.sendButton(m.chat, '❗ ᴏᴘᴛɪᴏɴs ɴsғᴡ ᴅɪᴄʜᴀᴛ ɪɴɪ ʙᴇʟᴜᴍ ᴅɪɴʏᴀʟᴀᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ',botdate, null, [['ᴇɴᴀʙʟᴇ', '.on nsfw']], m)

	let ne = await (await fetch('https://raw.githubusercontent.com/VarrelKun/data/main/nsfw/yuri.json')).json()
    
    let neko = pickRandom(ne)
	conn.sendButton(m.chat, 'G W S 🐾💗', wm, neko, [['Next','.yuri']],m)
}
handler.command = /^(yuri)$/i

handler.limit = true
handler.premium = true
export default handler
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}