let handler = async (m, { conn }) => {
let info = `
*${htki} INFO BOT ${htka}*
`
const sections = [
   {
    title: `BOT INFORMATION`,
	rows: [
    {title: "DONASI", rowId: '.donasi' },
    {title: "SEWA/PREMIUM", rowId: '.sewa'},
	{title: "STORE", rowId: '.store'},
	{title: "OWNER", rowId: '.owner'},
	{title: "SPEED", rowId: '.speed'},
	]
    }, 
    
]

const listMessage = {
  text: info,
  footer: '',
  title: null,
  buttonText: "Tap Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "ðŸŒŽ Group Official", null,null, [['Owner','.owner']], m)
}
handler.command = /^vall$/i

handler.premium = false

export default handler
