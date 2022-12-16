import { filterFun, switchEnter, createEl } from './helpers/helpers.js';

export const root = document.getElementById('root');
export const dropdown = document.getElementById('dropdown');
export const active = document.querySelector('.active');
dropdown.style.display = 'none';
export const children = Array.from(dropdown.children);
let focus = -1;

active.addEventListener('keydown', (e) => {
  if (e.key === '/') {
    dropdown.style.display = 'block';
    children.forEach((child) => { child.style.display = 'block'; });
    active.addEventListener('keypress', (event) => {
      switch (event.key) {
        case '1':
          filterFun(0);
          break;
        case '2':
          filterFun(1);
          break;
        case '3':
          filterFun(2);
          break;
        case '4':
          filterFun(3);
          break;
        case '5':
          filterFun(4);
          break;
        case '6':
          filterFun(5);
          break;
        default:
          break;
      }
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
    let word = active.innerHTML;
    const keywords = word.substring(0, 2);
    switch (keywords) {
      case '/1':
        word = createEl('h1', word.substring(3));
        break;

      case '/2':
        word = createEl('h2', word.substring(3));
        break;

      case '/3':
        word = createEl('h3', word.substring(3));
        break;

      case '/4':
        word = createEl('h4', word.substring(3));
        break;

      case '/5':
        word = createEl('h5', word.substring(3));
        break;

      case '/6':
        word = createEl('h6', word.substring(3));
        break;

      default:
        word = createEl('p', word);
        break;
    }
    root.appendChild(word);
    // word.addEventListener('focus', () => {
    //   active.classList.remove('active');
    //   word.classList.add('active');
    // });
    active.innerHTML = '';
    dropdown.style.display = 'none';
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
