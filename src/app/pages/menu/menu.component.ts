import { Component } from '@angular/core';
import { BebidasComponent } from '../carta/bebidas/bebidas.component';
import { PrimerosComponent } from '../carta/primeros/primeros.component';
import { EntrantesComponent } from '../carta/entrantes/entrantes.component';

@Component({
  selector: 'app-menu',
  imports: [BebidasComponent, PrimerosComponent, EntrantesComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  standalone: true,
})
export class MenuComponent {}
