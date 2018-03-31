exports.run = (client, message, args) => {   
  if(!message.member.roles.some(r=>["Staff"].includes(r.name)) ) 
  return message.reply("Desculpe, sem permissão");

const saySelf = args.join(" ");
  message.delete().catch(O_o=>{}); 
  let fala = args.slice(0).join(' ');
  if(!fala)
    return message.reply("Por favor, me diga oque colocar na embed.");


  message.channel.send({embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: client.user.username,
      url: "",
      description: "",
      fields: [{
          name: "𛲡",
          value: `${saySelf}`
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "ReflexayDev© • Discord Bot Coder"
      }
    }
  });
}
