const button = document.getElementById('btn');
const inputBox = document.getElementById("inputBox")



button.addEventListener('click', () => {
  const url = './urlParamTest.html';
  const data = inputBox.value
  window.location.href = `${url}?data=${data}`;
});
