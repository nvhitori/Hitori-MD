import fs from 'fs'
let handler = async (m, { conn, text }) => {
    m.reply('Tunggu Sebentar, Sedang mengambil file Config.js')
    let sesi = await fs.readFileSync('./config.js')
    return await conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'config.json' }, { quoted: m })
}
handler.help = ['getconfig']
handler.tags = ['owner']
handler.command = /^(getconfig)$/i

handler.rowner = true

export default handler