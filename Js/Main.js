function changeCss () {

    this.scrollY > 5 ? document.getElementById("header").style.opacity = ".85" : document.getElementById("header").style.opacity = "0";
    this.scrollY > 5 ? temp = true : temp = false;
    this.scrollY > 5 ? document.getElementById("header1").style.height = "13.2%" : document.getElementById("header1").style.height = "18%";
  
  }
  window.addEventListener("scroll", changeCss , false);

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
