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
  styleUrls: ['./spell-check.component.scss']
})
export class SpellCheckComponent implements OnInit {
  public  textData = ""
          showPopover = false
          selectedWrongWord
          correctWordList =[]
          corrections;
  private textAreaCtrlSub;

  // first api for spell check
  /**
   * To do
   * Replace this variable with another variable that can be defined as an
   * attribute
   */

  
  textAreaCtrl = new FormControl();
  private subscribers = <any>[];
  public wordsToBeCorrected = new Array();

  constructor(
    private spellCheckService: SpellCheckService
  ) {

    let textAreaClearSub = this.textAreaCtrl.valueChanges
    .subscribe((value)=>{
      // clear correction data when new inputs are detected
      this.corrections = [];
    })

    let textAreaCtrlSub = this.textAreaCtrl.valueChanges
    .debounceTime(3000)
    .subscribe((value)=>{
      // spell check entered value
      this.checkText(value);
      this.textData = value;
    })

    this.subscribers.push(this.textAreaCtrlSub);
   }
  
  ngOnInit() {
  }

  checkText(input){
    let spellCheckSub = this.spellCheckService.checkWithLanguageTool(input).subscribe((res)=>{
      if(res.matches){
        // place each possible replacement into key value pair
        res.matches.forEach((word)=>{
          let wrongWord = word.context.text.substring(word.context.offset, word.context.offset + word.context.length);
          this.wordsToBeCorrected[wrongWord] = word.replacements;
        })

        // use regex to replace all wrong words in the list to have a highlight indicator
        let markedText = input.replace(new RegExp(Object.keys(this.wordsToBeCorrected).join("|"), "gi"), word =>{
          return "<mark>" + word +"<mark>";
        })

        this.corrections = markedText.split("<mark>");
      }
    })
    this.subscribers.push(spellCheckSub);
  }
  
  showReplacements(word){
    this.showPopover = true;
    this.selectedWrongWord = word;
    this.correctWordList = this.wordsToBeCorrected[word];
  }

  needToCorrect(word){
    return Object.keys(this.wordsToBeCorrected).indexOf(word);
  }

  replaceWord(word){
    this.textData = this.textData.replace(this.selectedWrongWord, word);    
    const indexOfWord = this.corrections.indexOf(this.selectedWrongWord);
    this.corrections.splice(indexOfWord, 1);
    this.checkText(this.textData);
  }

  ngOnDestroy(){
    this.subscribers.each((subscriber)=>{
      subscriber.unsubscribe();
    })
    this.subscribers = [];
  }
  
}
