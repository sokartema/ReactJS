const React = require('react');

class ContactItem extends React.Component{

  constructor(props){
    super(props);
  }
  render(){
    return(
      <li className="ContactItem" key={this.key}>
        <h2 className="ContactItem-name">{this.props.name}</h2>
        <a href={"mailto:"+this.props.email} className="ContactItem-email">{this.props.email}</a>
        <div className="ContactItem-description">{this.props.description}</div>
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
