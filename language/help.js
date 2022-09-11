/*
› Create By @RIY
› Base Ori @DikaArdnt
› Kalau mau ubah/edit owner di settings.js
› Kalau mau tambahin fitur di index.js
*/

//—————「 Menu 」—————//
exports.menu = (botname, pushname, salam) => {
	return`Selamat ${salam} kak ${pushname}

Saya ${botname}, Bot Ini Adalah Beta Multi-Device WhatsApp.
Jika Kamu Menemukan Semacam Bug Atau Kesalahan Mohon Dimaklumi Dulu Ya, Lapor Owner Agar Segera Di Perbaiki🙏`
}

//—————「 List 」—————//
exports.list = (pushname) => {
	return`Halo kak ${pushname}, silahkan dipilih list menu dibawah ini`
}

//—————「 All Menu 」—————//
exports.allmenu = (prefix, pushname, botname, time, salam) => {
return`  _Selamat ${salam} kak ${pushname}_

  *⏰ Time Server : ${time}*
  *📚 List Menu : ${botname}*

  *GROUP MENU*
  *≻* ${prefix}linkgroup
  *≻* ${prefix}ephemeral [option]
  *≻* ${prefix}setppgc
  *≻* ${prefix}setname 
  *≻* ${prefix}setdesc 
  *≻* ${prefix}group [option]
  *≻* ${prefix}editinfo [option]
  *≻* ${prefix}add @user
  *≻* ${prefix}kick @user
  *≻* ${prefix}hidetag 
  *≻* ${prefix}tagall 
  *≻* ${prefix}antilink [on/off]
  *≻* ${prefix}mute [on/off]
  *≻* ${prefix}promote @user
  *≻* ${prefix}demote @user
  *≻* ${prefix}vote 
  *≻* ${prefix}devote
  *≻* ${prefix}upvote
  *≻* ${prefix}cekvote
  *≻* ${prefix}hapusvote
  
  *DOWNLOADER MENU*
  *≻* ${prefix}tiktoknowm 
  *≻* ${prefix}tiktokwm 
  *≻* ${prefix}tiktokmp3 
  *≻* ${prefix}instagram 
  *≻* ${prefix}twitter 
  *≻* ${prefix}twittermp3 
  *≻* ${prefix}facebook 
  *≻* ${prefix}pinterestdl 
  *≻* ${prefix}ytmp3 
  *≻* ${prefix}ytmp4 
  *≻* ${prefix}getmusic 
  *≻* ${prefix}getvideo 
  *≻* ${prefix}umma 
  *≻* ${prefix}joox 
  *≻* ${prefix}soundcloud 
  
  *SEARCH MENU*
  *≻* ${prefix}play 
  *≻* ${prefix}yts 
  *≻* ${prefix}google 
  *≻* ${prefix}gimage 
  *≻* ${prefix}pinterest 
  *≻* ${prefix}wikimedia 
  *≻* ${prefix}ytsearch 
  *≻* ${prefix}ringtone 
  *≻* ${prefix}stalk [option] 
  *≻* ${prefix}webtoons 
  *≻* ${prefix}drakor 
  *≻* ${prefix}animesearch 
  *≻* ${prefix}character 
  *≻* ${prefix}manga 
  *≻* ${prefix}playstore 
  *≻* ${prefix}gsmarena 
  *≻* ${prefix}jadwalbioskop 
  *≻* ${prefix}nowplayingbioskop 
  *≻* ${prefix}aminio 
  *≻* ${prefix}wattpad 
  *≻* ${prefix}webtoons 
  *≻* ${prefix}drakor 
  
  *TELE STICK MENU*
  *≻* ${prefix}gurastick
  *≻* ${prefix}dogestick
  *≻* ${prefix}bucinstick
  *≻* ${prefix}patrick
  
  *CONVERT MENU*
  *≻* ${prefix}toimage
  *≻* ${prefix}removebg
  *≻* ${prefix}sticker
  *≻* ${prefix}emojimix
  *≻* ${prefix}tovideo
  *≻* ${prefix}togif
  *≻* ${prefix}tourl
  *≻* ${prefix}tovn
  *≻* ${prefix}tomp3
  *≻* ${prefix}toaudio
  *≻* ${prefix}ebinary
  *≻* ${prefix}dbinary
  *≻* ${prefix}styletext
  *≻* ${prefix}smeme

  *MAIN MENU*
  *≻* ${prefix}script
  *≻* ${prefix}ping
  *≻* ${prefix}runtime
  *≻* ${prefix}speed
  *≻* ${prefix}owner
  *≻* ${prefix}menu
  *≻* ${prefix}delete
  *≻* ${prefix}infochat
  *≻* ${prefix}quoted
  *≻* ${prefix}listpc
  *≻* ${prefix}listgc
  *≻* ${prefix}listonline
  
  *DATABASE MENU*
  *≻* ${prefix}setcmd
  *≻* ${prefix}listcmd
  *≻* ${prefix}delcmd
  *≻* ${prefix}lockcmd
  *≻* ${prefix}addmsg
  *≻* ${prefix}listmsg
  *≻* ${prefix}getmsg
  *≻* ${prefix}delmsg
  
  *ANONYMOUS MENU*
  *≻* ${prefix}anonymous
  *≻* ${prefix}start
  *≻* ${prefix}next
  *≻* ${prefix}keluar
  *≻* ${prefix}sendkontak
  
  *OWNER MENU*
  *≻* ${prefix}react [emoji]
  *≻* ${prefix}chat [option]
  *≻* ${prefix}join [link]
  *≻* ${prefix}leave
  *≻* ${prefix}block @user
  *≻* ${prefix}unblock @user
  *≻* ${prefix}bcgroup 
  *≻* ${prefix}bcall 
  *≻* ${prefix}setppbot  
  *≻* ${prefix}setexif
  *≻* ${prefix}setmenu
  *≻* ${prefix}setallmenu
  
  `
}

