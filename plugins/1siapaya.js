import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
	let url = 'https://telegra.ph/file/b2a083eccf0e43f1ae871.jpg'
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `Pesan ini dikirim oleh seseorang yang Identitasnya tidak ingin diketahui.\n`,wm + '\n\n' + botdate, url, [['OKELAH','siapa']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: '𝘾𝙄𝙀𝙀 𝙋𝙀𝙉𝘼𝙎𝘼𝙍𝘼𝙉',
                        body: 'Chat From Anonymous',          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: sig
                      }}
})
}

handler.command = ['gpls']
export default handler
