let handler = function (m) {
	this.sendContact(m.chat, '6281391883354', 'Owner NekoBotz :)', m)
}

handler.customPrefix = ['🍭Owner Kannabot'] 
handler.command = new RegExp

module.exports = handler
