const rock = [
    "./rock/fatrock.jpg",
    "./rock/rockNPCsmile.jpg",
    "./rock/rockSerious.jpg",
    "./rock/rockSerious2.jpg",
    "./rock/rockTHEFACE1.jpg",
    "./rock/rockWWE1.png",
    "./rock/shockedrock.jpg",  
    "./rock/youngrockTHEFACE.png",
];

const button = document.getElementById("button");  

let count = 0;
  
button.addEventListener("click",changeSrc)

function changeSrc(){
  var image = document.getElementById("imageinator");
  image.src = rock[count]
  count++
};