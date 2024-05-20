export default function TodoItem({
  todo,
  isWorking,
  deleteTodoItem,
  updateIsDone,
}) {
  return (
    <li key={todo.id}>
      <div>
        <p>{todo.title}</p>
        <p>{todo.contents}</p>
      </div>
      <div className="buttons">
        <button onClick={() => deleteTodoItem(todo.id)}>삭제</button>
        <button onClick={() => updateIsDone(todo.id)}>
          {isWorking ? "완료" : "취소"}
        </button>
      </div>
    </li>
  );
}
