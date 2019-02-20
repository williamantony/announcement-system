import axios from 'axios';
import { createNotification, hidePreloder } from './index';
import { getCookie } from '../../helper';

export const ADD_PERSON = 'ADD_PERSON';
export const PEOPLE_SET_INFO = 'PEOPLE_SET_INFO';

export const setPersonInfo = (person_id, info) => {
  return {
    type: PEOPLE_SET_INFO,
    payload: {
      person_id,
      info,
    },
  };
};

export const getPersonInfo = (person_id = null, returns = []) => {
  return async dispatch => {
    try {
      const token = await getCookie('token');
  
      if (!token) {
        throw String('Missing Token');
      }

      const endpoint = `http://10.0.0.50:5000/people/${person_id}`;

      const response = await axios.get(endpoint, {
        params: {
          token,
          returns,
        },
      });

      if (response.data.error !== null) {
        throw String('Failed to get person details');
      }

      dispatch(
        setPersonInfo(person_id, response.data.data)
      );

    }
    catch (error) {
      console.log(error);
    }
  }
};

export const addPerson = (person_id = null, name = {}, next) => {
  return async dispatch => {
    try {

      if (!person_id) {
        throw String('Missing Person ID');
      }

      const token = await getCookie('token');
  
      if (!token) {
        throw String('Missing Token');
      }

      dispatch(
        setPersonInfo(person_id, name)
      );

      const response = await axios.post('http://10.0.0.50:5000/people/', {
        ...name,
        person_id,
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
