import { Component, OnInit } from '@angular/core';
import { Card } from '../../../../model/card.model';

@Component({
  selector: 'app-card-demo',
  templateUrl: './card-demo.component.html',
  styleUrls: ['./card-demo.component.css']
})
export class CardDemoComponent implements OnInit {

  memberList?: Card[];
  leftMemDat?: Card;
  rightMemDat?: Card;
  cenMemDat?: Card;
  mainMemID?: number;

  constructor(){
    const jsonData =[
    {"id":1,"name":"林雲尻老師","city":"新北市","info":"帥帥小喳喳","imgurl":"https://www.descalp.com/archive/image/model/images/te-5.jpg"}
    ,{"id":2,"name":"齊智豪老師","city":"新北市","info":"帥帥不喳喳","imgurl":"https://www.descalp.com/archive/image/model/images/te-1.jpg"}
    ,{"id":3,"name":"可愛小子愈","city":"新北市","info":"可愛到不行","imgurl":"https://www.descalp.com/archive/image/model/images/te-2.jpg"}
    ,{"id":2,"name":"齊智豪66師","city":"新北市","info":"帥帥不喳喳","imgurl":"https://www.descalp.com/archive/image/model/images/te-4.jpg"}];
  this.memberList = jsonData;
  }

  ngOnInit():void {
    console.log(this.memberList);
    this.mainMemID = 1;
    this.giveChild(this.mainMemID);
  }

  giveChild(id:number):void{
    const listSiz = this.memberList.length;
    this.cenMemDat = this.memberList[id];
    if(id === 0){
      this.leftMemDat = this.memberList[listSiz-1];
      this.rightMemDat = this.memberList[1];
    }
    else if(id === listSiz-1){
      this.leftMemDat = this.memberList[id-1];
      this.rightMemDat = this.memberList[0];
    }
    else{
      this.leftMemDat = this.memberList[id-1];
      this.rightMemDat = this.memberList[id+1];
    }
  }

  infoChange(side:string):void{
    const listSiz = this.memberList.length;
    if(side === 'left'){
      this.mainMemID  = this.mainMemID-1;
      if(this.mainMemID === -1){
        this.mainMemID = listSiz-1
      }
    }
    if(side === 'right'){
      this.mainMemID  = this.mainMemID+1;
      if(this.mainMemID === listSiz){
        this.mainMemID = 0
      }
    }
    console.log(this.mainMemID)
    this.giveChild(this.mainMemID);

  }

}
