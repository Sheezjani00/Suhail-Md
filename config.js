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
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923070110525";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_29_06_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjA2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMyxcbiAgICAgICAgNCxcbiAgICAgICAgMjIyLFxuICAgICAgICA0MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTM0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTk3LFxuICAgICAgICA0NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDM4LFxuICAgICAgICA2NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNyxcbiAgICAgICAgMTExLFxuICAgICAgICA4NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMCxcbiAgICAgICAgMjIwLFxuICAgICAgICA0NyxcbiAgICAgICAgNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE5LFxuICAgICAgICA1NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDQ1LFxuICAgICAgICA5NyxcbiAgICAgICAgODcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDUzLFxuICAgICAgICA3NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjU1LFxuICAgICAgICA5OCxcbiAgICAgICAgNzksXG4gICAgICAgIDgxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDMsXG4gICAgICAgIDgxLFxuICAgICAgICAyNCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDkxLFxuICAgICAgICA3MSxcbiAgICAgICAgOSxcbiAgICAgICAgMjA2LFxuICAgICAgICA3NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE2MixcbiAgICAgICAgNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTksXG4gICAgICAgIDExMixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjksXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1LFxuICAgICAgICAxODAsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI5LFxuICAgICAgICA2NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDY1LFxuICAgICAgICAyMixcbiAgICAgICAgMjM2LFxuICAgICAgICA4NixcbiAgICAgICAgOTksXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDAsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDI4LFxuICAgICAgICAxMCxcbiAgICAgICAgOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDc3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTYwLFxuICAgICAgICA3MixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA0OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDU0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTk5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQxLFxuICAgICAgICA2OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA1LFxuICAgICAgICA3NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaUdidGd3cytvMUpEYXVxOGNoL0YrK2xqVzloNTNWemZ6Rjc1NjBoOUJ6OD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwNzAxMTA1MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjdBOERBMDJCQjRCMzkzQUNFNEIyODE4NUNFQkZERTU0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTA4MDk4MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA3MDExMDUyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTczNUZDODMzQzg2QjkwRjk2RDkxNzNCQzBDNTQxRDZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5MDgwOTgyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImxaZnhJTnlXUWNXQmN5d0g0V1RNbXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWRkMWVmM2ItNDljMy00NTA0LWE5MDAtNmZmNjRmMDU2OThjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY2LFxuICAgICAgMTE4LFxuICAgICAgMTI0LFxuICAgICAgNzksXG4gICAgICA1OSxcbiAgICAgIDE1MSxcbiAgICAgIDcwLFxuICAgICAgMTg5LFxuICAgICAgMTQzLFxuICAgICAgMTk4LFxuICAgICAgMTc4LFxuICAgICAgMTQwLFxuICAgICAgNDYsXG4gICAgICAxOTUsXG4gICAgICA1NyxcbiAgICAgIDk1LFxuICAgICAgMjA5LFxuICAgICAgMTgzLFxuICAgICAgMTA5LFxuICAgICAgMjIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MSxcbiAgICAgIDExNyxcbiAgICAgIDExOCxcbiAgICAgIDcsXG4gICAgICAxODgsXG4gICAgICAyOSxcbiAgICAgIDYzLFxuICAgICAgMTA1LFxuICAgICAgMTg5LFxuICAgICAgNDYsXG4gICAgICAxMDAsXG4gICAgICAxMjEsXG4gICAgICAyMTIsXG4gICAgICA0MyxcbiAgICAgIDkzLFxuICAgICAgMjU0LFxuICAgICAgMzIsXG4gICAgICAxOTUsXG4gICAgICAzMixcbiAgICAgIDE3M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJEWkRDRVpSTVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDcwMTEwNTI1OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJTaEVlWiBKYU5pXCIsXG4gICAgXCJsaWRcIjogXCI5MzA3NTYzMjM3NjI2OjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWZiNHA0SEVJNnczTE1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxQWFLYUZOb0NvVmpxVFFNZkgwVmNIVkhvMXIvMGdLanllN0diSUcxWVJJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkRzcXpFMXQzY1NCaEpjU09GeGE4SHlleHRSNDJndmExM09tTzBtY0k4a29CekR6d1BNWmNZMDdHaUMxek5WTWkybWk4c3RSWEYvZDloTjl6UWNrZENnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjQ0a1p4Nkd0WndQMk01aDlJaGJCV1JDMzR3Z0F0VmZNdk1nRFNDd2I3NzdHZlZZY1h4SHNNZUQ2Q2E1UmVURUc0ZktXYlRYV2VRUFZNTGRxSWhZQmlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA3MDExMDUyNTo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTA4MDk3NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxLcFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTEtwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZGpUeUVEZ21RcFpxeCtUNGl4L294eUpNUFh3dTRENExkR1NQMDVzc0J0Zz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTQzNTgwMDM5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkwODA5Nzg4OTlcIn0iCn0="  


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
