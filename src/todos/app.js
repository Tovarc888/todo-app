import todoStore, { Filters } from '../store/todo.store'; 
import html from './app.html?raw';//Aqui se está llamando al html del archivo ./app.html y el signo de pregunta y la palabra raw hacen referencia que lo queremos en crudo
import { renderPending, renderTodos } from './use-casses';

/**
 * @param {String} elemntId
 */

const ElementIds = { //se está creando el objeto ElementIds con la propiedad TodoList que tiene como valor .todo-list que hacen refenreica a id´s de HTML que se encuentrn en el archivo app.html
    TodoList: '.todo-list',//propiedad TodoList y su valor que hace referencia a la clase en el archivo app.html .todo-list
    NewTodoInput:'#new-todo-input', // propiedad NewTodoInput y su valor que hace referencia al id en el archivo app.html #new-todo-input
    DeleteCompletedTodos: '.clear-completed',
    FilterLis: '.filtro',
    PendingCountLabel: '#pending-count',
}

const updatePendingCount = () =>{
    renderPending(ElementIds.PendingCountLabel);
}

export const App = (elemntId) => { //Se está creando la función con el modo flecha gorda llamada app y tiene como parametro elemntId


    const displayTodos = () => { //se genera una función de flecha gorda llamada displayTodos sin parametros
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());  //se crea una constante todos y se está realizando una importación del archivo todo-store llamando a la función getTodos la cual tiene la función de poder dar libre desición al usuario poder elegir el estado de los todos que quiere a partir de los filtros adicional se envia un parametro el cual es una referencia la función getCurrentFilter el cual trae todos los id 
        renderTodos(ElementIds.TodoList, todos);// se renderiza los elementos enviando los parrametros solicitados que son los <ul></ul> que tiene como id .todo-list que es a lo que hacemos referencia a la propieddad TodoList del objetoElementsId y el arreglo de los todos 
        updatePendingCount();
    }

    //Cuando la función App() se llama 
    (()=>{
        const app = document.createElement('div');// se genera un constante llamada app la cual es igual al la variable document que llama al metodo createElement el cual crea la instancia de la etiqueta HTML que coloquemos en apostrofes simples  
        app.innerHTML=html; //se llama a la propiedad innerHTML la cual tiene como función ingresar codigo HTML y es igual a la instancia creada html la cual contiene código html         
        document.querySelector(elemntId).append( app ); // se llama la variable document la cual tiene como metodo querySelector y esta ultima solicita el parametro elemntId el cual debe tener la referencia una etiqueta HTML y se llama el metodo append el cual solicita el parametro app el cual debe tener el valor el cual se quiere agregar al HTML 
        
        displayTodos();
    })();

    //Referencias HTML

    const newDescriptionInput = document.querySelector(ElementIds.NewTodoInput); //se realiza la constante newDescriptionInput la cual tiene como valor el queryselector para hacer referencia por medio del objeto ElementIds la propiedad NewTodoInput y asi llamando al id de la etiqueta del archivo app.html
    const todoListUL = document.querySelector(ElementIds.TodoList);
    const DeleteTodoInput = document.querySelector(ElementIds.DeleteTodoInput);
    const clearCompleteButton = document.querySelector(ElementIds.DeleteCompletedTodos);
    const filterList = document.querySelectorAll(ElementIds.FilterLis);
    //Listener
    newDescriptionInput.addEventListener('keyup', (event)=>{ //se genera el evento addEventListener cuyo primer valor es para poder leer las letras que en su momento el usuario redactaria y asi tomando como acción que...
            if(event.keyCode !== 13) return;// tomando todo lo que sea diferente al keycode 13 que es el evento entonces que no retorne nada
            if(event.target.value.trim().length === 0) return;// otra condición es que se invoca el parametro event y asi mismo se llama las propiedades, target la cual llama la propiedad value 
            
            todoStore.addTodo(event.target.value);
            displayTodos();
            event.target.value='';

    });

    todoListUL.addEventListener('click', (event)=>{
        const element = event.target.closest('[data-id]');
        todoStore.toggleTodo(element.getAttribute('data-id'));
        displayTodos();
        
    });
    
    todoListUL.addEventListener('click', (event)=>{
        const isDestroyElement = event.target.className === 'destroy';
        const element = event.target.closest('[data-id]');
        if( !element || !isDestroyElement ) return;
        todoStore.deleteTodo(element.getAttribute('data-id'));
        displayTodos();
        
    });

    clearCompleteButton.addEventListener('click', ()=>{
        todoStore.deletedCompleted();
        displayTodos();
    });

    filterList.forEach(element=>{
        element.addEventListener('click',( element )=>{
            filterList.forEach(el => el.classList.remove( 'selected') );
            element.target.classList.add( 'selected' );
            console.log(element.target.text);
            
            switch(element.target.text){
                case 'Todos':
                    todoStore.setFilter(Filters.All)
                    break;
                case 'Pendientes':
                    todoStore.setFilter(Filters.Pending)
                    break;
                case 'Completados':
                    todoStore.setFilter(Filters.Completed)
                    break;
            }
            displayTodos();
        })
    });

    
}