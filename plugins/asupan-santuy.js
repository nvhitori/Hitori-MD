/*let handler = async(m,{text, conn}) => {
let supa = 'https://api.zacros.my.id/asupan/santuy'
conn.sendFile(m.chat, supa, null, 'Nih', m)
}
handler.help = ['santuy']
handler.tags = ['asupan']
handler.command = /^(santuy)$/i

module.exports = handler*/
import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.zacros.my.id/asupan/santuy'
	conn.sendButton(m.chat, 'Nih', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(santuy)$/i
handler.tags = ['asupan', 'kabul']
handler.help = ['santuy']
handler.limit = true
export default handler


