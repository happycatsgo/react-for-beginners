import {ChangeEvent, useState} from "react";


function ToDo() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState<string[]>([]);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => setToDo(event.target.value);
  const onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((todoList) => [toDo, ...todoList]);
    setToDo("");
  };

  function onDeleteButton(indexToDelete: number) {
    setToDos(toDos => toDos.filter((_, index) => index !== indexToDelete));
  }

  return (
    <div>
      <h1>My to dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add to do</button>
      </form>
      <hr/>
      {toDos.map((item, index) =>
        <li key={index}>
          {item}
          <button onClick={() => onDeleteButton(index)}>❌</button>
        </li>)}
    </div>
  );
}

export default ToDo;