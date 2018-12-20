import { Injectable, Inject } from '@angular/core';
import { MyHttpService } from './my-http.service';
import { Observable } from 'rxjs';
import { Addresse } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class AddresseService {

  constructor(@Inject(MyHttpService) private myHttpService: MyHttpService) { }

  public getAllAddresses(): Observable<Addresse[]> {
    return this.myHttpService.get('/api/v1/adresses');
  }

  public getAddresse(id: number): Observable<Addresse> {
    return this.myHttpService.get('/api/v1/adresse/' + id);
  }

  public updateAddresse(Addresse: Addresse): Observable<any> {
    return this.myHttpService.post('/api/v1/adresse', Addresse);
  }

  public deleteAddresse(id: number): Observable<any> {
    return this.myHttpService.delete('/api/v1/adresse/' + id);
  }

  public createAddresse(Addresse: Addresse): Observable<any> {
    return this.myHttpService.put('/api/v1/adresse', Addresse);
  }

  public getNextId(): Observable<any> {
    return this.myHttpService.get('/api/v1/adresseMaxId');
  }
}
