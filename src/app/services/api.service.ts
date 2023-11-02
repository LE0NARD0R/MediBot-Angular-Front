import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'http://localhost:8006/medic-list'

  constructor( private http: HttpClient) { }

  public getMedicList(): Observable<any> {
    return this.http.get(this.urlApi)
  }

  public postMedic(data: any) {
    return this.http.post(this.urlApi, data)
  }
}
