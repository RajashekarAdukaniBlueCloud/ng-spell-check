import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable }  from 'rxjs/Observable';
import { SpellCheckService } from './spell-check.service';
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

  // first api for spell check
  /**
   * To do
   * Replace this variable with another variable that can be defined as an
   * attribute
   */

  
  textAreaCtrl = new FormControl();
  private subscribers = <any>[];

  constructor(
    private spellCheckService: SpellCheckService
  ) {
    let textAreaCtrlSub = this.textAreaCtrl.valueChanges
    .debounceTime(3000)
    .subscribe((value)=>{
      this.checkText(value);
    })

    this.subscribers.push(this.textAreaCtrlSub);
   }
  
  ngOnInit() {
  }

  checkText(value){
    let params = {
      text: value,
      language: 'auto'
    };
    this.spellCheckService.checkWithLanguageTool(params).subscribe((res)=>{
    })
  }

  ngOnDestroy(){
    this.subscribers.each((subscriber)=>{
      subscriber.unsubscribe();
    })
    this.subscribers = [];
  }
  
}
