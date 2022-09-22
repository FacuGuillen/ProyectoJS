alert ("Te voy a hacer 10 preguntas a ver cuanto sabes sobre Los Simpson. Arrancamos !")

let cont=0
// let personaje = prompt("Dueño de la caverna de...").toLowerCase()


// if (personaje == "moe")
// {
//     alert ("Respuesta correcta ! Vamos con otra !")
//     cont += 1
// }
//     else
//     {
//         alert ("Respuesta incorrecta... Vamos con otra !")
//     }


// personaje = prompt("Quien es el negro que sabe jugar basketball ?").toLowerCase()

// if (personaje == "carl" || personaje=="karl")
// {
//     alert ("Respuesta correcta ! Vamos con otra !")
//     cont += 1
// }
//     else
//     {
//         alert ("Respuesta incorrecta... Vamos con otra !")
//     }

//     alert ("Total de respuestas correctas: " + cont)


















































let personaje = prompt("Nombre del dueño de la caverna")

switch (personaje.toLowerCase())
{
    case "moe":
        alert ("Respuesta correcta ! Vamos con otra !")
        cont += 1
        document.write ('<div class="card"> <img src="img/moe.jpg" /></div>')
        break

    default:
        alert ("Respuesta incorrecta... Vamos con otra !")
        document.write ('<div class="card"> <img src="img/incorrecta.jpg" /></div>')
}


personaje = prompt ("Quien es el negro que sabe jugar basketball?")

switch (personaje.toLowerCase())
{
    case "carl":
    case "karl":
    case "carlos":
        alert ("Respuesta correcta ! Vamos con otra !")
        cont += 1
        document.write ('<div class="card"> <img src="img/carl.jpg" /></div>')
        break

    default:
        alert ("Respuesta incorrecta... Vamos con otra !")
        document.write ('<div class="card"> <img src="img/moe.jpg" /></div>')
}


personaje = prompt ("Nombre del dueño del minisuper y padre de 8 hijos")

switch (personaje.toLowerCase())
{
    case "apu":
        alert ("Respuesta correcta ! Vamos con otra !")
        cont += 1
        document.write ('<div class="card"> <img src="img/apu.jpg" /></div>')
        break

    default:
        alert ("Respuesta incorrecta... Vamos con otra !")
        document.write ('<div class="card"> <img src="img/incorrecta.jpg" /></div>')
}


personaje = prompt ("Saxofonista e idolo de Lisa, Encias...")

switch (personaje.toLowerCase())
{
    case "sangrantes":
        alert ("Respuesta correcta ! Vamos con otra !")
        cont += 1
        document.write ('<div class="card"> <img src="img/encias.jpg" /></div>')
        break

    default:
        alert ("Respuesta incorrecta... Vamos con otra !")
        document.write ('<div class="card"> <img src="img/incorrecta.jpg" /></div>')
}


personaje = prompt ("Nombre de pila del Abuelo Simpson")

switch (personaje.toLowerCase())
{
    case "abraham":
        alert ("Respuesta correcta ! Vamos con otra !")
        cont += 1
        document.write ('<div class="card"> <img src="img/abuelo.jpg" /></div>')
        break

    default:
        alert ("Respuesta incorrecta... Vamos con otra !")
        document.write ('<div class="card"> <img src="img/incorrecta.jpg" /></div>')
}


personaje = prompt ("Apellido del mejor amigo borracho de Homero")

switch (personaje.toLowerCase())
{
    case "gomez":
    case "gumble":
        alert ("Respuesta correcta ! Vamos con otra !")
        cont += 1
        document.write ('<div class="card"> <img src="img/barney.jpg" /></div>')
        break

    default:
        alert ("Respuesta incorrecta... Vamos con otra !")
        document.write ('<div class="card"> <img src="img/incorrecta.jpg" /></div>')
}


personaje = prompt ("Marca de la famosa cerveza")

switch (personaje.toLowerCase())
{
    case "duff":
        alert ("Respuesta correcta ! Vamos con otra !")
        cont += 1
        document.write ('<div class="card"> <img src="img/duff.jpg" /></div>')
        break

    default:
        alert ("Respuesta incorrecta... Vamos con otra !")
        document.write ('<div class="card"> <img src="img/incorrecta.jpg" /></div>')
}


personaje = prompt ("De que religion es Krusty el payaso?")

switch (personaje.toLowerCase())
{
    case "judio":
    case "judia":
    case "judaismo":
        alert ("Respuesta correcta ! Vamos con otra !")
        cont += 1
        document.write ('<div class="card"> <img src="img/krusty.jpg" /></div>')
        break

    default:
        alert ("Respuesta incorrecta... Vamos con otra !")
        document.write ('<div class="card"> <img src="img/incorrecta.jpg" /></div>')
}


personaje = prompt ("El equipo de baisbol de la ciudad de Springfield se llaman Los...")

switch (personaje.toLowerCase())
{
    case "isotopos":
        alert ("Respuesta correcta ! Vamos con otra !")
        cont += 1
        document.write ('<div class="card"> <img src="img/isotopos.jpg" /></div>')
        break

    default:
        alert ("Respuesta incorrecta... Vamos con otra !")
        document.write ('<div class="card"> <img src="img/incorrecta.jpg" /></div>')
}


personaje = prompt ("ES LOS SIMPSON LA MEJOR SERIE DE LA HISTORIA ? RESPONDA SI O no")

switch (personaje.toLowerCase())
{
    case "si":
        alert ("nononono... BUENO SI !")
        cont += 1
        document.write ('<div class="card"> <img src="img/buenosi.jpg" /></div>')
        break

    default:
        alert ("No puedo creer")
        document.write ('<div class="card"> <img src="img/incorrecta.jpg" /></div>')
}

alert("Su puntaje de respuestas correctras es " + cont + " de 10")