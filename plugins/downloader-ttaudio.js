import fetch from 'node-fetch'
import axios from 'axios'
import fs from 'fs'
import moment from 'moment-timezone'

let handler = async (m, { conn, args }) => {
  let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let who = m.sender
const time = moment.tz('Asia/Jakarta').format('HH')
  const ultah = new Date('November 4 2022 00:00:01')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
  if (!args[0]) throw 'Uhm...url nya mana?'
  let chat = global.db.data.chats[m.chat]
  m.reply(wait)
  await conn.reply(m.chat, `Downloading media from Tiktok`, 0, {
    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        mediaUrl: '',
        mediaType: 2,
        description: sgc,
        title: global.wm,
        body: 'Nih Kak', //`${fileSizeH}`,
        sourceUrl: snh,
        thumbnail: fs.readFileSync('./thumbnail.jpg')
      }
    }
  })
  let bear = '9b95802c6f20'
  let bearr = 'danzz'
  let url = await fetch(`https://saipulanuar.ga/api/download/tiktok?apikey=${bearr}&url=${args[0]}`)
  let json = await url.json()
    if (url.status !== 200) throw await url.text()
    if (!json.status) throw json
  let txt = `🚀 *Link:* ${await (await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)).data}`
  await conn.sendFile(m.chat, json.result.audio, 'tiktokaudio.mp3', `
┏┉━━━━━━━━━━━❏
┆ *TIKTOK MP3*
├┈┈┈┈┈┈┈┈┈┈┈
┆• *Judul:* 
│• *Type:* MP3
┆• *📥 Ukuran File:* 
└❏
`.trim(), m, null, {
        contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: 'Total Cintaku Padamu',          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: sig
            }
        }
    })
}
handler.tags = ['downloader']
handler.command = /^(tt|tiktok)(a(udio)?|mp3|sound)(dl)?(download(er)?)?$/i

handler.limit = true

export default handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
