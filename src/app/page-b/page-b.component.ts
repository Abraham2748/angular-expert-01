import { Component } from '@angular/core';
import { LargeComponentComponent } from './large-component/large-component.component';

@Component({
  selector: 'app-page-b',
  standalone: true,
  imports: [LargeComponentComponent],
  templateUrl: './page-b.component.html',
  styleUrl: './page-b.component.css',
})
export class PageBComponent {}
