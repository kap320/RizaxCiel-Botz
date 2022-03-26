let path = require('path')
let fs = require('fs')
let moment = require('moment-timezone')
let d = new Date(new Date + 3600000)
let locale = 'id'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})

let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
let tum = fs.readFileSync('./src/logo3.jpg')
let tum2 = fs.readFileSync('./src/logo2.jpg')
let tum3 = fs.readFileSync('./src/nyom.jpg')
const { MessageType} = require("@adiwajshing/baileys")
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
let { performance } = require('perf_hooks')
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `Runtime\n${pad(hours)}H ${pad(minutes)}M ${pad(seconds)}S`
}
					runtime = process.uptime()
					teks = `${kyun(runtime)}`
global.owner = ['6281391883354', '0' , '6281391883354'] // Put your number here
global.fake = ['62895360689268', '0', '0', '0']
global.fakeNum = ['62895360689268','0' ]
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  lol: 'https://api.lolhuman.xyz',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com', 
  Dehan: 'https://dhnjing.xyz',
  Velgrynd: 'https://api.ichikaa.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.lolhuman.xyz': 'Deffbotz',
  'https://api.xteam.xyz': 'd37372311698ed1d',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'Nyarlathotep',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://dhnjing.xyz': 'e2645065aaced89861b4'
}

// Sticker WM
global.botwm = '©Riza「XYZ」'//UBAH JADI NAMAMU
//sosmed owner
global.yt = 'https://youtube.com/channel/UCeCyBQogA_cJT9JMNLAJM8A' //UBAH JADI LINK YT LU
global.ig = `https://instagram.com/anime.purwokerto` //UBAH JADI LINK IG LU

//donasi
global.donate = `
╭─「  Donasi • Pulsa 」
├❒ TRI [+62895360689268]
╰────

╭─「  Donasi • Non Pulsa 」
├❒ Gope [6289536068926]
╰────

╭─「  Hubungi 」
├❒ Ingin donasi?Chat 〲 Wa.me/6281391883354 <
╰────` //UBAH JADI NOMER MU

global.botdate = `╭──────────═┅═─────────\n│◪ ${time}\n┊◪ ${week} ${date}\n╰──────────═┅═─────────`
global.packname =  'Riza「XYZ」'
global.author = 'Riza「XYZ」'
global.wait = 'Follow Ya\n IG/anime.purwokerto'
global.dga = 'Jika Ingin Membeli Limit\nSilahkan Ketik #buy 1'
global.thumb = tum
global.thumb2 = tum2
global.thumb3 = tum3
global.wm = '©Riza「XYZ」'
global.fla ='https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=warning!&text'
global.fla2 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=inferno-logo&doScale=true&scaleWidth=800&scaleHigh=500&fontname=gemina&text='
global.runtime = teks
global.multiplier = 69 // The higher, The harder levelup
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
