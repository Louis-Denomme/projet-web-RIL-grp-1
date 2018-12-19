import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyHttpService {
  url = 'http://localhost:3000';

  constructor(@Inject(HttpClient) private http: HttpClient) { }

  get(path: string): Observable<any> {
    return Observable.create(observer => {
      /*let headers = new HttpHeaders();
      if (this.authToken !== undefined && this.authToken !== null)
        headers = headers.append('Authorization', this.authToken);*/

      this.http
        .get(this.url + path, {
          // withCredentials: true
        })
        .subscribe(
          data => {
            observer.next(data);
            observer.complete();
          },
          err => {
            observer.error(err);
          }
        );
    });
  }

  put(path: string, body: any): Observable<any> {
    return Observable.create(observer => {
      /*let headers = new HttpHeaders();
      if (this.authToken !== undefined && this.authToken !== null)
        headers = headers.append('Authorization', this.authToken);*/

      this.http
        .put(this.url + path, body, {
          // withCredentials: true
        })
        .subscribe(
          data => {
            observer.next(data);
            observer.complete();
          },
          err => {
            observer.error(err);
          }
        );
    });
  }

  post(path: string, body: any): Observable<any> {
    return Observable.create(observer => {
      /*let headers = new HttpHeaders();
      if (this.authToken !== undefined && this.authToken !== null)
        headers = headers.append('Authorization', this.authToken);*/

      this.http
        .post(this.url + path, body, {
          // withCredentials: true
        })
        .subscribe(
          data => {
            observer.next(data);
            observer.complete();
          },
          err => {
            observer.error(err);
          }
        );
    });
  }

  delete(path: string): Observable<any> {
    return Observable.create(observer => {
      /*let headers = new HttpHeaders();
      if (this.authToken !== undefined && this.authToken !== null)
        headers = headers.append('Authorization', this.authToken);*/

      this.http
        .delete(this.url + path, {
          // withCredentials: true
        })
        .subscribe(
          data => {
            observer.next(data);
            observer.complete();
          },
          err => {
            observer.error(err);
          }
        );
    });
  }

}
