import {
  CREATE_ROW,
  CHECK_ROW_SELECTION,
} from '../actions';

const initialState = {
  rows: {},
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

    default:
      return state;
  }
};
