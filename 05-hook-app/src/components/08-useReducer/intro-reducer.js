console.log('Introduccion a reducer.');

const initialState = [{
    id: 1,
    task: "comprar pan",
    done: false
}];

const todoReducer = (state = initialState, action)=>{
    if(action?.type === 'agregar'){
        return [...state, action.payload];
    }

    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    task: "comprar agua",
    done: false
};

const toDoActionAdd = {
    type: 'agregar',
    payload: newTodo
};

todos = todoReducer(todos, toDoActionAdd)

console.log(todos); 