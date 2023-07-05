import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProjectService } from '@core/project.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [CommonModule]
})
export class HeaderComponent {
  header$ = inject(ProjectService).header$
}
