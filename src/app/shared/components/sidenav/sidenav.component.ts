import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
    standalone: true,
    imports: [RouterModule]
})
export class SidenavComponent {
  toggleMenu(buttonElement: HTMLButtonElement) {
    console.log(buttonElement.nextElementSibling)
    buttonElement.nextElementSibling?.classList.toggle('!h-0')
  }
}
