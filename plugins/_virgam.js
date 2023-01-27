import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, './media/virgam.jpeg')
}
handler.command = /^(virgam)$/i
handler.tags = ['virus']
handler.help = ['virgam']
export default handler
