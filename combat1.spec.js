/* Todos los personajes, cuando se crean, tienen:

    Salud, a partir de 1000
    Nivel, a partir de 1
    Puede estar Vivo o Muerto, comenzando Vivo (Vivo puede ser verdadero/falso)

Los personajes pueden infligir daño a los personajes.

El daño se resta de la salud.
Cuando el daño recibido supera la salud actual, la salud se convierte en 0 y el personaje muere.
Un personaje puede curar a un personaje.

Los personajes muertos no se pueden curar.
La curación no puede elevar la salud por encima de 1000
 

ITERACION 2
Un personaje no puede infligirse daño a sí mismo.

Un personaje solo puede curarse a sí mismo.

Al hacer daño:

Si el objetivo está 5 o más niveles por encima del atacante, el daño se reduce en un 50 %.
Si el objetivo está 5 o más niveles por debajo del atacante, el daño aumenta en un 50 %.
iteración tres*/
import {Player} from "./combat1"

describe("Combat",()=>{
    it("when one player is created, has health at max",()=>{
       //arrange
      
       const player = new Player()
       const maxHealth = 1000

       //act

       //assert
         
        expect(player.getHealth()).toBe(maxHealth)
    })
    it("starts with level one ",()=>{
         //arrange
      
       const player = new Player()
       const startingLevel = 1

       //act

       //assert
       expect(player.getLevel()).toBe(startingLevel)
    })
    it("player starts alive",()=>{
        
      //arrange
      
       const player = new Player()
       const isAlive = true

       //act

       //assert
       expect(player.isAlive()).toBe(isAlive)
    
    })
    it("player can get damage",()=>{
         //arrange
      
       const playerTwo = new Player()
       const  playerOne = new Player()
       const damage = 20
       const finalHealth = playerTwo.getHealth() - damage
       const canAttack = true
       

       //act
        playerOne.attack(playerTwo,damage, canAttack)

       //assert
       expect(playerTwo.getHealth()).toBe(finalHealth)

    })
    it("when damage are more than health player is death",()=>{
        //arrange
     
      const playerTwo = new Player()
      const  playerOne = new Player()
      const live = true
      const finalHealth = 0
      const damage = 1200
      const canAttack = true
      
      
      //act
       playerOne.attack(playerTwo,damage, canAttack)

      //assert
      expect(playerTwo.getHealth()).toBe(finalHealth)
      //isAlive esta en true
      expect(playerTwo.isAlive()).toBe(false)

   })
      it("if player is death can not be healed",()=>{
        //arrange
    
    const playerTwo = new Player()
    const  playerOne = new Player()
    const damage = 1000
    const health = 0
    const heal = 200
    const canAttack = true
    const canHeal = true
    
    
    //act
    playerOne.attack(playerTwo, damage, canAttack)
    playerTwo.heal(playerTwo, heal,canHeal)


    //assert
    expect(playerTwo.getHealth()).toBe(health)
  
    //isAlive esta en true
    expect(playerTwo.isAlive()).toBe(false)
  })

    //la salud no puede ser mas de 1000 despues de curar
    it("health can not be more than 1000 after healing ",()=>{
        //arrange
    
      const playerTwo = new Player()
      const  playerOne = new Player()
      const damage = 700
      const heal = 800
      const canAttack = true
      const canHeal = true
      
      const health = 1000
      
      
      //act
      playerOne.attack(playerTwo, damage,canAttack)
      playerOne.heal(playerTwo,heal,canHeal)
     

      //assert
      expect(playerTwo.getHealth()).toBe(health)

    })
    it("player can not damage himself ",()=>{
      //arrange
    const  playerOne = new Player()
    const damage = 700
    const health = 1000
    const canAttack = false
   
    //act

    playerOne.attack(playerOne,damage,canAttack)
    
    //assert
    expect(playerOne.getHealth()).toBe(health)

  })  
   it("player can not heal another player ",()=>{
    //arrange
  const  playerOne = new Player()
  const playerTwo = new Player()
  const heal = 200
  const damage = 300
  const canAttack = true
  const canHeal = false

  //act
  playerTwo.attack(playerOne,damage,canAttack)
  playerTwo.heal(playerOne,heal,canHeal)
  
  //assert
  expect(playerOne.getHealth()).toBe(700)

})  
it("player can heal himfelsf",()=>{
  //arrange
const  playerOne = new Player()
const playerTwo = new Player()
const heal = 200
const damage = 300
const canAttack = true
const canHeal = true
const finalHealth = 900

//act
playerTwo.attack(playerOne,damage,canAttack)
playerOne.heal(playerOne,heal,canHeal)

//assert
expect(playerOne.getHealth()).toBe(finalHealth)

}) 
it("If the target is 5 or more Levels above the attacker, Damage is reduced by 50%",()=>{
  //arrange

const player = new Player()
const startingLevel = 1

//act

//assert
expect(player.getLevel()).toBe()
}) 
it("If the target is 5 or more levels below the attacker, Damage is increased by 50% ",()=>{
  //arrange

const player = new Player()
const startingLevel = 1

//act

//assert
expect(player.getLevel()).toBe()
})



})
// poder modificar el nivel de los jugadores
// crear el metodo que me permite subir o bajar de nivel
// cuando ataque comprobar en qu nivel esta cada jugador
//averiguar si les añado 50% + de daño