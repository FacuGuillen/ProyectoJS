const renderHomer = (personajess) => {
    
    const contenido_homer = document.querySelector ('#contenido_homer')

    contenido_homer.innerHTML = `
        <p>Familiares:</p>

        <hr>
        
        <p>Padres: ${personajess[0].padres}</p>
        <p>Mujer: ${personajess[0].casado}</p>
        <p>Hijos: ${personajess[0].hijos}</p>
        <p>Hermanos: ${personajess[0].hijos}</p>
    `
} 

const renderMarge = (personajess) => {
    
    const contenido_marge = document.querySelector ('#contenido_marge')

    contenido_marge.innerHTML = `
        <p>Familiares:</p>

        <hr>
        
        <p>Padres: ${personajess[1].padres}</p>
        <p>Esposo: ${personajess[1].casado}</p>
        <p>Hijos: ${personajess[1].hijos}</p>
        <p>Hermanos: ${personajess[1].hijos}</p>
    `
} 

const renderBart = (personajess) => {
    
    const contenido_bart = document.querySelector ('#contenido_bart')

    contenido_bart.innerHTML = `
        <p>Familiares:</p>

        <hr>
        
        <p>Padres: ${personajess[2].padres}</p>
        <p>Esposo: ${personajess[2].casado}</p>
        <p>Hijos: ${personajess[2].hijos}</p>
        <p>Hermanos: ${personajess[2].hijos}</p>
    `
} 



const obtenerDatosHomer= () => {
    fetch ("../json/datos.json")
    .then((respuesta) => {
        return (respuesta.json())
    })

    .then ((datos) => {
        renderHomer(datos)
    })

    .catch((error) => {
        console.log (error)
    })
}

const obtenerDatosMarge = () => {
    fetch ("../json/datos.json")
    .then((respuesta) => {
        return (respuesta.json())
    })

    .then ((datos) => {
        renderMarge(datos)
    })

    .catch((error) => {
        console.log (error)
    })
}

const obtenerDatosBart = () => {
    fetch ("../json/datos.json")
    .then((respuesta) => {
        return (respuesta.json())
    })

    .then ((datos) => {
        renderBart(datos)
    })

    .catch((error) => {
        console.log (error)
    })
}


const btnHomer = document.querySelector ('#btnHomer')
const btnMarge = document.querySelector ('#btnMarge')
const btnBart = document.querySelector ('#btnBart')


btnHomer.addEventListener ('click' , obtenerDatosHomer)
btnMarge.addEventListener ('click' , obtenerDatosMarge)
btnBart.addEventListener ('click' , obtenerDatosBart)