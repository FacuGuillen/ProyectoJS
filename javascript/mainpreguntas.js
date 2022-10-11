alert ("Veamos que tan fanatic@ de Los Simpson sos !")

let cont = 0
let rta

let sumar = (num1 , num2) => num1 + num2

let imagenBien = () => document.write ('<div class="card"> <img src="../img/correcta.jpg" /></div>')

/*
function imagenBien ()
{
    return document.write ('<div class="card"> <img src="img/correcta.jpg" /></div>')
}
*/

let imagenMal = () => document.write ('<div class="card"> <img src="../img/incorrecta.jpg" /></div>')

/*
function imagenMal ()
{
    return document.write ('<div class="card"> <img src="img/incorrecta.jpg" /></div>')
}
*/

function entrarAlJuego (x)
{
    if ( x === 1 || x === 2 || x === 3 )
    {
        preguntas ()
    } 
        else
        {
            rta = Number (prompt ('Opcion no valida, ingrese nuevamente "1" , "2" o "3"'))
            entrarAlJuego (rta)
        }
}


function preguntas(a)
{

    if (rta == a)
    {
        alert ("Repuesta correcta ! Vamos con otra")
        cont +=1
        imagenBien ()
    }
        else
        {
            alert ("Respuesta incorrecta, vamos con otra")
            imagenMal ()
        }
            
}

alert ("Seleccione el numero de la opcion correcta")

rta = Number (prompt("Nombre del dueño de la caverna: 1-Moe , 2-Apu , 3-Barney"))

//entrarAlJuego (rta, preguntas(1))
preguntas (1)

// rta = Number (prompt ("Quien es el negro que sabe jugar basketball?: 1-Apu , 2-Carl , 3-Dr Hibbert"))

// //entrarAlJuego (rta , preguntas(2))
// preguntas (2)

// rta = prompt ("Nombre del dueño del minisuper y padre de 8 hijos: 1-Apu , 2-Lenny , 3-Flanders")
// preguntas (1)

// rta = prompt ("Nombre del famoso saxofonista e idolo de Lisa: 1-Tito Puente , 2-Otto , 3-Encias Sangrantes")
// preguntas (3)

// rta = prompt ("Nombre de pila del Abuelo Simpson: 1-Abraham , 2-Carl , 3-Herb")
// preguntas (1)

// rta = prompt ("Apellido del mejor amigo borracho de Homero: 1-Sanchez o Sanches , 2-Gumble o Gomez , 3-Skinner")
// preguntas (2)

// rta = prompt ("Marca de la famosa cerveza: 1-Jaff , 2-Daff , 3-Duff")
// preguntas (3)

// rta = prompt ("De que religion es Krusty el payaso?: 1-Ateo , 2-Cristiano , 3-Judio")
// preguntas (3)

// rta = prompt ("El equipo de baisbol de la ciudad de Springfield se llaman Los...: 1-Hisotopos , 2-Ganadores , 3-Los amigos del pino")
// preguntas (1)

// rta = prompt ("ES LOS SIMPSON LA MEJOR SERIE DE LA HISTORIA ? RESPONDA: ¡ 1-SI ! O 2-no...")
// preguntas (1)




alert ("cantidad de rta correctas: " + cont)










// let cont = 0
// let respuesta
// let rta

// respuesta = prompt ("Apreta 1 si quieres contestar 10 preguntas o apreta el numero 2 si quieres completar la frase")

// function juego()
// {

// if ( respuesta == 1 ) {

// rta = prompt("Nombre del dueño de la caverna")

// switch (rta.toLowerCase())
// {
//     case "moe":
//         alert ("Respuesta correcta ! Vamos con otra !")
//         cont += 1
//         document.write ('<div class="card"> <img src="img/moe.jpg" /></div>')
//         break

//     default:
//         alert ("Respuesta incorrecta... Vamos con otra !")
//         document.write ('<div class="card"> <img src="img/incorrecta.jpg" /></div>')
// }


// rta = prompt ("Quien es el negro que sabe jugar basketball?")

// switch (rta.toLowerCase())
// {
//     case "carl":
//     case "karl":
//     case "carlos":
//         alert ("Respuesta correcta ! Vamos con otra !")
//         cont += 1
//         document.write ('<div class="card"> <img src="img/carl.jpg" /></div>')
//         break

//     default:
//         alert ("Respuesta incorrecta... Vamos con otra !")
//         document.write ('<div class="card"> <img src="img/moe.jpg" /></div>')
// }


// rta = prompt ("Nombre del dueño del minisuper y padre de 8 hijos")

// switch (rta.toLowerCase())
// {
//     case "apu":
//         alert ("Respuesta correcta ! Vamos con otra !")
//         cont += 1
//         document.write ('<div class="card"> <img src="img/apu.jpg" /></div>')
//         break

