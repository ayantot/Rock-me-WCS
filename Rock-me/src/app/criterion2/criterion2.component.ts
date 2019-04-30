import { Component, OnInit } from '@angular/core';
import { SelectService } from '../select.service';
import { System } from '../system';
import { Planet } from '../planet';

@Component({
  selector: 'app-criterion2',
  templateUrl: './criterion2.component.html',
  styleUrls: ['./criterion2.component.css']
})
export class Criterion2Component implements OnInit {
  name = 'Criterion 2';
  selectedPlanet:Planet = null;


  selectedSystem: System = new System(0, '');
  systems: System[];
  planets: Planet[];

  constructor(private selectService: SelectService) {
    this.selectedPlanet = null;
   }

   selectPlanet(planetid:number){
     this.selectedPlanet = this.selectService.getPlanetById(planetid);
   }

  ngOnInit() {
    this.systems = this.selectService.getSystem();
    this.onSelect(this.selectedSystem.id);
  }

  onSelect(systemid) {
    this.planets = this.selectService.getPlanet().filter((item) => item.systemid == systemid);
  }

}
