class Peliculas {
    constructor (nombre, categoria, formato, opcion){
        this.nombre = nombre,
        this.categoria = categoria,  
        this.formato = formato,
        this.opcion = opcion
    }
}

let carteleraFinal =  [];

const pelicula1 = new Peliculas ('Air','Drama', '2D', 1)
const pelicula2 = new Peliculas('Elementos',"Apto para todo publico", "2D, 4D, Imax", 2)
const pelicula3 = new Peliculas('The Flash',"Ciencia ficción", "2D, 3D", 3)
const pelicula4 = new Peliculas('Evil Dead',"Terror", "2D, Imax", 4)
const pelicula5 = new Peliculas('Guardianes de la Galaxia',"Ciencia ficción", "3D, 4D", 5)
const pelicula6 = new Peliculas('Transformers, el despertar de las bestias',"Ciencia ficción", "2D, 4D", 6)
const pelicula7 = new Peliculas('Indiana Jones',"Acción", "2D, 3D, Imax", 7)
const pelicula8 = new Peliculas('Boogeyman',"Terror", "2D, Imax", 8)
const pelicula9 = new Peliculas('Mario Bros',"Apto para todo publico", "2D, 4D, Imax", 9)
const pelicula10 = new Peliculas('Hazme el favor',"Drama", "2D", 2)

const cartelera = [];
cartelera.push(pelicula1, pelicula2, pelicula3, pelicula4, pelicula5, pelicula6, pelicula7, pelicula8, pelicula9, pelicula10)

const costoEntradas2D = [3000];
const costoEntradas3D = [4000];
const costoEntradas4D = [6000];
const costoEntradasImax = [7500];

class Funciones {
    constructor (id, horario, precio){
        this.id = id,
        this.horario = horario,
        this.precio = precio
    }
}

const funciones = []

const funcion1 = new Funciones("17:30", "17:30 2D subtitulada", 3000)

const funcion2 = new Funciones("19:30", "19:30 2D subtitulada", 3000)
const funcion3 = new Funciones("21:30", "21:30 2D subtitulada", 3000)

const funcion4 = new Funciones("17:45", "17:45 4D en español", 6000)
const funcion5 = new Funciones("19:45", "19:45 4D en español", 6000)
const funcion6 = new Funciones("21:45", "21:45 4D en español", 6000)


const funcion7 = new Funciones("17:55", "17:55 Imax en español", 7500)
const funcion8 = new Funciones("19:55", "19:55 Imax en español", 7500)
const funcion9 = new Funciones("21:20", "21:20 Imax en español", 7500)


const funcion10 = new Funciones("17:40", "17:40 3D Español", 4000)
const funcion11 = new Funciones("19:40", "19:40 3D Español", 4000)
const funcion12 = new Funciones("21:40", "21:40 3D Español", 4000)

const funcion13 = new Funciones("23", "23:00 3D en español", 7500)

const funcion14 = new Funciones("23:10", "23:10 Imax subtitulado", 7500)
const funcion15 = new Funciones("19:50", "19:50 Imax subtitulado", 7500)
const funcion16 = new Funciones("21:50", "21:50 Imax subtitulado", 7500)
const funcion17 = new Funciones("21:40", "21:40 Imax subtitulado", 7500)


const funcion18 = new Funciones("17:30", "17:30 2D Español", 3000)
const funcion19 = new Funciones("19:30", "19:30 2D Español", 3000)
const funcion20 = new Funciones("21:30", "21:30 2D Español", 3000)


funciones.push(funcion1, funcion2, funcion3, funcion4, funcion5, funcion6, funcion7, funcion8, funcion9, funcion10, funcion11, funcion12, funcion13, funcion14, funcion15, funcion16, funcion17, funcion18, funcion19, funcion20);


const funcionesAir = [funcion1, funcion2, funcion3]
const funcionesElementos = [funcion10, funcion11, funcion12, funcion4, funcion5, funcion6, funcion7, funcion8, funcion9]
const flash = [funcion1, funcion2, funcion3, funcion10, funcion11, funcion12]
const evil = [funcion1, funcion2, funcion3, funcion15, funcion16, funcion14]
const gotg = [funcion10, funcion11, funcion12, funcion7, funcion8, funcion9]
const transf = [funcion1, funcion2, funcion3, funcion4, funcion5, funcion6]
const indy = [funcion1, funcion2, funcion3, funcion10, funcion11, funcion12]
const boogey = [funcion1, funcion2, funcion3, funcion15, funcion16, funcion14] 
const mario = [funcion18, funcion19, funcion20, funcion4, funcion5, funcion6, funcion7, funcion8, funcion9]
const favor = [funcion1, funcion2, funcion3]




let menu1 = {
    opcion: 1,
    nombre: "Combo 1 = Pop y Soda chico",
    precio : 10000,
}

let menu2 = {
    opcion: 2,
    nombre: "Combo 2 = Pop y Soda mediano",
    precio : 13000,
}

let menu3 = {
    opcion: 3,
    nombre: "Combo 3 = Pop y Soda grande",
    precio : 16000,
}

let menu4 = {
    opcion: 4,
    nombre: "Combo 4 = Pop grande y 2 sodas medianos",
    precio : 18000,
}

let menu5 = {
    opcion: 5,
    nombre: "Combo 5 = 2 Pop grande y 2 sodas medianos",
    precio : 20000,
}

const combos = [menu1, menu2, menu3, menu4, menu5];