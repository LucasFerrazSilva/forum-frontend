import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { catchError, interval, Observable, of, switchMap, tap } from 'rxjs';
import { StatusDTO } from './models/status-dto.interface';
import { StatusService } from './status-service/status-service.service';

enum FetchStatus {
  LOADING,
  LOADED,
  ERROR
}

@Component({
  selector: 'app-status-page',
  imports: [CommonModule],
  templateUrl: './status-page.html',
  styleUrl: './status-page.scss',
})
export class StatusPage {
  
  readonly FetchStatus = FetchStatus;

  status$!: Observable<StatusDTO | null>;
  fetchStatus: FetchStatus = FetchStatus.LOADING;

  constructor(
    private service: StatusService,
  ) {}

  ngOnInit() {
    this.status$ = 
      interval(2000)
        .pipe(
          switchMap(() => {
            return this.service.getStatus();
          }),
          tap(() => this.fetchStatus = FetchStatus.LOADED),
          catchError((error) => {
            this.fetchStatus = FetchStatus.ERROR;
            console.error('Erro ao buscar status:', error);
            return of(null);
          })
        );
  }

}
