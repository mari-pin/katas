import{getVerseFor}from "./99bottles"

describe("99 bottles of beer",()=>{
    it("return the verse for a number of bottles",()=>{
        //arrange
        const bottles = 98
        const verse = `98 bottles of beer on the wall, 98 bottles of beer. Take one down and pass it around, 97 bottles of beer on the wall`
        
        //act
        const result = getVerseFor(bottles)
        
        //assert
        expect(result).toBe(verse)
    })
    it("return the verse for two bottles",()=>{
        //arrange
        const bottles = 2
        const verse = `2 bottles of beer on the wall, 2 bottles of beer. Take one down and pass it around, 1 bottle of beer on the wall`
        
        //act
        const result = getVerseFor(bottles)
        
        //assert
        expect(result).toBe(verse)
    })
})