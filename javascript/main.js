const open = document.querySelector('#open');
const modal_container = document.querySelector('#modal_container');
const close = document.querySelector('#close');
const imgJuego = document.querySelector('#img_juego')
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const div_jgo = document.querySelector('#div_jgo')
const span_pregunta = document.querySelector('#span_pregunta')
const div_button_rtas = document.querySelector('div_button_rtas')
let cont = 0



open.addEventListener('click', () => {
    modal_container.classList.add('show'); 
    img_juego.classList.add('sacar-img');
    open.classList.add('sacar-img')
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
    img_juego.classList.remove('sacar-img');
    open.classList.remove('sacar-img')
});


cargarPregunta (0)

function cargarPregunta (x){
    pregunta = jgoPreguntas [x] //Saco let asi es una variable global 
    opciones = [...pregunta.incorrecta] //Saco let asi es una variable global 
    opciones.push(pregunta.respuesta)

    opciones.sort(() => Math.random() -0.5);

    span_pregunta.innerHTML = pregunta.pregunta
    btn1.innerHTML = opciones [0]
    btn2.innerHTML = opciones [1]
    btn3.innerHTML = opciones [2]

}

async function seleccionOpcion (x) {
    let elegirRta = opciones[x] == pregunta.respuesta;
    if (elegirRta)
    {
        Swal.fire({
            title:"Respuesta correcta",
            text:"La respuesta ha sido correcta",
            icon:"success",
        });
        cont +=1;
    } else
        Swal.fire({
            title:"Respuesta incorrecta",
            text:`La respuesta correcta es: "${pregunta.respuesta}"`,
            icon:"error",
        });

        cantPreguntas+=1;
        if (cantPreguntas >= jgoPreguntas.length)
        {
            Swal.fire({
                title:"Termino el juego",
                text:`Su puntaje es: ${cont}/${jgoPreguntas.length}`,
            });
            localStorage.setItem("Puntaje" , cont)
            cantPreguntas = 0;
            cont = 0;
        }
        cargarPregunta(cantPreguntas)
        //localStorage.setItem("Puntaje" , cont)
}

let cantPreguntas = 0

