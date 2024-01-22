const button = document.getElementById('btn');
const inputBox = document.getElementById("inputBox")

function updateText(textToWrite){
  const text = document.getElementById("toUpdate").innerHTML = textToWrite
}
//initial reading from the parameter and updating text accordingly
const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const dataToWrite = urlParams.get("data")
console.log(dataToWrite);
updateText(dataToWrite)
//  ^from the internet 

//now it just does stuff and things
inputBox.onkeyup = function() {
  const url = './urlParamTest.html';
  const data = inputBox.value;
  //window.location.href = `${url}?data=${data}`;
  history.pushState({}, null, `${url}?data=${data}`);
  //experimental ahead
  const queryString = window.location.search;
  console.log(queryString);
  const urlParams = new URLSearchParams(queryString);
  const dataToWrite = urlParams.get("data")
  console.log(dataToWrite);
  updateText(dataToWrite)
}
//messy but it works so i wont fix it
