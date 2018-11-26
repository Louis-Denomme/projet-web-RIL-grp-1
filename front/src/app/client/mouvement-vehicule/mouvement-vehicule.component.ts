import { Component, OnInit, Inject } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-mouvement-vehicule',
  templateUrl: './mouvement-vehicule.component.html',
  styleUrls: ['./mouvement-vehicule.component.sass']
})
export class MouvementVehiculeComponent implements OnInit {

  constructor(
    @Inject(LayoutService) public layoutService: LayoutService,
    ) { }

  ngOnInit() {
    this.layoutService.title = 'Mouvement de véhicules';
  }

}
