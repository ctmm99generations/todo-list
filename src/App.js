// import Todo from "./components/Todo"

function App(props) {
  return (
    <div id="todoapp">
      
      <h1>TodoList</h1>

      <form>
        <input type="text" id="new-todo-input" />
        <button type="submit" id="addTaskBtn">Add Task</button>
      </form>

      <button type="button" id="deleteAllBtn">Delete All Task</button>

      <div id="table">
        <h2>tasks</h2>
        <ul id="taskList" >
        </ul>
      </div>

    </div>
  );
}

export default App;
