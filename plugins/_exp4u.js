const rewards = {
  exp: 99999,
}
const cooldown = 800000
let handler = async (m,{ conn} ) => {
  let user = global.db.data.users[m.sender]
  if (new Date - user.lastclaim < cooldown) throw `You have already claimed this EXP!, wait for *${((user.lastclaim + cooldown) - new Date()).toTimeString()}*`
  let text = ''
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue
    user[reward] += rewards[reward]
    text += `*+${rewards[reward]}* ${global.rpg.emoticon(reward)}${reward}\n`
  }
  conn.sendButton(m.chat,'*––––––『 CHEAT EXP 』––––––*', text.trim(), null, [['Inventory', '.inv'], ['Again', '.cheatexp']],m)
  user.lastclaim = new Date * 1
}
handler.command = /^(exp4u)$/i

handler.limit = 5
handler.cooldown = cooldown

export default handler