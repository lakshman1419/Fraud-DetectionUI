import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrasactionService {

  constructor(private http: HttpClient) { }

  viewTransaction() {
    return this.http.get('http://localhost:7128/OnlineTransaction')
  }
  
}
