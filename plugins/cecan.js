let handler = async (m, { conn }) => {
let info = `
*${htki} CECAN IMAGE ${htka}*

`
const sections = [
   {
    title: `LIST IMAGE`,
	rows: [
    {title: " 🌟 Random Cecan ", rowId: '.rccn', description: '     ╰► Random Pict Of Girl' },
    {title: "🇨🇳 Chinese ", rowId: '.chn', description: '     ╰► Random Pict Chinese Girl' },
	{title: "🇮🇩 Indonesia ", rowId: '.ind', description: '     ╰► Random Pict Indonesia Girl' },
	{title: "🇯🇵 Japanese ", rowId: '.jap', description: '     ╰► Random Pict Japanese Girl' },
	{title: "🇰🇷 Korean ", rowId: '.kra', description: '     ╰► Random Pict Korean Girl' },
	]
    }, 
    
]

const listMessage = {
  text: info,
  footer: global.wm,
  title: null,
  buttonText: "List Image",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "ðŸŒŽ Group Official", null,null, [['Owner','.owner']], m)
}
handler.command = /^icecan$/i
handler.tags = ['image']
handler.help = ['icecan']
handler.premium = false

export default handler
