export class Player{
     alive = true
     oxygen = 150
     levelOfSea = 0
     constructor(initOxigen = 150){

         this.oxygen = initOxigen
     }
     getOxygen(){
        return this.oxygen
    }
    getLevelOfSea(){
        return this.levelOfSea
    }
    isAlive(){
      return  this.alive
    }
    
    descend(){
       
        let metersToDescend = 1
       this.levelOfSea = this.levelOfSea + metersToDescend
       this.oxygen =  this.oxygen - this.levelOfSea * 2
       if(this.oxygen <= 0){
            this.alive = false
            this.oxygen = 0
    }
    }
    keepLevel(){
        const consumOxigen = 0.5
        this.oxygen = this.oxygen - consumOxigen
    } 
    
    ascend(){
        if(this.levelOfSea === 0){return}

            let metersToAscend = 1
            this.levelOfSea = this.levelOfSea - metersToAscend
            this.oxygen = this.oxygen - 1
    
    }
}
