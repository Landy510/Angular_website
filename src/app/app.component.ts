import { Component, Injector } from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base/base.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent {
  title = 'ng_web';

  constructor(injector: Injector) {
    super(injector);
  }
}
