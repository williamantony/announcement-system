/**
 * Table
 */
export const CREATE_ROW = 'CREATE_ROW'; 
export const SET_ROW_SELECTION = 'SET_ROW_SELECTION';
export const TOGGLE_SELECT_ALL_ROWS = 'TOGGLE_SELECT_ALL_ROWS';
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

export const setRowSelection = (id = null, selection = false) => {
  return dispatch => {
    if (!id) return false;

    dispatch({
      type: SET_ROW_SELECTION,
      payload: {
        id,
        selection,
      },
    });

    dispatch(checkRowSelection());

  };
};

export const toggleSelectAllRows = () => {
  return dispatch => {
    
    dispatch({
      type: TOGGLE_SELECT_ALL_ROWS,
    });

    dispatch(checkRowSelection());

  };
};
