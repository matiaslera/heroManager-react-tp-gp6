import {Item} from '../domain/item'



export class ItemsService  {

     getAllItems(){
        return items
    }

    async getItemById(_id){
        return items.filter(item => item.matches(_id))
    }



}
const items = [ 
    new Item('1', 'Cota del malla', 5.0, 5.0,5.0,5.0,false,2.0),
    new Item('2', 'Collar Divino', 5.0, 5.0,5.0,5.0,false,2.0),
    new Item('3', 'Espada del olimpo', 5.0, 5.0,5.0,5.0,false,2.0),
    new Item('4', 'Martillo de Thor', 5.0, 5.0,5.0,5.0,false,2.0),
  
  
]

// export const itemsService = new ItemsService()