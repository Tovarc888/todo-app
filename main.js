import './style.css' // Se está importando el archivo style.css
import {App} from './src/todos/app';  // Se está importando lafunción app 
import  todoStore  from './src/store/todo.store'; //se están importando todos las funciones que se encuentran en el export default del archivo todo.store

todoStore.initStore(); // aqui está la inicialización del store

App('#app');//Aqui se está llamando el html con el parametro que es el id del div del archivo index.html


