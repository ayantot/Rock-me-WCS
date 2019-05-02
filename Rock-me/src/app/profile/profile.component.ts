import { Component, OnInit } from '@angular/core';

<<<<<<< HEAD
=======

>>>>>>> 1e6a115850a7b3d1fcc6610f68a2267711fd070e
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
<<<<<<< HEAD
  }

}
=======

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



>>>>>>> 1e6a115850a7b3d1fcc6610f68a2267711fd070e
