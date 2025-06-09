let handler = async (m, { conn, command, usedPrefix }) => {
let img = './src/catalogo.jpg'
let staff = `ᥫ᭡ *EQUIPO DE AYUDANTES* ❀
✰ *Dueño* ${creador}
✦ *Bot:* ${botname}
⚘ *Versión:* ${vs}
❖ *Libreria:* ${libreria} ${baileys}

❍ *Creador:*

ᰔᩚ 𝙄𝙖𝙢 𝘽𝙖𝙟𝙤 Bots
> 🜸 Rol » *Creador*
> ✧ GitHub » https://github.com/kleiner1-1

❒ *Colaboradores:*

ᰔᩚ 
> 🜸 Rol » *Developer*
> ✧ GitHub » 

ᰔᩚ 
> 🜸 Rol » *Developer*
> ✧ GitHub » 

✧ 
> 🜸 Rol » *Developer*
> ✧ GitHub » 

ᰔᩚ 
> 🜸 Rol » *Developer*
> ✧ GitHub » 

ᰔᩚ 
> 🜸 Rol » *Mini-Dev* 
> ✧ GitHub »
`
await conn.sendFile(m.chat, img, 'yuki.jpg', staff.trim(), fkontak)
}
  
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main']

export default handler
