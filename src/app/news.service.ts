// src/app/news.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiUrl = 'http://localhost:3000/news'; // Update with your backend API endpoint

  constructor(private http: HttpClient) {}

  getLatestNews(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/latest`);
  }
}
