import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  
  constructor(private http: HttpClient) {}
  
  getClients() {
    const url = 'http://localhost:8092/customers';
    return this.http.get(url);
  }
}
