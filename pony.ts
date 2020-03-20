import {Toy} from "./toy";

export class Pony extends Toy{
nb: number = 1;
ponyId: number;

	constructor(typeToy: string = "Pony"){
		super(typeToy);
		this.ponyId = this.nb;
		this.nb ++;
		this.inst();
	}

	inst(){
		console.log(`Pony ${this.ponyId} is singging`);
		console.log(`Dou-double poney, j'ai fait izi money `);
		console.log("D'ou tu m'connais ? Parle moi en billets violets");
		console.log(`Dou-double poney?, j'fais izi money`);

	}

}

