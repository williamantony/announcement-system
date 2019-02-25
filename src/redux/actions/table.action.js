/**
 * Table
 */
export const CREATE_TABLE = 'CREATE_TABLE';
export const UPDATE_TABLE = 'UPDATE_TABLE';
export const SET_TABLE_SELECTION = 'SET_TABLE_SELECTION';

export const createTable = (tableId = null, config = {}) => {
  return dispatch => {

    if (tableId === null)
      return false;

    dispatch({
      type: CREATE_TABLE,
      payload: {
        tableId,
        columns: config.columns || [],
        rows: config.rows || [],
      },
    });

  };
};

export const updateTable = (tableId = null, updateData = {}) => {
  return dispatch => {

    if (tableId === null)
      return false;

    dispatch({
      type: UPDATE_TABLE,
      payload: {
        tableId,
        updateData,
      },
    });

  };
};

export const toggleRowSelection = (tableId = null, rowId) => {
  return (dispatch, getState) => {

    if (tableId === null)
      return false;

    let selection = getState().table.instances[tableId].selection;
    const isSelected = selection.findIndex(item => item === rowId) !== -1;

    selection = (isSelected) ? selection.filter(id => id !== rowId) : [ ...selection, rowId ];

    dispatch({
      type: SET_TABLE_SELECTION,
      payload: {
        tableId,
        rowId,
        selection,
      },
    });

  };
};
