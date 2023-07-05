import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appCuraTableHeader]',
  standalone: true
})
export class CuraTableHeaderDirective {

  constructor(public readonly template: TemplateRef<any>) {}

}
