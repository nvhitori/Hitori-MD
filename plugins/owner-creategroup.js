let handler  = async (m, { conn, text }) => {
   let [namagc, partici] = text.split('|')
   let name = conn.getName(conn.user.jid)
   const petik = '```'
   if (!namagc) throw 'Format Salah!!!'
   if (!partici) partici = `@${m.sender.split('@')[0]}`
   if (!namagc) namagc = text
  let ha = await conn.groupCreate(namagc, conn.parseMention(partici))
   m.reply(`${petik}Group Telah Dibuat @${m.sender.replace(/@.+/, '')}${petik}\n\n*Link GC : https://chat.whatsapp.com/${await conn.groupInviteCode(ha.gid)}*`)
  }
handler.help = ['buatgrup']
handler.tags = ['owner', 'premium']
handler.command = /^(buatgrup|creategroup|creategrup|buatgroup)$/i
handler.premium = true
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.fail = null

export default handler