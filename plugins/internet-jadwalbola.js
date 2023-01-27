import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
  let res = await fetch('https://api.lolhuman.xyz/api/jadwalbola?apikey=2548ae0a1ad4d3233004f218')
  if (res.status != 200) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
m.reply(` *⚽JADWAL BOLA⚽*

_*${json.data[1].kickoff}*_
⏲️Waktu: _${json.data[0].waktu}_
📺Channel tv: ${json.data[0].channel}

_*${json.data[2].kickoff}*_
⏲️Waktu: _${json.data[1].waktu}_
📺Channel tv: ${json.data[1].channel}

_*${json.data[3].kickoff}*_
⏲️Waktu: _${json.data[2].waktu}_
📺Channel tv: ${json.data[2].channel}

_*${json.data[4].kickoff}*_
⏲️Waktu: _${json.data[3].waktu}_
📺Channel tv: ${json.data[3].channel}

_*${json.data[5].kickoff}*_
⏲️Waktu: _${json.data[4].waktu}_
📺Channel tv: ${json.data[4].channel}
`)

}
handler.help = ['jadwalbola']
handler.tags = ['internet']
handler.command = /^jadwalbola$/i
handler.limit = true


export default handler