import { Todo } from "../models/todo.model";// Se importa la clase todo 


/**
 * 
 * @param {Todo} todo 
 */



export const createTodoHTML = (todo) => { //se crea función con nombre createTodoHTML con parametro todo 

    if(!todo) throw new Error("A TODO object is required"); //condicional if que menciona si todo está vacio se envía error por consola que el objeto todo es requerido

    const html = `
                <div class="view">
                    <input class="toggle" type="checkbox" ${todo.done? 'checked': ''}>
                    <label>${todo.description}</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Create a TodoMVC template">
            `// aqui se crea una constante llamada HTLM y su valor entre backtic está escrito el html del todo que se enlista con el estado que es todo.done y la descripción que es la descripción del todo
    const liElelement = document.createElement('li'); // se crea constante liElement y su valor es la variable document y se llama el metodo createElement y solicitando la creación de la etiqueta <li></li>
    liElelement.innerHTML = html; // se llama la propiedad innerHTML para crear el HTML y el texto que se encuentra en el valor de la variable HTML

    liElelement.setAttribute('data-id', todo.id); // se establece el id del //TODO por medio del metodo setAtribute 

    if(todo.done)liElelement.classList.add('completed'); 




    return liElelement;// se retorna el elemento liElelement
}