const initialState = [{
  id: 1,
  todo: "Comprar pan",
  done: false
}];


const todoReducer = ( state = initialState, action) => {

  if( action?.type === 'agregar') {
    return [ ...state, action.payload ]
  }
  return state
}

const newTodo = {
  id: 2,
  todo: "Comprar leche",
  done: false
}

const agregarTodoAction = {
  type: 'agregar',
  payload: newTodo
}

let todos = todoReducer(initialState, agregarTodoAction);

console.log(todos)