const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
  console.log(number);
});

const button = document.getElementById("button")

button.addEventListener("click", getTime);

function getTime(){
  document.getElementById("time").innerHTML = new Date();
}

