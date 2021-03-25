import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.css']
})
export class CityCardComponent implements OnInit {
  @Input('cities') cities;

  population: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.calcPopulation()
  }

  //#region 

  // population

  calcPopulation() { // total population
    this.cities.forEach(c => this.population += c.Population)
  }

  decPop() { // decrease population by 5 million
    this.population -= 5000000
  }

  addPop() { // increase population by 1 million
    this.population += 1000000
  }

  //#endregion


}
