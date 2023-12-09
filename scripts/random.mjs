import { majorJSON, minorJSON } from './cards.mjs';

const majorArcana = JSON.parse(majorJSON);
const minorArcana = JSON.parse(minorJSON);

const getRandomCard = (array) => array[Math.floor(Math.random() * array.length)];

const getRandomMinorCards = (array, count) => Array.from({ length: count }, () => getRandomCard(array));

const randomMajorCard = getRandomCard(majorArcana);
const randomMinorCards = getRandomMinorCards(minorArcana, 5);

export const [rMajorJSON, rMinorJSON] = [JSON.stringify(randomMajorCard), JSON.stringify(randomMinorCards)];
