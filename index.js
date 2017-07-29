{
  "user strict";

  const capify = str => [str.charAt(0).toUpperCase(), str.substr(1)].join('');
  const processWords = (fn, str) => str.split(' ').map(fn).join(' ');
  const getValue = (e) => alert(processWords(capify, prompt('give me something to capitalize')))
  document.getElementById('main_button').addEventListener('click', getValue);
}