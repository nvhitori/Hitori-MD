import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let gpl = fs.readFileSync('./media/toxic.opus')
conn.sendFile(m.chat, gpl, '', '', m, true)
}


handler.customPrefix = /^(siapa)$/i
handler.command = new RegExp

export default handler
