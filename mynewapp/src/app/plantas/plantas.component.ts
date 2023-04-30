import { Component, OnInit } from '@angular/core';
import { Planta } from './planta';
import { dataPlantas } from './dataPlantas';
import { PlantaService } from '../planta.service';

@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.component.html',
  styleUrls: ['./plantas.component.css']
})
export class PlantasComponent implements OnInit {

  public plantas: Array<Planta> = [];
  constructor(private plantaService: PlantaService) { }

  getPlantas() {
    this.plantaService.getPlantas().subscribe(plantas=> {
      this.plantas = plantas;
    });
  }


  ngOnInit() {
    this.getPlantas();
  }

}
