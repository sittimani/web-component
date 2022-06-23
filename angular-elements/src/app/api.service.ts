import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  get() {
    const url = 'https://run.mocky.io/v3/074c8df2-d0d2-47ff-a682-9c6669b3f2c6'
    return this.httpClient.get<string>(url)
  }
}
