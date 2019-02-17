import {
  SHOW_PRELOADER,
  HIDE_PRELOADER,
} from '../actions';

const initialState = {
  isVisible: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PRELOADER:
      return {
        isVisible: true,
      };

    case HIDE_PRELOADER:
      return {
        isVisible: false,
      };

    default:
      return state;
  }
};
