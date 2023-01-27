import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
	if (!text) throw 'url salah'
	m.reply(wait)
	await conn.sendButtonVid(m.chat, text, 'Awas dosa kakak ini banyakk ><', wm, 'menu', '.menu', m)
}
handler.command = /^(xnxxvid(io)?)$/i

handler.limit = true

export default handler