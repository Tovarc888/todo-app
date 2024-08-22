import todoStore from '../store/todo.store'; 
import html from './app.html?raw';
import { renderTodos } from './use-casses';

/**
 * @param {String} elemntId
 */

const ElementIds = { //se está creando el objeto ElementIds con la propiedad TodoList que tiene como valor .todo-list
    TodoList: '.todo-list',//propiedad TodoList y su valor .todo-list
}


export const App = (elemntId) => { //Se está creando la función con el modo flecha gorda llamada app y tiene como parametro elemntId


    const displayTodos = () => { //se genera una función de flecha gorda llamada displayTodos sin parametros
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());  //se crea una constante todos y se está realizando una importación del archivo todo-store llamando a la función getTodos la cual tiene la función de poder dar libre desición al usuario poder elegir el estado de los todos que quiere a partir de los filtros adicional se envia un parametro el cual es una referencia la función getCurrentFilter el cual trae todos los id 
        renderTodos(ElementIds.TodoList, todos);// se renderiza los elementos enviando los parrametros solicitados que son los <ul></ul> que tiene como id .todo-list que es a lo que hacemos referencia a la propieddad TodoList del objetoElementsId y el arreglo de los todos 
        
    }

    //Cuando la función App() se llama 
    (()=>{
        const app = document.createElement('div');// se genera un constante llamada app la cual es igual al la variable document que llama al metodo createElement el cual crea la instancia de la etiqueta HTML que coloquemos en apostrofes simples  
        app.innerHTML=html; //se llama a la propiedad innerHTML la cual tiene como función ingresar codigo HTML y es igual a la instancia creada html la cual contiene código html
        document.querySelector(elemntId).append( app ); // se llama la variable document la cual tiene como metodo querySelector y esta ultima solicita el parametro elemntId el cual debe tener la referencia una etiqueta HTML y se llama el metodo append el cual solicita el parametro app el cual debe tener el valor el cual se quiere agregar al HTML 
        displayTodos();
    })();



}