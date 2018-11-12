export const CREATE_EVENT = 'CREATE_EVENT';
export const ADD_EVENT_ENTRY = 'ADD_EVENT_ENTRY';
export const SAVE_EVENT = 'SAVE_EVENT';

export const createEvent = (eventId, title) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch({
        type: CREATE_EVENT,
        payload: {
          id: eventId,
          title,
        },
      });

      resolve();
    });
  };
};

export const addEventEntry = (eventId) => {
  return {
    type: ADD_EVENT_ENTRY,
    payload: {
      eventId,

    },
  };
};

export const saveEvent = (eventId) => {
  return {
    type: SAVE_EVENT,
    payload: {
      id: eventId,
    },
  };
};
