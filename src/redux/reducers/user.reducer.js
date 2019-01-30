import {
  USER_REGISTER_EMAIL,
  USER_ACCOUNT_LOGIN,
  USER_SET_PASSWORD,
  USER_VERIFICATION,
} from '../actions';

const initialState = {
  user_id: null,
  isVerified: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER_EMAIL:
      return {
        ...state,
        ...action.payload,
      };

    case USER_ACCOUNT_LOGIN:
      return state;

    case USER_SET_PASSWORD:
      return state;

    case USER_VERIFICATION:
      return {
        isVerified: action.payload.isVerified,
      };

    default:
      return state;
  }
};
