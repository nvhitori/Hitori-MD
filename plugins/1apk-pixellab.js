import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `${htki} *DOWNLOAD* ${htka}

     Pixellab Purple ( via Mediafire )
    
    --------APK INFO--------
    
*${htjava} Version:* unknown 
*${htjava} Link:* https://www.mediafire.com/download/3lwbp8kz4xdcl4s
*${htjava} Filesize:* 34mb\n`,wm + '\n\n' + botdate, thumb, [['⎙ Download ⎙','.mediafire https://www.mediafire.com/download/3lwbp8kz4xdcl4s']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: 'Pixellab',          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: sig
                      }}
})
}


handler.help = ['pxlb']
handler.command = ['pxlb']
export default handler