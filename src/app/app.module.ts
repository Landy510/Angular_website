import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { HeroImageModule } from 'src/app/shared/components/hero-image/hero-image.component';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HeroImageModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
