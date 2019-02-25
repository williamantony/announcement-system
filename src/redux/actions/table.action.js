/**
 * Table
 */
export const CREATE_TABLE = 'CREATE_TABLE';
export const UPDATE_TABLE = 'UPDATE_TABLE';

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
