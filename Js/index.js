  async function serverCount(url){ 
    const response = await fetch(url);  // fetch the url
    var data = await response.json(); // parse the JSON
    var playerCount = data.players.online; // get the online player count
    document.getElementById('serverPlayerCount').innerHTML = playerCount; // display the player count
    }
serverCount('https://api.minetools.eu/ping/164.132.219.131/25599'); // call the function
 
async function discordCount(url){ 
  const response = await fetch(url); // fetch the url
  var data = await response.json(); // parse the JSON
  var userCount = data.presence_count; // get the user count
  document.getElementById('discordUserCount').innerHTML = userCount; // display the user count
  }
discordCount('https://discord.com/api/guilds/938550305770057738/widget.json'); // call the function














console.log('Whoa, you saw the creeper and the discord logo have different colors? Impressive!');