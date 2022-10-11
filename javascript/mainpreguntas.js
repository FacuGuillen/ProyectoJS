alert ("Veamos que tan fanatic@ de Los Simpson sos !")

let cont = 0
let rta


let imagenBien = () => document.write ('<div class="card"> <img src="../img/correcta.jpg" /></div>')


let imagenMal = () => document.write ('<div class="card"> <img src="../img/incorrecta.jpg" /></div>')


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

rta = Number (prompt ("Quien es el negro que sabe jugar basketball?: 1-Apu , 2-Carl , 3-Dr Hibbert"))

preguntas (2)

rta = prompt ("Nombre del dueño del minisuper y padre de 8 hijos: 1-Apu , 2-Lenny , 3-Flanders")
preguntas (1)

rta = prompt ("Nombre del famoso saxofonista e idolo de Lisa: 1-Tito Puente , 2-Otto , 3-Encias Sangrantes")
preguntas (3)

rta = prompt ("Nombre de pila del Abuelo Simpson: 1-Abraham , 2-Carl , 3-Herb")
preguntas (1)

rta = prompt ("Apellido del mejor amigo borracho de Homero: 1-Sanchez o Sanches , 2-Gumble o Gomez , 3-Skinner")
preguntas (2)

rta = prompt ("Marca de la famosa cerveza: 1-Jaff , 2-Daff , 3-Duff")
preguntas (3)

rta = prompt ("De que religion es Krusty el payaso?: 1-Ateo , 2-Cristiano , 3-Judio")
preguntas (3)

rta = prompt ("El equipo de baisbol de la ciudad de Springfield se llaman Los...: 1-Hisotopos , 2-Ganadores , 3-Los amigos del pino")
preguntas (1)

rta = prompt ("ES LOS SIMPSON LA MEJOR SERIE DE LA HISTORIA ? RESPONDA: ¡ 1-SI ! O 2-no...")
preguntas (1)


alert ("cantidad de rta correctas: " + cont)