import { Header } from './Header/index.js';
import { Intro } from './Intro/index.js';
import { Pose } from './Pose/index.js';
console.log('funguju!');

const headerHTML = {
  title: 'Jogíni',
  links: ['domů', 'lekce', 'náš tým', 'události', 'kontakt'],
};

const introHTML = {
  heading: 'Vítejte mezi Jogíny',
  text: `Naše lekce jsou zaměřeny na potřeby klientů, kteří mají odvahu zkusit
         něco nového. Cvičíme v pomalém tempu s podrobným slovním doprovodem.
         Postupně se seznámíte se základními principy jógy, jak přístupovat k
         sobě i ostatním. Krok za krokem objevíte a dostanete pod kontrolu
         svoje tělo, pocity a emoce.`,
};

const poseHTML = {
  src: 'img/yoga-pose.jpg',
};
const appContainer = document.querySelector('#app');

appContainer.innerHTML +=
  Header(headerHTML) + Intro(introHTML) + Pose(poseHTML);
