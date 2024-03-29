import React, { useState } from "react";

const Todo = () => {
  function handleKeyDown(e, i) {
    if (e.key === "Enter") {
      createTodoAtIndex(e, i);
    }
    if (e.key === "Backspace" && todos[i].content === "") {
      e.preventDefault();
      return removeTodoAtIndex(i);
    }
  }
  function createTodoAtIndex(e, i) {
    const newTodos = [...todos];
    newTodos.splice(i + 1, 0, {
      content: "",
      isCompleted: false
    });
    setTodos(newTodos);
    setTimeout(() => {
      document.forms[0].elements[i + 1].focus();
    }, 0);
  }
  const removeTodoAtIndex = i => {
    if (i === 0 && todos.length === 1) return;
    setTodos(todos =>
      todos.slice(0, i).concat(todos.slice(i + 1, todos.length))
    );
    setTimeout(() => {
      document.forms[0].elements[i - 1].focus();
    }, 0);
  };

  const updateTodoAtIndex = (e, i) => {
    const newTodos = [...todos];
    newTodos[i].content = e.target.value;
    setTodos(newTodos);
  };
  function toggleTodoCompleteAtIndex(index) {
    const temporaryTodos = [...todos];
    temporaryTodos[index].isCompleted = !temporaryTodos[index].isCompleted;
    setTodos(temporaryTodos);
  }
  const [todos, setTodos] = useState([
    {
      key: 1,
      content: "Pickup dry cleaning",
      isCompleted: true
    },
    {
      key: 2,
      content: "Get haircut",
      isCompleted: false
    },
    {
      key: 3,
      content: "Build a todo app in React",
      isCompleted: false
    }
  ]);
  return (
    <form className="todo-list">
      {todos.map((todo, i) => (
        <ul key={todo.key}>
          <div className={`todo ${todo.isCompleted && "todo-is-completed"}`}>
            <div
              className={"checkbox"}
              onClick={() => toggleTodoCompleteAtIndex(i)}
            >
              {todo.isCompleted && <span>&#x2714;</span>}
            </div>
            <input
              type="text"
              value={todo.content}
              onKeyDown={e => handleKeyDown(e, i)}
              onChange={e => updateTodoAtIndex(e, i)}
            />
          </div>
        </ul>
      ))}
    </form>
  );
};
export default Todo;
