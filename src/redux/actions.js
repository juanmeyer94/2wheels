import * as ActionTypes from './actions-types';

export const setUser = (name, id, img) => {
  return {
    type: ActionTypes.SET_USER,
    payload: { name, id, img },
  };
};




export const addPositivePoint = (userId) => ({
  type: ActionTypes.ADD_POSITIVE_POINT,
  payload: { userId },
});

export const addNegativePoint = (userId) => ({
  type: ActionTypes.ADD_NEGATIVE_POINT,
  payload: { userId },
});

export const resetPoints = () => ({
  type: ActionTypes.RESET_POINTS,
});
