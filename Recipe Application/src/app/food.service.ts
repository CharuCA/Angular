import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private apiUrl = 'https://dummyjson.com/recipes';
  constructor(private http: HttpClient) {}
  getFoods(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  getFood(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
