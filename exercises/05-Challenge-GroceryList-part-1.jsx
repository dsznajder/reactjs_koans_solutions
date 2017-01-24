import React from "react"

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [ { name: "Apples" } ]
    };
  }

  render() {
    let groceriesComponents = [];

    for(var index = 0; index < this.state.groceries.length; index++) {
      groceriesComponents.push(
          <GroceryListItem
            grocery={this.state.groceries[index]}
          />
      );
    }

    return (
      <div>
        <ul>
          {groceriesComponents}
        </ul>
      </div>
    );
  }
}

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <li>
          {this.props.grocery.name}
        </li>
    );
  }
}

export default GroceryList;
