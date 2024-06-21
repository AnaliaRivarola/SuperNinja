class Ninja {
    constructor(nombre) {
        this.nombre = nombre;
        this.salud = 0;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName(){
        console.log(this.nombre);
    }
    showStats(){
        console.log(`Nombre: ${this.nombre}, Fuerza: ${this.fuerza}, Velocidad: ${this.velocidad}, Salud: ${this.salud}`);
    }

    drinkSake() {
        this.salud += 10;
    }
}

class Sensei extends Ninja{
    constructor(nombre){
        super(nombre);
        this.sabiduria = 10;
        this.salud = 200; 
        this.velocidad = 10; 
    }

    speakWisdom(){
        this.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake(); 
ninja1.showStats();


const superSensei = new Sensei("Master Splinter");
superSensei.sayName();        
superSensei.showStats();      
superSensei.speakWisdom();   
superSensei.showStats();  