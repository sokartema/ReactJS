const React = require('react');

class ContactForm extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    let oldContact = this.props.value;
    let onChange = this.props.onChange;

    return (
      <form className="ContactForm">
        <input type="text" placeholder="Name (required)" value={this.props.value.name} onChange={function(e) {
            onChange(Object.assign({}, oldContact, {name: e.target.value}));
        }} />
        <input type="email" placeholder="Email" value={this.props.value.email} onChange={function(e) {
            onChange(Object.assign({}, oldContact, {email: e.target.value}));
        }} />
        <textarea placeholder="Description" value={this.props.value.description} onChange={function(e) {
            onChange(Object.assign({}, oldContact, {description: e.target.value}));
        }} />
        <button type="submit">Add Contact</button>
      </form>
    )

  }

}

ContactForm.PropTypes = {

  value: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired
}

module.exports = ContactForm;
