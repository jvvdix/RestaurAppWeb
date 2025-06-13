import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private menuOpen = false;
  public isScrolled = false;

  constructor(
    private router: Router,
    private translateService: TranslateService
  ) {
    // Establece el idioma por defecto
    this.translateService.setDefaultLang('es');
    this.translateService.use('es');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  isMenuOpen() {
    return this.menuOpen;
  }

  // Método para navegar a diferentes secciones
  navigateToSection(section: string) {
    this.menuOpen = false;
    this.scrollToElement(section);
  }

  private scrollToElement(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const topPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: topPosition,
        behavior: 'smooth',
      });
    }
  }

  // Métodos para cambio de idioma simplificado
  getCurrentLanguageName(): string {
    const currentLang = this.translateService.currentLang || 'es';
    return currentLang === 'es' ? 'ESP' : 'ENG';
  }

  // Método simplificado para alternar idioma
  toggleLanguage(): void {
    const currentLang = this.translateService.currentLang || 'es';
    const newLang = currentLang === 'es' ? 'en' : 'es';
    this.translateService.use(newLang);
  }
}
