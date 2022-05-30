//pasados todos los test el combat1 está para finalizar

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
  attack(attackedPlayer, damage, canAttack){
      //misma linea k la 21 a 26
      if (canAttack === false) return

      let finalDamage = this.calculateDamage(attackedPlayer,damage)
      attackedPlayer.applyDamage(finalDamage)
     
    //console.log("atacante",this.level)
     // console.log("atacado",playerTwo.getLevel())
    /*   if(canAttack === true){
        attackedPlayer.applyDamage(finalDamage)
      }else{
          return
      } */

  }
  calculateDamage(attackedPlayer,damage){
    let finalDamage = damage
    if(this.level + 5 <= attackedPlayer.getLevel()){
        finalDamage = damage/2
    }else if(this.level >= attackedPlayer.getLevel() + 5){
        finalDamage = damage * 2
    }
    return finalDamage
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
       if(canHeal === false) return // clausula de guarda testeamos el contrario xa ahorrar codigo y asi sale antes
       playerOne.applyHeal(heal)
    
    // mismo codigo de arriba a la inversa
       /* if(canHeal === true){
   
        playerOne.applyHeal(heal)
     
    }else{
        
        return
    } */
     
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
   levelUp(level){
       
       this.level = this.level + level

      
       /* if(this.level < finalLevel){
           playerTwo.attack(damage) + damage * 2
           this.level = this.level + newLevel
       }else if{
          playerTwo.attack(damage) + damage / 2
       }else{
           playerTwo.attack(damage) 
       }
       
     */
       
     
   }
 
}