import {
  CREATE_ROW,
  DELETE_ROWS,
  SET_ROW_SELECTION,
  TOGGLE_SELECT_ALL_ROWS,
  CHECK_ROW_SELECTION,
  GET_SELECTED_ROWS,
} from '../actions';

const initialState = {
  rows: {},
  selection: [],
  isSelected: false,
  isMultiSelected: false,
  isAllSelected: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ROW:
      return {
        ...state,
        rows: {
          ...state.rows,
          [action.payload.id]: {
            ...state[action.payload.id],
            isSelected: false,
          },
        },
      };

    case SET_ROW_SELECTION:
      return {
        ...state,
        rows: {
          ...state.rows,
          [action.payload.id]: {
            ...state[action.payload.id],
            isSelected: action.payload.selection,
          },
        },
      };
    
    case TOGGLE_SELECT_ALL_ROWS:
      return {
        ...state,
        isAllSelected: !state.isAllSelected,
        rows: Object.keys(state.rows).reduce((rows, row_id) => {
          return {
            ...rows,
            [row_id]: {
              ...state.rows[row_id],
              isSelected: !state.isAllSelected,
            },
          };
        }, {}),
      };

    case CHECK_ROW_SELECTION:
      return {
        ...state,
        ...(() => {

          const selection = {
            isSelected: false,
            isMultiSelected: false,
          };

          let isAllSelected = true;
  
          for (let i = 0; i < Object.keys(state.rows).length; i++) {
  
            const row_id = Object.keys(state.rows)[i];
            const row = state.rows[row_id];
  
            if (row.isSelected) {
              if (selection.isSelected) {
                selection.isMultiSelected = true;
                return selection;
              }
              selection.isSelected = true;
            } else {
              isAllSelected = false;
            }
  
            if (i === Object.keys(state.rows).length - 1) {
              return {
                ...selection,
                isAllSelected,
              };
            }
  
          }
  
        })(),
      };

    case GET_SELECTED_ROWS:
      return {
        ...state,
        selection: Object.keys(state.rows).reduce((list, row_id) => {
          if (state.rows[row_id].isSelected)
            return [ ...list, row_id ];
          return list;
        }, []),
      }
    
    case DELETE_ROWS:
      return {
        ...state,
        rows: Object.keys(state.rows).reduce((rows, row_id) => {
          const rowMatch = action.payload.rows.findIndex(id => row_id === id);
          return !rowMatch
            ? {
              ...rows,
              [row_id]: state.rows[row_id],
            } : rows;
        }, {}),
      };

    default:
      return state;
  }
};
