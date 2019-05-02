import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-criterion1',
  templateUrl: './criterion1.component.html',
  styleUrls: ['./criterion1.component.css']
})
export class Criterion1Component implements OnInit {

  currentWeight:number = 100;
  constructor() {}

  ngOnInit() {
   
  }

}
