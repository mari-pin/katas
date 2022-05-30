export class Furniture{
    properties = {
        marca: "",
        numberOfFurnitureLegs :"",
        price:0,
        
    }
    constructor(properties){
        this.properties = properties
    }
    getPrice(){
        return {
            price: this.properties.price
        }
    }
    updatePrice(newPrice){
        
          this.properties.price = newPrice
        
    }

}