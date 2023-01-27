
const timeout = 1800000

let handler = async (m, { conn, usedPrefix, text }) => {
	    let time = global.db.data.users[m.sender].lastparming + 1800000
  if (new Date - global.db.data.users[m.sender].lastparming< 1800000) throw `Anda sudah lelah untuk bekerja\nTunggu selama ${msToTime(time - new Date())} lagi`
	let wood = `${Math.floor(Math.random() * 50)}`.trim()
	let money = `${Math.floor(Math.random() * 50000)}`.trim()
	
	global.db.data.users[m.sender].wood += wood * 1
	global.db.data.users[m.sender].money += money * 1
	
	global.db.data.users[m.sender].lastparming = new Date * 1
  m.reply(`Selamat kamu mendapatkan : \n+${wood} Kayu\n+${money} Money`)
  setTimeout(() => {
					conn.reply(m.chat, `Yuk waktunya Nebang lagi ðŸ˜…`, m)
					}, timeout)
}
handler.help = ['Nebang']
handler.tags = ['rpg']
handler.command = /^(nebang)/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true
handler.exp = 0
handler.money = 0

export default handler 

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    
  
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit " + seconds + " detik"
}