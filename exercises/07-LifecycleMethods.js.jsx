import React from 'react';

class LifecycleMethodsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Bob" };
  }

  componentDidMount() {
    console.log("I'm mounted!");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Updated!");
  }

  componentWillUnmount() {
    console.log("Goodbye, cruel world! :(");
  }

  render() {
    return (<p>Whatever, {this.state.name}!</p>);
  }
}

export default LifecycleMethodsComponent;
