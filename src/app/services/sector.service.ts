import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SectorDto } from '../models/sector.model';

@Injectable({
  providedIn: 'root'
})
export class SectorService {
  private baseUrl = 'http://localhost:8080/api/sectors';

  constructor(private http: HttpClient) {}

  getAllSectors(): Observable<SectorDto[]> {
    return this.http.get<SectorDto[]>(this.baseUrl);
  }
}
