let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `

${htki} *TENGKORAK* ${htka}




██▀░░░░░░░░░░░░░▀██
█│░░░░░░░░░░░░░░░│█
▌│░░░░░░░░░░░░░░░│▐
░└┐░░░░░░░░░░░░░┌┘░
░░└┐░░░░░░░░░░░┌┘░░
░░┌┘▄▄▄░░░░░▄▄▄└┐░░
▌░│████▌░░░▐████│░▐
█░│▐██▀░░▄░░▀██▌│░█
█▌┘░░░░░▐█▌░░░░░└▐█
██░░▄▄▓░▀█▀░▓▄▄░░██
██▄─┘█▌░░░░░▐█└─▄██
███░░▐─┬┬┬┬┬─▌░░███
███▌░░┬┼┼┼┼┼┬░░▐███
████▄░└┴┴┴┴┴┘░▄████
█████▄░░░░░░░▄█████
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Website', url: 'https://saipulanuar.github.io/saipulstore/'}},
    {index: 3, urlButton: {displayText: 'Official Group', url: sgc}},
    {index: 4, quickReplyButton: {displayText: 'Mkasih', id: 'Ok'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['text1']
handler.tags = ['maker']
handler.command = /^text1$/i
handler.limit = true
handler.private = true

export default handler
