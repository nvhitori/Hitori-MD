import axios from "axios"
let handler = async (m, {command, conn}) => {
	
	let tekk = `\`\`\`➩ Nih Ngabss\`\`\` `
	
if (command == 'satan') {
let haha = await conn.getFile(`https://luciaximena.site/api/search/wallpaper?query=satanic&apikey=miracle`)
conn.sendButton(m.chat, tekk.trim(), author, haha.data, [[' Next', `/${command}`]], m)}
	
if (command == 'qtd') {
let haha = await conn.getFile(`https://luciaximena.site/api/search/wallpaper?query=katakata&apikey=miracle`)
conn.sendButton(m.chat, tekk.trim(), author, haha.data, [[' Next', `/${command}`]], m)}

if (command == 'crtn') {
let haha = await conn.getFile(`https://luciaximena.site/api/search/wallpaper?query=kartun&apikey=miracle`)
conn.sendButton(m.chat, tekk.trim(), author, haha.data, [[' Next', `/${command}`]], m)}

if (command == 'aes') {
let haha = await conn.getFile(`https://luciaximena.site/api/search/wallpaper?query=aesthetic&apikey=miracle`)
conn.sendButton(m.chat, tekk.trim(), author, haha.data, [[' Next', `/${command}`]], m)}

}
handler.command = /^(satan|qtd|crtn|aes)/i

handler.limit = true
export default handler