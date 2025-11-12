import './App.css'


//* 1st Input *//

function App(props) {
  return (
    <div className="todoapp stack-large">
      <h1>Create Todo List</h1>
      <input type="text" id="first-todo-input" name="text" />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>

      {/* End 1st Input */}https://github.com/lesliewilson1/ALAB_320H.9.1_Building_a_Todo_List


      {/* Create Mockup */}

      <div>
        <input id="todo-0" type="checkbox" />
        <label className="todo-label" htmlFor="todo-0">
          Create Mockup
        </label>
      </div>

      <div className="btn-group">
        <button type="button" className="btn">
          Edit
        </button>
        <button type="button" className="btn btn__danger">
          Delete
        </button>
      </div>

      {/* End Mockup */}


      {/* Create Static */}

      <div className="c-cb">
        <input id="todo-1" type="checkbox" />
        <label className="todo-label" htmlFor="todo-1">
          Create Static Layout
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit
        </button>
        <button type="button" className="btn btn__danger">
          Delete
        </button>
      </div>

      {/* End Static */}


      {/* 2nd Input */}

      <input id="todo-2" type="checkbox" />
      <input type="text" id="second-todo-input" name="text" />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>

      {/* 2nd Input */}
      

    </div>
  );
}

export default App;
