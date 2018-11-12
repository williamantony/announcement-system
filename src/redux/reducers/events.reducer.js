import {
  CREATE_EVENT,
  SAVE_EVENT,
} from '../actions';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {

    case CREATE_EVENT:
      if (typeof state[state.length - 1] === 'object') {
        if (state[state.length - 1].entries.length === 0) {
          return state;
        }
      }
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          note: '',
          entries: [],
        }
      ];

    case SAVE_EVENT:
      return state;

    default:
      return state;
  }
};
