import { Component, OnInit, Inject } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-form-agence',
  templateUrl: './form-agence.component.html',
  styleUrls: ['./form-agence.component.scss']
})

export class FormAgenceComponent implements OnInit {
  agents: any[] = [];

  constructor(
    @Inject(LayoutService) public layoutService: LayoutService,
  ) { }

  ngOnInit() {
    this.layoutService.title = 'Formulaire d\'agence';
    for (let i = 0; i < 10; i++) {
      this.agents.push({ nom: 'Agent ' + i });
    }
  }
}