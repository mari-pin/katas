export class Checkout{
    repeatedItems = {
        a: 0,
        b: 0,
        c: 0,
        d: 0

    }
    productScan = []
    
     priceOfProducts = {
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
    scanProduct(product){
        
        this.productScan.push(product)
       console.log(this.productScan)
    }
    
    scanedProduts(){
      return this.productScan
    }
    isExactAmountOffer(item){

        return this.repeatedItems[item] === this.priceOfProducts[item].specialPrice.amount
    }
    mixedPrice(item){
        this.repeatedItems[item] > this.priceOfProducts[item].specialPrice.amount
              
    }



    calculatePrice(){
        
        //modificamos el objeto repeatedItem
        this.productScan.map(item => {
            this.repeatedItems[item]++
            
        })
        console.log(this.repeatedItems)
        //convierte el objeto en un array
       const arrayItems = Object.keys(this.repeatedItems) 
       console.log(arrayItems)
       const sum = arrayItems.map(item =>{
            if(this.repeatedItems[item] === 0){
                return 0
            }

           if( this.isExactAmountOffer(item)) {
              
               return this.priceOfProducts[item].specialPrice.price

           }else if(this.mixedPrice(item)){
              
                //dividimos en cuantos grupos de la cantidad de la oferta podemos hacer oferta
                const offer = Math.floor(this.repeatedItems[item] / this.priceOfProducts[item].specialPrice.amount) 
                //sacamos el resto de la division 
                const sueltos = (this.repeatedItems[item] % this.priceOfProducts[item].specialPrice.amount) 
                //devuelve el resultado  de las variables de arriba + las operacones que añadimos

            return this.priceOfProducts[item].price * sueltos + this.priceOfProducts[item].specialPrice.price * offer
              
            
           
           }else {
            return this.priceOfProducts[item].price * this.repeatedItems[item]
           }

       })
         return sum.reduce((prev, curr) => { 
            return prev + curr
        }, 0) 
       
    }
    

}