import React from 'react'

//In an arrow func, Parameters are always passed using a single JS object {}
//Approach-2
const TodoItem = ({todo, onDelete}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button> <hr/>
    </div>
    //Bootstrap buttons are used above
  )
}

export default TodoItem