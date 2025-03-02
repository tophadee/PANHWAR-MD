const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *ANSAR PANHWAR*

> *PANHWAR MD REPO:*
*|* *https://github.com/ANSAR-PANHWAR/PANHWAR-MD*

> *SUPPORT CHANNEL:*
*|* *https://whatsapp.com/channel/0029Vb5q797K0IBn4SW2hO2R*
*╰──────────────●●►*

> *PANHWAR-MD*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363380724912615@newsletter',
      newsletterName: "⏤͟͟͞͞★͙≛͙⃝͙𝐏𝐀𝐍𝐇𝐖𝐀𝐑-𝐌𝐃♥᭄ ࿐",
      serverMessageId: 144
    },
externalAdReply: { 
title: 'PANHWAR MD',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/ANSAR-PANHWAR/PANHWAR-MD" ,
thumbnailUrl: "https://i.imghippo.com/files/Heb9902bbM.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
