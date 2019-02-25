/**
 * Table
 */
export const CREATE_TABLE = 'CREATE_TABLE';
export const UPDATE_TABLE = 'UPDATE_TABLE';
export const SELECT_TABLE_ROW = 'SELECT_TABLE_ROW';

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

export const selectTableRow = (tableId = null, rowId) => {
  return (dispatch, getState) => {

    if (tableId === null)
      return false;

    const table = getState().table.instances[tableId];
    const isSelected = table.selection.findIndex(item => item === rowId) !== -1;

    const selection = (isSelected)
      ? table.selection.filter(id => id !== rowId)
      : [ ...table.selection, rowId ];

    dispatch({
      type: SELECT_TABLE_ROW,
      payload: {
        tableId,
        rowId,
        selection,
      },
    });

  };
};
