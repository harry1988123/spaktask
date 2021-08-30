import { Component, OnInit } from '@angular/core';
import * as cardValidator from "card-validator";
import { CardServiceService } from '../card-service.service';  

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit {

  imask = {mask:'0000 000 000 0000'}; 
  currentYear = 2021;  
  constructor(public _cardSer: CardServiceService) { }

  ngOnInit(): void {  }

  months(){
    let monthList = [];
    for(let i=1;i<=12;i++){
      let currentMonth = i.toString();
      i < 10 ? currentMonth = "0" + currentMonth : currentMonth = currentMonth;
      monthList.push(currentMonth);
    }
    return monthList;
  }

  getYear(){
    let year = [];
    for(let i=0;i<=13;i++){
      year.push(this.currentYear + i);
    }
    return year;
  }


  cardTurnCvvBack = () => this._cardSer.cardFlip.next(true); 
  cardTurnCvvFront = () => this._cardSer.cardFlip.next(false);

  ngAfterViewInit(){  }

}
