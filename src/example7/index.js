const React = require('react');
const ReactDOM = require('react-dom');

//classes

const ContactView = require('./contact-view');


function updateNewContact(contact) {
    setState({newContact: contact});
}

let state = {};

function setState(changes) {
    Object.assign(state, changes);

    ReactDOM.render(<ContactView contacts={state.contacts} newContact={state.newContact} onNewContactChange={updateNewContact} />, document.getElementById('react-app'));
}

// Set initial data
setState({
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
});
