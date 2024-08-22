import { v4 as uuid} from "uuid"; //Importación de libreria uuid


export class Todo { // se genera una clase llamada Todo
    /**
     * 
     * @param {String} description 
     */
    constructor(description){ // se genera constructor con un parametro denominado Description
        this.id = uuid(); // se genera propiedad cuyo valor viene del uuid que es un identificador unico 
        this.description= description; // se genera la propiedad description cuyo valor es el parametro que se solicita en el constructor description
        this.done = false; //se genera propiedad done cuyo valor es boolean false que hace referencia al estado del Todo
        this.createdAt = new Date(); //se genera propiedad CreatedAt cuyo valor es una instancia de la clase Date de js devolviendo la fecha de la creación del Todo
    }

}