import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appCuraTableBody]',
  standalone: true
})
export class CuraTableBodyDirective {

  constructor(public readonly template: TemplateRef<any>) {}

}
