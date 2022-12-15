const p = document.getElementsByTagName('p')[0];
const textArea = document.getElementsByTagName('textarea')[0];

textArea.addEventListener("keypress", (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    const words = textArea.value.split(' ');
    for (let i = 0; i < words.length; i++) {
      let keywords = words[i].substring(0, 2);
      switch (keywords) {
        case '/1':
          words[i] = `<h1>${words[i].substring(2)}</h1>`
          break;

        case '/2':
          words[i] = `<h2>${words[i].substring(2)}</h2>`
          break;

        case '/3':
          words[i] = `<h3>${words[i].substring(2)}</h3>`
          break;

        case '/4':
          words[i] = `<h4>${words[i].substring(2)}</h4>`
          break;

        case '/5':
          words[i] = `<h5>${words[i].substring(2)}</h5>`
          break;

        case '/6':
          words[i] = `<h6>${words[i].substring(2)}</h6>`
          break;

        default:
          break;
      }
    }
    const result = words.join(' ');
    console.log(result);
    p.innerHTML = result;
  }
});
