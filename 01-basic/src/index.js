import _ from 'lodash';
import './styles/index.css';
import './styles/index.less';
import './styles/index.scss';
import './main.jsx';
import './main.ts';

// function component() {
//     const element = document.createElement('div');
//     element.innerHTML = _.join(['Hello', 'webpack!!!'], ' ');
//     return element;
//   }

async function getComponent() {
  var element = document.createElement('div');
  const { default: _ } = await import(/* webpackChunkName: "index2" */ './index2');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;

}
getComponent().then(component => {
  document.body.appendChild(component);
})


// function getImg() {
//   const imgElement = document.createElement('img');
//   imgElement.src = require('../img/11.jpg');
//   return imgElement;
// }
// document.body.appendChild(getImg());
