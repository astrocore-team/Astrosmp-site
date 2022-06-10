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



























/*




{
  "id": "938550305770057738",
  "name": "AstroSMP",
  "instant_invite": "https://discord.com/invite/WzQU6bx5",
  "channels": [
      { "id": "939312169068146788", "name": "\ud83c\udfb5Music VC1", "position": 6 },
      { "id": "939311944022753341", "name": "\ud83d\udd09VC1", "position": 2 },
      { "id": "939311988482404427", "name": "\ud83d\udd09VC2", "position": 3 },
      { "id": "939312048121188456", "name": "\ud83e\uddf1MC-VC1", "position": 4 },
      { "id": "939312109785841706", "name": "\ud83e\uddf1MC-VC2", "position": 5 }
  ],
  "members": [
      {
          "id": "0",
          "username": "AethersSmall",
          "discriminator": "0000",
          "avatar": null,
          "status": "idle",
          "avatar_url": "https://cdn.discordapp.com/widget-avatars/-HH2EcMtPvMPFfvEZ5PDoL5HHWc3dxuu9D7aCPEFlPI/WlXSp2YbWxLeATbgaNXCQ712QVJsXinDTmoYQAM3j7yt92hnaeOvWKy6KDjjYMgET4FnsVKL7w3dqnXesylahJlEIfsAZVEPVzotVJjmGw-PyOuxUFmxilTmUY12WD6WO4ZHh1UG0MrbPA"
      },
      {
          "id": "1",
          "username": "AstroSMP Bot",
          "discriminator": "0000",
          "avatar": null,
          "status": "online",
          "game": { "name": "Minecraft" },
          "avatar_url": "https://cdn.discordapp.com/widget-avatars/t0_uOQftrvHTR70dix7kH17R4tFLCVoz1sC7A-C4b4Q/0OiEBZgoHHzI3mDhqYmVvzgiCkGxd7aIUVCTc82qMxG8aLJ7tTB1ovkGyESxvgCxvtjISBYc1CtDiIrECvtF3A0M2HVlbuh-xsujdk3_PfWVQY7bDCPvINlqBIQIPm7l_baC7UqGg6MMGQ"
      },
      {
          "id": "2",
          "username": "Dank Memer",
          "discriminator": "0000",
          "avatar": null,
          "status": "online",
          "game": { "name": "pls help" },
          "avatar_url": "https://cdn.discordapp.com/widget-avatars/a9HzMiYDqUU9zQ0QJRiTz3Mna21NkgsdJveEAQsTjhI/TFtZrLnsEf73aB4wuRgFmr8l3-LUJPQ3Jy_I0Y48KATSr-CkMKsjYZKvrxwpeqvbreTEKb8MxvR9CiXozAHG2lLwBoWQKImagPXWbGCN1m0ZBNaJCFjm0cJxVOeFikB7oUsVLRiHjZJbJA"
      },
      {
          "id": "3",
          "username": "DISBOARD",
          "discriminator": "0000",
          "avatar": null,
          "status": "online",
          "game": { "name": "/help | 1,371,369 servers" },
          "avatar_url": "https://cdn.discordapp.com/widget-avatars/OLnsCKfJ4r1V0PYqQhUuKbuWA5pJOnndx4bW5ZIYdvM/C5LuW5SY_jc11u6uGgnGjuVtl1Gg1zLptIVp6XCuK8L8uRFaoKmuGCzwDMQ5D4LgPnI_6h3lFQV8FwqvIYsGSbjmq1WNm-AzSEe6cpw3m4jAfYDPYkmZqPPVhGnvcukick1DwjDfQ0ZXPQ"
      },
      {
          "id": "4",
          "username": "Dyno",
          "discriminator": "0000",
          "avatar": null,
          "status": "online",
          "game": { "name": "dyno.gg | ?help" },
          "avatar_url": "https://cdn.discordapp.com/widget-avatars/xdnRT_fraricitLNmCvJC0JiGFxRVuDUBMl8uz8Kgpg/0ISrabmPZUvhZc17kA98m8boQ2WjMeqHcpGLOp_8SN_DJVsL1CE2LsbsbVxOuwQSi5u-0ab4CA2uAdFqtb31d1g5DF_RAWoHl8HD6chyaFQSNw3S47dZjclUOdn42-btcI2IhT3yOSDqJw"
      },
      {
          "id": "5",
          "username": "Geosjobbydooo",
          "discriminator": "0000",
          "avatar": null,
          "status": "dnd",
          "avatar_url": "https://cdn.discordapp.com/widget-avatars/W_MqS2ECLOeI36Iuca6cZLnv95azzqQsVdWuS5jzIyk/uz90fikt8UwBlJXM3e0GlfZODbeTI4CYPZW-v5UeSceMdPpM6ky2DVUEsiY6m_aHmdWwLB8AAFGPsTtklbbnIcW5QG9pDlIINvyqmZK3mdhAUug0m-b64X3rAHHwY5HGLX8NEOz-ofoPNA"
      },
      {
          "id": "6",
          "username": "Hydra",
          "discriminator": "0000",
          "avatar": null,
          "status": "online",
          "avatar_url": "https://cdn.discordapp.com/widget-avatars/JDKaZ8eQERqLQ2xbsJCgoIvvFQznnJt62dRE2iXBjBQ/01dqFaU810HyPNSZwBU4j8fNvuNzuBJCVu_WrCf_SytIofq8dwhsZ4rrjJJ3vhs3uC-DsNcCmR3qY39Hwxt65NtxzGuvXlRjwj5S78eT8u8QC5-5Hv6ITFLxxoC-K-J-kNZmLK32rGT-PQ"
      },
      {
          "id": "7",
          "username": "JSman225",
          "discriminator": "0000",
          "avatar": null,
          "status": "dnd",
          "avatar_url": "https://cdn.discordapp.com/widget-avatars/YyoLf4AkvTgO36gC9JBe0hhniZjfMxPylqvJGH2IdSk/wIYDYkrOvNJ2Lslli5pZ8kttZqL1kc7JftKWm3oLEN1d62SixpRv_GnXDNUWpbZwDZcQQGHdSTbvOx5zEbTyT3HcFmSExw1TF5SOI3T6hX6895cc6iqI88YwfkRz_bNCIYcykA2Zuo9H1g"
      },
      {
          "id": "8",
          "username": "KlNG",
          "discriminator": "0000",
          "avatar": null,
          "status": "dnd",
          "avatar_url": "https://cdn.discordapp.com/widget-avatars/3FKBQ-Q0xvv3oMoKM43KKQXCBGuifQ_mkBFvz-6je_M/KbjM2ItJHYM7c--TmBArDikLrFVx2aa4bB5B6iPn2Rb1s6nXgfY0lzkGNnR_cvGVTBAIHwY32-HuWaNEUKdijHd-RVWZIaxsjaCGtsmq6nAlBfZUS-pHPI9ZVtWv6XM71aMSk0Jc7x-fow"
      },
      {
          "id": "9",
          "username": "LightCakez",
          "discriminator": "0000",
          "avatar": null,
          "status": "online",
          "avatar_url": "https://cdn.discordapp.com/widget-avatars/7M-N99yOLCufJ2976rLBFUVOj8JECC3F2JlL9saC0d0/TAlNvApYzEREkvL6JVycEQ23Vdn50cccfPtfDa_7K08nf90ZWjsHMsl_hdtVmHCMZH9Wopgi9oR_wqrXSb2jsfRb6hJP1LJUWCrZI20Rnumgjs7FQoSEp_rGpfhDu751HMFdTevtFRSJ3g"
      },
      {
          "id": "10",
          "username": "ServerStats",
          "discriminator": "0000",
          "avatar": null,
          "status": "online",
          "avatar_url": "https://cdn.discordapp.com/widget-avatars/_hkgf0I-U7VVpIHqFu5HDspdDAzVbXdRWk7DEqO-Es0/pdaSyZ45_E45uoQ9o9N0k64BVLUxmHsueaBASU8njWypqTj4Be1AWZ4A9bqkDHX7hhBA3eUHfS7aC5wwr9OS5YGIKpa3QS0yisGNBoyK_so9G4XDwJ11GMo0plLBtbEfT5-Lq6BO47AkzQ"
      },
      {
          "id": "11",
          "username": "Streamcord",
          "discriminator": "0000",
          "avatar": null,
          "status": "online",
          "avatar_url": "https://cdn.discordapp.com/widget-avatars/05HrAwCBWghasI9MDr9-3Cw1cFZrzimzNWLUNyB0yw4/gVC-sSuWjYe2R67Rpnidcsm5EarfbNFFgzg_F-rmo4e0hMWP6354X3hOAFMzybMSrXkZs3lx8J140eNWewIgAz8UTYPH82cbmeHLxhjHXD1NT0WQFHhpqwEEGUWk5X3Tvb7YtAa9UJ8VcQ"
      },
      {
          "id": "12",
          "username": "WidgetBot",
          "discriminator": "0000",
          "avatar": null,
          "status": "online",
          "avatar_url": "https://cdn.discordapp.com/widget-avatars/LnUBm-ByLQyVmwQWeZ7J5YEWnfrgOHSmoR9_seo0SSw/248A7tQ2G4EavXJkHNqtXsCtooMyUd56wa_pU3V83nvq8vrfRG-HR1mljNeD6baaQ28ANtN9YqkP6zN0W1lGTNJrOsajkSb5ZfHjRFe2KSeMAbDSukY3tABZ5J00-2znb63KULgTfQpTgw"
      }
  ],
  "presence_count": 13
}
*/