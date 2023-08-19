import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { GoogleMapsModule } from '@angular/google-maps';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),importProvidersFrom(BrowserAnimationsModule,HttpClientModule,GoogleMapsModule ) ]
};
