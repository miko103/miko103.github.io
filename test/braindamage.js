const colors = [
  "red",
  "orange",
  "yellow",
  "limegreen",
  "deepskyblue",
  "purple",
  "violet",
];

var count = 0;

function changeBackground() {
  var body = document.getElementById("body");
  body.style = "background-color: "+ colors[count] + ";";
  count++;
   if (count == 7) {
     count = 0;
  };
};
 
setInterval(changeBackground, 100);