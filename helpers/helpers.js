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
  const element = document.createElement(tag);
  element.contentEditable = 'true';
  element.innerHTML = text;
  root.appendChild(element);
  dropdown.style.display = 'none';
  active.innerHTML = '';
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

export { filterFun, switchEnter };