//     default:
//         alert ("Respuesta incorrecta... Vamos con otra !")
//         document.write ('<div class="card"> <img src="img/incorrecta.jpg" /></div>')
// }


// rta = prompt ("Saxofonista e idolo de Lisa, Encias...")

// switch (rta.toLowerCase())
// {
//     case "sangrantes":
//         alert ("Respuesta correcta ! Vamos con otra !")
//         cont += 1
//         document.write ('<div class="card"> <img src="img/encias.jpg" /></div>')
//         break

//     default:
//         alert ("Respuesta incorrecta... Vamos con otra !")
//         document.write ('<div class="card"> <img src="img/incorrecta.jpg" /></div>')
// }


// rta = prompt ("Nombre de pila del Abuelo Simpson")

// switch (rta.toLowerCase())
// {
//     case "abraham":
//         alert ("Respuesta correcta ! Vamos con otra !")
//         cont += 1
//         document.write ('<div class="card"> <img src="img/abuelo.jpg" /></div>')
//         break

//     default:
//         alert ("Respuesta incorrecta... Vamos con otra !")
//         document.write ('<div class="card"> <img src="img/incorrecta.jpg" /></div>')
// }


// rta = prompt ("Apellido del mejor amigo borracho de Homero")

// switch (rta.toLowerCase())
// {
//     case "gomez":
//     case "gumble":
//         alert ("Respuesta correcta ! Vamos con otra !")
//         cont += 1
//         document.write ('<div class="card"> <img src="img/barney.jpg" /></div>')
//         break

//     default:
//         alert ("Respuesta incorrecta... Vamos con otra !")
//         document.write ('<div class="card"> <img src="img/incorrecta.jpg" /></div>')
// }


// rta = prompt ("Marca de la famosa cerveza")

// switch (rta.toLowerCase())
// {
//     case "duff":
//         alert ("Respuesta correcta ! Vamos con otra !")
//         cont += 1
//         document.write ('<div class="card"> <img src="img/duff.jpg" /></div>')
//         break

//     default:
//         alert ("Respuesta incorrecta... Vamos con otra !")
//         document.write ('<div class="card"> <img src="img/incorrecta.jpg" /></div>')
// }


// rta = prompt ("De que religion es Krusty el payaso?")

// switch (rta.toLowerCase())
// {
//     case "judio":
//     case "judia":
//     case "judaismo":
//         alert ("Respuesta correcta ! Vamos con otra !")
//         cont += 1
//         document.write ('<div class="card"> <img src="img/krusty.jpg" /></div>')
//         break

//     default:
//         alert ("Respuesta incorrecta... Vamos con otra !")
//         document.write ('<div class="card"> <img src="img/incorrecta.jpg" /></div>')
// }


// rta = prompt ("El equipo de baisbol de la ciudad de Springfield se llaman Los...")

// switch (rta.toLowerCase())
// {
//     case "isotopos":
//         alert ("Respuesta correcta ! Vamos con otra !")
//         cont += 1
//         document.write ('<div class="card"> <img src="img/isotopos.jpg" /></div>')
//         break

//     default:
//         alert ("Respuesta incorrecta... Vamos con otra !")
//         document.write ('<div class="card"> <img src="img/incorrecta.jpg" /></div>')
// }


// rta = prompt ("ES LOS SIMPSON LA MEJOR SERIE DE LA HISTORIA ? RESPONDA SI O no")

// switch (rta.toLowerCase())
// {
//     case "si":
//         alert ("nononono... BUENO SI !")
//         cont += 1
//         document.write ('<div class="card"> <img src="img/buenosi.jpg" /></div>')
//         break

//     default:
//         alert ("No puedo creer")
//         document.write ('<div class="card"> <img src="img/incorrecta.jpg" /></div>')
// }

// }   else if (respuesta == 2)   
//         {

//             rta = prompt ("A la grande le puse...")

//             switch (rta.toLowerCase())
//             {
//                 case "cuca":
//                 case "cuka":
//                 case "kuca":
//                 case "kuka":
//                     alert ("Respuesta correcta ! Vamos con otra !")
//                     cont += 1
//                     document.write ('<div class="card"> <img src="img/cuca.jpg" /></div>')
//                 break

//                 default:
//                     alert ("Respuesta incorrecta... Vamos con otra !")
//                     document.write ('<div class="card"> <img src="img/incorrecta.jpg" /></div>')
//             }
            

//             rta = prompt ("Tiene todo el dinero del mundo, pero hay algo que no puede comprar... Un...")

//             switch (rta.toLowerCase())
//             {
//                 case "dinosaurio":
//                     alert ("Respuesta correcta ! Vamos con otra !")
//                     cont += 1
//                     document.write ('<div class="card"> <img src="img/dinosaurio.jpg" /></div>')
//                 break

