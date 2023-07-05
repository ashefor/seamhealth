import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
// import { AppRoutingModule } from './app/app-routing.module';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app/app.routes';

registerLocaleData(en);

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    provideRouter(routes, withComponentInputBinding()),
    provideAnimations(),
    {
      provide: NZ_I18N,
      useValue: en_US
    }
  ]
})
  .catch(err => console.error(err));
