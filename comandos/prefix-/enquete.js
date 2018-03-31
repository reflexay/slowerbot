exports.run = (client, message, args) => {   

  if(!message.member.roles.some(r=>["Staff"].includes(r.name)) ) 
  return message.reply("Desculpe, sem permissão");

  let votação = args.slice(0).join(' ');
  if(!votação)
    return message.reply("diga qual enquete devo abrir.");

const saySelf = args.join(" ");
  message.delete().catch(O_o=>{}); 
  message.channel.send("@everyone",{embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "SlowerBOT » Enquete",
      url: "",
      description: "",
      fields: [{
          name: "𛲡",
          value: `${saySelf} \n𛲡`
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "ReflexayDev© • BetaBOT"
      }
    }
  }).then(function (message) {
    setTimeout(function() {
      message.react("✅")
        }, 500)
    setTimeout(function() {
      message.react("❎")
        }, 1000)
  }).catch(function() {
  })
}
