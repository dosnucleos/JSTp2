// Biblioteca "Matias Fernandez Burzaco" | Museo Barrio de Flores



class libro {
    constructor ( titulo, autor){
        this.titulo = titulo;
        this.autor = autor;
    }
}


// Stock de Libros Actuales en la Biblioteca

const libroJueves = new libro ("Las Viudad de los Jueves", "Pinero" );
const libroSombras= new libro ("De Amor y de Sombras", "Allende");
const libroFlores= new libro ("Flores siempre es Bello", "Danna");
const libroOrwell= new libro ("1984", "Orwell");
const libroComedia= new libro ("Divina Comedia", "Alighieri");

const arrayLibros=[];

arrayLibros.push (libroJueves);
arrayLibros.push (libroSombras);
arrayLibros.push (libroFlores);
arrayLibros.push (libroOrwell);
arrayLibros.push (libroComedia);

console.log (arrayLibros);

// Menu de Bienvenida a la Biblioteca 
function menu ()  {
    alert ( "Bienvenido/a a la Biblioteca -->> Matias Fernandez Burzaco del Museo Barrio de Flores <-- ");
    let opcion = parseInt ( prompt ( "Ingrese una opción: \n 1) Conozca todos los libros que tenemos actualmente disponibles  \n 2) Buscar Libro por autor \n 3) Agregar un nuevo titulo "));

    return opcion;


}


// Mostrar el array con todos los libros actuales 
function todosLosLibros (){
    console.log (arrayLibros);
}


// Sumar un nuevo elemento al Array
function agregarLibros (){
    let titulo = prompt ("Ingrese el nombre del libro: ");
    let autor = prompt ("Ingrese el autor del libro: ");
    let librosnuevos = new libro ( titulo, autor);
    arrayLibros.push (librosnuevos);
    console.log = arrayLibros;
}

// Buscar mediante find el autor del libro

function consultarLibros (){
    let autorLibro = prompt ("Ingrese el titulo del Libro:  ");
    let libro = arrayLibros.find (libro => libro.autor === autorLibro);

    console.log (libro);
}


// Menu para donar nuevos libros

function menudonacion (){
    let donacion = parseInt ( prompt ( "Ingrese una opción: \n 1) Si!  \n 2) No! Quiero Salir!  "));

    return donacion;

}

// Alert que aparece al momento de elegir No donar un nuevo libro

function salirDeLaBiblioteca (){
    alert ("Gracias por su visita! ");
    
}

//Menu

let opcion = menu();
switch (opcion){
    case 1:
        todosLosLibros();
        alert ( "Tiene libros para donar a la biblioteca?")
        let donacion = menudonacion();
        
        switch (donacion){
            case 1:
                agregarLibros();
                break;
            case 2:
                salirDeLaBiblioteca();
                break;
        }

        break;
    case 2:
        consultarLibros()
        break;

    case 3:
        agregarLibros()
        break;
}