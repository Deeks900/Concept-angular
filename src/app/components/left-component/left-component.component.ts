import { Component, OnInit } from '@angular/core';
import {TryThisService} from './../../service/try-this.service';

@Component({
  selector: 'app-left-component',
  templateUrl: './left-component.component.html',
  styleUrls: ['./left-component.component.css']
})

export class LeftComponentComponent implements OnInit {

  constructor(private tryThis: TryThisService) { }

  ngOnInit(): void {
  }

  addTaskDupl(){
    // console.log(this.tryThis.taskC);
    this.tryThis.addTask(this.tryThis.taskC);
  }

}
