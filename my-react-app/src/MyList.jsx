import React, { Component } from "react";
import ListItem from "./ListItem"
import "./App.css"

class MyList extends Component {
  render() {
    const Listitem = this.props.toDos.map((todo, i) => {
      return (
        <ListItem
        key={"listitem" + i}
        tasks={todo}
        />
      )
    })
    return (
      <div>
      <h1>Things I should stop procrastinating: </h1>
      <ul>
        <li></li>
      </ul>
      </div>
    )
  }
}

export default MyList