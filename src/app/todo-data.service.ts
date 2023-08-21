import { Injectable } from '@angular/core';
import { Todo } from './todolist';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  #todoData:Todo[]=[]
  constructor() {
    this.#todoData = [
      {title:'測試 service檔案',isComplete:false,isDelete:false},
      {title:'service 端',isComplete:false,isDelete:false}
    ]
  }
  getData(){
    return this.#todoData
  }
  insertData(newTodo:string){
    this.#todoData.push({title:newTodo,isComplete:false,isDelete:false});
  }
  updateComplete(nowTodo:Todo){
    nowTodo.isComplete = true;
  }
  updateDelete(nowTodo:Todo){
    nowTodo.isDelete = true;
  }
  deleteTodo(dTitle:string){
    console.log('永久移除')
    this.#todoData = this.#todoData.filter(newList => newList.title !== dTitle);
  }

}
