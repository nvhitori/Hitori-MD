//Update
import fetch from 'node-fetch'
import { extractImageThumb } from '@adiwajshing/baileys'

let handler = async (m, { conn, args }) => {
	let code = (args[0] || '').replace(/\D/g, '')
	if (!code) throw 'Input code' 
	await m.reply('_Lagi Proses deck sabar..._')
	let res = await fetch('https://free-rest-api-nhentai.herokuapp.com/nhentai?code=' + code)
	if (!res.ok) throw await res.statusText
	let json = await res.json()
	let buffer = await (await fetch('https://external-content.duckduckgo.com/iu/?u=' + json.result.images.cover.t)).buffer()
	let jpegThumbnail = await extractImageThumb(buffer)
////PDF
        let ress = await fetch('https://free-rest-api-nhentai.herokuapp.com/nhentai/' + code)
	if (!ress.ok) throw await ress.statusText
	let jsonn = await ress.json()
	conn.sendMessage(m.chat, { document: { url: jsonn.result }, jpegThumbnail, fileName: json.result.title.english + '.pdf', mimetype: 'application/pdf' }, { quoted: m })
}
handler.help = handler.alias = ['nhentai']
handler.tags = ['nsfw']
handler.command = /^(nhentai)$/i
handler.premium = true
handler.limit = 5

export default handler