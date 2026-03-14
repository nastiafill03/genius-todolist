import React from "react";
import "./index.css";

class TodoItem extends React.Component {
  render(){
    return (
      <li className="item-block">
        <div className="item">
 {this.props.todo.name}
        </div>

    <button className="delete-button" onClick={()=>this.props.deleteTodo(this.props.todo.id)}>Delete</button>
  
      </li> 
   )
  }
}

export default TodoItem;