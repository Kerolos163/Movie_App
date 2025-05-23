import rTypes from "../utils/types";
const HomeReducer = (state, action) => {
  // console.error("state => ", state);
  // console.error("action => ", action);

  if (action.type === rTypes.GETALLupcoming) {
    return action.payload;
  }

};

export default HomeReducer;
