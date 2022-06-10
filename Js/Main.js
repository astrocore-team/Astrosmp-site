  async function serverCount(url){
    const response = await fetch(url);
    var data = await response.json();
    var playerCount = data.players.online;
    document.getElementById('serverPlayerCount').innerHTML = playerCount;
    }
serverCount('https://api.minetools.eu/ping/164.132.219.131/25599');

async function discordCount(url){
  const response = await fetch(url);
  var data = await response.json();
  var userCount = data.presence_count;
  document.getElementById('discordUserCount').innerHTML = userCount;  
  }
discordCount('https://discord.com/api/guilds/938550305770057738/widget.json');
