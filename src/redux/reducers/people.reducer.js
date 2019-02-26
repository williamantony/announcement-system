import {
  ADD_NEW_PERSON,
  DELETE_PEOPLE,
  GET_PERSON_INFO,
  GET_PEOPLE_LIST,
  PEOPLE_SET_INFO,
} from '../actions';

const initialState = {
  list: [],
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
        list: Object.keys(action.payload.people).reduce((list, person_id) => {
          return [
            ...list,
            {
              person_id,
              ...action.payload.people[person_id],
            },
          ];
        }, []),
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

    case DELETE_PEOPLE:
      return {
        ...state,
        list: action.payload.people,
      };

    default:
      return state;
  }
};
