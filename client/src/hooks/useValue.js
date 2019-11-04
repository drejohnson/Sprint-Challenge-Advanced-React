import { useReducer } from 'react';

const initialState = (initialValue = null) => {
  return {
    value: null,
    fetching: initialValue === null,
  };
};

const reducer = (action, state) => {
  switch (action.type) {
    case 'VALUE':
      return {
        ...state,
        value: action.value,
        fetching: false,
        error: undefined,
      };
    case 'ERROR':
      return {
        ...state,
        value: null,
        fetching: false,
        error: action.value,
      };
    default:
      return state;
  }
};

const useValue = (defaultValue = null) => {
  const [state, dispatch] = useReducer(reducer, initialState(defaultValue));

  const setValue = value => {
    dispatch({ type: 'VALUE', value });
  };

  const setError = error => {
    dispatch({ type: 'ERROR', error });
  };

  return {
    value: state.value,
    fetching: state.fetching,
    error: state.error,
    setValue,
    setError,
  };
};

export default useValue;
