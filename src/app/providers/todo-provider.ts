import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

//filtro com provider NÃO FAZER ASSIM DÁ RUIM
 
@Injectable()
export class TodoProvider {

    constructor() {

    }
    filterItems(searchTerm,todos){

        return todos.filter((todos) => {
            return todos.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });    
 
    }
 
}