import { Pipe, PipeTransform } from '@angular/core';


//FILTRO COM PIPE FAZER ASSIM Q DÁ BOM !
@Pipe({
    name: 'filter',
    pure: false
})
export class TodoPipe implements PipeTransform {
    transform(searchTerm: any[], term): any { 
        return term 
            ? searchTerm.filter(searchTerm => searchTerm.title.toLowerCase().indexOf(term.toLowerCase()) !== -1)
            : searchTerm;
    }
}