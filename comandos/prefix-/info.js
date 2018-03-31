exports.run = (client, message, args) => {   

message.channel.send({"embed": {
        "description": `Twitter: [Clique aqui](https://twitter.com/ISlower_)\nUsuarios no discord: ${client.users.size -1}\nDiscord coder: Reflexay`,
        "url": "",
        "color": 4437732,
        "timestamp": new Date(),
        "footer": {
          "icon_url": client.user.avatarURL,
          "text": "ReflexayDev© • Discord Bot Coder"
        },
        "thumbnail": {
          "url": ""
        },
        "image": {
          "url": ""
        },
        "author": {
          "name": client.user.username,
          "url": "",
          "icon_url": client.user.avatarURL
        }
      }
      });
      
        }
      
      