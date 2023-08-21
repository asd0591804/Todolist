import { TodoDataService } from './../todo-data.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../todolist';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  todoList:Todo[]=[];
  todoDataServ = inject(TodoDataService);
  newTodo:string = '';

  ngOnInit(): void {
    this.todoList=this.todoDataServ.getData()
  }
  onInsertTitle(): void{
    this.todoDataServ.insertData(this.newTodo)
  }
  onUpdateTodo(todo:Todo){
    this.todoDataServ.updateComplete(todo)
  }
  onUpdateDel(todo:Todo){
    this.todoDataServ.updateDelete(todo)
  }

}
