import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { TodoService } from '../../../app/services/todos-service';
import { Todo } from '../../models/todos'
import { TodoProvider } from '../../../app/providers/todo-provider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {

  todos: Todo[] = new Array<Todo>();
  todo: Todo = new Todo;
  searchTerm : string = "";

  constructor(public navCtrl: NavController, private todosService: TodoService, private todosProvider : TodoProvider) {
  }

  getAll() {
    this.todosService.getAll().subscribe(
      (res: Todo[]) => { console.log(res), this.todos = res },
      (err) => { console.log(err); }
    )

    return this.todos;
  }

  create(){
    this.todosService.create(this.todo)
      .subscribe((res) => {
        this.getAll();
      });
  }
  
  ionViewDidLoad() {
    this.getAll()
    this.setFilteredItems();
  }

  setFilteredItems() {
    this.todos = this.todosProvider.filterItems(this.searchTerm, this.todos);
}

}


