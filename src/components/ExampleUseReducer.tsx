import React, { useReducer } from 'react';

interface IReducerStates {
  name: string | undefined;
  age: number | undefined;
}

const INITIALIZATION_STATES: IReducerStates = {
  name: 'default',
  age: 0,
};

interface IAction {
  type: string;
  payload?: {
    [prop: string]: any; // index signature
  };
}

const reducer = (state: IReducerStates, action: IAction) => {
  switch (action.type) {
    case ACTION_TYPES.SET_NAME:
      return {
        ...state,
        name: action.payload?.['name'],
      };
    case ACTION_TYPES.SET_AGE:
      return {
        ...state,
        age: action.payload?.['age'],
      };
    default:
      return {
        ...state,
      };
  }
};

interface IActionTypes {
  SET_NAME: string;
  SET_AGE: string;
}

const ACTION_TYPES: IActionTypes = {
  SET_NAME: 'SET_NAME',
  SET_AGE: 'SET_AGE',
};

const actions = {
  setNameAction(name: string | undefined) {
    return {
      type: ACTION_TYPES.SET_NAME,
      payload: {
        name,
      },
    };
  },
  setAgeAction(age: number | undefined) {
    return {
      type: ACTION_TYPES.SET_AGE,
      payload: {
        age,
      },
    };
  },
};

export default function ExampleUseReducer() {
  const [states, dispatch] = useReducer(reducer, INITIALIZATION_STATES);
  return (
    <div style={{ border: '1px dotted pink', padding: '4px' }}>
      <p>useReducer()</p>
      <p>my name is {states.name}</p>
      <p>my age is {states.age}</p>
      <div>
        <button onClick={() => dispatch(actions.setNameAction('홍길동'))}>이름 변경</button>
        <button onClick={() => dispatch(actions.setAgeAction(20))}>나이 변경</button>
      </div>
      <hr />
    </div>
  );
}
