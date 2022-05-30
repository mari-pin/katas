//Vamos a tener una clase llamada mueble
//Va a tener las propiedades marca, numero de patas, precio,
//La clase nos tiene que devolver el precio del mueble ( getPrice )
//Tenemos que poder actualizar el precio ( updatePrice)
import{Furniture} from "./mueble"
describe('Furniture',() => {
    it("return caracteristics of furniture",()=>{
        //arrange 
        const properties = {
            marca: "Vondomm",
            numberOfFurnitureLegs :"4",
            price:3000,
            
       }
        //Act
        const furniture = new Furniture(properties)
       
        //assert
        expect(furniture.properties).toBe(properties)
    })
    it("return price of furniture",()=>{
        //arrange 
        const properties = {
            marca: "Vondomm",
            numberOfFurnitureLegs :"4",
            price:3000,
            
       }
        //Act
        const myfurniture = new Furniture(properties)
        const result = myfurniture.getPrice()

        //assert
        const expectedResult = {price:3000}
        expect(result).toEqual(expectedResult)
    })
    it("return new price of furniture",()=>{
        //arrange 
        const properties = {
            marca: "Vondomm",
            numberOfFurnitureLegs :"4",
            price:3000,
            
       }
       let  newPrice = 1500

        //Act
        const myfurniture = new Furniture(properties)
         myfurniture.updatePrice(newPrice)

        //assert
        expect(myfurniture.getPrice()).toEqual({price:1500})
    })
    
})