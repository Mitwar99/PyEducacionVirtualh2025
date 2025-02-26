import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import Aura from  '@primeng/themes/aura'
import {provideAnimations} from '@angular/platform-browser/animations'
import { PrimengModule } from './primeng.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    providePrimeNG({
      theme:{
        preset: Aura
      }
    }),
    provideAnimations(),
    importProvidersFrom(PrimengModule)
  ]
};
