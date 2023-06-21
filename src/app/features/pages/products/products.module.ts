import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductShowcaseComponent } from './components/product-showcase/product-showcase.component';
import { SharedPrimengModule } from 'src/app/shared/primeng-components/sharedPrimengModule.module';
@NgModule({
  declarations: [
    ProductsComponent,
    ProductShowcaseComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule,
    SharedPrimengModule
  ]
})
export class ProductsModule { }
