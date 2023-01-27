let handler = async(m, { conn, text, args, usedPrefix, command }) => {
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}

  if (!args[0]) return m.reply(`Example : ${usedPrefix + command} noir helo
   *List Efek:*
balloon
beach-sign
blood_writing
bracelet
cemetery-gates
chalk_writing
christmas-writing
cookies_writing
denim-emdroidery
einstein
foggy_window_writing
fortune-cookie
frosty-window-writing
haunted-hotel
heart_tattoo
light-graffiti
lipstick-writing
love-lock
nightmare-writing
noir
pendant
plane-banner
sand_writing
snow-sign
soup_letters
street-sign
typewriter
water-writing
wooden_sign
yacht`)

  let thm = args[0]
  let text1 = args.slice(1).join(' ')
        let images = `https://violetics.pw/api/photofunia/${thm}?apikey=beta&text=${text1}`
        let caption = `*⎔┉━「 ${command} 」━┉⎔*
🤠 *Query* : ${thm}`
  await conn.sendButton(m.chat, caption, wm, images, [
                ['Next', `${usedPrefix + command}`],
                ['Menu', `${usedPrefix}menu`]
            ], m, fdoc)
            }

handler.command = /^(pfunia|pfun)$/i

export default handler