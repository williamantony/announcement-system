import {
  ADD_NEW_PERSON,
  GET_PERSON_INFO,
  GET_PEOPLE_LIST,
  PEOPLE_SET_INFO,
} from '../actions';

const initialState = {
  isSelected: false,
  selection: [],
  entries: {},
  person: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_PERSON:
      return {
        ...state,
        person: action.payload,
      };

    case GET_PERSON_INFO:
      return {
        ...state,
        person: {
          ...state.person,
          ...action.payload,
        },
      };

    case GET_PEOPLE_LIST:
      return {
        ...state,
        entries: action.payload,
      };

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
