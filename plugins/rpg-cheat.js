let handler = async (m, { conn }) => {
let info = `
*${htki} CHEAT ${htka}*

Ada Ada saja kamu mas bro😁.
`
const sections = [
   {
	title: `✃ CHEAT MENU`,
	rows: [
	    {title: "🌀Cheat All", rowId: '.curang', description: 'Unlimited Money' },
	    {title: "🌀Ingin Uang? Join Grup", rowId: '.gcbot', description: 'Rawan Eror bang' },
	]
    }, 

]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "🔮Cheat",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['cheatbot', 'cheat']
handler.tags = ['rpg']
handler.command = /^(cheat(bot)?|cheat)$/i
handler.private = false
handler.owner = true
handler.premium = true

export default handler
