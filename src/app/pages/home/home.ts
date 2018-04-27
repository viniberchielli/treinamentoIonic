import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { TodoService } from '../../../app/services/todos-service';
import { Todo } from '../../models/todos'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {

  todos: Todo[] = new Array<Todo>();
  todo: Todo = new Todo;
  constructor(public navCtrl: NavController, private todosService: TodoService) {
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
    this.getAll();
  }

}


