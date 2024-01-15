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
var image = document.getElementById("imageinator");

let count = 0;
  
button.addEventListener("click"), function(rock) {
  var image = document.getElementById("imageinator");
  image.scr = rock[count];
  count++;
    if (count == 9) {
      count = 0;
        };
    };
