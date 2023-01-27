import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `${htki} *DOWNLOAD* ${htka}

     Node Video PRO  ( via Mediafire )
    
    --------APK INFO--------
    
*${htjava} Version:* 4.9.57
*${htjava} Link:* https://www.mediafire.com/file/3jmvd0nl6bpq6c1/NodeVideo_v4.9.57_-_Mod.apk/file
*${htjava} Filesize:* 107mb\n`,wm + '\n\n' + botdate, thumb, [['⎙ Download ⎙','.mediafire https://www.mediafire.com/file/3jmvd0nl6bpq6c1/NodeVideo_v4.9.57_-_Mod.apk/file']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: 'NV Gang',          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: sig
                      }}
})
}


handler.help = ['node']
handler.command = ['node']
export default handler