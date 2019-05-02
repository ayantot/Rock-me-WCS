import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
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

    
  }

  ngOnInit() {
    this.myService.getImage().subscribe(
      (param_image:string[]) => {
        this.image = param_image;
        document.body.style.backgroundImage = 'url("'+param_image[0]+'")';
      }
    );
  }

}
