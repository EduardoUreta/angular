import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  productos = [{ nombre: 'prueba' }];

  constructor(private api: ApiService) {
    this.getProductos();
  }

  getProductos = () => {
    this.api.getAllProductos().pipe(
      tap((data) => {
        this.productos = data;
      }),
      catchError((error) => {
        console.log(error);
        return of(null); 
      })
    ).subscribe();
  }
}
