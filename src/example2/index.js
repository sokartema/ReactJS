const React = require('react');
const ReactDOM = require('react-dom');

let contacts = [
  {key: 1, name: "Jazer Abreu", email: "sokartema@gmail.com"},
  {key: 2, name: "Christie"}
];

const listElements = contacts.filter((contact)=>{
  return contact.email;
}).map((contact)=>{
  return (
  <li key={contact.key}>
    <h2>{contact.name}</h2>
    <a href={"mailto:" + contact.email}>{contact.email}</a>
  </li>)
});

const rootElement = (
  <div>
    <h1>Contacts</h1>
    <ul>{listElements}</ul>
  </div>

);

ReactDOM.render(rootElement, document.getElementById('react-app'));
