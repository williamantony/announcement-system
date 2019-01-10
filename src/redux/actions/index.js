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


export const CREATE_MODAL = 'CREATE_MODAL';
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export const DESTROY_MODAL = 'DESTROY_MODAL';

export const showModal = (modalId, content = null, title = null, align = 'top') => {
  return dispatch => {
    dispatch({
      type: CREATE_MODAL,
      payload: {
        modalId,
        content,
        title,
        align,
      },
    });

    setTimeout(() => {
      dispatch({
        type: SHOW_MODAL,
        payload: {
          modalId,
        },
      });
    }, 0);
  };
};

export const hideModal = (modalId) => {
  return dispatch => {
    dispatch({
      type: HIDE_MODAL,
      payload: {
        modalId,
      },
    });

    setTimeout(() => {
      dispatch({
        type: DESTROY_MODAL,
        payload: {
          modalId,
        },
      });
    }, 500);
  };
};
