const rewards = {
  exp: 19,
  money: 99,
}
const cooldown = 3600000
let handler = async (m,{ conn} ) => {
  let user = global.db.data.users[m.sender]
  if (new Date - user.lastclaim < cooldown) throw `You have already claimed this daily claim!, wait for *${((user.lastclaim + cooldown) - new Date()).toTimeString()}*`
  let text = ''
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue
    user[reward] += rewards[reward]
    text += `*+${rewards[reward]}* ${global.rpg.emoticon(reward)}${reward}\n`
  }
  conn.sendButton(m.chat,'*––––––『 HOUR 』––––––*', text.trim(), null, [['Inventory', '.inv'], ['Weekly', '.weekly']],m)
  user.lastclaim = new Date * 1
}
handler.help = ['hour', 'hourclaim']
handler.tags = ['xp']
handler.command = /^(hourclaim|hour)$/i

handler.cooldown = cooldown

export default handler