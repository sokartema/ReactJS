const React = require('react');

//classes
const ContactItem = require('./contact-item');
const ContactForm = require('./contact-form');


class ContactView extends React.Component{

  constructor(props){
    super(props)
    this.state = {contacts: props.contacts, newContact: props.newContact};
    
    this.onNewContact = this.onNewContact.bind(this);
  }

  onNewContact(state){

    this.setState(prevState => {
      let key = prevState.contacts[prevState.contacts.length-1].key + 1;
      Object.assign(state, {key: key});
      let obj = Object.assign({}, prevState);
      return obj.contacts.push(state);
    });

  }

  render(){

    const contactItemElements = this.state.contacts.filter((contact) => {
      return contact.email;

    }).map((contact) =>{

      return (
        <ContactItem key={contact.key} name={contact.name} email={contact.email} description={contact.description}/>
      )

    });
    return(
      <div className="ContactView">
        <h1 className="ContactView-title">Contacts</h1>
        <ul className="ContactView-list">{contactItemElements}</ul>
        <ContactForm value={this.state.newContact} onNewContact={this.onNewContact}/>
      </div>

    )
  }
}

ContactView.propTypes = {
    contacts: React.PropTypes.array.isRequired,
    newContact: React.PropTypes.object.isRequired
};

module.exports = ContactView;
