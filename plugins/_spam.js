import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, './media/virgam.jpeg',20)
}
handler.command = /^(tes)$/i
handler.tags = ['nocategory']
handler.help = ['tes']
export default handler
