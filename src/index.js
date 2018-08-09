import './style.css';
import('./print2');

import join from 'ramda/es/join';

async function component() {
  let element = document.createElement('div');
  var btn = document.createElement('button');

  btn.innerHTML = 'Click me and check the console!!';
  const { default: printMe } = await import('./print');
  btn.onclick = printMe;

  element.innerHTML = join(', ', ['Hello', 'webpack']);
  element.appendChild(btn);

  return element;
}

component().then(element => {
  document.body.appendChild(element);
});

if (module.hot) {
  module.hot.accept();
}
