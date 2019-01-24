import uuid from 'uuid/v4';

/**
 * Notifications
 */
export const INIT_NOTIFICATION = 'INIT_NOTIFICATION';
export const CREATE_NOTIFICATION = 'CREATE_NOTIFICATION';
export const DESTROY_NOTIFICATION = 'DESTROY_NOTIFICATION';

export const initNotification = (group = 'primary') => {
  return {
    type: INIT_NOTIFICATION,
    payload: {
      group,
    },
  };
};

export const createNotification = (type = 'info', message = null, group = 'primary', expiry = null) => {
  return {
    type: CREATE_NOTIFICATION,
    payload: {
      id: uuid(),
      group,
      type,
      message,
      expiry,
    },
  };
};

export const destroyNotification = (id = null, group = 'primary') => {
  return {
    type: DESTROY_NOTIFICATION,
    payload: {
      id,
      group,
    },
  };
};
