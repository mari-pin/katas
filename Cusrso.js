class Curso{
    constructor(titulo, dificultad){
       this.titulo = titulo 
       this._dificultad = dificultad
       this.lecciones = [] 

    }

    get dificultad(){
        console.log("GETTER")
       return this._dificultad
    }
    set dificultad(nuevaDificultad){

       if(nuevaDificultad >= 0 && nuevaDificultad <= 5){
        this._dificultad = nuevaDificultad
       }else{
        console.log("no hago nada")
       }
       
        
    }
    agregarLeccion(leccion){
        //añadimos el ultimo elemento del array
        this.lecciones.push(leccion)
    }
    eliminarUltimaLeccion(){
        //eliminanos el ultimo elemento del array y no le pasamos nada porque siempre será el ultimo
        this.lecciones.pop()
    }
}
//instanciar una clase === crear un objeto
const cursoJs = new Curso ('Javascript', 1)//lenguaje y dificultad

cursoJs.dificultad = 3

console.log(cursoJs.dificultad)


//const cursoTs = new Curso('Typescript', 3)

/* cursoJs.agregarLeccion("Intro a Js")
cursoJs.agregarLeccion("Variables")
cursoJs.agregarLeccion("Tipos de datos")

cursoJs.eliminarUltimaLeccion = ()=> console.log("no hago nada")
cursoJs.eliminarUltimaLeccion()
 */
