import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-criteres2',
  templateUrl: './criteres2.component.html',
  styleUrls: ['./criteres2.component.css']
})
export class Criteres2Component implements OnInit {

  constructor() {
    var rangeSlider = function(){
      var slider = $('.range-slider'),
          range = $('.range-slider__range'),
          value = $('.range-slider__value');
        
      slider.each(function(){
    
        value.each(function(){
          var value = $(this).prev().attr('value');
          $(this).html(value);
        });
    
        range.on('input', function(){
          $(this).next(value).html(this.value);
        });
      });
    };
    
    rangeSlider();
   }

  ngOnInit() {
  }

}
