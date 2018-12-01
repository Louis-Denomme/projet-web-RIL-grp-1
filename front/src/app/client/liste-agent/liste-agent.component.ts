import { Component, OnInit, Inject } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-liste-agent',
  templateUrl: './liste-agent.component.html',
  styleUrls: ['./liste-agent.component.scss']
})
export class ListeAgentComponent implements OnInit {
  agents: any[] = [];

  constructor(
    @Inject(LayoutService) public layoutService: LayoutService,
  ) { }

  ngOnInit() {
    this.layoutService.title = 'Liste des agents';
    for (let i = 0; i < 100; i++) {
      this.agents.push({ nom: 'Agent ' + i });
    }
  }

}
