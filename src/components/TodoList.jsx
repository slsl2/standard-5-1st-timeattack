import TodoItem from "./TodoItem";

export default function TodoList({ todos, setTodos }) {
  const deleteTodoItem = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateIsDone = (id) => {
    const updatedTodos = todos.map((todo) => {
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
    });
    setTodos(updatedTodos);
  };

  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <section>
      <div className="working-todos">
        <h2>Working</h2>
        <ul className="working-ul">
          {workingTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              isWorking={true}
              deleteTodoItem={deleteTodoItem}
              updateIsDone={updateIsDone}
            />
          ))}
        </ul>
      </div>
      <div className="done-todos">
        <h2>Done</h2>
        <ul className="done-ul">
          {doneTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              isWorking={false}
              deleteTodoItem={deleteTodoItem}
              updateIsDone={updateIsDone}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
