import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TryThisService {
  //stores the current task
  taskC!:string;
  //Will be storing whole list of these tasks
  taskArray: string[];

  constructor() { 
    this.taskArray = [("Demo Task")];
  }

  //Puts the current added task in string.
  updateTask(task: string){
    this.taskC = task;
  }

  //Adds the current task in array
  addTask(task: string){
    console.log(task);
    this.taskArray.push(task);
  }

  //Will be providing the whole list of tasks to components.
  getTask(){
    return of(this.taskArray);
  }
}
