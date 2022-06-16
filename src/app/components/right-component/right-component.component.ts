import { Component, OnInit } from '@angular/core';
import {TryThisService} from './../../service/try-this.service';

@Component({
  selector: 'app-right-component',
  templateUrl: './right-component.component.html',
  styleUrls: ['./right-component.component.css']
})
export class RightComponentComponent implements OnInit{

  constructor(private tryThis: TryThisService) { }

  taskList !: string[];
  currTask!:string;

  ngOnInit(): void {
    this.tryThis.getTask().subscribe(todos => {
      this.taskList = todos;
    });
  }

  getTaskList(){
    return this.tryThis.getTask();
  }

  updateTaskList(){
    // console.log(this.currTask);
    return this.tryThis.updateTask(this.currTask);
  }
}
