import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: [],
    };
  }
  updateInput(key, value) {
    //update react state
    this.setState({
      [key]: value,
    });
  }
  addItem() {
    //create item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };

    //copy of current list to items
    const list = [...this.state.list];

    //add new item to list
    list.push(newItem);

    //update state with new list and reset newItem Inut
    this.setState({
      list,
      newItem: "",
    });
  }
  deleteItem(id){
    //copy of the ist of items
    const list = [...this.state.list]

    //filter out items being deleted
    const updateList = list.filter(item => item.id !== id)
    this.setState({
      list:updateList
    })
  }
  render() {
    return (
      <div className="App">
        Add an Item! <br />
        <input
          type="text"
          placeholder="Enter Item"
          value={this.state.newItem}
          onChange={(e) => this.updateInput("newItem", e.target.value)}
        />
        <button onClick={() => this.addItem()}> Add</button>
        <br />
        {this.state.list.map((item) => {
          return (
            <ul>
              <li key={item.id}>{item.value}</li>
              <button onClick={() => this.deleteItem(item.id)}>x</button>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default App;
