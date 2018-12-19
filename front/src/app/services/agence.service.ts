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

  public getAgence(id: number): Observable<Agence> {
    return this.myHttpService.get('/api/v1/agence/' + id);
  }

  public updateAgence(agence: Agence): Observable<any> {
    return this.myHttpService.post('/api/v1/agence', agence);
  }

  public deleteAgence(id: number): Observable<any> {
    return this.myHttpService.delete('/api/v1/agence/' + id);
  }

  public createAgence(agence: Agence): Observable<any> {
    return this.myHttpService.put('/api/v1/agences', agence);
  }
}
