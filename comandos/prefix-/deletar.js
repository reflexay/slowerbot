exports.run = (client, message, args) => {   

  if(!message.member.roles.some(r=>["Staff"].includes(r.name)) ) 
  return message.reply("Desculpe, sem permissão");
  let reason = args.slice(0).join(' ');
  if (reason.length < 1) return message.reply('**Diga a quantidade de mensagens que devo apagar!**');
message.channel.bulkDelete(`${args[0]}`)
  setTimeout(function() {
      message.channel.sendMessage(`**:wastebasket: ${args[0]} mensagens forão deletadas pelo ${message.author}**`).then((value) => {
          setTimeout(() => {
              value.delete();
          }, 5000);
      });
  }, 2000)
};
