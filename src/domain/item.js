

export class Item {

    constructor( id, nombre, alcance,danio,peso,resistencia,sobrenatural,precio) {
        this.id = '';
        this.nombre = nombre
        this.alcance =alcance
		this.danio = danio
		this.peso = peso
		this.resistencia =resistencia
		this.sobrenatural = sobrenatural
		this.precio = precio;
       
     }

    static fromJson(individuoJSON){
        return Object.assign(new Item(), individuoJSON)
    }

    createItem(){
        
    }
}