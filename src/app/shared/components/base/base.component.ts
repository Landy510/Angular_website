import { Router } from "@angular/router";
import { Injector, ChangeDetectorRef } from '@angular/core';


/**
 * create some common fundamental Services in order to prevent developers from
 * writing down repetitive code
 * @export
 * @abstract
 * @class BaseComponent
 */
export abstract class BaseComponent {
  protected router: Router;

  protected cdr: ChangeDetectorRef;

  constructor(injector: Injector) {
    this.router = injector.get(Router);
    this.cdr = injector.get(ChangeDetectorRef);
  }
}