//                 default:
//                     alert ("Respuesta incorrecta... Vamos con otra !")
//                     document.write ('<div class="card"> <img src="img/incorrecta.jpg" /></div>')
//             }


//             rta = prompt ("Que elegancia la de...")

//             switch (rta.toLowerCase())
//             {
//                 case "francia":
//                     alert ("Respuesta correcta ! Vamos con otra !")
//                     cont += 1
//                     document.write ('<div class="card"> <img src="img/francia.jpg" /></div>')
//                 break

//                 default:
//                     alert ("Respuesta incorrecta... Vamos con otra !")
//                     document.write ('<div class="card"> <img src="img/incorrecta.jpg" /></div>')
//             }


//             rta = prompt ("Que le digo al doctor ? Dile que chupe...")

//             switch (rta.toLowerCase())
//             {
//                 case "limon":
//                     alert ("Respuesta correcta ! Vamos con otra !")
//                     cont += 1
//                     document.write ('<div class="card"> <img src="img/limon.jpeg" /></div>')
//                 break

//                 default:
//                     alert ("Respuesta incorrecta... Vamos con otra !")
//                     document.write ('<div class="card"> <img src="img/incorrecta.jpg" /></div>')
//             }


//             rta = prompt ("No lloren por mi. Ya estoy...")

//             switch (rta.toLowerCase())
//             {
//                 case "muerto":
//                     alert ("Respuesta correcta ! Vamos con otra !")
//                     cont += 1
//                     document.write ('<div class="card"> <img src="img/muerto.jpg" /></div>')
//                 break

//                 default:
//                     alert ("Respuesta incorrecta... Vamos con otra !")
//                     document.write ('<div class="card"> <img src="img/incorrecta.jpg" /></div>')
//             }


//             rta = prompt ("Bart no quiero asustarte pero tal vez el Coco, el Coco esta en la...")

//             switch (rta.toLowerCase())
//             {
//                 case "casa":
//                     alert ("Respuesta correcta ! Vamos con otra !")
//                     cont += 1
//                     document.write ('<div class="card"> <img src="img/coco.jpg" /></div>')
//                 break

//                 default:
//                     alert ("Respuesta incorrecta... Vamos con otra !")
//                     document.write ('<div class="card"> <img src="img/incorrecta.jpg" /></div>')
//             }


//             rta = prompt ("Que te paso viejo ? Antes eras...")

//             switch (rta.toLowerCase())
//             {
//                 case "chevere":
//                     alert ("Respuesta correcta ! Vamos con otra !")
//                     cont += 1
//                     document.write ('<div class="card"> <img src="img/chevere.jpg" /></div>')
//                 break

//                 default:
//                     alert ("Respuesta incorrecta... Vamos con otra !")
//                     document.write ('<div class="card"> <img src="img/incorrecta.jpg" /></div>')
//             }


//             rta = prompt ("Sin television y sin cerveza, Homero pierde la...")

//             switch (rta.toLowerCase())
//             {
//                 case "cabeza":
//                     alert ("Respuesta correcta ! Vamos con otra !")
//                     cont += 1
//                     document.write ('<div class="card"> <img src="img/cabeza.jpg" /></div>')
//                 break

//                 default:
//                     alert ("Respuesta incorrecta... Vamos con otra !")
//                     document.write ('<div class="card"> <img src="img/incorrecta.jpg" /></div>')
//             }


//             rta = prompt ("Sin la presencia de un hombre en la casa puedes volverte afeminado en un segundo. Ay, esta grasa no se...")

//             switch (rta.toLowerCase())
//             {
//                 case "quita":
//                     alert ("Respuesta correcta ! Vamos con otra !")
//                     cont += 1
//                     document.write ('<div class="card"> <img src="img/grasa.jpg" /></div>')
//                 break

//                 default:
//                     alert ("Respuesta incorrecta... Vamos con otra !")
//                     document.write ('<div class="card"> <img src="img/incorrecta.jpg" /></div>')
//             }


//             rta = prompt ("Mi Homero no es comunista, podra ser mentiroso, puerco, idiota, comunista, pero nunca una estrella del...")

//             switch (rta.toLowerCase())
//             {
//                 case "porno":
//                     alert ("Respuesta correcta !")
//                     cont += 1
//                     document.write ('<div class="card"> <img src="img/porno.jpeg" /></div>')
//                 break

//                 default:
//                     alert ("Respuesta incorrecta...")
//                     document.write ('<div class="card"> <img src="img/incorrecta.jpeg" /></div>')
//             }
        
//         }
//             else
//                 {
//                     alert ("El dato ingresado NO es valido, intente nuevamente")

//                     respuesta = prompt ("Apreta 1 si quieres contestar 10 preguntas o apreta el numero 2 si quieres completar la frase")

//                     juego ()
//                 }

//                 return alert("Su puntaje de respuestas correctras es " + cont + " de 10")

// }

// let correctas = cont

// juego ()