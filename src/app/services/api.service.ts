import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  postHttp(apiUrl: string, body: any) {
    const api = this.apiUrl + apiUrl;
    return this.httpClient.post(api, body, httpOptions).toPromise()
  }
}
