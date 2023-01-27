import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `Yoo!`

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*PAAN JEMBOT*🤬', 'status@broadcast')
}
handler.customPrefix = /^(bot|hi|p|tes|test|hii)$/i
handler.command = new RegExp

export default handler
