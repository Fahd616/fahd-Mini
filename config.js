/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['91xxxxxxxxxxx','917023951514'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot Mini', 'Professor'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VUXZOiOBT9L3nVGvlGrOqqAVQERbERUbbmIUKAKEIMwa8p//sWdvdMP+zO9r6FG+rcc885Nz9BWeEaTdENDH4CQvEZMtQe2Y0gMABGk6aIgi5IIINgAA7mfq+c3X34qhkZFWOLI3qM7plyItzR8M/H7GYLUc/UBfsFPLqANLsCx38A5HE8aQLO6QdcsLyiq2G7Ze7691qD/Kuveo1NZgzn83pUvYBHiwgxxWU2Ijk6IgqLKbp5ENOv0XcXgmuPI/2K013Plx1y9IYLUU7IJuWm/Tgz88Nybp2HESd9jX520oLI0vTtfo2GfGcmmJHXCbKJR217VtgRNVHTGKkqGts3+jXOSpTYCSoZZrcv6y54805OxJxLjnkvTITJ+PU+0byzemCIz63T5iib/lBLFoH7NeJORB2eBgotHRweobJS8ZBTV0dKs/20P7+G84simVgIr9Jn4h79yMrh/+gujDl5lRc7uxx31pPTOFat2h+++nokh1yYruOjzC727DIN6i/SNxckQJt92VF41yWiA8+z/qjy+WsmTGfGcjO+QLPWbGH8SXfIGvonltGZKhtS8rNDbi8TVb9bl7vY42vrvEnNYiTNTrGlrZJRpq+2hVssDlttxfKjNQ467sV2pKRZSGKwZCr2XGJrM38Z9s3Ly3OiA7rZCRjwjy6gKMM1o5DhqnzWxH4XwOTso5gi9pQXjEPI6glD6SVkilt4XJOhy2Wo4sxjRmkUFiWKkecr/xy8gC4gtIpRXaNkgmtW0ZuL6hpmqAaDv350QYmu7M24tp3Id0GKac2CsiFFBZMPVz8uYRxXTcn8Wxmb7QFRMOB+lxFjuMzqVsemhDTO8RmZOWQ1GKSwqNGvCRFFCRgw2qBfW2tWSSv8cCJrhulpoAuOT0Nw0oaEF1ROlmRFEuWB8r3+dmlRISHfSsRAFxTPv3iFk2S+L0gyx6mqMlC+t/XHL34tXIIYxEUNBsB0PKsvjJai4/W55Xar+7o+1fVWs495PoLxJrwXbOC1jDXoSPfNwWASz/HOPA7Lg5bBdV3E/FWKpgTfr4d/Ammj2VnlC9IJG3lvTsacJG6zeKec7mG2Cod2MF0fTIjI/MqW2TLwVYib1/CU10I20kevu6uFMX81Rr1ig4VgYvJOJMaBsXxpuyXojGP0udnOG/EkLcMoIuJleypNzeNvm/XQreZsTk/D1M8zaejJnd24j0pVuq2sfNERKNv21ppkF17vVp7uTn8PT5RU2j2bWh39PbLPlSnenyr8DFPrVPuZYvTc/BK2/v2nc2+823xxj+4niPen5F/W0VjxY6GORC/EyOVlfYfmydxfbcZE9rZWsXM28xhZ/mlb9yPwePzoAlJAllb0CAYAlgmtcAK6gFZNG1i7TKs/NDP1wB4uM7MdvIA1038vwQofUc3gkYABr/YFmVd4TX78DYJxUCc6BwAA',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
