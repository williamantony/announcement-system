import axios from 'axios';
import history from '../../history';
import { createNotification } from './notifications.action';
import { getCookie, setCookie, clearCookie } from '../../helper';

/**
 * User
 */
export const USER_REGISTER_EMAIL = 'USER_REGISTER_EMAIL';
export const USER_ACCOUNT_LOGIN = 'USER_ACCOUNT_LOGIN';
export const USER_ACCOUNT_SIGNOUT = 'USER_ACCOUNT_SIGNOUT';
export const USER_SET_PASSWORD = 'USER_SET_PASSWORD';
export const USER_VERIFICATION = 'USER_VERIFICATION';

export const userRegisterEmail = (email, firstname, lastname) => {
  return async dispatch => {
    try {
      const response = await axios.post('http://10.0.0.50:5000/user/', {
        email,
        firstname,
        lastname,
      });

      console.log(response);

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
  return async dispatch => {
    try {
      const response = await axios.post('http://10.0.0.50:5000/user/login/', {
        username,
        password,
      });

      const {
        data,
        error,
      } = response.data;

      if (error !== null) {
        if (new RegExp(/^INVALID_USERNAME_ERROR|WRONG_PASSWORD_ERROR$/gi).test(error)) {
          dispatch(
            createNotification(
              'error',
              'Invalid credentials. Please try again.',
              'account_login',
            )
          );
        } else {
          throw new Error('Unknown Error');
        }
      } else {
        if (data.token) {
          await setCookie('token', data.token, 30);
          dispatch(
            createNotification(
              'success',
              'Authentication Successful',
              'account_login',
            )
          );
          setTimeout(() => {
            history.push('/dashboard');
          }, 1000);
        } else {
          throw new Error('Unknown Error');
        }
      }
    } catch (error) {
      dispatch(
        createNotification(
          'error',
          'Unknown error - please check back later.',
          'account_login',
        )
      );
    }
  };
};

export const userSignOut = async () => {
  return async dispatch => {
    dispatch(
      createNotification(
        'success',
        'Signed Out - Redirecting in 2s',
        'account_signout',
      )
    );
    await clearCookie('token');
    setTimeout(() => {
      history.push('/login');
    }, 2000);
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

export const userVerifyToken = () => {
  return async dispatch => {
    try {
      const token = await getCookie('token');

      if (!token) {
        throw String('Missing Token');
      }

      const response = await axios.post('http://10.0.0.50:5000/user/verify/', {
        token,
      });

      if (response.data.error !== null) {
        throw String('Verification failed - invalid/expired token');
      }

      dispatch(
        userVerification(true)
      );

      dispatch(
        createNotification(
          'success',
          'Email address verified',
          'account_verify_email',
        )
      );

      if (response.data.data.hasPassword === false) {

        setTimeout(() => {
          history.push('/password');
        }, 1000);

      }
    } catch (error) {

      dispatch(
        userVerification(false)
      );

      dispatch(
        createNotification(
          'error',
          error,
          'account_verify_email',
        )
      );

    }
  };
};

export const userSetPassword = (password) => {
  return dispatch => {
    try {

      dispatch(
        createNotification(
          'info',
          'Replacing your current password',
          'account_choose_password',
        )
      );

      setTimeout(async () => {

        const token = await getCookie('token');
  
        if (!token) {
          throw String('Missing Token');
        }
  
        const response = await axios.post('http://10.0.0.50:5000/user/password/', {
          password,
          token,
        });
  
        if (response.data.error !== null) {
          throw String('Attempt to change password failed');
        }
  
        await clearCookie('token');
  
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

      }, 250);

    } catch (error) {

      dispatch(
        createNotification(
          'error',
          error,
          'account_choose_password',
        )
      );

    }
  };
};