//—————「 Welcome 」—————//
exports.welcome = () => {
	return`Welcome
`
}

//—————「 Leave 」—————//
exports.leave = () => {
	return`Byeee
`
}

//—————「 Donasi 」—————//
exports.donasi  = (ownernomer) => {
	return`
—————「 *DONATE* 」—————

Hai kak ☺️ 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi
Berapapun donasi kalian akan sangat berarti 👍

Thanks!

—————「 *SEWA | RUN BOT* 」—————

  *_SEWA BOT_* 
  *≻* Sewa Bot 15k (1 minggu)
  *≻* Sewa Bot 20k (1 bulan)
  *≻* Sewa Bot 25k (Permanen)

  *JADI BOT* 
  *≻* Jadi Bot 15k Tidak Owner (1 minggu)
  *≻* Jadi Bot + Owner 20k (1 bulan)
  *≻* Jadi Bot + Owner 25k (Permanen)

  *JASA RUN BOT*
  *≻* Run Bot 15k (1 minggu)
  *≻* Run Bot 20k (1 bulan)
  *≻* Run Bot 25k (Permanen)

  *Minat? Langsung chat aja ya cuy 🐦*

  *Contact person Owner* :
  wa.me/${ownernomer}
`
}

//—————「 Simple Menu 」—————//
exports.groupmenu = (prefix) => {
	return`
  *GROUP MENU*
  *≻* ${prefix}linkgroup
  *≻* ${prefix}ephemeral [option]
  *≻* ${prefix}setppgc  
  *≻* ${prefix}setname 
  *≻* ${prefix}setdesc 
  *≻* ${prefix}group [option]
  *≻* ${prefix}editinfo [option]
  *≻* ${prefix}add @user
  *≻* ${prefix}kick @user
  *≻* ${prefix}hidetag 
  *≻* ${prefix}tagall 
  *≻* ${prefix}antilink [on/off]
  *≻* ${prefix}mute [on/off]
  *≻* ${prefix}promote @user
  *≻* ${prefix}demote @user
  *≻* ${prefix}vote 
  *≻* ${prefix}devote
  *≻* ${prefix}upvote
  *≻* ${prefix}cekvote
  *≻* ${prefix}hapusvote
  `
}

