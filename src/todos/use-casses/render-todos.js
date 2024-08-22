
import { Todo } from '../models/todo.model'; // se está importando la clase Todo del archivo todo.model
import { createTodoHTML } from './';// se está importando la clase createTodoModel

let element;

/**
 * 
 * @param {String} elemntId 
 * @param {Todo} todos 
 */
export const renderTodos = (elemntId, todos = []) => { // se genera la función renderTodos la cual tiene como element id que hace referencia a al elemento html y todos 

    if(!element) //Si el elemento no existe entonces...
        element = document.querySelector(elemntId); // se invoca variable element y es igual a  la variable document y llamando su metodo querySelector y seleciona los elementos html que se están enviando por medio del parametro elemntId
    if (!element) throw new Error(`Element ${elemntId} not found`); //se realiza condicion si el element existe y si no enviar error por consola mencionando que no fue encontrado el elemento
    

todos.forEach(todo => {
    element.append(createTodoHTML(todo)); //se están creando las tareas por medio de esta linea
});
}