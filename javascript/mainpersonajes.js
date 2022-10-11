
let hola = ["Homero" , "Marge" , "Bart" , "Lisa" , "Maggie"]

document.write ("Familia Simpson:" + "<br>")


for (let i=0; i < hola.length ; i+=1)
{
    document.write (  hola[i] + " <br> ")
}
document.write ('<div class="card"> <img src="../img/familia.jpg" /></div>')

document.write ("<br><br><br><br><br><br><br><br><br><br>" + "Amigos de Homero:" + "<br>")

let amigosHomero = ["Lenny" , "Carl" , "Moe" , "Barney"]


for (let i=0; i < amigosHomero.length ; i+=1)
{
    document.write (amigosHomero[i] + " <br> ")
}
document.write ('<div class="card"> <img src="../img/amigos.jpg" /></div>')