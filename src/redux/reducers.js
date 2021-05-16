const initState = [];

const reducers = (state = initState, action) => {
  switch (action.type) {
    case "add":
      const newStateAdd = [...state];
      newStateAdd.push(action.payload);
      return newStateAdd;
    case "delete":
      const newStateDelete = [...state];
      const result = newStateDelete.filter((item) => {
        return item.id !== action.payload;
      });
      return result;
    default:
      return state;
  }
};

export default reducers;
