const React = require('react');
const ReactDOM = require('react-dom');

//classes

const ContactView = require('./contact-view');

const contacts = [
  {
    key: 1,
    name: "Jazer Abreu",
    email: "sokartema@gmail.com",
    description: "Developer"
  },{
    key: 2,
    name: "Pedro",
    email: "pedro@gmail.com"
  },{
    key: 3,
    name: "Christie"

  }
];

const newContact = {
  name: "",
  email: "",
  description: ""
}


ReactDOM.render(<ContactView contacts={contacts} newContact={newContact}/>, document.getElementById('react-app'));
