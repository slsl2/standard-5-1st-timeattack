import { useState } from "react";

export default function TodoForm({ setTodos }) {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const isDone = false;

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleContents = (event) => {
    setContents(event.target.value);
  };

  const addTodoItem = (e) => {
    e.preventDefault();
    if (!title.trim() || !contents.trim()) {
      alert("제목과 내용을 모두 입력해주세요");
      return;
    }
    setTodos((todos) => [
      ...todos,
      { id: Date.now(), title, contents, isDone },
    ]);
    setTitle("");
    setContents("");
  };

  return (
    <div>
      <form>
        <input
          type="text"
          onChange={handleTitle}
          value={title}
          placeholder="제목"
        ></input>
        <input
          type="text"
          onChange={handleContents}
          value={contents}
          placeholder="내용"
        ></input>
        <button type="submit" onClick={addTodoItem}>
          추가하기
        </button>
      </form>
    </div>
  );
}
