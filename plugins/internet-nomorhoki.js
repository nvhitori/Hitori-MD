import { nomorhoki } from '@bochilteam/scraper'
//let jimp = require('jimp')
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    //let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    if (!text) throw `Use example ${usedPrefix}${command} 62xxxxxxx`
    const result = await nomorhoki(text)
    
let nohoki = `
*NOMOR:* ${result.nomer}
*ANGKA BAGUA SHUZI:* ${result.angka_bagua_shuzi}

*POSITIF:* ${result.positif.positif}
*KEKAYAAN:* ${result.positif.kekayaan}
*KESEHATAN:* ${result.positif.kesehatan}
*CINTA:* ${result.positif.cinta}
*KESTABILAN:* ${result.positif.kestabilan}

*NEGATIF:* ${result.negatif.negatif}
*PERSELISIHAN:* ${result.negatif.perselisihan}
*KEHILANGAN:* ${result.negatif.kehilangan}
*MALAPETAKA:* ${result.negatif.malapetaka}
*KEHANCURAN:* ${result.negatif.Kehancuran}
`
await conn.sendButton(m.chat, nohoki, wm, [['menu', '.menu']], m)
}

handler.help = ['nomorhoki'].map(v => v + ' <Apa>')
handler.tags = ['internet']
handler.command = /^(nomorhoki)$/i
handler.limit = true

export default handler
