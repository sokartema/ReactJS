const React = require('react');

class ContactForm extends React.Component{

  constructor(props){
    super(props);
    this.state = props.value;
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e){
    e.preventDefault();
    this.props.onNewContact(Object.assign({},this.state));
    this.setState(this.props.value);

  }

  onChangeInput(e, which){

    let obj = {};
    obj[which] = e.target.value;
    this.setState(obj);
  }

  render(){

    return (
      <form className="ContactForm" onSubmit={this.onSubmit}>
        <input type="text" placeholder="Name (required)" value={this.state.name} onChange={e => {this.onChangeInput(e, 'name')}} required/>
        <input type="email" placeholder="Email" value={this.state.email} onChange={e => {this.onChangeInput(e, 'email')}} required/>
        <textarea placeholder="Description" value={this.state.description} onChange={e => {this.onChangeInput(e, 'description')}} />
        <button type="submit">Add Contact</button>
      </form>
    )

  }

}

ContactForm.PropTypes = {

  value: React.PropTypes.object.isRequired,
  onNewContact: React.PropTypes.func.isRequired
}

module.exports = ContactForm;
