import {Figurine} from "./figurine";

export enum DBHeroe {
  SANGOKU,
  BEJITA,
  BEERUS,
  KAMESENNIN
};

export class dragonBall extends Figurine{
	
	constructor(figurine: string = "Figurine"){
		super(figurine);
		this.inst();
	}

	inst(){
	     
		     	console.log(`${DBHeroe[0]}`);  
				console.log(`CHA-LA HEAD CHA-LA`);
				console.log("Nani ga okite mo kibun wa heno-heno kappa");
				console.log(`CHA-LA HEAD CHA-LA`);
				console.log(`Mune ga pachi-pachi suru hodo`);
				console.log(`Sawagu Genki-Dama --Sparking !`);
		

	}

}