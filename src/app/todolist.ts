export class Todo {
  title : string ='';
  isComplete : boolean=false;
  isDelete : boolean = false;

  constructor(that : Partial<Todo>){
    Object.assign( {}, structuredClone(Todo));
  }
}
