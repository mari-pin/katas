export class Person {
  greet(name) {
    const isArray = Array.isArray(name)
    const isArrayLongerThanTwo = isArray && name.length > 2

    if (isArrayLongerThanTwo && this.containsUpperCaseElemenst(name)) {
       return this.createUpperCaseNameString(name)
    }
    
    if (isArrayLongerThanTwo) {
     return this.createMultipleNamesString(name)
    }

    if (isArray) return `Hello, ${name[0]} and ${name[1]}`// comparamos si array es name es un arrayy me devuelve true o false.
    if (name === null) return `Hello, my friend`
    if (name === name.toUpperCase()) return `HELLO, ${name}!`

    return `Hello, ${name}`

  }

  findUpperCaseName(name){
   let nameUpperCase =  name.find((eachName) => 
    eachName === eachName.toUpperCase()
  )
    return nameUpperCase
  }

  containsUpperCaseElemenst(name) {
    //me guarda en la variable el primer elemento k cumple la condición del .find  y si no encuentra nada devuelve undefined
    const nameUpperCase = this.findUpperCaseName(name)
    return !!nameUpperCase
    //convierte un valor en un boleano, variables que no son boleanas les ponemos doble simbolo de !! para saber si es truthy o falsy . un string doble negado = true, un undefined(!!undefined) = false
  }

  createMultipleNamesString(name){
    let names
    name.map((eachName, index) => {
      if (index === name.length - 1) return
      // !names es igual que usar esto (names === undefined)
      if (!names) {
        names = `${eachName}`
      }else {
        names = `${names}, ${eachName}`
      }
    })
    return `Hello, ${names}, and ${name[name.length - 1]}`
  }

  createUpperCaseNameString(name){
    const nameUpperCase = this.findUpperCaseName(name)
    const namesLowerCase = []
    name.forEach((eachName, index) => {
      if (eachName !== nameUpperCase) {
        namesLowerCase.push(eachName)
      }
    })

    return `Hello, ${namesLowerCase.join(" and ")}. AND HELLO ${nameUpperCase}!`
  }
}