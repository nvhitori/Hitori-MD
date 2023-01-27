import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = fs.readFileSync('./media/P.webp')
conn.sendFile(m.chat, pp, '', '', m, true)
}


handler.customPrefix = /^(p)$/i
handler.command = new RegExp

export default handler
