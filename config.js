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
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923070110525,923070110525";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_17_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NixcbiAgICAgICAgODIsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzEsXG4gICAgICAgIDYyLFxuICAgICAgICAzMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODEsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTgzLFxuICAgICAgICA4MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDg5LFxuICAgICAgICA1MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4LFxuICAgICAgICAyMixcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI4LFxuICAgICAgICA2OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTkxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTg2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjA5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTYwLFxuICAgICAgICA1MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDksXG4gICAgICAgIDU3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjksXG4gICAgICAgIDk1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTQsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTEzLFxuICAgICAgICA2NixcbiAgICAgICAgMTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDgyLFxuICAgICAgICA4MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxODEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDksXG4gICAgICAgIDExMixcbiAgICAgICAgNjEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA2NixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1LFxuICAgICAgICAxODksXG4gICAgICAgIDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDUxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDksXG4gICAgICAgIDcxLFxuICAgICAgICAyMTksXG4gICAgICAgIDIwMixcbiAgICAgICAgNTUsXG4gICAgICAgIDkwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTE2LFxuICAgICAgICA4MixcbiAgICAgICAgMjQ4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjksXG4gICAgICAgIDY3LFxuICAgICAgICA1NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJOUzJsRjJJeHRXZ1lZRTdPOUJSYzY4NEpYMkx2TkdiM1MxcWJiaVl1U0dBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTMVI1eXdoOVJoaTQ1RGQ1R01nRTl3XCIsXG4gIFwicGhvbmVJZFwiOiBcImU5OGU5NGIyLTEzYzktNGI4OS1iMDFkLTRiYmZiNTUwNDZjYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDcsXG4gICAgICAyMyxcbiAgICAgIDE0NyxcbiAgICAgIDAsXG4gICAgICA4NCxcbiAgICAgIDE3OSxcbiAgICAgIDEwMSxcbiAgICAgIDI0NixcbiAgICAgIDIwOCxcbiAgICAgIDE3MixcbiAgICAgIDE3OSxcbiAgICAgIDk2LFxuICAgICAgNTMsXG4gICAgICAyMzAsXG4gICAgICA0NSxcbiAgICAgIDIxMCxcbiAgICAgIDEzLFxuICAgICAgMjQwLFxuICAgICAgMTk0LFxuICAgICAgMTg2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwOSxcbiAgICAgIDE4OSxcbiAgICAgIDYwLFxuICAgICAgMTQ1LFxuICAgICAgMjUzLFxuICAgICAgMTQsXG4gICAgICAxNzEsXG4gICAgICA5MCxcbiAgICAgIDI0NixcbiAgICAgIDkzLFxuICAgICAgMjgsXG4gICAgICAxOTksXG4gICAgICA4MSxcbiAgICAgIDE1MCxcbiAgICAgIDE5NSxcbiAgICAgIDI1MyxcbiAgICAgIDE4NCxcbiAgICAgIDEzNCxcbiAgICAgIDQsXG4gICAgICAxMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOFlTTjFIOTFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA3MDExMDUyNToyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTMwNzU2MzIzNzYyNjoyMUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJTaGVlelwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tMeWp1Z0VFSS9qcWJVR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVXJadkhQSDNDSWdzUzB6UEpyL3BycFNJeGFRUGJHMDlxbDl2Tzh6cEUxST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJZT3F1WU9jWHVoS0VXQ1k5RFBrOVN1eFFOMWptNHNNQkhSYU50cERTMjRheHkvcDljWG9SQmo1NVh4cVdYaC9zRDhCNWZ2RFZyY3Ywb2Y0d3FUQ29CZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXMU9ZOFQ0cXVORGJxNVI1cXI1a0pqZS9wVy83YnordDFQcWtwdE9pKzhJY1FEQU1jaElYV2tvcS9hNUhYR2R2M3VKTVZrVUdMdksyVGVTYUc4OUhBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNzAxMTA1MjU6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNDQ2MjI3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFCTUFBQ293XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUJNQUFDb3cuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI2N2p0WS9TVlU4dXJTeHl6bXNaS25IRXNWN2JqZHVyeCtHcHlJRW5ha25vPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyOTIwODk2MzQsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsM119LFwidGltZXN0YW1wXCI6XCIxNzIyMzQ3MTIyNTkzXCJ9Igp9"  // PUT your SESSION_ID 


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
