
export const reducerActionTypes = {
  TEST_TYPE: "TEST"
};

export const dispatchActions = {
  testAction: (dispatch) => {
    dispatch({type: reducerActionTypes.TEST_TYPE});
  } 
};
