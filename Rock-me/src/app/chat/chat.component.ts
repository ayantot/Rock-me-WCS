import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  start(){
    var demo = document.getElementById("demo");

    demo.innerHTML = " You say : <br> Sure, I'm excited to see you in person :) !";
    demo.style.display = "block";
  /*Quand je clique sur le boutton de la fonction "my ", alors un deuxième message apparait au bout de X secondes*/1
    setTimeout(this.congratulations.bind(this), 1000);
  }

  congratulations() {
    var demo2 = document.getElementById("demo2");
    demo2.innerHTML = "CONGRATULATIONS: We send you an email!";
    demo2.style.display = "block";
  }

  sorry() {
    var demo3 = document.getElementById("demo3");
    demo3.innerHTML = "SORRY, TRY AN OTHER PROFILE";
    demo3.style.display = "block";
  }


  /* En cliquant sur le boutton "refus" rouge un message apparait ci-dessous*/
  myNoContinuation() {
    var demo1 = document.getElementById("demo1");

    demo1.innerHTML = "You say : <br> Sorry, Maybe next time !";
    demo1.style.display = "block";
    /*Si je clique sur le boutton de la fonction "myNoContinuation ", alors un deuxième message apparait au bout de 30 secondes*/
    setTimeout(this.sorry.bind(this), 1000);
  }


}

