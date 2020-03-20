export class Packaging {
	isOpen: boolean; 
	toy :string;
	
	constructor(isOpen:boolean, toy: string) {
		this.isOpen = isOpen;
		this.toy = toy;
		this.open();
	}

	open(){
		if(this.isOpen == true){
			console.log (`l'embalae est fermé `)
			this.isOpen = false;
		}else{
			console.log (`l'emabalage est déja ouvert `)
		}
	}

	
}