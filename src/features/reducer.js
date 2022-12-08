import { combineReducers } from 'redux';

import todos from './todos';

const initialTodos = todos();

export const todosReducer = function (state = { value: initialTodos }, action) {
  switch (action.type) {
    case 'addTodos':
      return {
        ...state,
        value: [action.payload, ...state.value]
      }
    case 'removeTodos':
      return {
        ...state,
        value: [...state.value.filter((todo) => todo.id !== action.payload)]
      }
    case 'updateTodos':
      return {
        ...state,
        value: [...state.value.map((todo) =>
          (todo.id === action.payload.id) ? { ...todo, [action.payload.prop]: action.payload.val } : { ...todo }
        )]
      }
    case 'replaceTodos':
      return {
        ...state,
        value: action.payload
      }
    default:
      return state;
  }
}
export const addTodos = value => {
  return {
    type: 'addTodos',
    payload: value
  }
};
export const removeTodos = value => {
  return {
    type: 'removeTodos',
    payload: value
  }
};
export const updateTodos = value => {
  return {
    type: 'updateTodos',
    payload: value
  }
};
export const replaceTodos = value => {
  return {
    type: 'replaceTodos',
    payload: value
  }
};
export const selectTodos = (state) => state.todos.value;


export const filterReducer = function (state = { value: false }, action) {
  switch (action.type) {
    case 'changeFilter':
      return {
        ...state,
        value: action.payload
      }
    default:
      return state;
  }
}
export const changeFilter = value => {
  return {
    type: 'changeFilter',
    payload: value
  }
};
export const selectFilter = (state) => state.filter.value;


export const createParamReducer = function (state = { value: null }, action) {
  switch (action.type) {
    case 'changeCreateParam':
      return {
        ...state,
        value: action.payload
      }
    default:
      return state;
  }
}
export const changeCreateParam = value => {
  return {
    type: 'changeCreateParam',
    payload: value
  }
};
export const selectCreateParam = (state) => state.createParam.value;


export const updateParamSlice = function (state = { value: null }, action) {
  switch (action.type) {
    case 'changeUpdateParam':
      return {
        ...state,
        value: action.payload
      }
    default:
      return state;
  }
}
export const changeUpdateParam = value => {
  return {
    type: 'changeUpdateParam',
    payload: value
  }
};
export const selectUpdateParam = (state) => state.updateParam.value;


export const titleSlice = function (state = { value: '' }, action) {
  switch (action.type) {
    case 'createTitle':
      return {
        ...state,
        value: action.payload
      }
    default:
      return state;
  }
}
export const createTitle = value => {
  return {
    type: 'createTitle',
    payload: value
  }
};
export const selectTitle = (state) => state.title.value;


export const taskSlice = function (state = { value: '' }, action) {
  switch (action.type) {
    case 'createTask':
      return {
        ...state,
        value: action.payload
      }
    default:
      return state;
  }
}
export const createTask = value => {
  return {
    type: 'createTask',
    payload: value
  }
};
export const selectTask = (state) => state.task.value;


export const formSlice = function (state = { value: false }, action) {
  switch (action.type) {
    case 'controlForm':
      return {
        ...state,
        value: action.payload
      }
    default:
      return state;
  }
}
export const controlForm = value => {
  return {
    type: 'controlForm',
    payload: value
  }
}
export const selectForm = (state) => state.form.value;


export default combineReducers({
  filter: filterReducer,
  createParam: createParamReducer,
  updateParam: updateParamSlice,
  todos: todosReducer,
  form: formSlice,
  title: titleSlice,
  task: taskSlice
});
