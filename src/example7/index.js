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
            name: "James K Nelson",
            email: "james@jamesknelson.com",
            description: "Front-end Unicorn"
        }, {
            key: 2,
            name: "Jim",
            email: "jim@example.com"
        }
    ],
    newContact: {
        name: "",
        email: "",
        description: ""
    }
});
