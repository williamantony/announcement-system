import axios from 'axios';
import { createNotification } from './notifications.action';

/**
 * User
 */
export const USER_REGISTER_EMAIL = 'USER_REGISTER_EMAIL';
export const USER_ACCOUNT_LOGIN = 'USER_ACCOUNT_LOGIN';
export const USER_SET_PASSWORD = 'USER_SET_PASSWORD';

export const userRegisterEmail = (email, firstname, lastname, history) => {
  return async dispatch => {
    try {
      const response = await axios.post('http://10.0.0.50:5000/user/', {
        email,
        firstname,
        lastname,
      });

      setTimeout(() => {
        if (response.data.error !== null) {
          dispatch(
            createNotification(
              'error',
              'Unknown error',
              'account_registration',
            )
          );
        } else {
          dispatch(
            createNotification(
              'success',
              'Registration Successful',
              'account_registration',
              3000,
            )
          );
          setTimeout(() => {
            history.push('/');
          }, 2000);
        }
      }, 500);

      return null;

    } catch (error) {
      dispatch(
        createNotification(
          'error',
          'Unknown error',
          'account_registration',
        )
      );
    }
  };
};

export const userLogin = (username, password) => {
  return {
    type: USER_ACCOUNT_LOGIN,
    payload: {
      username,
      password,
    },
  };
};

export const userSetPassword = () => {

};
