import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
let res = await fetch('https://api.lolhuman.xyz/api/storynime?apikey=cahyoKun')
let res2 = await res.json()
conn.sendFile(m.chat, res2.result, 'story.mp4', 'Story Anime\n\nBy © NexEp', m)
}
handler.help = ['storyanime']
handler.tags = ['fun']
handler.command = /^storyanime$/i 

export default handler