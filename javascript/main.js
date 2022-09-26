alert ("Veamos que tan fanatic@ de Los Simpson sos !")

let cont = 0
let personaje
let frase
let juego
b = 0

juego = prompt ("Apreta 1 si quieres contestar 10 preguntas o apreta el numero 2 si quieres completar la frase")

while ( juego == 1 || juego == 2 || b == 0)
{

if ( juego == 1 ) {

personaje = prompt("Nombre del dueño de la caverna")

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

b=1
juego=3

}   else if (juego == 2)   
        {

            frase = prompt ("A la grande le puse...")

            switch (frase.toLowerCase())
            {
                case "cuca":
                case "cuka":
                case "kuca":
                case "kuka":
                    alert ("Respuesta correcta ! Vamos con otra !")
                    cont += 1
                    document.write ('<div class="card"> <img src="img/cuca.jpg" /></div>')
                break

                default:
                    alert ("Respuesta incorrecta... Vamos con otra !")
                    document.write ('<div class="card"> <img src="img/incorrecta.jpg" /></div>')
            }
            

            frase = prompt ("Tiene todo el dinero del mundo, pero hay algo que no puede comprar... Un...")

            switch (frase.toLowerCase())
            {
                case "dinosaurio":
                    alert ("Respuesta correcta ! Vamos con otra !")
                    cont += 1
                    document.write ('<div class="card"> <img src="img/dinosaurio.jpg" /></div>')
                break

                default:
                    alert ("Respuesta incorrecta... Vamos con otra !")
                    document.write ('<div class="card"> <img src="img/incorrecta.jpg" /></div>')
            }


            frase = prompt ("Que elegancia la de...")

            switch (frase.toLowerCase())
            {
                case "francia":
                    alert ("Respuesta correcta ! Vamos con otra !")
                    cont += 1
                    document.write ('<div class="card"> <img src="img/francia.jpg" /></div>')
                break

                default:
                    alert ("Respuesta incorrecta... Vamos con otra !")
                    document.write ('<div class="card"> <img src="img/incorrecta.jpg" /></div>')
            }


            frase = prompt ("Que le digo al doctor ? Dile que chupe...")

            switch (frase.toLowerCase())
            {
                case "limon":
                    alert ("Respuesta correcta ! Vamos con otra !")
                    cont += 1
                    document.write ('<div class="card"> <img src="img/limon.jpeg" /></div>')
                break

                default:
                    alert ("Respuesta incorrecta... Vamos con otra !")
                    document.write ('<div class="card"> <img src="img/incorrecta.jpg" /></div>')
            }


            frase = prompt ("No lloren por mi. Ya estoy...")

            switch (frase.toLowerCase())
            {
                case "muerto":
                    alert ("Respuesta correcta ! Vamos con otra !")
                    cont += 1
                    document.write ('<div class="card"> <img src="img/muerto.jpg" /></div>')
                break

                default:
                    alert ("Respuesta incorrecta... Vamos con otra !")
                    document.write ('<div class="card"> <img src="img/incorrecta.jpg" /></div>')
            }


            frase = prompt ("Bart no quiero asustarte pero tal vez el Coco, el Coco esta en la...")

            switch (frase.toLowerCase())
            {
                case "casa":
                    alert ("Respuesta correcta ! Vamos con otra !")
                    cont += 1
                    document.write ('<div class="card"> <img src="img/coco.jpg" /></div>')
                break

                default:
                    alert ("Respuesta incorrecta... Vamos con otra !")
                    document.write ('<div class="card"> <img src="img/incorrecta.jpg" /></div>')
            }


            frase = prompt ("Que te paso viejo ? Antes eras...")

            switch (frase.toLowerCase())
            {
                case "chevere":
                    alert ("Respuesta correcta ! Vamos con otra !")
                    cont += 1
                    document.write ('<div class="card"> <img src="img/chevere.jpg" /></div>')
                break

                default:
                    alert ("Respuesta incorrecta... Vamos con otra !")
                    document.write ('<div class="card"> <img src="img/incorrecta.jpg" /></div>')
            }


            frase = prompt ("Sin television y sin cerveza, Homero pierde la...")

            switch (frase.toLowerCase())
            {
                case "cabeza":
                    alert ("Respuesta correcta ! Vamos con otra !")
                    cont += 1
                    document.write ('<div class="card"> <img src="img/cabeza.jpg" /></div>')
                break

                default:
                    alert ("Respuesta incorrecta... Vamos con otra !")
                    document.write ('<div class="card"> <img src="img/incorrecta.jpg" /></div>')
            }


            frase = prompt ("Sin la presencia de un hombre en la casa puedes volverte afeminado en un segundo. Ay, esta grasa no se...")

            switch (frase.toLowerCase())
            {
                case "quita":
                    alert ("Respuesta correcta ! Vamos con otra !")
                    cont += 1
                    document.write ('<div class="card"> <img src="img/grasa.jpg" /></div>')
                break

                default:
                    alert ("Respuesta incorrecta... Vamos con otra !")
                    document.write ('<div class="card"> <img src="img/incorrecta.jpg" /></div>')
            }


            frase = prompt ("Mi Homero no es comunista, podra ser mentiroso, puerco, idiota, comunista, pero nunca una estrella del...")

            switch (frase.toLowerCase())
            {
                case "porno":
                    alert ("Respuesta correcta !")
                    cont += 1
                    document.write ('<div class="card"> <img src="img/porno.jpeg" /></div>')
                break

                default:
                    alert ("Respuesta incorrecta...")
                    document.write ('<div class="card"> <img src="img/incorrecta.jpeg" /></div>')
            }

            alert("Su puntaje de respuestas correctras es " + cont + " de 10")
        
        b=1
        juego=3

        }
            else
                {
                    alert ("El dato ingresado NO es valido, intente nuevamente")

                    juego = prompt ("Apreta 1 si quieres contestar 10 preguntas o apreta el numero 2 si quieres completar la frase")
                }


}

