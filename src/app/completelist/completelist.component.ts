import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../todolist';
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'app-completelist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './completelist.component.html',
  styleUrls: ['./completelist.component.scss']
})
export class CompletelistComponent {
  todoList:Todo[]=[];
  todoDataServ = inject(TodoDataService);

  ngOnInit(): void {
    this.todoList=this.todoDataServ.getData()
  }

}
