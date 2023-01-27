import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `${htki} *DOWNLOAD* ${htka}

     [PSCC] Photoshop Touch ( via Mediafire )
    
    --------APK INFO--------
    
*${htjava} Version:* unknown 
*${htjava} Link:* https://www.mediafire.com/file/e05njvpdx0z81gr/PS_CC_by_Vijay_Gfx.apk/file
*${htjava} Filesize:* 22mb\n`,wm + '\n\n' + botdate, thumb, [['⎙ Download ⎙','.mediafire https://www.mediafire.com/file/e05njvpdx0z81gr/PS_CC_by_Vijay_Gfx.apk/file']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: 'Ps Touch',          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: sig
                      }}
})
}


handler.help = ['pscc']
handler.command = ['pscc']
export default handler