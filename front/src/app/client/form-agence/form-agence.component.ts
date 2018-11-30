import { Component, OnInit, Inject } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-form-agence',
  templateUrl: './form-agence.component.html',
  styleUrls: ['./form-agence.component.scss']
})
export class FormAgenceComponent implements OnInit {

  constructor(
    @Inject(LayoutService) public layoutService: LayoutService,
  ) { }

  ngOnInit() {
    this.layoutService.title = 'Formulaire d\'agence';
  }

}
