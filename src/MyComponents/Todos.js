import React from 'react'
import TodoItem from './TodoItem'

//Approach-1
const Todos = (props) => {
  let myStyle = {
    minHeight: '65vh',
    margin: '10px auto'
  }
  
  return (
    <div className='container my-3' style={myStyle}>
      <br/>
      <h3 className='my-3'>Todo List</h3> <hr/>
      {props.todos.length===0 ? "No Todos to display" : 
       props.todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> 
      }
      )}
    </div>
  )
}

export default Todos