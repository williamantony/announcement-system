import {
  PEOPLE_SET_INFO,
} from '../actions';

const initialState = {
  info: {

  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PEOPLE_SET_INFO:
      return {
        ...state,
        info: {
          ...state.info,
          ...action.payload.info,
        },
      };

    default:
      return state;
  }
};
