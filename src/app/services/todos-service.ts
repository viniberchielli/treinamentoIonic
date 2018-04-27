import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Todo } from '../models/todos';


@Injectable()
export class TodoService {
    private url: string = 'http://localhost:3000/todos'
    private headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    private options = { headers: this.headers };
  
    constructor(private http: HttpClient) { }

 getAll() {
    return this.http.get(this.url, this.options);
 }

 create(todo : Todo){
     return this.http.post(this.url, todo);
 }
}