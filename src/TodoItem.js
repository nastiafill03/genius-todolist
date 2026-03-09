import React from "react";

class TodoItem extends React.Component {
  render(){
    return (
      <li>
 {this.props.todo.name}
    <button onClick={()=>this.props.deleteTodo(this.props.todo.id)}>Delete</button>
  
      </li> 
   )
  }
}

export default TodoItem;
