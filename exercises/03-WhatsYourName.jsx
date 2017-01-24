var React = require("react");

class WhatsYourName extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Stranger" };

    this.onNameChange = this.onNameChange.bind(this);
  }

  onNameChange(event) {
    this.setState({name: event.target.value});
  }

  render() {
    let message = "Hey there. Enter your name."
    if(this.state.name.length != 0){
      message = `Hello ${this.state.name}`
    }
    return (
      <div>
        <p>{message}</p>
        <input type="text" name="name" onChange={this.onNameChange} />
      </div>
    );
  }
}

export default WhatsYourName;
