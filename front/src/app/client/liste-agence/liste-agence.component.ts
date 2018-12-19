import { Component, OnInit, Inject } from '@angular/core';
import { LayoutService } from '../layout.service';
import { AgenceService } from 'src/app/services/agence.service';
import { Agence } from 'src/app/services/interfaces';

@Component({
  selector: 'app-liste-agence',
  templateUrl: './liste-agence.component.html',
  styleUrls: ['./liste-agence.component.scss']
})
export class ListeAgenceComponent implements OnInit {
  agences: Agence[] = [];

  constructor(
    @Inject(LayoutService) public layoutService: LayoutService,
    @Inject(AgenceService) private agenceService: AgenceService
  ) { }

  ngOnInit() {
    this.layoutService.title = 'Liste des agences';
    /*for (let i = 0; i < 100; i++) {
      this.agences.push({ nom: 'Agence ' + i, id: i });
    }*/

    this.reload();

  }
  reload() {
    this.agenceService.getAllAgences().subscribe(
      (data) => {
        this.agences = data;
      },
      (err) => {
        console.error(err);
      }
    );
  }
  deleteAgence(id: number) {
    this.agenceService.deleteAgence(id).subscribe(
      (data) => {
        console.log(data);
        this.reload();
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
