const React = require('react');
const ReactDOM = require('react-dom');

//classes
const ContactItem = require('./contact-item');

let contacts = [
  {
    key: 1,
    name: "Jazer Abreu",
    email: "sokartema@gmail.com",
    description: "Developer"

  }, {
    key: 2,
    name: "Bob",
    email: "bob@example.com"

  },{

    key: 3,
    name: "Christie",
    email: "christie@example.com"

  }

];

const listElements = contacts.filter((contact)=>{
  return contact.email;
}).map((contact) =>{
  return <ContactItem key={contact.key} name={contact.name} email={contact.email} description={contact.description}/>
});

const rootElement = (

  <div>
    <h1>Contacts</h1>
    <ul>{listElements}</ul>
  </div>

);

console.log(React.isValidElement(rootElement));

ReactDOM.render(rootElement, document.getElementById('react-app'));
