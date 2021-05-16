import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../App.css";
import { AiFillCloseCircle } from "react-icons/ai";
const TodoList = ({ TodoList, actionsAdd, actionsDelete }) => {
  const [valueInput, setValueInput] = useState("");

  const onChangeInput = (e) => {
    setValueInput(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (valueInput === "") return;

    actionsAdd(uuidv4(), valueInput);
    setValueInput("");
  };

  const onClickIconDelete = (id) => {
    actionsDelete(id);
  };

  return (
    <div>
      <h1>React to redux</h1>
      <form method="post" onSubmit={(e) => onSubmitForm(e)}>
        <div className="wrapper">
          <input
            type="text"
            value={valueInput}
            onChange={(e) => onChangeInput(e)}
          />
          <button type="submit">Add to list</button>
        </div>
      </form>

      <ul>
        {TodoList.map((item) => {
          return (
            <li key={item.id}>
              {item.title}{" "}
              <AiFillCloseCircle onClick={() => onClickIconDelete(item.id)} />{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
