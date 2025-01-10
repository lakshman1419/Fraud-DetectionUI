import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withDebugTracing, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),    
    provideRouter(routes,
      withDebugTracing(),
      withRouterConfig({paramsInheritanceStrategy: 'always'})),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    importProvidersFrom(FlexLayoutModule)]
};
