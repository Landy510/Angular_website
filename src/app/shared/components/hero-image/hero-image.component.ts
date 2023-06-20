import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-hero-image',
  templateUrl: './hero-image.component.html',
  styleUrls: ['./hero-image.component.scss']
})
export class HeroImageComponent {

}

@NgModule({
  declarations: [HeroImageComponent],
  exports: [HeroImageComponent]
})
export class HeroImageModule {}
