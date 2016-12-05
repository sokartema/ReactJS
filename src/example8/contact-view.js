const React = require('react');

//classes
const ContactItem = require('./contact-item');
const ContactForm = require('./contact-form');


class ContactView extends React.Component{

  constructor(props){
    super(props)
  }

  render(){

    const contactItemElements = this.props.contacts.filter((contact) => {
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
        <ContactForm value={this.props.newContact} />
      </div>

    )
  }
}

ContactView.propTypes = {
    contacts: React.PropTypes.array.isRequired,
    newContact: React.PropTypes.object.isRequired
};

module.exports = ContactView;
