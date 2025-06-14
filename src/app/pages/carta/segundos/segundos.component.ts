import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SegundosService, Segundo } from '../../../services/segundos.service';

@Component({
  selector: 'app-segundos',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './segundos.component.html',
  styleUrls: ['./segundos.component.scss'],
})
export class SegundosComponent implements OnInit {
  segundos: Segundo[] = [];

  constructor(private segundosService: SegundosService) {}

  ngOnInit(): void {
    this.cargarSegundos();
  }

  private cargarSegundos(): void {
    this.segundosService.getSegundos().subscribe({
      next: (segundos) => {
        this.segundos = segundos.map((s) => ({
          ...s,
          tags: [],
          esRecomendado: false,
          esPremium: false,
        }));
      },
      error: (error) => {
        console.error('Error al cargar segundos:', error);
      },
    });
  }

  getImagenUrl(nombreArchivo: string): string {
    return `http://127.0.0.1:8000/uploads/productoImg/${nombreArchivo}`;
  }

  onVerDetalles(segundo: Segundo): void {
    console.log('Ver detalles de:', segundo);
  }
}
