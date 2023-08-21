import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../todolist';
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'app-deletelist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deletelist.component.html',
  styleUrls: ['./deletelist.component.scss']
})
export class DeletelistComponent {
  todoList:Todo[]=[];
  todoDataServ = inject(TodoDataService);

  ngOnInit(): void {
    this.todoList=this.todoDataServ.getData()
  }
  onDeleteTodo(todoTitle:string){
    this.todoDataServ.deleteTodo(todoTitle)
    this.todoList=this.todoDataServ.getData()
  }
}
