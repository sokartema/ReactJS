const React = require('react');

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

ContactItem.PropTypes = {

  name: React.PropTypes.string.isRequired,
  email: React.PropTypes.string.isRequired,
  description: React.PropTypes.string
}

module.exports = ContactItem;
