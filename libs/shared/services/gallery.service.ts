import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<any> {
    return this.http.get(`${this.apiUrl}/countries`);
  }

  getStates(countryId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/countries/${countryId}/states`);
  }

  getLocations(countryId: number, stateId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/countries/${countryId}/states/${stateId}/locations`);
  }

  getPhotos(countryId: number, stateId: number, locationId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/countries/${countryId}/states/${stateId}/locations/${locationId}/photos`);
  }
}
