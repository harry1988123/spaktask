import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as cardValidator from "card-validator";
import { CardServiceService } from '../card-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
 
  isCardFlipped: boolean = false;   
  randomBackgrounds: {
    type: Boolean;
    default: true;
  } | undefined;
  backgroundImage: [String, Object] | undefined; 
  cardNumber: string | undefined;
  imask = {mask:'0000 000 000 0000'};
  name:string | undefined;
  bgImage:any; 

  counter = (i:number) => { return (new Array(i)); }

  currentCardBackground () {
    let random = Math.floor(Math.random() * 25 + 1)
    return `assets/images/${random}.jpeg`; 
  }

  constructor(public _cardSer: CardServiceService) { }

  ngOnInit(): void {
    this.bgImage = this.currentCardBackground();
  } 

}
