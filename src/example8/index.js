const React = require('react');
const ReactDOM = require('react-dom');

//classes

const ContactView = require('./contact-view');

// Set initial data
const state = {
    contacts: [
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
    ],
    newContact: {
        name: "",
        email: "",
        description: ""
    }
};


ReactDOM.render(<ContactView contacts={state.contacts} newContact={state.newContact} />, document.getElementById('react-app'));
