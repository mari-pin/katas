
 export class Checkout{

    //lista de precios productos
    priceList = {  
            a:{
                price:50,
            },
            b:{
                price:30,
               
            },
            c:{
                price:20
            },
            d:{
                price:15
            }
    }
    // numero de unidades de cada producto 
    itemsList = {
        a : 0,
        b: 0,
        c: 0,
        d : 0
        
    }
    scanProduct(product){
        this.itemsList[product]++

    }
 
    calculatePrice (){
           const productArray = Object.keys(this.itemsList)
           const result = productArray.map(scaned => {
            if (this.itemsList[scaned] !== 0) {
               return this.priceList[scaned]
            }else {
                return 0
            }
        })
        return result.reduce((prev, curr ) => prev + curr, 0)
    }
    pricesOffDay(offer){
       
        this.priceList = Object.values(offer).reduce((total, actual) => {
            return total + actual
            
        },0)
    }

   
    
    
}
