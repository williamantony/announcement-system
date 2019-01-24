/**
 * Modals
 */
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
