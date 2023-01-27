import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `${htki} *DOWNLOAD* ${htka}

     Minecraft PE Official ( via Mediafire )
    
    --------APK INFO--------
    
*${htjava} Version:* 1.19
*${htjava} Link:* https://www.mediafire.com/file/4hixmktsfkhky91/Minecraft_v1.16.101.01_Terbaru.zip/file
*${htjava} Filesize:* 155mb\n`,wm + '\n\n' + botdate, thumb, [['⎙ Download ⎙','.mediafire https://www.mediafire.com/file/xwjfx45grzpn42j/minecraft-1-19-21.apk/file']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: 'Minecraft PE',          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: sig
                      }}
})
}


handler.help = ['mcpe']
handler.command = ['mcpe']
export default handler