
import { useState, useId } from "react"
import './App.css'

//* 1st Input *//

function App() {

const [todos, setTodos] = useState([])
const [input, setInput] = useState('')
const [edit, setEdit] = useState('')

const handleTodo = (e) => {
  e.preventDefault()
  if(!input.trim()) return

  if (edit) {
    setTodos(
      todos.map((todo) =>
        todo.id === edit ? { ...todo, text: input } : todo
      )
    )
    setEdit('')
  } else {

  const newTodo = {
      id: crypto.randomUUID(),
      text: input,
      completed: false

  }
  setTodos([newTodo, ...todos])
    setInput('')
}
    

}

const toggleComplete = (id) => {
  setTodos (
    todos.map((todo) =>
      todo.id === id ? {...todo, completed: !todo.completed} :todo
    )
  )
}

const handleDelete = (id) => {
  setTodos(todos.filter((todo) => todo.id !==id))
}

const handleEdit = (id) => {
  const todoToEdit = todos.find((todo) => todo.id === id)
  setInput(todoToEdit.text)
  setEdit(id)
}

  return (
    <div>
    <div className="todoapp stack-large">
      <h1>Todo List</h1>
      <form onSubmit={handleTodo}>
        <input 
          type="text" 
          id="first-todo-input" 
          placeholder="Add a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        
        />
        <button
          type="submit" 
          className="btn">
          Add
        </button>
        
      </form>

      {/* End 1st Input */}




    <ul>
     {todos.map((todo) => (

      <li key={todo.id} className={todo.completed ? 'completed' : ''} >

        <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
        <input type="checkbox" />
        <button onClick={() => handleDelete(todo.id)}>🗑️</button>        
        <button onClick={() => handleEdit(todo.id)}>✏️</button>
      </li>  

     )
    )}
        


      </ul>
    
    </div>
    </div>
  );
}

export default App;
