import { Component, OnInit, Inject } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-liste-agence',
  templateUrl: './liste-agence.component.html',
  styleUrls: ['./liste-agence.component.scss']
})
export class ListeAgenceComponent implements OnInit {
  agences: any[] = [];

  constructor(
    @Inject(LayoutService) public layoutService: LayoutService,
  ) { }

  ngOnInit() {
    this.layoutService.title = 'Liste des agences';
    for (let i = 0; i < 100; i++) {
      this.agences.push({ nom: 'Agence ' + i, id: i });
    }
  }
}
