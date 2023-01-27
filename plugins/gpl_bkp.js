let handler = async (m, { conn }) => {
	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
	const sukses = './src/avatar_contact.png'
 conn.sendFile(m.chat, 'https://yog-apikey.herokuapp.com/api/bokep?apikey=YogGanz', 'asupan.mp4', 'Nih Jngn comly  ya', m)
 conn.sendFile(m.chat, sukses, 'attp.webp', '', m, false, { asSticker: true })
}
handler.help = ['bkp']
handler.tags = ['hentai', 'premium']

handler.command = /^(bkp)$/i
handler.group = false
handler.private = true
handler.premium = true
handler.register = true
handler.limit = 25
export default handler 
