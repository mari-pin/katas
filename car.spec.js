import{Car} from "./car"
describe('Car',() => {
    it("return all caracteristics of car",()=>{
        //arrange 
        const properties = {
            marca: "audi",
            model:"a3",
            km:100,
            itv:2021
       }
        //Act
        const car = new Car(properties)
        //assert
        expect(car.properties).toBe(properties)
    })
    it("return marca and model of car",()=>{
        //arrange 
        const properties = {
            marca: "audi",
            model:"a3",
            km:100,
            itv:2021
       }
        //Act
        const mycar = new Car(properties)

        const result = mycar.getProperties()
        
        //assert
        const expectedResult = {marca:"audi",model:"a3"}
        expect(result).toEqual(expectedResult)
    })
    it("update itv date",()=>{
        //arrange 
        const properties = {
            marca: "audi",
            model:"a3",
            km:100,
            itv:2021
       }
       const nextItv = 2022
        //Act
        const mycar = new Car(properties)
        mycar.updateItvDate(nextItv)

        //assert
       
        expect(mycar.properties.itv).toEqual(nextItv)
    })
})

//crear clase car
//artributos : marca, km, fecha itv, modelo
//la clase nos tiene que devolver la marca y el modelo
//actualizar la fecha de itv
