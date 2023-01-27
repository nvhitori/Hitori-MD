import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let loh = fs.readFileSync('./media/yntkts.opus')
conn.sendFile(m.chat, loh, '', '', m, true)
}


handler.customPrefix = /^(v1)$/i
handler.command = new RegExp

export default handler
