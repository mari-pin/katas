export class Player{
    
    health = 1000
     level = 1
     live = true
      
     getHealth(){
     return this.health 
  }
  getLevel(){
      return this.level
  }
  isAlive(){
      return this.live    
  }
  attack(playerTwo, damage, canAttack){
      if(canAttack === true){
        playerTwo.applyDamage(damage)
      }else{
          return 
      }
      
      

  }
  applyDamage(damage){
    
      if (damage >= this.health){
          
          this.live = false
          this.health = 0

      }else{
          //restamos el daño a la health inicial 
          const finalHealth = this.health - damage
          // modificamos el valor de health
          this.health = finalHealth
      }

     
  }
   heal(playerOne,heal,canHeal){
    if(canHeal === true){
   
        playerOne.applyHeal(heal)
     
    }else{
        
        return
    }
     
  }
   applyHeal(heal){
       
    if(this.live === false){return}

    const maxHealth = 1000
    let newHealth = this.health + heal
    if(newHealth > maxHealth){
        
        this.health = maxHealth
       
    }else{
       
        this.health = this.health + heal
        
    }
   }
 
}