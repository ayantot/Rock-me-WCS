import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
=======
/*import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';*/
>>>>>>> 1e6a115850a7b3d1fcc6610f68a2267711fd070e
import {NasaService} from '../nasa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  image:string[];

  constructor(private myService:NasaService){
    this.image = [];

<<<<<<< HEAD
    this.myService.getImage().subscribe(
      (param_image:string[]) => {
        this.image = param_image;
        console.log(param_image);
        return (param_image);
=======
    
  }

  ngOnInit() {
    this.myService.getImage().subscribe(
      (param_image:string[]) => {
        this.image = param_image;
        document.body.style.backgroundImage = 'url("'+param_image[0]+'")';
>>>>>>> 1e6a115850a7b3d1fcc6610f68a2267711fd070e
      }
    );
  }

<<<<<<< HEAD
  ngOnInit() {
  }

=======
>>>>>>> 1e6a115850a7b3d1fcc6610f68a2267711fd070e
}
