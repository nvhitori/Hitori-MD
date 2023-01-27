let handler = async (m, { conn }) => {
let info = `
*${htki} WALLPAPER ${htka}*

`
const sections = [
   {
    title: `LIST IMAGE`,
	rows: [
    {title: "SATANIC", rowId: '.satan', description: '    ╰►  Satanic Wallpaper' },
    {title: "CARTOON", rowId: '.crtn', description: '    ╰►  Cartoon Wallpaper' },
	{title: "QUOTES", rowId: '.qtd', description: '    ╰►  Quotes Wallpaper' },
	{title: "AESTHETIC", rowId: '.aes', description: '    ╰►  Aesthetic Wallpaper' },
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
handler.command = /^wllp$/i
handler.tags = ['image']
handler.help = ['wllp']
handler.premium = false

export default handler