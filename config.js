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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_32_06_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDg3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTAzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDMxLFxuICAgICAgICAzNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNixcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ5LFxuICAgICAgICA1MyxcbiAgICAgICAgNTksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOCxcbiAgICAgICAgMTcxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQxLFxuICAgICAgICAzNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDYxLFxuICAgICAgICAxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTkxLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjIyLFxuICAgICAgICAyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODcsXG4gICAgICAgIDczLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTU0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOSxcbiAgICAgICAgMjUxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM5LFxuICAgICAgICA3NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDY0LFxuICAgICAgICA4NixcbiAgICAgICAgMzAsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODQsXG4gICAgICAgIDE1MixcbiAgICAgICAgODgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTkyLFxuICAgICAgICA0MixcbiAgICAgICAgMjQsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI2LFxuICAgICAgICAyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjAwLFxuICAgICAgICA2OSxcbiAgICAgICAgNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MixcbiAgICAgICAgNTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzksXG4gICAgICAgIDUwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjEyLFxuICAgICAgICA1MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDMxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxLFxuICAgICAgICA4NixcbiAgICAgICAgMTU0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg2LFxuICAgICAgICA3OCxcbiAgICAgICAgNixcbiAgICAgICAgMjU1LFxuICAgICAgICA3NyxcbiAgICAgICAgOTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgNyxcbiAgICAgICAgMjMzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTY5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUxLFxuICAgICAgICA0NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTEyLFxuICAgICAgICA2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJPNGx3TUlZR3VpNDVvZ0N6RC9HMnBiWEdTQTA1Q1BseER3dm1ucHlSck9zPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA3MDExMDUyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTdFREZEMTM5ODMxN0E0MTUwMzcxNjFFOENFQjFFMjZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5NTQ5MTM3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIktRcHBTaE5TUzB1QmhiRnZ5UGFxb1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTBhNTA2Y2UtYTUxMi00MzIwLThlMTAtZDVlZjQxOGY2M2VkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzOCxcbiAgICAgIDIzLFxuICAgICAgMTUwLFxuICAgICAgMTcxLFxuICAgICAgNDAsXG4gICAgICAzMyxcbiAgICAgIDE3MSxcbiAgICAgIDIwOSxcbiAgICAgIDEzMCxcbiAgICAgIDgzLFxuICAgICAgMTUzLFxuICAgICAgMTIsXG4gICAgICAxODcsXG4gICAgICA5OSxcbiAgICAgIDE5OSxcbiAgICAgIDY4LFxuICAgICAgMTMzLFxuICAgICAgODYsXG4gICAgICAyMDUsXG4gICAgICAxODRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAsXG4gICAgICAxMzcsXG4gICAgICAxNzksXG4gICAgICAyNDgsXG4gICAgICAxNTUsXG4gICAgICAxNTMsXG4gICAgICAxNjIsXG4gICAgICAxNzksXG4gICAgICA5LFxuICAgICAgMTEwLFxuICAgICAgNTMsXG4gICAgICAyLFxuICAgICAgODQsXG4gICAgICAyMTcsXG4gICAgICAxOTEsXG4gICAgICA3MyxcbiAgICAgIDk0LFxuICAgICAgMjI4LFxuICAgICAgMTUyLFxuICAgICAgMjM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlJEODJNSFFCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwNzAxMTA1MjU6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJTaEVlWiBKYU5pXCIsXG4gICAgXCJsaWRcIjogXCI5MzA3NTYzMjM3NjI2OjExQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lqYjRwNEhFTXI1K0xNR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMUFhS2FGTm9Db1ZqcVRRTWZIMFZjSFZIbzFyLzBnS2p5ZTdHYklHMVlSST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJHZ2RQcGpyVVRUQlF5K0VBNmQwTDZzRkVqRCsxVys4dVNVRUpEWDBsSG1TdnFYTHNmcEQ3TXg3bU9UcUNKSDNnY2p6RmdkaTJJM2RTUGxYdWJOWFlBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJMZTlRM2pNZmVyMnlmamxBZndYc0NWbW03azZmVG96UThBemUwSk9zVXpDNEIwV3pZWC9xZ3I5RVAwVmo3WTBmTlBBeEJyOUFHcHlBVFZLTEFEa1JBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNzAxMTA1MjU6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5NTQ5MTMzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS2VVXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLZVUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJjRURmTHhwMm9QTCtDWm1oWUg4ZHZCeVBFcWpDelN1NnRwanlWSmMzOGZzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5NDM1ODAwNDAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTI1MDQ2MDkyNVwifSIKfQ=="  // PUT your SESSION_ID 


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
