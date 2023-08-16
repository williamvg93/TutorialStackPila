class Stack {
    constructor(){
        /* Se inicia la variable o propiedad "top" con el valor de null, cuado se realice un "push", el valor de top cambaira al valor que se envie desde la clase node(element), esto se realizará en el metodo "push" de la clase "Stack" */
        this.top = null
    }
    /* Metodo para agregar elementos(datos) a la clase stack, adicionalmenete se le agrega el valor del nuevo "elemento" node a "top"*/
    push(element) {
        /* Se crea o inicializa la instancia de Node(clase Node) */
        let node = new Node(element, this.top)
        /* Con esta linea agregamos a "top" el valor de "node", y con esto "top" siempre tendra el valor del ultimo elemento agregado a la pila */
        this.top = node
    }

    /* Metodo para eliminar el último elemento de la pila, recordar que en si no se realiza un metodo para elminar, solo indicamos que la variable 'top' tome el valor de "prev" */
    pop() {
        /* Esta linea solo se realiza en caso de que queramos retornar el valor del ultimo elemento, el cual está almacenado en la variable "top" */
        let element = this.top
        /* le asignamos a la variable "top" el valor de "prev", con esto top quedaria con el valor que se agrego antes del ultimo registro agregado */
        this.top = this.top.prev
        /* NO es necesario realizar alguna funcion para eleminar el valor de top, al momento de cambiar suy valor al "prev" javascrip automatiamente elmina el valro que tenia "top" */
        return element
    }
    /* Este metodo permite obtener el valor de la variable "top" y retornarlo xD */
    peek() {
        return this.top
    }
    /* Este metodo lo utilziamos para saber si nuestra pila está vacia, solo basta con comprobar si el valor de la variable "top" es igual a "null", "null" es el valor que "top" toma cuando se crear o instancia la clase "stack" y este no cambia a menos de que realicemos un "push"  */
    isEmpty() {
        return this.top === null
    }

    /* Este metodo lo utilizamos para imprimir por consola cada uno de los datos que están en la pila */
    print() {
        /* se crea una variable a la cual se le asignan los valores que hay en la variable 'top', con esto tendremos el ultimo valor agregado en la pila */
        let aux = this.top
        /* Recorremos todos los valores que tiene la pila hasta que llegue a null, el cual seria el primer dato asignado cuando se creo o instanció la clase "Stack"*/
        while(aux !== null) {
            console.log(aux.data)
            /* despues de imprimir el dato por consola le agregamos el valor de 'prev' a la variable 'aux' para que este entre de nuevo al bucle y confirme si este valor es diferente de null */
            aux = aux.prev
        }
    }
}

class Node {
    /* Se crean los nuevos datos con el contructor, el valor de "element" es el que queremos agregar, y el valor de "prev" sera el "top" de la clase "stack", con esto agregamos un nuevo valor y el previo o el que anteriormente se iba agregado */
    constructor(element, prev) {
        this.data = element
        this.prev = prev
    }
}