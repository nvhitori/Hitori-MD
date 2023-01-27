
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''

  if (command == 'edit1') {
    if (!mime) return m.reply(`Balas gambar dengan perintah`)
    if (!text) return m.reply(`Balas gambar dengan perintah
    ${usedPrefix + command} efek
    *List efek:*
    ps4
gay
joke
jail
blur
rmbg
burn
crush
badut
sepia
frame
trash
scary
wanted
circle
invert
badut3
wasted
glitch
thanos
delete
emboss
badut2
distort
iphonex
toonify
rejected
facepalm
stickbug
approved
brazzers
dictator
beautiful
karenhave
communism
greyscale
spongebob
instagram
moustache
animeface
triggered
challenger
discordhouse
tobecontinue
missionpassed`)
  let img = await q.download?.()
  let url = await uploadImage(img)
    let images = `https://api-xcoders.xyz/api/maker/animeface?url=${url}&apikey=${global.xckey}`
    let caption = `*⎔┉━「 ${command} 」━┉⎔*
🤠 *Query* : ${url}`
  await conn.sendButton(m.chat, caption, wm, images, [
                ['Next', `${usedPrefix + command}`],
                ['Menu', `${usedPrefix}menu`]
            ], m, fdoc)
            }
   if (command == 'edit2') {
   let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) return m.reply(`Balas gambar dengan perintah`)
    if (!text) return m.reply(`Balas gambar dengan perintah
    ${usedPrefix + command} efek
    *List Efek:*
    opinion
facebook
captcha`)

   let img = await q.download?.()
    let url = await uploadImage(img)
  let thm = args[0]
  let text1 = args.slice(1).join(' ')
    let images = `https://api-xcoders.xyz/api/maker/${thm}?text=${text1}&url=${url}&apikey=${global.xckey}`
    let caption = `*⎔┉━「 ${command} 」━┉⎔*
🤠 *Query* : ${thm}`
  await conn.sendButton(m.chat, caption, wm, images, [
                ['Next', `${usedPrefix + command}`],
                ['Menu', `${usedPrefix}menu`]
            ], m, fdoc)
            }
          
          if (command == 'edit3') {
    if (!text) return m.reply(`Balas gambar dengan perintah
    ${usedPrefix + command} efek
    *List Efek:*
    ttp
ttp3
attp
tahta
facts
biden
carbontext
sertitolol
caution
kannagen
styletext
trumptweet
ssmap`)

  let thm = args[0]
  let text1 = args.slice(1).join(' ')
    let images = `https://api-xcoders.xyz/api/maker/${thm}?text=${text1}&apikey=${global.xckey}`
    let caption = `*⎔┉━「 ${command} 」━┉⎔*
🤠 *Query* : ${thm}`
  await conn.sendButton(m.chat, caption, wm, images, [
                ['Next', `${usedPrefix + command}`],
                ['Menu', `${usedPrefix}menu`]
            ], m, fdoc)
            }
          
}
//lo mau apa??
handler.help = ['edit1', 'edit2', 'edit3'].map(v => v + ' <text>')
handler.command = ['edit1', 'edit2', 'edit3']

handler.tags = ['maker']
export default handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}