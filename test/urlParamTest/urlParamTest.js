const button = document.getElementById('btn');
const inputBox = document.getElementById("inputBox")
const text = document.getElementById("text")


button.addEventListener('click', () => {
  const url = './urlParamTest.html';
  const data = inputBox.value;
  window.location.href = `${url}?data=${data}`;
  text.innerText = data;
  window.location = window.location
});
