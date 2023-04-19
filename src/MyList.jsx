import React, { Component } from "react";
import ListItem from "./ListItem"
import "./App.css"

class MyList extends Component {

  state = {
    taskArray: this.props.toDos,
    newItem: ""
  }

  clearList = () => {
    console.log("Clearing List!")
    this.setState({
      taskArray : []
    })
  }

  clearItem = (index) => {
    const updatedArray = this.state.taskArray.filter((_, i) => i !== index);
    this.setState({
      taskArray: updatedArray
    });
  }

  handleChange = (e) => {
    this.setState({
      newItem: e.target.value
    })
  }

  addItem = (e) => {
    e.preventDefault()
    let updatedArray = this.state.taskArray
    updatedArray.push (this.state.newItem)
    this.setState ({ 
      newItem: "",
      taskArray: updatedArray 
    })
  }

  render() {
    let Listitem = this.state.taskArray.map((todo, i) => {
      return (
        <div>
        <ListItem
        key={"listitem" + i}
        task={todo}
        />
        <button onClick={() => this.clearItem(i)}>Finshed the Task</button>
        </div>
      )
    })
    return (
      <><div>
        <h1>Things I should stop procrastinating: </h1>
        <ul>
          {Listitem}
        </ul>
        <form onSubmit={this.addItem}>
          <input type="text" placeholder="Type an item here"
            onChange={this.handleChange} value={this.state.newItem} />
          <button type="submit" >Add it!</button>
      </form>
      <button onClick={this.clearList}>Finshed the List!</button>
      </div>
      </>
    )
  }
}

export default MyList