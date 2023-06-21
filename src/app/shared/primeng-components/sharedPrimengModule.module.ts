import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';

/**
 * import common primeng component
 *
 * @export
 * @class SharedPrimengModule
 */

const importedPrimengModules = [
  ButtonModule,
  InputNumberModule
]

@NgModule({
  imports: [
    ...importedPrimengModules
  ],
  exports: [
    ...importedPrimengModules
  ]
})
export class SharedPrimengModule {}
