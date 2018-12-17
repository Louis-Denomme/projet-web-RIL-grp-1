import { Component, OnInit, Inject } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-form-agent',
  templateUrl: './form-agent.component.html',
  styleUrls: ['./form-agent.component.scss']
})
export class FormAgentComponent implements OnInit {

  constructor(
    @Inject(LayoutService) public layoutService: LayoutService,
  ) { }

  ngOnInit() {
    this.layoutService.title = 'Formulaire d\'agence';
  }
}