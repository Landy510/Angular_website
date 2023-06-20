import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderModule } from 'src/app/shared/components/header/header.component';
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule
  ],
  declarations: [LayoutComponent],
})
export class LayoutModule { }
