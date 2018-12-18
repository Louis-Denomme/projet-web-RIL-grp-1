import { Component, OnInit, Inject } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-liste-vehicule-parc',
  templateUrl: './liste-vehicule-parc.component.html',
  styleUrls: ['./liste-vehicule-parc.component.scss']
})
export class ListeVehiculeParcComponent implements OnInit {
  vehicules: any[] = [];

  constructor(
    @Inject(LayoutService) public layoutService: LayoutService,
  ) { }

  ngOnInit() {
    this.layoutService.title = 'Gestion du parc';
    for (let i = 0; i < 100; i++) {
      this.vehicules.push({ nom: 'Vehicule ' + i });
    }
  }

  

}
