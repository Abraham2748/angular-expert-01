import { Component, inject } from '@angular/core';
import { TitleService } from '../title.service';

@Component({
  selector: 'app-comunicator',
  standalone: true,
  imports: [],
  templateUrl: './comunicator.component.html',
  styleUrl: './comunicator.component.css',
})
export class ComunicatorComponent {
  titleService = inject(TitleService);

  updateTitle() {
    this.titleService.title = 'Title updated';
  }
}
