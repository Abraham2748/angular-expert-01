import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';

@Component({
  selector: 'app-peru',
  imports: [],
  templateUrl: './peru.component.html',
  styleUrl: './peru.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeruComponent {
  data = 'Data';

  changeDetectorRef = inject(ChangeDetectorRef);

  changeData() {
    this.data = 'New Data';
    this.changeDetectorRef.markForCheck();
  }
}
