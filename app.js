const root = document.getElementById('root');
const active = document.querySelector('.active');
active.focus();

const createEl = (tag, text, placeholder) => {
  const el = document.createElement(tag);
  el.innerHTML = text;
  el.contentEditable = 'true';
  el.setAttribute('placeholder', placeholder);
  el.addEventListener('keydown', (e) => initiate(e));
  return el;
};

const newInput = () => {
  const newEle = createEl('p', '', 'Type / to see the commands');
  newEle.classList.add('active');
  root.appendChild(newEle);
  newEle.focus();
};

const initiate = (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    let word = e.target.innerHTML;
    const keywords = word.substring(0, 2);
    switch (keywords) {
      case '/1':
        word = createEl('h1', word.substring(2), 'Heading 1');
        break;
      case '/2':
        word = createEl('h2', word.substring(2), 'Heading 2');
        break;
      case '/3':
        word = createEl('h3', word.substring(2), 'Heading 3');
        break;
      case '/4':
        word = createEl('h4', word.substring(2), 'Heading 4');
        break;
      case '/5':
        word = createEl('h5', word.substring(2), 'Heading 5');
        break;
      case '/6':
        word = createEl('h6', word.substring(2), 'Heading 6');
        break;
      default:
        word = createEl('p', word, 'Paragraph Tag');
        break;
    }
    root.replaceChild(word, e.target);
    const last = root.children[root.children.length - 1];
    let decision = e.target.innerHTML;
    if (e.target.innerHTML.substring(0, 1) === '/') {
      decision = e.target.innerHTML.substring(2);
    }
    decision === last.innerHTML && newInput();
  }
};

active.addEventListener('keydown', (e) => initiate(e));
