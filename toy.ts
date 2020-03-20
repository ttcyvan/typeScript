
export class Toy {
  typeToy: string;

  constructor(typeToy: string){
    this.typeToy = typeToy; 
  }

  isMoved(typeToy: string) {
    if (typeToy === "Pony") {
    
      console.log("Huuuuuuhu!");
    }
    if (typeToy === "Figurine") {
      console.log("Kamé Hamé Ha!");
    }
  }


}
