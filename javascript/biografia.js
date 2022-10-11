function bioPersonaje (nombre, padre, madre, pareja , hijo, hermanos) {
    this.nombre = nombre
    this.padre = padre
    this.madre = madre
    this.pareja = pareja
    this.hijo = hijo
    this.hermanos = hermanos
}

let biopersonaje1 = new bioPersonaje ("Homero Simpson" , "Abraham Simpson" , "Mona Simpson" , "Marge Simpson" , "Bart, Lisa y Maggie Simpson" , "Herbert Powell")
console.log (biopersonaje1)

console.log ("-------------------")

let bioPersonaje2 = new bioPersonaje ("Marge Simpson" , "Clancy Bouvier" , "Jacqueline Bouvier" , "Homero Simpson" , "Bart, Lisa y Maggie Simpson" , "Patty y Selma Bouvier")
console.log (bioPersonaje2)

console.log ("-------------------")

let bioPersonaje3 = new bioPersonaje ("Bart Simspon" , "Homero Simpson" , "Marge Simpson" , 'En el capitulo "Futurdrama" aparece casado con Jenda' , 'En el capitulo "Futurdrama" tiene dos hijos: Hijo mayor de Bart e hijo menor de Bart', "Hugo, Lisa y Maggie Simpson")
console.log (bioPersonaje3)

console.log ("-------------------")

let bioPersonaje4 = new bioPersonaje ("Lisa Simspon" , "Homero Simpson" , "Marge Simpson" ,  "Milhouse Van Houten (en un episodio una vidente ve que se casará con otro hombre, pero en muchos otros se ve que acaba con Milhouse.)" , 'En el capitulo "Holidays of Future Passed" aparece la hija Zia Simpson', "Bart y Maggie Simpson")
console.log (bioPersonaje4)

console.log ("-------------------")

let bioPersonaje5 = new bioPersonaje ("Maggie Simpson" , "Homero Simpson" , "Marge Simpson" , "No tiene" , 'En el capitulo "Bart al futuro" aparece la hija Maggie JR', "Bart y Lisa Simpson")

console.log (bioPersonaje5)