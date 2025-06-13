import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(private translateService: TranslateService) {}

  // cambiar idioma
  changeLanguage(language: string) {
    this.translateService.use(language); // cambia el idioma usando ngx-translate
    localStorage.setItem('language', language); // guarda el idioma en localStorage para persistencia
  }

  // con esto se obtiene el idioma actual
  getCurrentLanguage(): string {
    return this.translateService.currentLang;
  }
}
