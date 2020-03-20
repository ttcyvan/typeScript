import {Toy} from "./toy";

export class Figurine extends Toy{
nb: number = 1;
ponyId: number;

	constructor(typeToy: string = "Figurine"){
		super(typeToy);
		this.ponyId = this.nb;
		this.nb ++;
	}

}
