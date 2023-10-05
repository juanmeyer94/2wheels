// reducer.js
import * as ActionTypes from './actions-types';

const initialState = {
  usuarios: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_USER:
      const newUser = {
        name: action.payload.name,
        id: action.payload.id,
        img: action.payload.img,
        points: 0, 
      };
      return {
        ...state,
        usuarios: [...state.usuarios, newUser],
      };
    case ActionTypes.ADD_POSITIVE_POINT:
      return {
        ...state,
        usuarios: state.usuarios.map((user) =>
          user.id === action.payload.userId
            ? {
                ...user,
                points: user.points + 10,
              }
            : user
        ),
      };
    case ActionTypes.ADD_NEGATIVE_POINT:
      return {
        ...state,
        usuarios: state.usuarios.map((user) =>
          user.id === action.payload.userId
            ? {
                ...user,
                points: user.points + 10,
              }
            : user
        ),
      };
    case ActionTypes.RESET_POINTS:
      return {
        ...state,
        usuarios: state.usuarios.map((user) => ({
          ...user,
          points: 0,
        })),
      };
    default:
      return state;
  }
};

export default reducer;
