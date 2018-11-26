import { Component, OnInit, Inject } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor(
    @Inject(LayoutService) public layoutService: LayoutService,
    ) { }

  ngOnInit() {
    this.layoutService.title = 'Dashboard';
  }

}
