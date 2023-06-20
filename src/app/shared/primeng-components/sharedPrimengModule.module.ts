import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';


/**
 * import common primeng component
 *
 * @export
 * @class SharedPrimengModule
 */
@NgModule({
  imports: [
    ButtonModule
  ],
  exports: [
    ButtonModule
  ]
})
export class SharedPrimengModule {}
