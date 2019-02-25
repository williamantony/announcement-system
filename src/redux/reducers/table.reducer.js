import {
  CREATE_TABLE,
  UPDATE_TABLE,
} from '../actions';

const initialState = {
  instances: {

  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TABLE:
      return {
        ...state,
        instances: {
          ...state.instances,
          [action.payload.tableId] : {
            columns: action.payload.columns,
            rows: action.payload.rows,
            selection: [],
          },
        },
      };

    case UPDATE_TABLE:
      return {
        ...state,
        instances: {
          ...state.instances,
          [action.payload.tableId] : {
            ...state.instances[action.payload.tableId],
            ...action.payload.updateData,
          },
        },
      };

    default:
      return state;
  }
};
