import axios from "axios"
import fetch from 'node-fetch'

let handler = async (m, {command, conn}) => {
	
	let tekk = `\`\`\`➩ Ini Pacar Owner >_< \`\`\` `
	
if (command == 'rccn') {
let haha = await conn.getFile('https://api-reysekha.herokuapp.com/api/wallpaper/cecan?apikey=apirey')
conn.sendButton(m.chat, tekk.trim(), author, haha.data, [[' Next', `/${command}`]], m)}
	
if (command == 'ind') {
let anu = await fetch('https://luciaximena.site/api/cecan/indonesia?&apikey=miracle')
conn.sendButton(m.chat, tekk.trim(), author, await anu.buffer(), [[' Next', `/${command}`]], m)}

if (command == 'jap') {
let anu = await fetch('https://luciaximena.site/api/cecan/japan?&apikey=miracle')
conn.sendButton(m.chat, tekk.trim(), author, await anu.buffer(), [[' Next', `/${command}`]], m)}

if (command == 'chn') {
let anu = await fetch('https://luciaximena.site/api/cecan/china?&apikey=miracle')
conn.sendButton(m.chat, tekk.trim(), author, await anu.buffer(), [[' Next', `/${command}`]], m)}
	
if (command == 'kra') {
let anu = await fetch('https://luciaximena.site/api/cecan/korea?&apikey=miracle')
conn.sendButton(m.chat, tekk.trim(), author, await anu.buffer(), [[' Next', `/${command}`]], m)}
	

}
handler.command = /^(rccn|ind|jap|chn|kra)/i

handler.limit = true 
export default handler