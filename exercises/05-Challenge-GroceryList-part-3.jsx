var React = require("react");

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [
        { name: "Apples" }
      ],
      newGroceryName: ""
    };

    this.addGroceryItem = this.addGroceryItem.bind(this);
    this.clearList = this.clearList.bind(this);
    this.inputChanged = this.inputChanged.bind(this);
  }

  inputChanged(event) {
    this.setState({ newGroceryName: event.target.value });
  }

  addGroceryItem() {
    if(this.state.newGroceryName) {
      let newGroceryItem = { name: this.state.newGroceryName };
      this.setState({
        groceries: this.state.groceries.concat([newGroceryItem])
      });
    }
  }

  clearList() {
    this.setState({
      groceries: []
    })
  }

  render() {
    let groceriesComponents = [],
        newProductInput,
        newProductAddButton,
        clearListButton;

    for(var index = 0; index < this.state.groceries.length; index++) {
      groceriesComponents.push(
          <GroceryListItem
            grocery={this.state.groceries[index]}
          />
      );
    }

    newProductInput = <input className='new-item' type="text" onChange={this.inputChanged}/>;
    newProductAddButton = <button className='add-product' onClick={this.addGroceryItem}>Add new Product</button>;
    clearListButton = <button className='clear-list' onClick={this.clearList}>Clear the List</button>;

    return (
      <div>
        <ul>
          {groceriesComponents}
        </ul>
        {newProductInput}
        {newProductAddButton}
        {clearListButton}
      </div>
    );
  }
}

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<li>{this.props.grocery.name}</li>);
  }
}

export default GroceryList;
