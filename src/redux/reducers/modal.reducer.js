import {
  CREATE_MODAL,
  SHOW_MODAL,
  HIDE_MODAL,
  DESTROY_MODAL,
} from '../actions';

const initialState = {
  instances: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_MODAL:
      return {
        instances: {
          ...state.instances,
          [action.payload.modalId]: {
            id: action.payload.modalId,
            isVisible: false,
            title: action.payload.title,
            content: action.payload.content,
            align: action.payload.align,
          },
        },
      };

    case SHOW_MODAL:
      return {
        instances: {
          ...state.instances,
          [action.payload.modalId]: {
            isVisible: true,
          },
        }
      };

    case HIDE_MODAL:
      return {
        instances: {
          ...state.instances,
          [action.payload.modalId]: {
            isVisible: false,
          },
        }
      };

    case DESTROY_MODAL:
      return {
        instances: Object.keys(state.instances).reduce((instances, instanceId) => {
          if (instanceId !== action.payload.modalId) {
            instances[instanceId] = state.instances[instanceId];
          }
          return instances;
        }, {}),
      };

    default:
      return state;
  }
};
