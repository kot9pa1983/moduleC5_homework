let myStore = localStorage.getItem('1');
let div = document.createElement("DIV");

let elem = document.getElementById("images");
if (myStore) {
  div.innerHTML = myStore;
  elem.appendChild(div);
}

document.querySelector('.j-btn-request').addEventListener('click', () => {
        const value1 = document.getElementsByTagName("input")[0].value;
        const value2 = document.getElementsByTagName("input")[1].value;
        let s = document.getElementById('j-result');
        s.textContent = '';
        if (!(value1 >= 1 && value1 <= 10)) {
            if(!(value2 >= 1 && value2 <= 10)) {
            s.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10';
            return;}
            s.textContent = 'Номер страницы вне диапазона от 1 до 10';
            return;
        }
        else if(!(value2 >= 1 && value2 <= 10)) {
            s.textContent = 'Лимит вне диапазона от 1 до 10';
            return;
        } else { 
          url = 'https://picsum.photos/v2/list?page=' + value1 + '&limit=' + value2;
          fetch(url).then((response) => response.json()).then((images) => {
  let myStore =[];
  images.forEach(item => {
    const cardBlock = `<div class="card">
        <img src="${item.download_url}"/>
        <p>${item.author}</p>
      </div>
    `;
    myStore.push(cardBlock);
  });
  localStorage.setItem('1', myStore);
  if (elem.hasChildNodes()) {
    elem.removeChild(div);
    div.innerHTML = myStore;
    elem.appendChild(div);
    }
  else {
    div.innerHTML = myStore;
    elem.appendChild(div);
    }
          });
        } 
  });
