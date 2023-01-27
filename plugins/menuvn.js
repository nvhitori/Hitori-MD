let handler = async (m, { conn }) => {
let info = `
*${htki} 📣 VN MENU 📣 ${htka}*
`
const sections = [
   {
    title: `VN MENU`,
	rows: [
    {title: "All Vn", rowId: '.sound'},
    {title: "Anjay", rowId: '.sound anjay'},
    {title: "Ara - ara", rowId: '.sound ara-ara'},
    {title: "Ara - ara (Male)", rowId: '.sound ara-ara-cowok'},
    {title: "Ara - ara2", rowId: '.sound ara-ara2'},
	  {title: "Arigatou", rowId: '.sound Arigatou'},
	  {title: "Assalamualaikum", rowId: '.sound assalamualaikum'},
	  {title: "Asu", rowId: '.sound asu'},
	  {title: "Ayang", rowId: '.sound ayank'},
	  {title: "Aku ngakak", rowId: '.sound aku-ngakak'},
	  {title: "Bacot", rowId: '.sound bacot'},
	  {title: "Bahagia Aku", rowId: '.sound bahagia-aku'},
	  {title: "Baka", rowId: '.sound baka'},
	  {title: "Bansos", rowId: '.sound bansos'},
	  {title: "Beat Box", rowId: '.sound beat-box'},
	  {title: "Biasalah", rowId: '.sound biasalah'},
	  {title: "bidadari", rowId: '.sound bidadari'},
	  {title: "Bot", rowId: '.sound bot'},
	  {title: "Canda Anjing", rowId: '.sound canda-anjing'},
	  {title: "Cepetan", rowId: '.sound cepetan'},
	  {title: "Daisuki Dayo", rowId: '.sound daisuki-dayo'},
	  {title: "Daisuki", rowId: '.sound daisuki'},
	  {title: "Denganmu", rowId: '.sound denganmu'},
	  {title: "Gaboleh Gitu", rowId: '.sound gaboleh-gitu'},
	  {title: "Gak Lucu", rowId: '.sound gak-lucu'},
	  {title: "Gamau", rowId: '.sound gamau'},
	  {title: "Gay", rowId: '.sound gay'},
	  {title: "Gomenasai", rowId: '.sound gomenasai'},
	  {title: "Hai Bot", rowId: '.sound hai-bot'},
	  {title: "Hayo", rowId: '.sound hayo'},
	  {title: "Hp Iphone", rowId: '.sound hp-iphone'},
	  {title: "Kontol", rowId: '.sound kontol'},
	  {title: "Makasih", rowId: '.sound makasih'},
	  {title: "Nani", rowId: '.sound nani'},
	  {title: "Onichan", rowId: '.sound onichan'},
	  {title: "Ownerku", rowId: '.sound ownerku'},
	  {title: "Owner Sange", rowId: '.sound owner-sange'},
	  {title: "Pantek", rowId: '.sound pantek'},
	  {title: "Pasi Pasi", rowId: '.sound pasi-pasi'},
	  {title: "Punten", rowId: '.sound punten'},
	  {title: "Sayang", rowId: '.sound sayang'},
	  {title: "Siapa Sih", rowId: '.sound siapa-sih'},
	  {title: "Tanya Bapak Lu", rowId: '.sound tanya-bapak-lu'},
	  {title: "Wajib", rowId: '.sound wajib'},
	  {title: "Waku", rowId: '.sound waku'},
	  {title: "woi", rowId: '.sound woi'},
	  {title: "Yamete", rowId: '.sound yamete'},
	  {title: "Yowaimo", rowId: '.sound yowaimo'},
	]
    }, 
    
]
const listMessage = {
  text: info,
  footer: global.wm,
  title: null,
  buttonText: "HERE!",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "ðŸŒŽ Group Official", null,null, [['Owner','.owner']], m)
}

handler.command = /^menuvn$/i
handler.premium = false

export default handler