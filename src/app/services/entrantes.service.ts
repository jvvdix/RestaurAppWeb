import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map, catchError, of } from 'rxjs';

export interface Entrante {
  id: number;
  nombre: string;
  descripcion: string;
  precio: string;
  imagen: string;
  categoriaNombre: string;
  tags?: any;
}

@Injectable({
  providedIn: 'root',
})
export class EntrantesService {
  private apiUrl = 'http://127.0.0.1:8000/api/productos';
  private imagenBaseUrl = 'http://127.0.0.1:8000/uploads/productoImg/';

  constructor(private http: HttpClient) {}

  getEntrantes(categoriaNombre: string = 'Primeros'): Observable<Entrante[]> {
    const params = new HttpParams().set('categoria', categoriaNombre);
    return this.http.get<Entrante[]>(this.apiUrl, { params }).pipe(
      map((entrantes) =>
        entrantes.map((producto) => ({
          ...producto,
          imagen: producto.imagen ? this.imagenBaseUrl + producto.imagen : '',
        }))
      )
    );
  }

  // Método auxiliar para verificar si una imagen existe
  verificarImagen(imagenUrl: string): Observable<boolean> {
    return this.http.head(imagenUrl, { observe: 'response' }).pipe(
      map((response) => response.status === 200),
      catchError(() => of(false))
    );
  }
}
