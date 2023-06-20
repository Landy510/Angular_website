import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexRoutingModule} from './index-routing.module';
import { HeroImageModule } from 'src/app/shared/components/hero-image/hero-image.component';
import { IndexComponent } from './index.component';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    HeroImageModule
  ]
})
export class IndexModule { }
