import { Todo } from '../todos/models/todo.model';


 const Filters = { //se está generando un objeto llamado Filters y tiene 3 propiedades las cuales son All con su valor 'all', Completed con su valor 'Completed' y la tercera es Pending cuyo valor es 'Pending'
    All: 'all', //propiedad 
    Completed: 'Completed', // propiedad
    Pending: 'Pending' // propiedad
}




 const state = { //se genera un objeto llamado state
    todos: [//una de las propiedades del objeto state es todos y es un arreglo que está generando nuevas instancias de la clase Todo
        new Todo('Piedra del alma'), //nueva instancia clase Todo
        new Todo('Piedra del infinito'), //nueva instancia clase Todo
        new Todo('Piedra del tiempo'), //nueva instancia clase Todo
        new Todo('Piedra del poder'), //nueva instancia clase Todo
        new Todo('Piedra del realidad'), //nueva instancia clase Todo
    ],
    filter: Filters.All, // la otra propiedad de state es filter que tiene como valor la referencia del objeto filter y llamando a su propiedad All con valor all
}


 const initStore = () => { // sirve para indicar la inicialización del store

    console.log(state);
    console.log('InitStore');
    
}

const loadStore = () => {
    throw new Error ('No implementadoo');
}

/**
 * 
 * @param {String} description 
 */

const getTodos = (filter = Filters.All) =>{ // se genera función con flecha gorda llamada getTodos y tiene como parametro filter que por defecto tiene un valor Filters.All que corresponde a la propiedad ALL del objeto Filters cuyo valor es 'all'
    switch (filter) { //se realiza switch con parametro filter
        case Filters.All:
            return [...state.todos];//en el primer caso Filters.All se retorna todos los elementos del array en un nuevo arreglo
        case Filters.Completed:
            return state.todos.filter(todo => !todo.done); //en el segundo caso Filters.Completed se llama por medio del array todos el metodo filter cuya función es devolver un array a partir de una condición y la condición en este caso es que si en la nueva instancia Todo la propiedad .done es true ya que en el momento en que se creo el constructor esta propiedad nace como false es decir NO COMPLETA
        case Filters.Pending:
            return state.todos.filter (todo =>  todo.done === false); //En el tercer caso Filters.Pending se llama por medio del array todos el metodo filter cuya función es devolver un array a partir de una condición y la condición en este caso es que si la la nueva instancia Todo la propiedad .done es false entonces este todo está pendiente por hacer 
        default:
        throw new Error(`Option ${filter} is not valid.`); // Este throw new Error es por si el valor del filter que se ha enviado no existe y se muestra un mensaje en la consola
        
    }
}


const addTodo = (description) => { // se realiza una función llamada addTodo con el parametro description el cual genera la adición de un nuevo Todo
    
    if( description === false ) throw new Error ('Description is required');// se genera una condición if() donde si description está vacia se lanzará un error via consola donde se expecifica que se requiere la descripción
    state.todos.push (new Todo(description)); // se genera una referencia del objeto state referenciando la propieddad todos que es un arreglo y se llama el metodo push para ingresar un nuevo elemento a dicho arreglo cuyo valor del push se crea generando una nueva instancia de la clase Todo
}   
/**
 * 
 * @param {String} todoId 
 */
const toggleTodo = (todoId) => { //se genera la función toggleTodo con el parametro todoId esta función cambia el estado de un id de un todo dado
    state.todos = state.todos.map(todo=>{ // aqui se está haciendo referencia a la propiedad todos del objeto state que es igual a la misma referencia de la propiedad todos del objeto state el cual al mismo tiempo se invoca el metodo .map el cual retorna un nuevo arreglo a partir de la condición dada 
        if (todo.id === todoId) {//...la condición dada es que si el parametro todo que hace referencia a la clase todo llamando a la propiedad id es igual al todoId o parametro solicitado 
            todo.done = !todo.done;//si la condición se cumple entonces se cambiará el estado de false a true o de true a false
        }
        return todo; // al final la condición retorna el todo 
    });
}


const deleteTodo = (todoId) => { // se genera la función deleteTodo solicitando el parametro todoId le cual funciona para borrar un todo a partir del id dado
    state.todos = state.todos.filter(todo=> todo.id !==todoId) // aqui se invoca la propiedad todos del objeto state que es igual a la propiedad todos que es un arreglo del objeto state y se llama la propiedad filter el cual funciona en que se retorne todos los id que sean diferentes al id ingresado
}


const deletedCompleted = () => {
    state.todos = state.todos.filter(todo=> todo.done)//se genera la función deleteCompleted que funciona para eliminar todos los todos qu tengan como estado completdo, es decir que como en la función deleteTodo se retorna todos los id que tengan como estado pendiente o estado false
}

const setFilter = (newFilter = Filters.All) => { // se genera función setFilter el cual tiene como parametro newFilter igual a Filters.All el cual hace refencia a que se listen todos por defecto y tiene como regla que el valor que ingresemos sea de valor filter
    state.filter = newFilter; 
}

const getCurrentFilter = () => { //se genera una función getCurrentFilter el cual no pide parametros y retorna el filtro por defecto el cual es All
    return state.filter;
    throw new Error ('No implementado');
}


export default{ // se está exportando todas las funciones que están entre las llaves
    addTodo,
    initStore,
    loadStore,
    deletedCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    setFilter,
    toggleTodo,
    
}
