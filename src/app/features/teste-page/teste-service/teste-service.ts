import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Teste } from '../interfaces/teste.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TesteService {

  private subject = new Subject<Teste>();

  constructor(
    private http: HttpClient
  ) {}

  getObservable() {
    return this.subject.asObservable();
  }

  searchValue() {
    this.http.get<Teste>(environment.apiUrl + '/teste').subscribe({
      next: (response: Teste) => this.subject.next(response),
      error: (error: HttpErrorResponse) => console.error(error)
    });
  }
  
}
