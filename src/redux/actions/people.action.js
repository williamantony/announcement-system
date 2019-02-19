import axios from 'axios';
import { createNotification, hidePreloder } from './index';
import { getCookie } from '../../helper';

export const ADD_PERSON = 'ADD_PERSON';
export const PEOPLE_SET_INFO = 'PEOPLE_SET_INFO';

export const setPersonInfo = (info) => {
  return {
    type: PEOPLE_SET_INFO,
    payload: {
      info,
    },
  };
};

export const addPerson = (name = {}, next) => {
  return async dispatch => {
    try {
      const token = await getCookie('token');
  
      if (!token) {
        throw String('Missing Token');
      }
      
      dispatch(
        setPersonInfo(name)
      );

      const response = await axios.post('http://10.0.0.50:5000/people/', {
        ...name,
        token,
      });

      if (response.data.error !== null) {
        throw String('Failed to add person details');
      }

      next({
        data: response.data.data,
      });
      
    } catch (error) {
      dispatch(
        hidePreloder()
      );

      dispatch(
        createNotification(
          'error',
          error,
          'people_set_name',
        )
      );
    }
  }
};
