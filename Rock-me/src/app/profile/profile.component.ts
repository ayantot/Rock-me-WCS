import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  myDetail() {

    var all:NodeListOf<HTMLElement> = document.querySelectorAll(".carousel-item .carousel-caption div");
    var element:HTMLElement = document.querySelector(".carousel-item.active .carousel-caption div");

    for( let i = 0; i < all.length; i++ ){
        all[i].style.display = "none";
    }

    element.style.display = "block";
  }


}



