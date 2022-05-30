
import {Person} from "./greting"

describe("Greeting",()=>{
    it("returns greeting for a given name",()=>{
       //arrange
       const person = new Person()
       const name =  "Bob"
         
       //act
       
      const greeting =  person.greet(name) 
       
       //assert
         
        expect(greeting).toBe("Hello, Bob")
    })
    it("retunrs (Hello, my friend) if the given name is null",()=>{
        //arrange
        const person = new Person()
        const name = null
           
        //act
       
       const greeting =  person.greet(name) 
        //assert
          
         expect(greeting).toBe("Hello, my friend")
     })
     it("returns greeting in uppercase if the given name is in uppercase",()=>{
         //arrange
         const person = new Person()
         const name = "JERRY"
 
          //act
         const greeting = person.greet(name)
 
          //assert
          expect(greeting).toBe("HELLO, JERRY!")
     })
     it("returns the names separated with AND for a given array of names.",()=>{
        //arrange
        const person = new Person()
        const names = ["Jill", "Jane"]
        
         //act
         
         const greeting = person.greet(names)

         //assert
         expect(greeting).toBe("Hello, Jill and Jane")
    })
     //"Hello, Amy, Brian, and Charlotte."
     it("returns the names separated with commas and last one  with AND",()=>{
        //arrange
        const person = new Person()
        const names = ["Amy", "Brian", "Charlotte","Eva","Maria"]
        
         //act
         
         const greeting = person.greet(names)

         //assert
         expect(greeting).toBe("Hello, Amy, Brian, Charlotte, Eva, and Maria")
    })
    //Hello, Amy and Charlotte. AND HELLO BRIAN!"
    it("returns greeting the names separated with And  and uppercase gretting when name in uppercase",()=>{
        //arrange
        const person = new Person()
        const names = [ "BRIAN","Amy", "Charlotte"]
        
         //act
         
         const greeting = person.greet(names)

         //assert
         expect(greeting).toBe("Hello, Amy and Charlotte. AND HELLO BRIAN!")
    })
 })