import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable }  from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'ng-spell-check',
  templateUrl: './spell-check.component.html',
  styleUrls: ['./spell-check.component.css']
})
export class SpellCheckComponent implements OnInit {
  public  content = "";
  private textAreaCtrlSub;

  textAreaCtrl = new FormControl();

  constructor() {
    this.textAreaCtrlSub = this.textAreaCtrl.valueChanges
    .debounceTime(3000)
    .subscribe((value)=>{
      console.log(value);
    })
   }
  
  ngOnInit() {
  }

  
}
