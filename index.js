var http = require('http');  
http.createServer(function (req, res) {   
  res.write("I'm alive");   
  res.end(); 
}).listen(8080);

bot.on('ready', () => {
  console.log('Your Bot is now Online.')
  let activities = [`gang shit`, `with the gang`, `with the gang`   ],i = 0;
  setInterval(() => bot.user.setActivity(`${activities[i++ %  activities.length]}`,  {type:"STREAMING",url:"https://www.youtube.com/watch?v=DWcJFNfaw9c"  }), 5000)
)}

const express = require('express')
const app = express();
const port = 8080

app.get('/', (req, res) => res.send('Yo boi!!'))

app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
);