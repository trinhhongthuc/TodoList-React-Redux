const initState = [];

const reducers = (state = initState, action) => {
  switch (action.type) {
    case "ADD_REDUCER":
      const newStateAdd = [...state];
      newStateAdd.push(action.payload);

      return newStateAdd;
    case "DELETE_REDUCER":
      const newStateDelete = [...state];
      const result = newStateDelete.filter((item) => {
        return item.id !== action.payload;
      });
      return result;

    case "iscomple":
      const newStateComple = [...state];
      const resultComple = newStateComple.map((item) => {
        if (item.id !== action.payload) {
          item.isComplete = !item.isComplete;
        }
      });
      return result;
    default:
      return state;
  }
};

export default reducers;
