const React = require('react');

class ContactForm extends React.Component{

  constructor(props){
    super(props);
  }

  render(){

    return (
      <form>
        <input type="text" placeholder="Name (required)" value={this.props.contact.name} />
        <input type="email" placeholder="Email" value={this.props.contact.email} />
        <textarea placeholder="Description" value={this.props.contact.description} />
        <button type="submit">Add Contact</button>
      </form>
    )

  }

}

ContactForm.PropTypes = {

  contact: React.PropTypes.object.isRequired
}

module.exports = ContactForm;
