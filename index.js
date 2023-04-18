import { Header } from './Header/index.js';
console.log('funguju!');

const headerHTML = {
  title: 'Jogíni',
  links: ['domů', 'lekce', 'náš tým', 'události', 'kontakt'],
};

const appContainer = document.querySelector('#app');

appContainer.innerHTML += Header(headerHTML);
