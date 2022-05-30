import { Checkout } from "./checkout"

//checkOut

//escanear un producto y devolver  el precio 
//escanear varios productos y devolver  el total de la cesta
//pasarle ofertas al checkout
// aplica descuento si hay algun producto de la cesta en oferta
//debemos poder pasar las ofertas especiales en cada compra 




// precios de la semana
const pera = 50 
const manzana = 30 
const platano = 20 
const kiwi = 15
// precio especial de la semana 
//3 * A = 130
//2* B = 45



/* class Persona{
    name
    apellidos
    edad
    constructor(name, apellidos,edad){
        this.name = name;
        this.apellidos = apellidos;
        this.edad = edad
    }

    getPerfil(){
        return {
            name : this.name,
            apellidos: this.apellidos,
           
        }
    }
    changeApellido(apellido){
        this.apellidos = apellido
    }
}
 */

/* function crearPerfil(){
    const newUser = new Persona("eva", "ruiz", 12)
    const perfil = newUser.getPerfil()
    console.log(perfil)
    newUser.changeApellido("Nuez")
    console.log(newUser.getPerfil())
}
crearPerfil() */
// dar el precio en entero y decimales



describe('Back to Checkout',() => {
    it("returns the price of an scaner product",()=>{
        //arrange 
        const checkout =  new Checkout()
        const product = "d"
        const productPrice = 15
        
        //Act
        checkout.scanProduct(product)
        const finalPrice = checkout.calculatePrice()
        
        //assert
        expect(finalPrice).toBe(productPrice)
    })
    
    it("return total price of multiple products",()=>{
        //arrange 
        const checkout =  new Checkout()
        const allproducts = ["d","a"]
        const d = 15
        const a  = 50
        
        
        //Act
        checkout.scanProduct(allproducts[0])
        checkout.scanProduct(allproducts[1])
        const finalPrice = checkout.calculatePrice()
        //assert
        expect(finalPrice).toBe(d + a)
    }) 
    it("pass offers to checkout",()=>{
        //arrange 
        const checkout =  new Checkout()
        const offer = {
            a:{
                price:50,
                specialPrice: {
                    price:130,
                    amount:3//cantidad

                }
            },
            b:{
                price:30,
                specialPrice:{
                    price:45,
                    amount:2
                }
            },
            c:{
                price:20
            },
            d:{
                price:15
            }
        }
        checkout.pricesOffDay(offer)
        
        //Act
        checkout.scanProduct("a")
        checkout.scanProduct("a")
        checkout.scanProduct("a")
        const finalPrice = checkout.calculatePrice()
        //assert
        
        expect(finalPrice).toBe(130)
    }) 
   /*  it("scan products in diferent order",()=>{
        //arrange 
        const checkout =  new Checkout()
        const allproducts = ["a","a","a"]
        
        const a  = 50
        const offerProductA = 130
        
        //Act
        
        const finalPrice = checkout.calculatePrice(allproducts)
        //assert
        
        expect(finalPrice).toBe(offerProductA)
    })  */
})