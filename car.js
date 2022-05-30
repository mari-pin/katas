export class Car {
    properties = {
       /*  marca: "",
        model:"",
        km:0,
        itv:0 */
   }
   
    constructor(properties){
        this.properties = properties
       

    }
    getProperties(){
        return{
            marca : this.properties.marca,
            model : this.properties.model
        }
       
    }
    updateItvDate(nextItv){
        this.properties.itv = nextItv
    }
    
}