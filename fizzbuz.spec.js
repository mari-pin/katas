

function ListOfNumbers (initNumber, finalNumber){
    const list = []
    for (let i = initNumber; i <= finalNumber; i++){
        if (isDivisibleBy5(i) && isDivisibleBy3(i)){
           
            list.push("FizzBuzz")

        }else if (isDivisibleBy3(i) ||includeNumber(i, 3)){
            
                list.push("Fizz")
            
        }else if(isDivisibleBy5(i) ||includeNumber(i, 5)){

            list.push("Buzz")

        }else {
            list.push(`${i}`)

        }
      
    
    }
    return list
}

   function isDivisibleBy3(i) {
    return i % 3 === 0 //refactor 30 - 34

      /*  if (i % 3 === 0) {
           return true
       } else {
           return false
       
       } */
    }
    function isDivisibleBy5(i) {
        return i % 5 === 0
    } 
    function includeNumber(i, divisor) {
       return  i.toString().includes(divisor)
    }

 

describe('List of numbers',() => {
    it("show a list of numbers ",()=>{
        //arrange 
        let initNumber = 101
        let finalNumber = 200
        
        //Act
        const result = ListOfNumbers(initNumber, finalNumber)
       
        //assert
        expect(result[0]).toBe("101")
    })
    it ("show a list of dinamyc range of numbers", ()=>{
         //arrange 
         let initNumber = 101
         let finalNumber = 200

        const result = ListOfNumbers(initNumber, finalNumber)
        
        expect(result.length).toBe(100)
    })
     it ("if the number of list is divisible by 3 show the  word Fizz in string",() =>{
         //arrange 
         let initNumber = 1
         let finalNumber = 100

        //act
        const result = ListOfNumbers(initNumber, finalNumber)
        //assert
          const isDivisdible3 = result[2]
        expect(isDivisdible3 ).toBe("Fizz")
    }) 
     it ("if the number of list is divisible by 5 show the  word Buzz in string",() =>{
        //arrange 
        let initNumber = 1
        let finalNumber = 100
        //act
        const result = ListOfNumbers(initNumber, finalNumber)

        //assert
        const isDivisdible5 = result[4]
        expect(isDivisdible5).toBe("Buzz")
       
    })
    it ("if the number of list is divisible by 5  and 3 show the  word FizzBuzz in string",() =>{
       
         //arrange 
         let initNumber = 1
         let finalNumber = 100
        //act
        const result = ListOfNumbers(initNumber, finalNumber)

        //assert
         const isDivisdible5and3 = result[14]
        expect(isDivisdible5and3).toBe("FizzBuzz")
    })
    it ("if the number is not divisible by 3 or 5 show the number ",()=>{
        //arrange 
        let initNumber = 1
        let finalNumber = 100
        //act
        const result = ListOfNumbers(initNumber, finalNumber)

       //assert
        const noDivisible = result[3]
        expect(noDivisible).toBe("4") 
    })
    it ("if the number of list is divisible by 3 or contain this number in it, show the  word Fizz",()=>{
        //arrange 
        let initNumber = 1
        let finalNumber = 100
        //act
        const result = ListOfNumbers(initNumber, finalNumber)
        const containNumber3 = result[22]
       //assert
        expect(containNumber3).toBe("Fizz") 
    })
    it ("if the number of list is divisible by 5 or contain this number in it, show the  word Buzz",()=>{
        //arrange 
        let initNumber = 1
        let finalNumber = 100
        //act
        const result = ListOfNumbers(initNumber, finalNumber)
       
       //assert
       const containNumber5 = result[51]
        expect(containNumber5).toBe("Buzz") 
    })
    /* it ( "returns FizzBuzz in case-insensitive", ()=>{
        //arrange
        let initNumber = 1
        let finalNumber = 100


        //act 
        const result = ListOfNumbers(initNumber,finalNumber)
        
        //assert
        const containNumber5 = result[51]
        expect(containNumber5).toEqual(/BUZZ/i) 
        //(/BUZZ/i) --> ignora si es myuscula y minuscula porque tenemos la i
        
    }) */
    
}) 
