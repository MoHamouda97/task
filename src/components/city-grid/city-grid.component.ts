import { Component, OnInit } from '@angular/core';
import {cities} from './../../services/cities';

@Component({
  selector: 'app-city-grid',
  templateUrl: './city-grid.component.html',
  styleUrls: ['./city-grid.component.css']
})
export class CityGridComponent implements OnInit {

  cities: any[] = cities;

  constructor() { }

  ngOnInit(): void {    
  }
}
