const React = require('react');
const ReactDOM = require('react-dom');

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

class ContactItem extends React.Component{

  constructor(props){
    super(props);
  }
  render(){
    return(
      <li key={this.key}>
        <h2>{this.props.name}</h2>
        <a href={"mailto:"+this.props.email}>{this.props.email}</a>
        <div>{this.props.description}</div>
      </li>
    )
  }
}

ContactItem.propTypes = {

  name: React.PropTypes.string.isRequired,
  email: React.PropTypes.string.isRequired,
  description: React.PropTypes.string

};

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
