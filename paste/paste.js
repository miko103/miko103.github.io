const inputBox = document.getElementById("textBox")

function updateText(textToWrite){
    inputBox.setAttribute('value',textToWrite);
}

function load(){
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    var dataToWrite = hextostring(urlParams.get("data"))
    console.log(dataToWrite);
    updateText(dataToWrite)
    dataToWrite = stringtohex(dataToWrite)
}//  ^from the internet 

function stringtohex(str){
    let hex = "";
    for (let i = 0; i < str.length; i++){
        const charCode = str.charCodeAt(i);
        const hexValue = charCode.toString(16);
        hex += hexValue.padStart(2,"0")
    }
return hex
} //////////////  THIS WHOLE CODE DONT EVEN WORK >:(

function hextostring(hex){
    let str = "";
    for (let i = 0; i < hex.length; i += 2){
        const hexValue = hex.substr(i,2);
        const decimalValue = parseInt(hexValue, 16);
        str += String.fromCharCode(decimalValue);
    }
return str;
}
//main

load()

inputBox.onkeyup = function() {
    const url = './paste.html';
    const data = inputBox.value;
    history.pushState({}, null, `${url}?data=${data}`);
    load()
  }


console.log(stringtohex("Hello"))
console.log(hextostring("48656c6c6f"))