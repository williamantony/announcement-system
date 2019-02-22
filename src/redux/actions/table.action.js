/**
 * Table
 */
export const CREATE_ROW = 'CREATE_ROW'; 
export const CHECK_ROW_SELECTION = 'CHECK_ROW_SELECTION';

export const createRow = (id = null) => {
  return dispatch => {
    if (!id) return false;

    dispatch({
      type: CREATE_ROW,
      payload: {
        id,
      },
    });
  };
};

export const checkRowSelection = () => {
  return dispatch => {

    dispatch({
      type: CHECK_ROW_SELECTION,
    });

  };
};
