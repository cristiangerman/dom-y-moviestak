const $peliculas = document.getElementById("peliculas")
function cards(pelicula) {
    return `
        <div flex flex-wrap gap-5 justify-center border rounded-xl border-black flex flex-col items-center w-96 text-center>
        <img src="${pelicula.image}" alt="banner pelicula">
        <h2>${pelicula.title}</h2>
        <p> ${pelicula.overview}</p>
        </div>
    `
}
function llenar(peliculas) {
    let contenido = ""
    for (const pelicula of peliculas) {
        contenido+=cards(pelicula)
    }
    return contenido
}
$peliculas.innerHTML=llenar(Movies)