import _ from 'lodash'
import './styles/index.css'
import './styles/index.less'
import './styles/index.scss'
import './main.jsx'
import './main.ts'

function component() {
    let element = document.createElement('div');
  
    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack!!!'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());