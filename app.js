import { filterFun, switchEnter } from "./helpers/helpers.js";

const root = document.getElementById('root');
export const box = document.querySelector('.box');
const dropdown = document.getElementById('dropdown');
dropdown.style.display = 'none';
export const children = Array.from(dropdown.children);
let active = -1;

box.addEventListener('keydown', (e) => {
  if (e.key === '/') {
    dropdown.style.display = 'block';
    children.forEach((child) => { child.style.display = 'block'; });
    box.addEventListener('keypress', (event) => {
      if (event.key === '1') {
        filterFun(0);
      } else if (event.key === '2') {
        filterFun(1);
      } else if (event.key === '3') {
        filterFun(2);
      } else if (event.key === '4') {
        filterFun(3);
      } else if (event.key === '5') {
        filterFun(4);
      } else if (event.key === '6') {
        filterFun(5);
      }
    });
  } else if (e.key === 'Backspace') {
    dropdown.style.display = 'none';
  } else if (e.key === 'Enter') {
    e.preventDefault();
    const words = box.innerHTML.split(' ');
    for (let i = 0; i < words.length; i += 1) {
      const keywords = words[i].substring(0, 2);
      switch (keywords) {
        case '/1':
          words[i] = `<h1>${words[i].substring(2) || 'Heading 1'}</h1>`;
          break;

        case '/2':
          words[i] = `<h2>${words[i].substring(2) || 'Heading 2'}</h2>`;
          break;

        case '/3':
          words[i] = `<h3px;">${words[i].substring(2) || 'Heading 3'}</h3>`;
          break;

        case '/4':
          words[i] = `<h4>${words[i].substring(2) || 'Heading 4'}</h4>`;
          break;

        case '/5':
          words[i] = `<h5>${words[i].substring(2) || 'Heading 5'}</h5>`;
          break;

        case '/6':
          words[i] = `<h6>${words[i].substring(2) || 'Heading 6'}</h6>`;
          break;

        default:
          break;
      }
    }
    const results = words.join(' ');
    console.log(words);
    console.log(results);
    const div = document.createElement('div');
    div.innerHTML += results;
    div.contentEditable = 'true';
    console.log(div);
    root.appendChild(div);
    box.innerHTML = '';
  }
});

document.addEventListener('keydown', (e) => {
  const blocks = children.filter((child) => child.style.display === 'block');
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (blocks.length === 1) {
      blocks[0].focus();
    } else if (active < blocks.length - 1) {
      active += 1;
      const option = blocks[active];
      option.focus();
    }
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (blocks.length === 1) {
      blocks[0].focus();
    } else if (active > 0) {
      active -= 1;
      const option = blocks[active];
      option.focus();
    }
  }
});

children.forEach((child) => {
  child.addEventListener('click', () => switchEnter(child.innerHTML));
  child.addEventListener('keydown', (event) => {
    event.preventDefault();
    if (event.key === 'Enter') {
      switchEnter(child.innerHTML);
      dropdown.classList.add('hide');
    }
  });
});
