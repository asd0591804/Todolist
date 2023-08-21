import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Todo } from './todolist';
import { ListComponent } from './list/list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule,RouterModule,ListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // title = 'todonew';
  // todoLists :Todo[] = [];
  // newTodo:string = '';
  // isDeletedState = false;

  // ngOnInit(){
  //   this.todoLists = [
  //     {title:'grid',isComplete:false,isDelete:false},
  //     {title:'建立server端',isComplete:false,isDelete:false}
  //   ]
  // }

  // onInsertTitle(): void{
  //   this.todoLists.push({title:this.newTodo,isComplete:false,isDelete:false});
  // }

  // onUpdateCompl(changeCom:Todo) {
  //   changeCom.isComplete = true;
  // }

  // onUpdateDel(stateDel:Todo){
  //   stateDel.isDelete = true;
  // }

  // onDeleteTodo(dTitle:string){
  //   this.todoLists = this.todoLists.filter(newList => newList.title !== dTitle);
  // }

  // onUpdateDisplay(){
  //   this.isDeletedState = !this.isDeletedState;
  // }
}

