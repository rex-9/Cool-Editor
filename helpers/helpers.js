import {
  root, dropdown, active, children,
} from '../app.js';

const filterFun = (index) => {
  const filter = children.filter((e, i) => children[i] !== children[index]);
  children[index].style.display = 'block';
  filter.forEach((child) => {
    child.style.display = 'none';
  });
};

const enterFun = (tag, text) => {
  const el = document.createElement(tag);
  el.contentEditable = 'true';
  el.innerHTML = text;
  el.setAttribute('placeholder', tag);
  root.appendChild(el);
  dropdown.style.display = 'none';
  active.innerHTML = '';
  el.addEventListener('keydown', (e) => {
    if (e.key === "Backspace" && el.innerHTML === "") {
      root.removeChild(el);
    }
  });
};

const switchEnter = (key) => {
  switch (key) {
    case 'Heading 1':
      enterFun('h1', 'Heading 1');
      break;

    case 'Heading 2':
      enterFun('h2', 'Heading 2');
      break;

    case 'Heading 3':
      enterFun('h3', 'Heading 3');
      break;

    case 'Heading 4':
      enterFun('h4', 'Heading 4');
      break;

    case 'Heading 5':
      enterFun('h5', 'Heading 5');
      break;

    case 'Heading 6':
      enterFun('h6', 'Heading 6');
      break;

    default:
      break;
  }
};

const createEl = (tag, word) => {
  const el = document.createElement(tag);
  el.innerHTML = word;
  el.contentEditable = 'true';
  el.setAttribute('placeholder', tag);
  console.log(el);
  return el;
};

export { filterFun, switchEnter, createEl };
