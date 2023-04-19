import React, { Component } from "react"

export default class ListItem extends Component {
state = {
  isChecked: false
}

// handleCheckMarkClick = () => {
//   this.setState(prevState => {
//     return{
//       isChecked: !prevState.isChecked
//     }
//   })
// }


  render () {
    return (
      <li>
        {/* <button onClick={this.handleCheckMarkClick}>
          {this.state.isChecked ?  "☑️" : "▪️"}</button> */}
        {this.props.task}
      </li>
    )
  }
}