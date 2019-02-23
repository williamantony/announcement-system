import axios from 'axios';
import { createNotification, showPreloader, hidePreloder, deleteRows } from './index';
import { getCookie } from '../../helper';

export const ADD_NEW_PERSON = 'ADD_NEW_PERSON';
export const GET_PERSON_INFO = 'GET_PERSON_INFO';
export const GET_PEOPLE_LIST = 'GET_PEOPLE_LIST';
export const DELETE_PEOPLE = 'DELETE_PEOPLE';
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
      dispatch(showPreloader());

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

      dispatch({
        type: GET_PERSON_INFO,
        payload: response.data.data,
      })

      dispatch(hidePreloder());

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

      dispatch({
        type: ADD_NEW_PERSON,
        payload: { name },
      });

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
      dispatch(hidePreloder());

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

export const getPeopleList = () => {
  return async dispatch => {
    try {
      dispatch(showPreloader());

      const token = await getCookie('token');
  
      if (!token) {
        throw String('Missing Token');
      }

      const endpoint = `http://10.0.0.50:5000/people/`;

      const response = await axios.get(endpoint, {
        params: {
          token,
        },
      });

      if (response.data.error !== null) {
        throw String('Failed to get person details');
      }

      dispatch({
        type: GET_PEOPLE_LIST,
        payload: response.data.data,
      });

      dispatch(hidePreloder());

    }
    catch (error) {
      console.log(error);
    }
  }
};

export const deletePeople = (people = '', next) => {
  return async dispatch => {
    try {
      dispatch(showPreloader());
  
      const token = await getCookie('token');
  
      if (!token) {
        throw String('Missing Token');
      }
  
      const endpoint = `http://10.0.0.50:5000/people/`;
  
      const response = await axios.delete(endpoint, {
        params: {
          token,
          people,
        },
      });

      if (response.data.error !== null) {
        throw String('Failed to delete people');
      }

      if (response.data.data.status === 'COMPLETE') {

        dispatch({
          type: DELETE_PEOPLE,
          payload: {
            people: response.data.data.people,
          },
        });

        next();

      } else {
        console.log('status::INCOMPLETE not implemented');
      }

      dispatch(hidePreloder());
      
    } catch (error) {

      console.log(error);
      
    }
  };
};
