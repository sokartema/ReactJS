const React = require('react');
const ReactDOM = require('react-dom');


const rootElement = (
  <div>
    <h1>Contacts</h1>
    <ul>
      <li>
        <h2>Jazer Abreu</h2>
        <a href="mailto: sokartema@gmail.com">sokartema@gmail.com</a>
      </li>
      <li>
        <h2>Pedro jimenez</h2>
        <a href="mailto: pedrojimenez@gmail.com">pedrojimenez@gmail.com</a>
      </li>
    </ul>
  </div>

);

ReactDOM.render(rootElement, document.getElementById('react-app'));
