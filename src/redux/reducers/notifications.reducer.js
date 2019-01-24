import {
  CREATE_NOTIFICATION,
  DESTROY_NOTIFICATION,
} from '../actions';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NOTIFICATION:
      return {
        ...state,
        [action.payload.group]: {
          ...state[action.payload.group],
          [action.payload.id]: {
            type: action.payload.type,
            message: action.payload.message,
            expiry: action.payload.expiry,
          },
        },
      };

    case DESTROY_NOTIFICATION:
      return {
        ...state,
        [action.payload.group]: Object.keys(state[action.payload.group]).reduce((instances, instanceId) => {
          if (instanceId !== action.payload.id) {
            return {
              ...instances,
              [instanceId]: state[action.payload.group][instanceId],
            };
          }
          return instances;
        }, {}),
      };

    default:
      return state;
  }
};
