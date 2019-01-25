import axios from 'axios';
import { createNotification } from './notifications.action';

/**
 * User
 */
export const USER_REGISTER_EMAIL = 'USER_REGISTER_EMAIL';
export const USER_ACCOUNT_LOGIN = 'USER_ACCOUNT_LOGIN';
export const USER_SET_PASSWORD = 'USER_SET_PASSWORD';
export const USER_VERIFICATION = 'USER_VERIFICATION';

export const userRegisterEmail = (email, firstname, lastname, history) => {
  return async dispatch => {
    try {
      const response = await axios.post('http://10.0.0.50:5000/user/', {
        email,
        firstname,
        lastname,
      });

      setTimeout(() => {
        console.log(response.data);
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

export const userVerification = (isVerified, user_id) => {
  return {
    type: USER_VERIFICATION,
    payload: {
      isVerified,
      user_id,
    },
  };
};

export const userVerifyToken = (token, history) => {
  return async dispatch => {
    try {
      const response = await axios.post('http://10.0.0.50:5000/user/verify/', {
        token,
      });

      console.log(response.data.data);

      if (response.data.error !== null) {

        dispatch(
          userVerification(false)
        );

        dispatch(
          createNotification(
            'error',
            'Verification failed - invalid/expired token',
            'account_verify_email',
          )
        );

      } else {

        dispatch(
          createNotification(
            'success',
            'Email address verified',
            'account_verify_email',
          )
        );

        if (response.data.data.hasPassword === false) {

          document.cookie = `token=${ token };path=/password;max-age=${ 60 * 1 };`;

          dispatch(
            userVerification(true)
          );

          setTimeout(() => {
            history.push('/password', { token });
          }, 1000);

        } else {

          document.cookie = `token=${ token };max-age=${ 60 * 30 };`;

          dispatch(
            userVerification(true)
          );

        }
      }
    } catch (error) {

      dispatch(
        createNotification(
          'error',
          'Unknown error - please check back later.',
          'account_verify_email',
        )
      );

    }
  };
};

export const userSetPassword = (password, token, history) => {
  return async dispatch => {
    try {
      const response = await axios.post('http://10.0.0.50:5000/user/password/', {
        password,
        token,
      });

      document.cookie = `token=;max-age=${ 0 };`;

      dispatch(
        createNotification(
          'success',
          'Saved new password',
          'account_choose_password',
        )
      );

      setTimeout(() => {
        history.push('/login');
      }, 1000);

    } catch (error) {

      dispatch(
        createNotification(
          'error',
          'Unknown error - please check back later.',
          'account_choose_password',
        )
      );

    }
  };
};
