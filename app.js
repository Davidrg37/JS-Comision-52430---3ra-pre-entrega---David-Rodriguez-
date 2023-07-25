const carrito = JSON.parse(localStorage.getItem('carrito'))
console.log(carrito)



const tituloPelicula = document.getElementById('part1')
const peliculaNombre = carrito[1].nombre;
tituloPelicula.innerHTML = peliculaNombre

const horaPeliculas = document.getElementById('part2')
const peliculaHora = carrito[0].horario;
horaPeliculas.innerHTML = peliculaHora;

const cantEntradas = document.getElementById('part3')
const entradasPelicula = carrito[1].cantidad
cantEntradas.innerHTML = entradasPelicula + ` entradas.`;

const pagarEntradas = document.getElementById('part4')
const entradasTotal = carrito[0].precio * entradasPelicula
pagarEntradas.innerHTML = entradasTotal;

const formFinal = document.getElementById("formularioFinal")
const contacto = document.getElementById("part7");


formFinal.addEventListener("submit", (e) => {
    e.preventDefault();
    contacto.innerHTML = `<p> Gracias por elegirnos!. En tu mail encontraras el código con el cual compraras tus entradas </p>`
    
    localStorage.clear();
    location.href = "../index.html";

})
