import { Component, OnInit, Inject } from '@angular/core';
import { LayoutService } from '../layout.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-client-space-layout',
  templateUrl: './client-space-layout.component.html',
  styleUrls: ['./client-space-layout.component.scss']
})
export class ClientSpaceLayoutComponent implements OnInit {
  agenceVille: string = 'VILLE DU MAGASIN';
  searchText: null;

  constructor(
    @Inject(LayoutService) public layoutService: LayoutService,
    @Inject(AuthService) public authService: AuthService,
  ) { }

  ngOnInit() {
  }
  logout() {
    console.error('TODO');
  }
  search() {
    console.error('TODO', this.searchText);
  }
}
