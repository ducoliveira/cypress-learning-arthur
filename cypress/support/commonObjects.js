import Tables from "./tables";
import Lists from "./lists";

// Classe commonObjects que importa os elementos de tables e lists
class commonObjects{
    // Constructor para inicializar as lists e tables
    constructor(){
        this.lists = new Lists()
        this.tables = new Tables()
    }
}

export default commonObjects