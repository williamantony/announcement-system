import {
  PEOPLE_SET_INFO,
} from '../actions';

const initialState = {
  isSelected: false,
  selection: [],
  entries: {

  },
  info: {

  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PEOPLE_SET_INFO:
      return {
        ...state,
        entries: {
          ...state.entries,
          [action.payload.person_id]: {
            ...state.entries[action.payload.person_id],
            ...action.payload.info,
          },
        },
      };

    default:
      return state;
  }
};
