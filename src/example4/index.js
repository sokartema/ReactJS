const React = require('react');
const ReactDOM = require('react-dom');

//classes
const ContactItem = require('./contact-item');
const ContactForm = require('./contact-form');

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

const contactItemElements = contacts.filter((contact) => {
  return contact.email;

}).map((contact) =>{

  return (
    <ContactItem name={contact.name} email={contact.email} description={contact.description}/>
  )

});

const rootElement = (
  <div>
    <h1>Contacts</h1>
    <ul>{contactItemElements}</ul>
    <ContactForm contact={newContact} />
  </div>

);

ReactDOM.render(rootElement, document.getElementById('react-app'));
