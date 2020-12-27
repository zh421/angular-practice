import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-bu',
  templateUrl: './form-bu.component.html',
  styleUrls: ['./form-bu.component.css']
})
export class FormBuComponent implements OnInit {

  data1=0;
  data2=0;
  data=0;

  constructor() { }

  ngOnInit() {
    // this.data1;
    // this.data2;
  }

  addData1():void{
    this.data1++;
  }

  addData2():void{
    this.data2++;
  }

  mm():number{
    let a = this.data1*10
    let b = this.data2*this.data2
    console.log(a,b)
    console.log(a*b)
    return a*b
  }
  mm2(){
    return this.mm()*this.mm()
  }
  myfunc(){
    console.log('梓毓被愛了')
  }

}
