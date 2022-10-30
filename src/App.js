import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import AddTodo from './MyComponents/AddTodo';
import React,{ useState, useEffect} from 'react';

function App() {
  let initTodo;

  if(localStorage.getItem("todos") === null) { 
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos")); // parse converts JSON to JS obj. 
  }

  //Arrow function is used here
  const onDelete = (todo) => {
    if(window.confirm("Do you want to delete this todo ?")) {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
    }
  }

  const addTodo = (title,desc) => {
    let sno;
    
    if(todos.length === 0){
      sno=0;
    }
    else{
      sno = todos[todos.length-1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    //localStorage.method(key, value);
    localStorage.setItem("todos", JSON.stringify(todos)); //stringfy converts JS obj. into a JSON string.
  }, [todos])

  return ( 
    <> 
      <Header title="Todo List" searchBar={false} /> 
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />   
      <Footer />
    </>
  );
}

export default App;