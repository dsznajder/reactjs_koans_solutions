var React = require('react');

class Name extends React.Component {
  render() {
    return (<p id="hello">Bazinga!</p>);
  }
}

function renderNameComponent(domNode) {
  let element = React.createElement(Name)
  React.render(element, domNode)
}

export default renderNameComponent;
