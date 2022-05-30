const btn = document.querySelector('.j-btn-request');

btn.addEventListener('click', () => {
  const value1 = +document.getElementsByTagName("input")[0].value
  const value2 = +document.getElementsByTagName("input")[1].value

  let s = document.getElementById('j-result');
  s.textContent = '';
  if (!(value1 >= 100 && value1 <= 300 && value2 >= 100 && value2 <= 300)) {
    s.textContent = 'Одно из чисел вне диапазона от 100 до 300';
    return;
  }
  fetch(`https://picsum.photos/${value1}/${value2}`)
    .then((response) => {
      document.getElementById('result').src = response.url;
    });

});