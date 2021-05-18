import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../App.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";

import { connect } from "react-redux";

import { addToList, deleteToList } from "../redux/action";

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
      <h1 className="heading">React to redux</h1>
      <form
        className="form-data"
        method="post"
        onSubmit={(e) => onSubmitForm(e)}
      >
        <div className="wrapper">
          <input
            className="input-text"
            type="text"
            value={valueInput}
            onChange={(e) => onChangeInput(e)}
          />
          <button className="button" type="submit">
            Add to list
          </button>
        </div>
      </form>

      <ul className="ul">
        {TodoList.map((item) => {
          return (
            <li className={"li "} key={item.id}>
              {item.title}
              <AiFillCloseCircle
                className="icon"
                onClick={() => onClickIconDelete(item.id)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    TodoList: state.reducer,
  };
};

const mapActionToProps = (dispatch) => {
  let rs = "";
  return {
    actionsAdd: (id, title) => {
      rs = addToList(id, title);
      dispatch(addToList(id, title));
    },
    actionsDelete: (id) => {
      dispatch(deleteToList(id));
    },
  };
};

export default connect(mapStateToProps, mapActionToProps)(TodoList);
