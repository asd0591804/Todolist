import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Todolist } from './todolist';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'todonew';
  todoLists :Todolist[] = [];
  newTodo:string = '';
  isDeletedState = false;

  ngOnInit(){
    this.todoLists = [
      {title:'grid',isComplete:false,isDelete:false},
      {title:'建立server端',isComplete:false,isDelete:false}
    ]
  }

  onInsertTitle(): void{
    this.todoLists.push({title:this.newTodo,isComplete:false,isDelete:false});
  }

  onUpdateCompl(changeCom:Todolist) {
    changeCom.isComplete = true;
  }

  onUpdateDel(stateDel:Todolist){
    stateDel.isDelete = true;
  }

  onDeleteTodo(dTitle:string){
    this.todoLists = this.todoLists.filter(newList => newList.title !== dTitle);
  }

  onUpdateDisplay(){
    this.isDeletedState = !this.isDeletedState;
  }
}

