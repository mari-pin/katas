// escanear 1 producto 
// devolver precio producto scaneado
// sumar el precio de varios productos scaneados
import {Checkout} from "./2checkout.js"


describe('Back to Checkout',() => {
    it("scan one product",()=>{
        //arrange 
        const checkout = new Checkout()
        const product = "a"
        
        //Act
        checkout.scanProduct(product)

        //assert
         const scaned = checkout.scanedProduts()
        expect(scaned).toEqual(["a"])
    })
    it("scan one product and return price of it",()=>{
        //arrange 
        const checkout = new Checkout()
        const product = "a"
        const price = 50
        
        //Act
        checkout.scanProduct(product)
        const scanedPrice = checkout.calculatePrice()
        
        //assert
        expect(scanedPrice).toBe(price)
    })
    it("return the prices of multiple scaned products",()=>{
        //arrange 
        const checkout = new Checkout()
        const product1 = "a"
        const product2 = "b"
        const price1 = 50
        const price2 = 30
        
        //Act
        checkout.scanProduct(product1)
        checkout.scanProduct(product1)
        checkout.scanProduct(product2)

        const scanedPrice = checkout.calculatePrice()
       
        //assert
        const total = price1 + price1 + price2
        expect(scanedPrice).toBe(total)
    })
    it("return especial price if there are three a ",()=>{
        //arrange 
        const checkout = new Checkout()
        const product1 = "a"
        const offer = 130
      
        
        //Act
        checkout.scanProduct(product1)
        checkout.scanProduct(product1)
        checkout.scanProduct(product1)

        const scanedPrice = checkout.calculatePrice()
       
        //assert
        
        expect(scanedPrice).toBe(offer)
    })
    it("return especial price if there are four a ",()=>{
        //arrange 
        const checkout = new Checkout()
        const product = "a"
        const offer = 130
        const price = 50
      
        
        //Act
        checkout.scanProduct(product)
        checkout.scanProduct(product)
        checkout.scanProduct(product)
        checkout.scanProduct(product)
        checkout.scanProduct(product)

        const scanedPrice = checkout.calculatePrice()
       
        //assert
        
        expect(scanedPrice).toBe(offer + price + price)
    }) 
})