import { Component, OnInit, Inject } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.sass']
})
export class RechercheComponent implements OnInit {

  constructor(
    @Inject(LayoutService) public layoutService: LayoutService,
  ) { }

  ngOnInit() {
    this.layoutService.title = 'Recherche avancée';
  }

}
