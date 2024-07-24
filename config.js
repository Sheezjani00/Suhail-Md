const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "sheezjani" 


global.devs = "923070110525" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923070110525";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923070110525,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_38_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExNixcbiAgICAgICAgOSxcbiAgICAgICAgODUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDksXG4gICAgICAgIDU5LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDM0LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjksXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA4LFxuICAgICAgICA3LFxuICAgICAgICAxLFxuICAgICAgICA5NixcbiAgICAgICAgMzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjU0LFxuICAgICAgICA5NCxcbiAgICAgICAgOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxLFxuICAgICAgICAzMyxcbiAgICAgICAgMzksXG4gICAgICAgIDg4LFxuICAgICAgICAxODAsXG4gICAgICAgIDM5LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyMixcbiAgICAgICAgODksXG4gICAgICAgIDU4LFxuICAgICAgICA0MixcbiAgICAgICAgMjI3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDY0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDUxLFxuICAgICAgICA3NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDksXG4gICAgICAgIDgwLFxuICAgICAgICA3NixcbiAgICAgICAgNDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTk1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAzNSxcbiAgICAgICAgNzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTczLFxuICAgICAgICA4MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODMsXG4gICAgICAgIDgwLFxuICAgICAgICA2NixcbiAgICAgICAgNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjE4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM4LFxuICAgICAgICA0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAzNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwLFxuICAgICAgICAxODMsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMxLFxuICAgICAgICA0NixcbiAgICAgICAgNzAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMCxcbiAgICAgICAgODEsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjQwLFxuICAgICAgICA2MixcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDI2LFxuICAgICAgICA3NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjAxLFxuICAgICAgICA2OSxcbiAgICAgICAgMjQxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM4LFxuICAgICAgICA2NixcbiAgICAgICAgMTMyLFxuICAgICAgICA0MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJuWnBxMk4wSG5jZm15eTlkVyt3c1BRbmIzVVlCV3hwdmZPczJnWDgyeHdzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA3MDExMDUyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTM4QTkzRDg1QjE5M0UwRThCMkM0OEU5MTlGMzdBRkZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxODQyNzAzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDcwMTEwNTI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEN0VDRDhFNUNCQ0NFNkQ5MjY1MzIzNjFBQjY4MkVEQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE4NDI3MDVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYkp5ZllQRHVSOHFzUmprd2NnWnFFQVwiLFxuICBcInBob25lSWRcIjogXCJhMWRhMzRhMy0yZDkxLTRjZmMtYmVjNC0wZjc0YjM4YmM1YTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU4LFxuICAgICAgOCxcbiAgICAgIDI0NSxcbiAgICAgIDEwOCxcbiAgICAgIDEwNyxcbiAgICAgIDE3NSxcbiAgICAgIDIxOCxcbiAgICAgIDIxMCxcbiAgICAgIDgzLFxuICAgICAgMjQsXG4gICAgICA3OCxcbiAgICAgIDQ3LFxuICAgICAgMjQ3LFxuICAgICAgMjM1LFxuICAgICAgMTgwLFxuICAgICAgOTMsXG4gICAgICAzNSxcbiAgICAgIDIyMyxcbiAgICAgIDE2MCxcbiAgICAgIDc4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1NCxcbiAgICAgIDIxOSxcbiAgICAgIDEyMixcbiAgICAgIDYyLFxuICAgICAgMTYxLFxuICAgICAgMjIxLFxuICAgICAgMTU1LFxuICAgICAgMTMyLFxuICAgICAgNDMsXG4gICAgICA5NyxcbiAgICAgIDE5MixcbiAgICAgIDEzNSxcbiAgICAgIDM2LFxuICAgICAgMTI0LFxuICAgICAgMjQyLFxuICAgICAgNjIsXG4gICAgICAyMjIsXG4gICAgICAyMzAsXG4gICAgICA4MCxcbiAgICAgIDE4OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5SkZTWkExRVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDcwMTEwNTI1OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI5MzA3NTYzMjM3NjI2OjE1QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlNoZWV6XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS0h5anVnRUVJbjRoTFVHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJVclp2SFBIM0NJZ3NTMHpQSnIvcHJwU0l4YVFQYkcwOXFsOXZPOHpwRTFJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIks1OUVvZGthemNkS2ZBOHlpSGswcEhFdTBUYjlZU1NFbFoxRTRjSGpMVERvSThPcXdqSVdLaFkyQ3lWOTJ1VXBWV1I0aGxKblI4dlZPcmV4WWJib0FnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkhsTWJUbm9BcitzS0YyTEtxNzNHRTI4VnNiK0hsazloRjlOK3hKeW5WZElaQXJlNXRuY1M0aVFPK0ZQYXNEbG5MVWtwYVpxSktnNStqWkRFb3dnaERnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA3MDExMDUyNToxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE4NDI2OTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFWVFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVZUS5qc29uIjogIntcImtleURhdGFcIjpcIkdVb2VzSCtxS3Bic2lrOHoyb1dXc0g5enkvdy94YTdmT3ZucU5hZ29zZjQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI5MjA4OTYzMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE5NzYzNDg2ODgyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 sheezjani 』```", //*『sheezcreatiom• sheezi』*\n tiktok.com/@sheezjani6"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sheezcreation",
  ownername:process.env.OWNER_NAME|| "Sheezjani",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "Sheez creation"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
