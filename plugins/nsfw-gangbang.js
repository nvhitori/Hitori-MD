import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
	
	  if (global.db.data.chats[m.chat].nsfw == false && m.isGroup) return conn.sendButton(m.chat, '❗ ᴏᴘᴛɪᴏɴs ɴsғᴡ ᴅɪᴄʜᴀᴛ ɪɴɪ ʙᴇʟᴜᴍ ᴅɪɴʏᴀʟᴀᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ',botdate, null, [['ᴇɴᴀʙʟᴇ', '.on nsfw']], m)

	let gb = await (await fetch('https://raw.githubusercontent.com/VarrelKun/database/main/nsfw/gangbang.json')).json()
    
    let neko = pickRandom(gb)
	conn.sendButton(m.chat, 'Hidup Sehat Semangat Goes 💗', wm, neko, [['Next','.gb']],m)
}
handler.command = /^(gb)$/i

handler.limit = true
handler.premium = true
export default handler
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}