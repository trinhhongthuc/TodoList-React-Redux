export const addToList = (id, title) => {
  return {
    type: "ADD_SAGA",
    payload: {
      title: title,
      id: id,
    },
  };
};

export const deleteToList = (id) => {
  return {
    type: "DELETE_SAGA",
    payload: id,
  };
};
