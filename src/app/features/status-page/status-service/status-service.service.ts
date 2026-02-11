import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Injectable } from '@angular/core';
import { StatusDTO } from '../models/status-dto.interface';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatusService {

  constructor(
    private http: HttpClient,
  ) {}

  getStatus(): Observable<StatusDTO> {
    return this.http.get<StatusDTO>(`${environment.apiUrl}/status`);
  }
  
}
