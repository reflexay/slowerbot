exports.run = (client, message, args) => {

        let reason = args.slice(0).join(' ');
    
        if (message.author.id === "315263840268976128" || message.author.id === "149998623101288448" || message.author.id === '254042074712768512' || message.author.id === "315937295637151746" || message.author.id === "315286101906685953"){
        if (reason.length < 1) return message.reply('**Diga o comando que devo reiniciar!**');
    
        delete require.cache[require.resolve(`./${args[0]}.js`)];
    
        message.channel.sendMessage("**:gear: " + message.author + " Comando " + args[0] + " reiniciado!**");
    
    } else {
        message.reply("**Sem permissão. :confused:**");
    }
    }