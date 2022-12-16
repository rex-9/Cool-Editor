// import {
  // dropdown,
  // children,
//   root,
//   active,
//   initiate,
// } from '../app.js';

// const condition = (word) => {
//   const lastChild = root.children[root.children.length - 1];
//   if (lastChild.classList.contains('active')) {
//     root.replaceChild(word, root.querySelector('.active'));
//     const newEl = document.createElement('p')
//     newEl.contentEditable = 'true';
//     newEl.setAttribute('placeholder', 'Type / to see commands...');
//     active.classList.remove('active');
//     newEl.classList.add('active');
//     root.appendChild(newEl);
//     newEl.addEventListener('mousedown', () => {
//       newEl.classList.add('active');
//       document.querySelector('.active').addEventListener('keydown', (e) => initiate(e));
//     });
//     newEl.addEventListener('keydown', (e) => {
//       if (e.key === 'Backspace' && newEl.innerHTML === '') {
//         root.removeChild(newEl);
//       }
//     });
//   } else {
//     root.replaceChild(word, root.querySelector('.active'));
//     lastChild.classList.add('active');
//   }
// }

// const filterFun = (index) => {
//   const filter = children.filter((e, i) => children[i] !== children[index]);
//   children[index].style.display = 'block';
//   filter.forEach((child) => {
//     child.style.display = 'none';
//   });
// };

// const enterFun = (tag, text) => {
//   const el = document.createElement(tag);
//   el.contentEditable = 'true';
//   el.innerHTML = text;
//   el.setAttribute('placeholder', tag);
//   condition(el);
//   dropdown.style.display = 'none';
//   active.innerHTML = '';
//   el.addEventListener('keydown', (e) => {
//     if (e.key === 'Backspace' && el.innerHTML === '') {
//       root.removeChild(el);
//     }
//   });
//   el.addEventListener('mousedown', () => {
//     active.classList.remove('active');
//     el.classList.add('active');
//     document.querySelector('.active').addEventListener('keydown', (e) => initiate(e));
//   });
// };

// const switchEnter = (key) => {
//   switch (key) {
//     case 'Heading 1':
//       enterFun('h1', 'Heading 1');
//       break;

//     case 'Heading 2':
//       enterFun('h2', 'Heading 2');
//       break;

//     case 'Heading 3':
//       enterFun('h3', 'Heading 3');
//       break;

//     case 'Heading 4':
//       enterFun('h4', 'Heading 4');
//       break;

//     case 'Heading 5':
//       enterFun('h5', 'Heading 5');
//       break;

//     case 'Heading 6':
//       enterFun('h6', 'Heading 6');
//       break;

//     default:
//       break;
//   }
// };

const createEl = (tag, word) => {
  const el = document.createElement(tag);
  el.innerHTML = word;
  el.contentEditable = 'true';
  el.setAttribute('placeholder', tag);
  return el;
};

export {
  // filterFun,
  // switchEnter,
  createEl,
  // condition
};
