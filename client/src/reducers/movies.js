import { GET_MOVIES } from '../constants/actionTypes';

const movies = (movies = [], action) => {
  switch (action.type) {
    case GET_MOVIES:
      return action.payload ? action.payload : movies;
    default:
      return movies;
  }
};

export default movies;