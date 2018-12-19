import { Injectable, Inject } from '@angular/core';
import { MyHttpService } from './my-http.service';
import { Observable } from 'rxjs';
import { Agence } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class AgenceService {

  constructor(@Inject(MyHttpService) private myHttpService: MyHttpService) { }



  public getAllAgences(): Observable<Agence[]> {
    return this.myHttpService.get('/api/v1/agences');
  }
  public createAgence(agence: Agence): Observable<Agence[]> {
    return this.myHttpService.put('/api/v1/agences', agence);
  }
}
