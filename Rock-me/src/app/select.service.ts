import { Injectable } from '@angular/core';
import { System } from './system';
import { Planet } from './planet';

@Injectable()
export class SelectService {

  getSystem() {
    return [
     new System(1, 'Solar System' ),
     new System(2, 'Proxima Centauri' ),
     new System(3, 'Lyche System'),
    ];
  }

  getPlanetById( p_id:number):Planet{
    let planets:Planet[] = this.getPlanet();
    for( let i:number = 0; i < planets.length; i++ ) {
      
      if( planets[i].id == p_id )
        return planets[i];
    }

    return null;
  }
  
  getPlanet() {
   return [
     new Planet(1, 1, 'Mercury', "assets/Mercury.png", "Not the planet of Freddy" ),
     new Planet(2, 1, 'Venus', "assets/Venus.gif", "The second planet of the Solar System" ),
     new Planet(3, 1, 'Earth',"assets/Earth.png", "The only habitable planet of the Solar System"),
     new Planet(4, 1, 'Mars',"assets/Mars.png", "Our Futur"),
     new Planet(5, 1, 'Jupiter',"assets/Jupiter.png", "the largest and most massive planet that all the other planets combined" ),
     new Planet(6, 1, 'Saturn',"assets/Saturn.png", "his rings are legendary"),
     new Planet(7, 1, 'Uranus',"assets/Uranus.png", "It owes its name to the Roman god of heaven Uranus, father of Saturn and grandfather of Jupiter" ),
     new Planet(8, 1, 'Neptune',"assets/Neptune.png", "The last planet of the Solar System" ),
     new Planet(9, 2, 'Proxima A',"assets/ProximaA.png", "Many things are still to discover on this planet" ),
     new Planet(10, 2, 'Proxima B',"assets/ProximaB.png", "it is located in the habitable zone" ),
     new Planet (11, 3, 'Draugr',"assets/Draugr.png", "The real name is PSR B1257+12 A"),
     new Planet (12, 3, 'Poltergeist',"assets/Poltergeist.png", "One of the first planets discovered outside the Solar System"),
     new Planet (13, 3, 'Phobetor',"assets/Phobetor.png", "Separated from approximately 2,315 light-years from the Earth"),

    ];
  }

}
