import { filterFun, switchEnter } from './helpers/helpers.js';

export const root = document.getElementById('root');
const editors = document.querySelectorAll('[contenteditable="true"]');
export const dropdown = document.getElementById('dropdown');
export const active = document.querySelector('.active');
dropdown.style.display = 'none';
export const children = Array.from(dropdown.children);
let focus = -1;

editors.forEach((e) => {
  e.addEventListener('mousedown', () => {
    e.classList.add('active');
    console.log("mouse down");
  })
  //  === document.activeElement ? e.classList.add('active') : e.classList.remove('active');
});

console.log(editors);

active.addEventListener('keydown', (e) => {
  if (e.key === '/') {
    dropdown.style.display = 'block';
    children.forEach((child) => { child.style.display = 'block'; });
    active.addEventListener('keypress', (event) => {
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
    const words = active.innerHTML.split(' ');
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
    const div = document.createElement('div');
    div.innerHTML += results;
    div.contentEditable = 'true';
    root.appendChild(div);
    active.innerHTML = '';
  }
});

document.addEventListener('keydown', (e) => {
  const blocks = children.filter((child) => child.style.display === 'block');
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (blocks.length === 1) {
      blocks[0].focus();
    } else if (focus < blocks.length - 1) {
      focus += 1;
      const option = blocks[focus];
      option.focus();
    }
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (blocks.length === 1) {
      blocks[0].focus();
    } else if (focus > 0) {
      focus -= 1;
      const option = blocks[focus];
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
    }
  });
});
