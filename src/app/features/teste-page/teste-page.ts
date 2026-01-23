import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Teste } from './interfaces/teste.interface';
import { TesteService } from './teste-service/teste-service';

@Component({
  selector: 'app-teste-page',
  imports: [],
  templateUrl: './teste-page.html',
  styleUrl: './teste-page.scss',
})
export class TestePage implements OnInit {

  teste?: Teste;

  constructor(
    private service: TesteService,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.service.getObservable().subscribe({
      next: (response: Teste) => {
        this.teste = response;
        this.cdr.detectChanges();
      }
    });
    this.service.searchValue();
  }

  searchValue() {
    this.service.searchValue();
  }


}
