function changeCss () {

    this.scrollY > 5 ? document.getElementById("header").style.opacity = ".85" : document.getElementById("header").style.opacity = "0";
    this.scrollY > 5 ? temp = true : temp = false;
    this.scrollY > 5 ? document.getElementById("header1").style.height = "13.2%" : document.getElementById("header1").style.height = "18%";
  
  }
  window.addEventListener("scroll", changeCss , false);