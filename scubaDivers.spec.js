/* // 1 jugador empieza con 
-- con 150 litros de oxígeno
-- al nivel del mar (Zero metros)

//ACCIONES
-- Puedes descender un metro y tb ascender 2 acciones
-- Puedes mantenerte a la profundidad en a la que te encuentras
-- Puedes ascender un metro
-- No puedes ascender por encima del nivel del mar

//Reglas
-- Cuando estás bajo la superficie, consumes oxígeno
-- Cuando asciendes, gastas un litro de oxígeno
-- Cuando desciendes, gastas el doble de oxígeno que metros que te encuentras al final de la acción
-- Cuando te mantienes a la misma profundidad, gastas medio litro de oxígeno
-- Cuando te quedas sin oxígeno bajo la superficie, mueres
*/
import {Player} from "./scubaDivers"

describe("Scuba",()=>{
    it("when one player is start have oxygen",()=>{
       //arrange
      
       const player = new Player()
       const oxygen = 150
       

       //act
     
       

       //assert
         
        expect(player.getOxygen()).toBe(oxygen)
    })
     it("player start in level of sea 0",()=>{
       //arrange
      
       const player = new Player()
       const levelOfSea = 0

       //act
       
       //assert
         
        expect(player.getLevelOfSea()).toBe(levelOfSea)
    }) 
    it("can drop one meter below sea level",()=>{
        //arrange
       
        const player = new Player()
        const initLevelOfSea = 0
        const metersToDive = 1 //mertros a bucear
        const finalLevelOfSea = metersToDive + initLevelOfSea
       
        //act
        player.descend()
        
        //assert
          
         expect(player.getLevelOfSea()).toBe(finalLevelOfSea)
     }) 
     it("can stay at the depth that level descends ",()=>{ //depth = profundidad
        //arrange
       
        const player = new Player()
        const initLevelOfSea = 0
        const metersToDive = 1 //mertros a bucear
        const finalLevelOfSea = metersToDive + initLevelOfSea
       
        //act
        player.descend()
        player.keepLevel()
       
        //assert
          expect(player.getLevelOfSea()).toBe(finalLevelOfSea)
     })   
     it("can ascend one meter",()=>{
        //arrange
       
        const player = new Player()
        const initLevelOfSea = 0
        const metersToDescend = 1 //mertros a bucear
        const metersToAscend = 1
        const finalLevelOfSea = initLevelOfSea + metersToDescend - metersToAscend
       
        //act
        player.descend()
        player.ascend()
        
        //assert
          
         expect(player.getLevelOfSea()).toBe(finalLevelOfSea)
     }) 
     it("can not ascend above sea level",()=>{
        //arrange
       
        const player = new Player()
        const initLevelOfSea = 0
        
        //act
        
        player.ascend()
    
        //assert
          
         expect(player.getLevelOfSea()).toBe(initLevelOfSea)
     }) 
     it("when player descends consumes doble oxygen that meters you are",()=>{
        //arrange
       
        const player = new Player()
        const oxygen = 150
        const meterState = 1
        const consumOneMeter = meterState * 2 
        const meterState2 = 2
        const consumTwoMeters = meterState2 * 2 
       
        const oxygenFinal = oxygen - consumOneMeter - consumTwoMeters 
        //act
        player.descend()
        player.descend()
    
        //assert
          
         expect(player.getOxygen()).toBe(oxygenFinal)
     }) 
     it("when player ascend consumes one liter of oxygen",()=>{
        //arrange
       
        const player = new Player()
        const oxygen = 150
        const meterState = 1
        const descendsConsumption = meterState * 2  
        const ascendsConsumption = 1
        const oxygenFinal= oxygen - descendsConsumption - ascendsConsumption

        //act
        player.descend()
        player.ascend()
        
        //assert
          
         expect(player.getOxygen()).toBe(oxygenFinal)
     })
      
     it("when stay at the depth consumes half liter oxigen ",()=>{
        //arrange
       
        const player = new Player()
        const oxygen = 150
        const meterState = 1
        const keepLevelConsumption = 0.5
        const descendsConsumption = meterState * 2 
        const oxygenFinal = oxygen - descendsConsumption - keepLevelConsumption

        //act
        player.descend()
        player.keepLevel()
        
        //assert
          
         expect(player.getOxygen()).toBe(oxygenFinal)
     })
     it("when player does not have oxigen dies ",()=>{
        //arrange
        const startingOxygen = 3
        const oxygenFinal = 0
        const player = new Player(startingOxygen)
       
       
        //act
        player.descend()
        player.descend()
       
        //assert
          
         expect(player.getOxygen()).toBe(oxygenFinal)
         expect(player.isAlive()).toBe(false)
     })
     

})