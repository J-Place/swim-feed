import './home.scss';
import Rotator from '../../js/Rotator';

const rotator = new Rotator();
rotator.rotate(document.getElementsByClassName('logo')[0], 500);


console.log("home.js is loaded");