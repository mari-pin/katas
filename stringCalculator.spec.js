describe('stringCalculator',() =>{
    it('devulve 0 si se le da un string vacio',()=>{
       //arrange
        const stringCalculator = new StringCalculator()
        const emptyString = " "
       //act
       const result =  stringCalculator.calculate(emptyString)
       //assert
        expect(result).toBe(0)
    })
    it('si se le da un numero devuel ese numero',()=>{
        //arrange
         const stringCalculator = new StringCalculator()
         const oneNumberString = "8"
        //act
        const result =  stringCalculator.calculate(oneNumberString)
        //assert
         expect(result).toBe(8)
     })
     it('si el strring contiene 2 numeros los suma',()=>{
        //arrange
         const stringCalculator = new StringCalculator()
         const twoNumberString = "8,3"
        //act
        const result =  stringCalculator.calculate(twoNumberString)
        //assert
         expect(result).toBe(11)
     })
})   

class StringCalculator{
    calculate(string){
        if(this._isEmpty(string)){
            return 0
        }
        if(this._isOnlyOneNumber(string)){
            return Number(string)
        }
       return  this._add(string)
        
    }
    _isEmpty(string){
        return string ===  " "

    }
    _isOnlyOneNumber(string){
        return string.length === 1
    }
    _add(string){
        return   Number(string[0])+ Number(string[2])
               
    }
}
