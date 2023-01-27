import fetch from 'node-fetch'
import fs from 'fs'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
let frep = { contextInfo: { externalAdReply: {title: global.wm, body: global.author, sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')}}}
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}


if (command == 'sound') {
if (!text) throw `Contoh:
${usedPrefix + command} 2

List Number
Max Angka 70

Contoh:
${usedPrefix + command} arigatou

List Alphabet
📣 anjay
📣 ara-ara
📣 ara-ara-cowok
📣 ara-ara2
📣 arigatou
📣 assalamualaikum
📣 asu
📣 ayank
📣 aku-ngakak
📣 bacot
📣 bahagia-aku
📣 baka
📣 bansos
📣 beat-box
📣 beat-box2
📣 biasalah
📣 bidadari
📣 bot
📣 buka-pintu
📣 canda-anjing
📣 cepetan
📣 cuekin-terus
📣 daisuki-dayo
📣 daisuki
📣 dengan-mu
📣 gaboleh-gitu
📣 gak-lucu
📣 gamau
📣 gay
📣 gelay
📣 gitar
📣 gomenasai
📣 hai-bot
📣 hampa
📣 hayo
📣 hp-iphone
📣 i-like-you
📣 ih-wibu
📣 india
📣 karna-lo-wibu
📣 kiss
📣 kontol
📣 ku-coba
📣 maju-wibu
📣 makasih
📣 mastah
📣 nande-nande
📣 nani
📣 ngadi-ngadi
📣 nikah 
📣 nuina
📣 onichan
📣 owner-sange
📣 ownerku
📣 pak-sapardi
📣 pale
📣 pantek
📣 pasi-pasi
📣 punten
📣 sayang
📣 siapa-sih
📣 sudah-biasa
📣 summertime
📣 tanya-bapak-lu
📣 to-the-bone
📣 wajib
📣 waku
📣 woi
📣 yamete
📣 yowaimo
📣 yoyowaimo
`

if (isNumber(text)) {
//VN 1
let vn = `https://hansxd.nasihosting.com/sound/sound${text}.mp3`
await conn.sendFile(m.chat, vn, text + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '🏷Hai, ' + name,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: vn
     }}
  })
} else if (!isNumber(text)) {
//VN 2
let vn = `https://raw.githubusercontent.com/saipulanuar/Api-Github/main/audio/${text}.mp3`
await conn.sendFile(m.chat, vn, text + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '🏷Hai, ' + name,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sig
     }}
  })
} else if (e) {
throw `Error`
}
}

//VN 3
if (command == 'ringtone') {
if (!text) throw `Contoh:
${usedPrefix + command} black cover`
let vn = await fetch(`https://fatiharridho.herokuapp.com/api/search/ringtone?query=${text}`)
let x = await vn.json()
await conn.sendFile(m.chat, x.result[0].audio, text + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 1,
    description: wm, 
    title: '🏷Hai, ' + name,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: x.result[0].audio
     }}
  })
}

}
handler.command = handler.help = ['sound', 'ringtone']
handler.tags = ['nocategory']

export default handler

function isNumber(x) {
    return !isNaN(x)
}
