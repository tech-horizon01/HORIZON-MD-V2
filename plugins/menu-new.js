const config = require('../config');
const { cmd, commands } = require('../command');
const axios = require('axios');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, clockString, jsonformat } = require("../lib/functions");
const os = require('os');

cmd({
    pattern: "menu",
    desc: "Show interactive menu system",
    category: "menu",
    react: "🧾",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
            const pushname = m.pushName || "User";
            
            let hostname;
    if (os.hostname().length == 12) {
      hostname = "replit";
    } else if (os.hostname().length == 36) {
      hostname = "heroku";
    } else if (os.hostname().length == 8) {
      hostname = "koyeb";
    } else {
      hostname = os.hostname();
    }
        const menuCaption = `❖─👨‍💻 𝙷𝙾𝚁𝙸𝚉𝙾𝙽 - 𝙼𝙳 𝚅𝟸 👨‍💻─❖\n\n╭───═❮ *ᴍᴇɴᴜ ʟɪsᴛ* ❯═───❖\n│*𝗛𝗘𝗬* ${pushname} *👋*\n│ *🚀𝙑𝙀𝙍𝙎𝙄𝙊𝙉:* ${require("../package.json").version}\n│ *⌛𝙈𝙀𝙈𝙊𝙍𝙔:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB\n│ *🕒𝙍𝙐𝙉𝙏𝙄𝙈𝙀:* ${runtime(process.uptime())}\n│ *📍𝙋𝙇𝘼𝙏𝙁𝙊𝙍𝙈:* ${hostname}\n╰━━━━━━━━━━━━━━━┈⊷
        
        
┃ 1  📜 *Main Menu*
┃ 2  👑 *Owner Menu*
┃ 3  📥 *Download Menu*
┃ 4  👥 *Group Menu*
┃ 5  🤣 *Fun Menu*
┃ 6  🤖 *AI Menu*
┃ 7  🎎 *Anime Menu*
┃ 8  ♻️ *Convert Menu*
┃ 9  📌 *Other Menu*
┃ 10 💔 *Reactions Menu*
╰━━━━━━━━━━━━━━━━━━┈⊷


> *© ᴩᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴇᴄʜ-ʜᴏʀɪᴢᴏɴ*`;


await conn.sendMessage(from,{image: { url: config.MENU_IMAGE_URL || 'https://files.catbox.moe/a9uyng.png' },caption: menuCaption},{quoted: mek})



        
        const messageID = sentMsg.key.id;

        // Menu data (complete version)
        const menuData = {
            '3': {
                title: "📥 *Download Menu* 📥",
                content: `╭━━━〔 *Download Menu* 〕━━━┈⊷
┃◈╭──────────────
┃◈├•  🌐 *Social Media*
┃◈├• • facebook [url]
┃◈├• • mediafire [url]
┃◈├•  • tiktok [url]
┃◈├•  • twitter [url]
┃◈├•  • Insta [url]
┃◈├•  • apk [app]
┃◈├•  • img [query]
┃◈├•  • tt2 [url]
┃◈├•  • pins [url]
┃◈├•  • apk2 [app]
┃◈├•  • fb2 [url]
┃◈├•  • pinterest [url]
┃◈╰──────────────
┃◈╭──────────────
┃◈├•  🎵 *Music/Video*
┃◈├•  • spotify [query]
┃◈├•  • play [song]
┃◈├•  • play2-10 [song]
┃◈├•  • audio [url]
┃◈├•  • video [url]
┃◈├•  • video2-10 [url]
┃◈├•  • ytmp3 [url]
┃◈├•  • ytmp4 [url]
┃◈├•  • song [name]
┃◈├•  • darama [name]
┃◈╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
> ${config.DESCRIPTION}`,
                image: true
            },
            '4': {
                title: "👥 *Group Menu* 👥",
                content: `╭━━━〔 *Group Menu* 〕━━━┈⊷
┃◈╭──────────────
┃◈├•  🛠️ *Management*
┃◈├•  • grouplink
┃◈├•  • kickall
┃◈├•  • kickall2
┃◈├•  • kickall3
┃◈├•  • add @user
┃◈├•  • remove @user
┃◈├•  • kick @user
┃◈╰──────────────
┃◈╭──────────────
┃◈├•  ⚡ *Admin Tools*
┃◈├•  • promote @user
┃◈├•  • demote @user
┃◈├•  • dismiss 
┃◈├•  • revoke
┃◈├•  • mute [time]
┃◈├•  • unmute
┃◈├•  • lockgc
┃◈├•  • unlockgc
┃◈╰──────────────
┃◈╭──────────────
┃◈├•  🏷️ *Tagging*
┃◈├•  • tag @user
┃◈├•  • hidetag [msg]
┃◈├•  • tagall
┃◈├•  • tagadmins
┃◈├•  • invite
┃◈╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
> ${config.DESCRIPTION}`,
                image: true
            },
            '5': {
                title: "😄 *Fun Menu* 😄",
                content: `╭━━━〔 *Fun Menu* 〕━━━┈⊷
┃◈╭──────────────
┃◈├•  🎭 *Interactive*
┃◈├•  • shapar
┃◈├•  • rate @user
┃◈├•  • insult @user
┃◈├•  • hack @user
┃◈├•  • ship @user1 @user2
┃◈├•  • character
┃◈├•  • pickup
┃◈├•  • joke
┃◈╰──────────────
┃◈╭──────────────
┃◈├•  😂 *Reactions*
┃◈├•  • hrt
┃◈├•  • hpy
┃◈├•  • syd
┃◈├•  • anger
┃◈├•  • shy
┃◈├•  • kiss
┃◈├•  • mon
┃◈├•  • cunfuzed
┃◈╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
> ${config.DESCRIPTION}`,
                image: true
            },
            '2': {
                title: "👑 *Owner Menu* 👑",
                content: `╭━━━〔 *Owner Menu* 〕━━━┈⊷
┃◈╭──────────────
┃◈├•  ⚠️ *Restricted*
┃◈├•  • block @user
┃◈├•  • unblock @user
┃◈├•  • fullpp [img]
┃◈├•  • setpp [img]
┃◈├•  • restart
┃◈├•  • shutdown
┃◈├•  • updatecmd
┃◈╰───────────���──
┃◈╭──────────────
┃◈├•  ℹ️ *Info Tools*
┃◈├•  • gjid
┃◈├•  • jid @user
┃◈├•  • listcmd
┃◈├•  • allmenu
┃◈╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
> ${config.DESCRIPTION}`,
                image: true
            },
            '6': {
                title: "🤖 *AI Menu* 🤖",
                content: `╭━━━〔 *AI Menu* 〕━━━┈⊷
┃◈╭──────────────
┃◈├•  💬 *Chat AI*
┃◈├•  • ai [query]
┃◈├•  • gpt3 [query]
┃◈├•  • gpt2 [query]
┃◈├•  • gptmini [query]
┃◈├•  • gpt [query]
┃◈├•  • meta [query]
┃◈╰──────────────
┃◈╭──────────────
┃◈├•  🖼️ *Image AI*
┃◈├•  • imagine [text]
┃◈├•  • imagine2 [text]
┃◈╰──────────────
┃◈╭──────────────
┃◈├•  🔍 *Specialized*
┃◈├•  • blackbox [query]
┃◈├•  • luma [query]
┃◈├•  • dj [query]
┃◈├•  • khan [query]
┃◈╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
> ${config.DESCRIPTION}`,
                image: true
            },
            '7': {
                title: "🎎 *Anime Menu* 🎎",
                content: `╭━━━〔 *Anime Menu* 〕━━━┈⊷
┃◈╭──────────────
┃◈├•  🖼️ *Images*
┃◈├•  • fack
┃◈├•  • dog
┃◈├•  • awoo
┃◈├•  • garl
┃◈├•  • waifu
┃◈├•  • neko
┃◈├•  • megnumin
┃◈├•  • maid
┃◈├•  • loli
┃◈╰──────────────
┃◈╭──────────────
┃◈├•  🎭 *Characters*
┃◈├•  • animegirl
┃◈├•  • animegirl1-5
┃◈├•  • anime1-5
┃◈├•  • foxgirl
┃◈├•  • naruto
┃◈╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
> ${config.DESCRIPTION}`,
                image: true
            },
            '8': {
                title: "🔄 *Convert Menu* 🔄",
                content: `╭━━━〔 *Convert Menu* 〕━━━┈⊷
┃◈╭──────────────
┃◈├•  🖼️ *Media*
┃◈├•  • sticker [img]
┃◈├•  • sticker2 [img]
┃◈├•  • emojimix 😎+😂
┃◈├•  • take [name,text]
┃◈├•  • tomp3 [video]
┃◈╰──────────────
┃◈╭──────────────
┃◈├•  📝 *Text*
┃◈├•  • fancy [text]
┃◈├•  • tts [text]
┃◈├•  • trt [text]
┃◈├•  • base64 [text]
┃◈├•  • unbase64 [text]
┃◈╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
> ${config.DESCRIPTION}`,
                image: true
            },
            '9': {
                title: "📌 *Other Menu* 📌",
                content: `╭━━━〔 *Other Menu* 〕━━━┈⊷
┃◈╭──────────────
┃◈├•  🕒 *Utilities*
┃◈├•  • timenow
┃◈├•  • date
┃◈├•  • count [num]
┃◈├•  • calculate [expr]
┃◈├•  • countx
┃◈╰──────────────
┃◈╭──────────────
┃◈├•  🎲 *Random*
┃◈├•  • flip
┃◈├•  • coinflip
┃◈├•  • rcolor
┃◈├•  • roll
┃◈├•  • fact
┃◈╰──────────────
┃◈╭──────────────
┃◈├•  🔍 *Search*
┃◈├•  • define [word]
┃◈├•  • news [query]
┃◈├•  • movie [name]
┃◈├•  • weather [loc]
┃◈╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
> ${config.DESCRIPTION}`,
                image: true
            },
            '10': {
                title: "💞 *Reactions Menu* 💞",
                content: `╭━━━〔 *Reactions Menu* 〕━━━┈⊷
┃◈╭──────────────
┃◈├•  ❤️ *Affection*
┃◈├•  • cuddle @user
┃◈├•  • hug @user
┃◈├•  • kiss @user
┃◈├•  • lick @user
┃◈├•  • pat @user
┃◈╰──────────────
┃◈╭──────────────
┃◈├•  😂 *Funny*
┃◈├•  • bully @user
┃◈├•  • bonk @user
┃◈├•  • yeet @user
┃◈├•  • slap @user
┃◈├•  • kill @user
┃◈╰──────────────
┃◈╭──────────────
┃◈├•  😊 *Expressions*
┃◈├•  • blush @user
┃◈├•  • smile @user
┃◈├•  • happy @user
┃◈├•  • wink @user
┃◈├•  • poke @user
┃◈╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
> ${config.DESCRIPTION}`,
                image: true
            },
            '1': {
                title: "🏠 *Main Menu* 🏠",
                content: `╭━━━〔 *Main Menu* 〕━━━┈⊷
┃◈╭──────────────
┃◈├•  ℹ️ *Bot Info*
┃◈├•  • ping
┃◈├•  • alive
┃◈├•  • alive2
┃◈├•  • time (city name)
┃◈├•  • runtime
┃◈├•  • uptime
┃◈├•  • repo
┃◈├•  • owner
┃◈╰──────────────
┃◈╭──────────────
┃◈├•  🛠️ *Controls*
┃◈├•  • menu
┃◈├•  • menu2
┃◈├•  • restart
┃◈╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
> ${config.DESCRIPTION}`,
                image: true
            }
        };

        // Message handler with improved error handling
        const handler = async (msgData) => {
            try {
                const receivedMsg = msgData.messages[0];
                if (!receivedMsg?.message || !receivedMsg.key?.remoteJid) return;

                const isReplyToMenu = receivedMsg.message.extendedTextMessage?.contextInfo?.stanzaId === messageID;
                
                if (isReplyToMenu) {
                    const receivedText = receivedMsg.message.conversation || 
                                      receivedMsg.message.extendedTextMessage?.text;
                    const senderID = receivedMsg.key.remoteJid;

                    if (menuData[receivedText]) {
                        const selectedMenu = menuData[receivedText];
                        
                        try {
                            if (selectedMenu.image) {
                                await conn.sendMessage(
                                    senderID,
                                    {
                                        image: { url: config.MENU_IMAGE_URL || 'https://files.catbox.moe/a9uyng.png' },
                                        caption: selectedMenu.content,
                                        contextInfo: contextInfo
                                    },
                                    { quoted: receivedMsg }
                                );
                            } else {
                                await conn.sendMessage(
                                    senderID,
                                    { text: selectedMenu.content, contextInfo: contextInfo },
                                    { quoted: receivedMsg }
                                );
                            }

                            await conn.sendMessage(senderID, {
                                react: { text: '✅', key: receivedMsg.key }
                            });

                        } catch (e) {
                            console.log('Menu reply error:', e);
                            await conn.sendMessage(
                                senderID,
                                { text: selectedMenu.content, contextInfo: contextInfo },
                                { quoted: receivedMsg }
                            );
                        }

                    } else {
                        await conn.sendMessage(
                            senderID,
                            {
                                text: `❌ *Invalid Option!* ❌\n\nPlease reply with a number between 1-10 to select a menu.\n\n*Example:* Reply with "1" for Download Menu\n\n> ${config.DESCRIPTION}`,
                                contextInfo: contextInfo
                            },
                            { quoted: receivedMsg }
                        );
                    }
                }
            } catch (e) {
                console.log('Handler error:', e);
            }
        };

        // Add listener
        conn.ev.on("messages.upsert", handler);

        // Remove listener after 5 minutes
        setTimeout(() => {
            conn.ev.off("messages.upsert", handler);
        }, 300000);

    } catch (e) {
        console.error('Menu Error:', e);
        try {
            await conn.sendMessage(
                from,
                { text: `❌ Menu system is currently busy. Please try again later.\n\n> ${config.DESCRIPTION}` },
                { quoted: mek }
            );
        } catch (finalError) {
            console.log('Final error handling failed:', finalError);
        }
    }
});