exports.downloadermenu = (prefix) => {
	return`
  *DOWNLOADER MENU*
  *≻* ${prefix}tiktoknowm 
  *≻* ${prefix}tiktokwm 
  *≻* ${prefix}tiktokmp3 
  *≻* ${prefix}instagram 
  *≻* ${prefix}twitter 
  *≻* ${prefix}twittermp3 
  *≻* ${prefix}facebook 
  *≻* ${prefix}pinterestdl 
  *≻* ${prefix}ytmp3 
  *≻* ${prefix}ytmp4 
  *≻* ${prefix}getmusic 
  *≻* ${prefix}getvideo 
  *≻* ${prefix}umma 
  *≻* ${prefix}joox 
  *≻* ${prefix}soundcloud 
  `
}

exports.searchmenu = (prefix) => {
	return`
  *SEARCH MENU*
  *≻* ${prefix}play 
  *≻* ${prefix}yts 
  *≻* ${prefix}google 
  *≻* ${prefix}gimage 
  *≻* ${prefix}pinterest 
  *≻* ${prefix}wikimedia 
  *≻* ${prefix}ytsearch 
  *≻* ${prefix}ringtone 
  *≻* ${prefix}stalk [option] 
  *≻* ${prefix}webtoons 
  *≻* ${prefix}drakor 
  *≻* ${prefix}animesearch 
  *≻* ${prefix}character 
  *≻* ${prefix}manga 
  *≻* ${prefix}playstore 
  *≻* ${prefix}gsmarena 
  *≻* ${prefix}jadwalbioskop 
  *≻* ${prefix}nowplayingbioskop 
  *≻* ${prefix}aminio 
  *≻* ${prefix}wattpad 
  *≻* ${prefix}webtoons 
  *≻* ${prefix}drakor 
  `
}

exports.convertmenu = (prefix) => {
	return`
  *CONVERT MENU*
  *≻* ${prefix}toimage
  *≻* ${prefix}removebg
  *≻* ${prefix}sticker
  *≻* ${prefix}emojimix
  *≻* ${prefix}tovideo
  *≻* ${prefix}togif
  *≻* ${prefix}tourl
  *≻* ${prefix}tovn
  *≻* ${prefix}tomp3
  *≻* ${prefix}toaudio
  *≻* ${prefix}ebinary
  *≻* ${prefix}dbinary
  *≻* ${prefix}styletext
  `
}

exports.mainmenu = (prefix) => {
	return`
  *MAIN MENU*
  *≻* ${prefix}script
  *≻* ${prefix}ping
  *≻* ${prefix}runtime
  *≻* ${prefix}speed
  *≻* ${prefix}owner
  *≻* ${prefix}menu
  *≻* ${prefix}delete
  *≻* ${prefix}infochat
  *≻* ${prefix}quoted
  *≻* ${prefix}listpc
  *≻* ${prefix}listgc
  *≻* ${prefix}listonline
  `
}

exports.databasemenu = (prefix) => {
	return`
  *DATABASE MENU*
  *≻* ${prefix}setcmd
  *≻* ${prefix}listcmd
  *≻* ${prefix}delcmd
  *≻* ${prefix}lockcmd
  *≻* ${prefix}addmsg
  *≻* ${prefix}listmsg
  *≻* ${prefix}getmsg
  *≻* ${prefix}delmsg
`
}

exports.anonymousmenu = (prefix) => {
	return`
  *ANONYMOUS CHAT*
  *≻* ${prefix}anonymous
  *≻* ${prefix}start
  *≻* ${prefix}next
  *≻* ${prefix}keluar
  *≻* ${prefix}sendkontak
  `
}

exports.ownermenu = (prefix) => {
	return`
  *OWNER MENU*
  *≻* ${prefix}react
  *≻* ${prefix}chat
  *≻* ${prefix}join
  *≻* ${prefix}leave
  *≻* ${prefix}block @user
  *≻* ${prefix}unblock @user
  *≻* ${prefix}bcgroup 
  *≻* ${prefix}bcall 
  *≻* ${prefix}setppbot
  *≻* ${prefix}setexif
  *≻* ${prefix}setmenu 
  *≻* ${prefix}setallmenu 
  `
}
