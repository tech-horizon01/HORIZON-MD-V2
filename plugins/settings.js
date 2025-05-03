const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")


cmd({
    pattern: "settings1",
    alias: ["setting"],
    desc: "settings the bot",
    category: "owner",
    react: "⚙",
    filename: __filename


},
async (conn, mek, m, { from, isOwner, quoted, reply }) => {
    if (!isOwner) return reply("❌ You are not the owner!");
    try {
        let desc = `╭━━━〔 *${config.BOT_NAME}* 〕━━━┈⊷
┃◈╭──❍「 *SETTINGS INFO* 」❍
┃◈├• 🔊 Auto Voice : ♻ 𝙾𝙽/𝙾𝙵𝙵
┃◈├• 📝 Auto Status : ♻ 𝙾𝙽/𝙾𝙵𝙵
┃◈├• 📋 Auto sticker : ♻ 𝙾𝙽/𝙾𝙵𝙵
┃◈├• ⌨ Auto reply : ♻ 𝙾𝙽/𝙾𝙵𝙵
┃◈╰─┬─★─☆──♪♪─❍
┃◈╭─┴❍「 *SETTINGS* 」❍
┃◈├•
┃◈├• WORK MODE ⤵
┃◈├•   ┣ 1.1 ᴩᴜʙʟɪᴄ ᴡᴏʀᴋ
┃◈├•   ┣ 1.2 ᴩʀɪᴠᴀᴛᴇ ᴡᴏʀᴋ
┃◈├•   ┣ 1.3 ɢʀᴏᴜᴩ ᴏɴʟʏ
┃◈├•   ┗ 1.4 ɪɴʙᴏx ᴏɴʟʏ
┃◈├•
┃◈├• AUTO STATUS REPLY ⤵
┃◈├•   ┣2.1 ᴀᴜᴛᴏ ꜱᴛᴀᴛᴜꜱ ʀᴇᴩʟʏ ᴏɴ
┃◈├•   ┗2.2 ᴀᴜᴛᴏ ꜱᴛᴀᴛᴜꜱ ʀᴡᴩʟʏ ᴏꜰꜰ
┃◈├•
┃◈├• AUTO_STATUS_REACT
┃◈├•    ┣3.1 ᴀᴜᴛᴏ ꜱᴛᴀᴛᴜꜱ ʀᴇᴀᴄᴛ ᴏɴ
┃◈├•    ┗3.2 ᴀᴜᴛᴏ ꜱᴛᴀᴛᴜꜱ ʀᴇᴀᴄᴛ ᴏꜰꜰ
┃◈├•
┃◈├• WELCOME
┃◈├•   ┣ 4.1 ᴡᴇʟᴄᴏᴍᴇ ᴏɴ
┃◈├•   ┗ 4.2 ᴡᴇʟᴄᴏᴍᴇ ᴏꜰꜰ
┃◈├•
┃◈├• GOODBYE
┃◈├•   ┣ 5.1 ɢᴏᴏᴅʙʏᴇ ᴏɴ
┃◈├•   ┗ 5.2 ɢᴏᴏᴅʙʏᴇ ᴏꜰꜰ
┃◈├•
┃◈├• ADMIN EVENTS
┃◈├•   ┣ 6.1 ᴀᴅᴍɪɴ ᴇᴠᴇɴᴛ ᴏɴ
┃◈├•   ┗ 6.2 ᴀᴅᴍɪɴ ᴇᴠᴇɴᴛ ᴏꜰꜰ
┃◈├•
┃◈├• ANTI LINK
┃◈├•   ┣ 7.1 ᴀɴᴛɪ ʟɪɴᴋ ᴏɴ
┃◈├•   ┗ 7.2 ᴀɴᴛɪ ʟɪɴᴋ ᴏꜰꜰ
┃◈├•
┃◈├• AUTO STATUS SEEN ⤵
┃◈├•   ┣ 8.1 ᴀᴜᴛᴏ ꜱᴛᴀᴛᴜꜱ ꜱᴇᴇɴ ᴏɴ
┃◈├•   ┗ 8.2 ᴀᴜᴛᴏ ꜱᴛᴀᴛᴜꜱ ꜱᴇᴇɴ ᴏꜰꜰ
┃◈├•
┃◈├• MENTION_REPLY
┃◈├•   ┣ 9.1 ᴍᴇɴᴛɪᴏɴ ʀᴇᴩʟʏ ᴏɴ
┃◈├•   ┗ 9.2 ᴍᴇɴᴛɪᴏɴ ʀᴇᴩʟᴀʏ ᴏꜰꜰ
┃◈├•
┃◈├• CUSTOM REACT
┃◈├•   ┣ 10.1 ᴄᴜꜱᴛᴏᴍ ʀᴇᴀᴄᴛ ᴏɴ
┃◈├•   ┗ 10.2 ᴄᴜꜱᴛᴏᴍ ʀᴇᴀᴄᴛ ᴏꜰꜰ
┃◈├•
┃◈├• DELETE LINKS
┃◈├•   ┣ 11.1 ᴅᴇʟᴇᴛᴇ ʟɪɴᴋꜱ ᴏɴ
┃◈├•   ┗ 11.2 ᴅᴇʟᴇᴛᴇ ʟɪɴᴋꜱ ᴏꜰꜰ
┃◈├•
┃◈├• READ MESSAGE
┃◈├•   ┣ 12.1 ʀᴇᴀᴅ ᴍᴇꜱꜱᴀᴇ ᴏɴ
┃◈├•   ┗ 12.2 ʀᴇᴀꜱ ᴍᴇꜱꜱᴀɢᴇ ᴏꜰꜰ
┃◈├•
┃◈├• AUTO REACT
┃◈├•   ┣ 13.1 ᴀᴜᴛᴏ ʀᴇᴀᴄᴛ ᴏɴ
┃◈├•   ┗ 13.2 ᴀᴜᴛᴏ ʀᴇᴀᴄᴛ ᴏꜰꜰ
┃◈├•
┃◈├• ANTI BAD
┃◈├•   ┣ 14.1 ᴀɴᴛɪ ʙᴀᴅ ᴏɴ
┃◈├•   ┗ 14.2 ᴀɴᴛɪ ʙᴀᴅ ᴏꜰꜰ
┃◈├•
┃◈├• ANTI LINK KICK
┃◈├•   ┣ 15.1 ᴀɴᴛɪ ʟɪɴᴋ ᴋɪᴄᴋ ᴏɴ
┃◈├•   ┗ 15.2 ᴀɴᴛɪ ʟɪɴᴋ ᴋɪᴄᴋ ᴏꜰꜰ
┃◈├•
┃◈├• AUTO_VOICE
┃◈├•   ┣ 16.1 ᴀᴜᴛᴏ ᴠᴏɪᴄᴇ ᴏɴ
┃◈├•   ┗ 16.2 ᴀᴜᴛᴏ ᴠᴏɪᴄᴇ ᴏꜰꜰ
┃◈├•
┃◈├• AUTO STICKER ⤵
┃◈├•   ┣ 17.1 ᴀᴜᴛᴏ ꜱᴛɪᴄᴋᴇʀ ᴏɴ
┃◈├•   ┗ 17.2 ᴀᴜᴛᴏ ꜱᴛɪᴄᴋᴇʀ ᴏꜰꜰ
┃◈├•
┃◈├• AUTO REPLY ⤵
┃◈├•   ┣ 18.1 ᴀᴜᴛᴏ ʀᴇᴩʟʏ ᴏɴ
┃◈├•   ┗ 18.2 ᴀᴜᴛᴏ ʀᴇᴩʟʏ ᴏꜰꜰ
┃◈├•
┃◈├• ALWAYS ONLINE
┃◈├•   ┣ 19.1 ᴀʟᴡᴀʏꜱ ᴏɴʟɪɴᴇ ᴏɴ
┃◈├•   ┗ 19.2 ᴀʟᴡᴀʏꜱ ᴏɴʟɪɴᴇ ᴏꜰꜰ
┃◈├•
┃◈├• PUBLIC MODE
┃◈├•   ┣ 20.1 ᴩᴜʙʟɪᴄ ᴍᴏᴅᴇ ᴏɴ
┃◈├•   ┗ 20.2 ᴩᴜʙʟɪᴄ ᴍᴏᴅᴇ ᴏꜰꜰ
┃◈├•
┃◈├• AUTO TYPING
┃◈├•   ┣ 21.1 ᴀᴜᴛᴏ ᴛʏᴩɪɴɢ ᴏɴ
┃◈├•   ┗ 21.2 ᴀᴜᴛᴏ ᴛʏᴩɪɴɢ ᴏꜰꜰ
┃◈├•
┃◈├• READ CMD
┃◈├•   ┣ 22.1 ᴀᴜᴛᴏ ʀᴇᴀᴅ ᴄᴍᴅ ᴏɴ
┃◈├•   ┗ 22.2 ᴀᴜᴛᴏ ʀᴇᴀᴅ ᴄᴍᴅ ᴏꜰꜰ
┃◈├•
┃◈├• ANTI VV
┃◈├•   ┣ 23.1 ᴀɴᴛɪ ᴠɪᴇᴡ ᴏɴᴄᴇ ᴏɴ
┃◈├•   ┗ 23.2 ᴀɴᴛɪ ᴠɪᴇᴡ ᴏɴᴄᴇ ᴏꜰꜰ
┃◈├•
┃◈├• ANTI DEL PATH
┃◈├•   ┣ 24.1 ᴀɴᴛɪ ᴅᴇʟ ᴩᴀᴛʜ "ʟᴏɢ"
┃◈├•   ┗ 24.2 ᴀɴᴛɪ ᴅᴇʟ ᴩᴀᴛʜ "ꜱᴀᴍᴇ"
┃◈├•
┃◈├• AUTO RECORDING
┃◈├•   ┣ 25.1 ᴀᴜᴛᴏ ʀᴇᴄᴏʀᴅɪɴɢ ᴏɴ
┃◈├•   ┗ 25.2 ᴀᴜᴛᴏ ʀᴇᴄᴏʀᴅɪɴɢ ᴏꜰꜰ
┃◈├•
┃◈╰─┬─★─☆──♪♪─❍
┃◈╰─┬────────────●●►
┃◈╭─┴────────────●●►
┃◈├•ʀᴇᴘʟʏ ᴛʜᴇ ɴᴜᴍʙᴇʀ sᴇʟᴇᴄᴛ
┃◈╰──────────────●●►
╰━━━━━━━━━━━━━━━━━━┈⊷

> ${config.DESCRIPTION}`;

        const vv = await conn.sendMessage(from, { image: { url: "https://i.ibb.co/V2pdBTJ/20241111-195632.jpg"}, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1.1':
                        reply(".update MODE:public" );
                        reply(".restart");
                        break;
                    case '1.2':               
                        reply(".update MODE:private");
                        reply(".restart");
                        break;
                    case '1.3':               
                          reply(".update MODE:group");
                        reply(".restart");
                      break;
                    case '1.4':     
                        reply(".update MODE:inbox");
                        reply(".restart");
                      break;
                    case '2.1':     
                        reply(".update AUTO_STATUS_REPLY:true");
                        reply(".restart");
                        break;
                    case '2.2':     
                        reply(".update AUTO_STATUS_REPLY:false");
                        reply(".restart");
                    break;
                    case '3.1':    
                        reply(".update AUTO_STATUS_REACT:true");
                        reply(".restart");
                    break;
                    case '3.2':    
                        reply(".update AUTO_STATUS_REACT:false");
                        reply(".restart");
                    break;                    
                    case '4.1':    
                        reply(".update WELCOME:true");
                        reply(".restart");
                    break;
                    case '4.2':    
                        reply(".update WELCOME:false");
                        reply(".restart");
                    break;                                        
                    case '5.1':    
                        reply(".update GOODBYE:true");
                        reply(".restart");
                    break;
                    case '5.2':    
                        reply(".update GOODBYE:false");
                        reply(".restart");
                    break;
                    case '6.1':    
                        reply(".update ADMIN_EVENTS:true");
                        reply(".restart");
                    break;
                    case '6.2':    
                        reply(".update ADMIN_EVENTS:false");
                        reply(".restart");
                    break;
                    case '7.1':    
                        reply(".update ANTI_LINK:true");
                        reply(".restart");
                    break;
                    case '7.2':    
                        reply(".update ANTI_LINK:false");
                        reply(".restart");
                    break;  
                    case '8.1':    
                        reply(".update AUTO_STATUS_SEEN:true");
                        reply(".restart");
                    break;
                    case '8.2':    
                        reply(".update AUTO_STATUS_SEEN:false");
                        reply(".restart");
                    break;  
                    case '9.1':    
                        reply(".update MENTION_REPLY:true");
                        reply(".restart");
                    break;
                    case '9.2':    
                        reply(".update MENTION_REPLY:false");
                        reply(".restart");
                    break;  
                    case '10.1':    
                        reply(".update CUSTOM_REACT:true");
                        reply(".restart");
                    break;
                    case '10.2':    
                        reply(".update CUSTOM_REACT:false");
                        reply(".restart");
                    break; 
                    case '11.1':    
                        reply(".update DELETE_LINKS:true");
                        reply(".restart");
                    break;
                    case '11.2':    
                        reply(".update DELETE_LINKS:false");
                        reply(".restart");
                    break;
                    case '12.1':    
                        reply(".update READ_MESSAGE:true");
                        reply(".restart");
                    break;
                    case '12.2':    
                        reply(".update READ_MESSAGE:false");
                        reply(".restart");
                    break; 
                    case '13.1':    
                        reply(".update AUTO_REACT:true");
                        reply(".restart");
                    break;
                    case '13.2':    
                        reply(".update AUTO_REACT:false");
                        reply(".restart");
                    break; 
                    case '14.1':    
                        reply(".update ANTI_BAD:true");
                        reply(".restart");
                    break;
                    case '14.2':    
                        reply(".update ANTI_BAD:false");
                        reply(".restart");
                    break;  
                    case '15.1':    
                        reply(".update ANTI_LINK_KICK:true");
                        reply(".restart");
                    break;
                    case '15.2':    
                        reply(".update ANTI_LINK_KICK:false");
                        reply(".restart");
                    break;  
                    case '16.1':    
                        reply(".update AUTO_VOICE:true");
                        reply(".restart");
                    break;
                    case '16.2':    
                        reply(".update AUTO_VOICE:false");
                        reply(".restart");
                    break; 
                    case '17.1':    
                        reply(".update AUTO_STICKER:true");
                        reply(".restart");
                    break;
                    case '17.2':    
                        reply(".update AUTO_STICKER:false");
                        reply(".restart");
                    break; 
                    case '18.1':    
                        reply(".update AUTO_REPLY:true");
                        reply(".restart");
                    break;
                    case '18.2':    
                        reply(".update AUTO_REPLY:false");
                        reply(".restart");
                    break; 
                    case '19.1':    
                        reply(".update ALWAYS_ONLINE:true");
                        reply(".restart");
                    break;
                    case '19.2':    
                        reply(".update ALWAYS_ONLINE:false");
                        reply(".restart");
                    break;
                    case '20.1':    
                        reply(".update PUBLIC_MODE:true");
                        reply(".restart");
                    break;
                    case '20.2':    
                        reply(".update PUBLIC_MODE:false");
                        reply(".restart");
                    break;
                    case '21.1':    
                        reply(".update AUTO_TYPING:true");
                        reply(".restart");
                    break;
                    case '21.2':    
                        reply(".update AUTO_TYPING:false");
                        reply(".restart");
                    break;
                    case '22.1':    
                        reply(".update READ_CMD:true");
                        reply(".restart");
                    break;
                    case '22.2':    
                        reply(".update READ_CMD:false");
                        reply(".restart");
                    break;
                    case '23.1':    
                        reply(".update ANTI_VV:true");
                        reply(".restart");
                    break;
                    case '23.2':    
                        reply(".update ANTI_VV:false");
                        reply(".restart");
                    break;
                    case '24.1':    
                        reply(".update ANTI_DEL_PATH:log");
                        reply(".restart");
                    break;
                    case '24.2':    
                        reply(".update ANTI_DEL_PATH:same");
                        reply(".restart");
                    break;
                    case '25.1':    
                        reply(".update AUTO_RECORDING:true");
                        reply(".restart");
                    break;
                    case '25.2':    
                        reply(".update AUTO_RECORDING:false");
                        reply(".restart");
                    break;      
            
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
