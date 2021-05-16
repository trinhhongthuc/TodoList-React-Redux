import { connect } from "react-redux";

import TodoList from "../components/TodoList";

const addToList = (id, title) => {
  return {
    type: "add",
    payload: {
      title: title,
      id: id,
    },
  };
};

const deleteToList = (id) => {
  return {
    type: "delete",
    payload: id,
  };
};

const mapStateToProps = (state) => {
  return {
    // lấy nhánh đầu tiền là lấy cáy key chứ không phỉa value
    TodoList: state.reducer,
  };
};

const mapActionToProps = {
  actionsAdd: addToList,
  actionsDelete: deleteToList,
};

export default connect(mapStateToProps, mapActionToProps)(TodoList);
