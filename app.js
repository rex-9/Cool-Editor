//hello vercel

const root = document.getElementById('root');
const box = document.querySelector('.box');
const dropdown = document.getElementById('dropdown');
dropdown.style.display = 'none';
const children = Array.from(dropdown.children);
let active = -1;

const filterFun = (index) => {
  const filter = children.filter((e, i) => children[i] !== children[index]);
  children[index].style.display = 'block';
  filter.forEach((child) => {
    child.style.display = 'none';
  });
};

box.addEventListener('keydown', (e) => {
  if (e.key === '/') {
    dropdown.style.display = 'block';
    children.forEach((child) => { child.style.display = 'block'; });
    box.addEventListener('input', (event) => {
      if (event.target.innerHTML === '/1') {
        filterFun(0);
      } else if (event.target.innerHTML === '/2') {
        filterFun(1);
      } else if (event.target.innerHTML === '/3') {
        filterFun(2);
      } else if (event.target.innerHTML === '/4') {
        filterFun(3);
      } else if (event.target.innerHTML === '/5') {
        filterFun(4);
      } else if (event.target.innerHTML === '/6') {
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
          words[i] = `<h1>${words[i].substring(2)}</h1>`;
          break;

        case '/2':
          words[i] = `<h2>${words[i].substring(2)}</h2>`;
          break;

        case '/3':
          words[i] = `<h3>${words[i].substring(2)}</h3>`;
          break;

        case '/4':
          words[i] = `<h4>${words[i].substring(2)}</h4>`;
          break;

        case '/5':
          words[i] = `<h5>${words[i].substring(2)}</h5>`;
          break;

        case '/6':
          words[i] = `<h6>${words[i].substring(2)}</h6>`;
          break;

        default:
          break;
      }
    }
    const results = words.join(' ');
    const div = document.createElement('div');
    div.innerHTML += results;
    root.appendChild(div);
    box.innerHTML = '';
  }
});

const enterFun = (tag) => {
  const element = document.createElement(tag);
  element.classList.add('box');
  element.contentEditable = 'true';
  element.innerHTML = tag;
  root.appendChild(element);
  dropdown.style.display = 'none';
};

const switchEnter = (key) => {
  switch (key) {
    case 'Heading 1':
      enterFun('h1');
      break;

    case 'Heading 2':
      enterFun('h2');
      break;

    case 'Heading 3':
      enterFun('h3');
      break;

    case 'Heading 4':
      enterFun('h4');
      break;

    case 'Heading 5':
      enterFun('h5');
      break;

    case 'Heading 6':
      enterFun('h6');
      break;

    default:
      break;
  }
};

children.forEach((child) => {
  child.addEventListener('click', () => switchEnter(child.innerHTML));
});

document.addEventListener('keydown', (e) => {
  const blocks = children.filter((child) => child.style.display === 'block');
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (active < blocks.length - 1) {
      active += 1;
      const option = blocks[active];
      option.focus();
    }
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (active > 0) {
      active -= 1;
      const option = blocks[active];
      option.focus();
    }
  }
});

children.forEach((option) => {
  option.addEventListener('keydown', (event) => {
    event.preventDefault();
    if (event.key === 'Enter') {
      switchEnter(option.innerHTML);
      dropdown.classList.add('hide');
    }
  });
});
