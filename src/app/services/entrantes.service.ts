import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Entrante {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  tags: string[];
  esRecomendado?: boolean;
  esPremium?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class EntrantesService {
  private entrantes: Entrante[] = [
    {
      id: 1,
      nombre: 'Carpaccio de Ternera Premium',
      descripcion:
        'Finas láminas de ternera marinada con aceite de trufa, rúcula fresca, parmesano en escamas y piñones tostados. Acompañado de pan artesanal.',
      precio: 18,
      imagen: 'assets/images/carpaccio.jpg',
      tags: ['Sin Gluten'],
      esRecomendado: true,
    },
    {
      id: 2,
      nombre: 'Tartar de Salmón Nórdico',
      descripcion:
        'Salmón fresco cortado a cuchillo, mezclado con aguacate, pepino, alcaparras y vinagreta de mostaza antigua. Servido con tostadas de centeno.',
      precio: 16,
      imagen: 'assets/images/tartar.jpg',
      tags: ['Pescado', 'Saludable'],
    },
    {
      id: 3,
      nombre: 'Croquetas de Jamón Ibérico',
      descripcion:
        'Cremosas croquetas elaboradas con jamón ibérico de bellota, bechamel casera y empanado crujiente. Acompañadas de alioli de ajo negro.',
      precio: 14,
      imagen: 'assets/images/croqueta.jpg',
      tags: ['Tradicional', 'Casero'],
    },
    {
      id: 4,
      nombre: 'Burrata con Tomates Confitados',
      descripcion:
        'Burrata fresca italiana con corazón cremoso, acompañada de tomates cherry confitados, albahaca fresca y reducción de vinagre balsámico.',
      precio: 15,
      imagen:
        'https://images.unsplash.com/photo-1571197119282-7c4a4c6d4a2a?w=400&h=300&fit=crop&crop=center',
      tags: ['Vegetariano', 'Italiano'],
    },
    {
      id: 5,
      nombre: 'Foie Gras a la Plancha',
      descripcion:
        'Medallón de foie gras sellado a la plancha, sobre brioche tostado con mermelada de higos y nueces caramelizadas.',
      precio: 22,
      imagen:
        'https://images.unsplash.com/photo-1606756790138-261d2d3244a6?w=400&h=300&fit=crop&crop=center',
      tags: ['Francés'],
      esPremium: true,
    },
    {
      id: 6,
      nombre: 'Tabla de Quesos Artesanales',
      descripcion:
        'Selección de cinco quesos españoles de autor, acompañados de membrillo casero, nueces, miel de romero y crackers integrales.',
      precio: 19,
      imagen:
        'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32b?w=400&h=300&fit=crop&crop=center',
      tags: ['Para Compartir', 'Artesanal'],
    },
  ];

  constructor() {}

  getEntrantes(): Observable<Entrante[]> {
    return of(this.entrantes);
  }

  getEntrantePorId(id: number): Observable<Entrante | undefined> {
    const entrante = this.entrantes.find((e) => e.id === id);
    return of(entrante);
  }

  agregarEntrante(entrante: Entrante): Observable<Entrante> {
    const nuevoId = Math.max(...this.entrantes.map((e) => e.id)) + 1;
    const nuevoEntrante = { ...entrante, id: nuevoId };
    this.entrantes.push(nuevoEntrante);
    return of(nuevoEntrante);
  }

  actualizarEntrante(
    id: number,
    entrante: Partial<Entrante>
  ): Observable<Entrante | null> {
    const index = this.entrantes.findIndex((e) => e.id === id);
    if (index !== -1) {
      this.entrantes[index] = { ...this.entrantes[index], ...entrante };
      return of(this.entrantes[index]);
    }
    return of(null);
  }

  eliminarEntrante(id: number): Observable<boolean> {
    const index = this.entrantes.findIndex((e) => e.id === id);
    if (index !== -1) {
      this.entrantes.splice(index, 1);
      return of(true);
    }
    return of(false);
  }
}
