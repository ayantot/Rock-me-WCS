import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  model: Order = new Order();

  constructor() {
  }
  ngOnInit() {
  }
  onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);
  }
}
export class Order {
    title: string;
    contact: string;
  }
