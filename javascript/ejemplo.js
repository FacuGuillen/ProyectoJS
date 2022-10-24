const open = document.querySelector('#open');
const modal_container = document.querySelector('#modal_container');
const close = document.querySelector('#close');
const imgJuego = document.querySelector('#img_juego')
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const div_jgo = document.querySelector('#div_jgo')

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


btn1.addEventListener('click' , () => {
    btn1.classList.add('verde')
}
)

btn2.addEventListener('click' , () => {
    btn2.classList.add('rojo')
})

btn3.addEventListener('click' , () => {
    btn3.classList.add('rojo')
})

const pregunta = jgoPreguntas.pregunta
const rtaCorrecta = jgoPreguntas.respuesta
const rtaIncorrecta1 = jgoPreguntas.incorrecta1
const rtaIncorrecta2 = jgoPreguntas.incorrecta2

for (let i=0 ; i<2 ; i+=1){
    div_jgo.innerHTML = ` <p> ${jgoPreguntas[i].pregunta} </p>`
    btn1.innerHTML = ` <p> ${jgoPreguntas[i].respuesta} </p>`
    btn2.innerHTML = ` <p> ${jgoPreguntas[i].incorrecta1} </p>`
    btn3.innerHTML = ` <p> ${jgoPreguntas[i].incorrecta2} </p>`

    

}
