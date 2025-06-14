import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  EntrantesService,
  Entrante,
} from '../../../services/entrantes.service';

@Component({
  selector: 'app-entrantes',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './entrantes.component.html',
  styleUrls: ['./entrantes.component.scss'],
})
export class EntrantesComponent implements OnInit {
  entrantes: Entrante[] = [];

  constructor(private entrantesService: EntrantesService) {}

  ngOnInit(): void {
    this.cargarEntrantes();
  }

  private cargarEntrantes(): void {
    this.entrantesService.getEntrantes().subscribe({
      next: (entrantes) => {
        this.entrantes = entrantes.map((e) => ({
          ...e,
          tags: [], // si quieres luego añadir etiquetas personalizadas
          esRecomendado: false,
          esPremium: false,
        }));
      },
      error: (error) => {
        console.error('Error al cargar entrantes:', error);
      },
    });
  }

  getImagenUrl(nombreArchivo: string): string {
    return `http://127.0.0.1:8000/uploads/productoImg/${nombreArchivo}`;
  }

  onVerDetalles(entrante: Entrante): void {
    console.log('Ver detalles de:', entrante);
  }
}
