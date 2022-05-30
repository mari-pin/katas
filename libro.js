const prompt = require('prompt');
//Crea una clase libro
class Book{
    //La clase libro tiene titulo, autor, año y genero
    constructor(title,author,year,gender){
        this.title = title
        this.author = author
        this.year = year
        this.gender = gender
    }
    //Crea un metodo k devuelva toda la info del libro
    bookInfo(){
        return `${this.title} es un libro de ${this.gender} escrito por ${this.author} en el año ${this.year}`
    }
   
}
  //Pide 3 libros y guadalos en un Array
let books = []

while (books.length < 3) {
    let title = prompt('Introduce el título del libro')
    let author = prompt('Introduce el autor del libro')
    let year = prompt('Introduce el año del libro')
    let gender = prompt('Introduce el género  del libro').toLowerCase()
    
    /* 
    Validar que los campos se intorduzcan vacios.
    Validar que el año sea un numero y tenga 4 digitos
    Validar que el genero sea: terror, aventura o fantasia.
     */
    if (title != '' &&
     author != '' &&
      !isNaN(year) &&
      year.length == 4 &&
     (gender == 'aventura' || gender == 'terror' || gender == 'fantasia')) {


     books.push(new Book(title, author,year, gender))
        
    }
}
//Crea una funcion que muestre todos los libros.
 const showAllBooks = () => {
   for (const author of books){
       
   }
}
showAllBooks()

//Crea una funcion que muestre los autores alfabeticamente.
 const showNameAuthor = () =>{
     console.log(  )
}