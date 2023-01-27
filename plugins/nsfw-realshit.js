let handler = async (m, { conn }) => {
let info = `
*${htki} REAL SHIT ${htka}*
          
         Ⓟ: Premium
         Ⓛ: Free (but still using limit)
          
 *®Jangan Lupa Berdonasi :D*
`
const sections = [
   {
    title: `REAL SHIT`,
	rows: [
	    {title: "Ⓛ | Cosplay", rowId: '.18csply'},
	    {title: "Ⓛ | Boobass", rowId: '.paptt'},
	    {title: "", rowId: '', description: 'Coming Soon' },
	    {title: "", rowId: '', description: 'Coming Soon' },
	]
    }, 
    
]
let vn = `https://raw.githubusercontent.com/saipulanuar/Api-Github/main/audio/owner-sange.mp3`
const listMessage = {
  text: info,
  footer: global.wm,
  title: null,
  buttonText: "HERE!",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})

conn.sendFile(m.chat, vn, m)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "ðŸŒŽ Group Official", null,null, [['Owner','.owner']], m)
}
handler.help = ['realshit']
handler.tags = ['nsfw']
handler.command = /^realshit$/i
handler.premium = false

export default handler
