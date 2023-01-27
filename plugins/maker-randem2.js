let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply(`Example : ${usedPrefix + command} bj
  *List Efek:*

• bj
• ero
• cum
• les
• neko
• feet
• yuri
• trap
• ngif
• lewd
• feed
• eron
• solo
• gasm
• poke
• anal
• holo
• keta
• tits
• kuni
• kiss
• erok
• smug
• baka
• solog
• feetg
• lewdk
• waifu
• pussy
• tickle
• femdom
• cuddle
• hentai
• eroyuri
• cum_jpg
• blowjob
• erofeet
• holoero
• classic
• erokemo
• fox_girl
• futanari
• hololewd
• lewdkemo
• wallpaper
• pussy_jpg
• kemonomimi
• nsfw_avatar
• nsfw_neko_gif
• random_hentai_gif`)
        let images = `https://api.lolhuman.xyz/api/random/nsfw/${text}?apikey=${global.lolkey}`
        await conn.sendButton(m.chat, `Nih ${text}`, wm, images, [
                ['Next', `${usedPrefix}${command}`]
            ], m)
}
handler.help = ['randem2'].map(v => v + ' <efek>')
handler.tags = ['tools']
handler.command = /^(randem2)$/i

export default handler