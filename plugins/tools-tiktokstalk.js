import fetch from 'node-fetch'
let handler = async (m, { command, text, usedPrefix, conn }) => {
   if (!text) throw `Masukkan Nama!\nContoh: ${usedPrefix + command } xzyyoreall`
    try {
    let res = `https://restapi.frteam.xyz/tiktokstalk?username=${text}&apikey=085759681568`
    let bisa = await res.json()
let cap = `${mm1} TikTok Stalk ${mm2}
*username:* ${bisa.result.username}
*nickname:* ${bisa.result.nickname}
*signature:* ${bisa.result.signature}
*verified:* ${bisa.result.verified}
*private:* ${bisa.result.private}
*followers:* ${bisa.result.followers}
*following:* ${bisa.result.following}
*likes:* ${bisa.result.likes}
*video count:* ${bisa.result.video_count}
`
    conn.sendFile(m.chat, bisa.result.profile_url, '', cap, m)
    } catch {
    	throw eror
    	}
}
handler.help = ['frttstalk']
handler.tags = ['Info', 'tools']
handler.command = /^(ttstalk|tiktokstalk)$/i
handler.limit = true

export default handler