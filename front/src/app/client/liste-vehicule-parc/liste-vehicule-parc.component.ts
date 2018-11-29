import { Component, OnInit, Inject } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-liste-vehicule-parc',
  templateUrl: './liste-vehicule-parc.component.html',
  styleUrls: ['./liste-vehicule-parc.component.sass']
})
export class ListeVehiculeParcComponent implements OnInit {

  constructor(
    @Inject(LayoutService) public layoutService: LayoutService,
  ) { }

  ngOnInit() {
    this.layoutService.title = 'Gestion du parc';
  }


}
