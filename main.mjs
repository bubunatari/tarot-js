import { rMajorJSON, rMinorJSON } from './scripts/random.mjs';

const randomMajorCard = JSON.parse(rMajorJSON);
const randomMinorCards = JSON.parse(rMinorJSON);

const majorOutput = randomMajorCard;
const minorOutput = randomMinorCards.join(", ");

document.getElementById("showMajor").innerHTML = `<strong>Major Arcana Card:</strong><br> ${majorOutput}`;
document.getElementById("showMinor").innerHTML = `<strong>Minor Arcana Cards:</strong><br> ${minorOutput}`;

const reloadButton = document.getElementById('reloadButton');

reloadButton.addEventListener('click', () => location.reload());