import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductShowcaseComponent } from './components/product-showcase/product-showcase.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductShowcaseComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
