import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appCuraTable]',
  standalone: true
})
export class CuraTableDirective {

  constructor(public readonly template: TemplateRef<any>) {}

}
