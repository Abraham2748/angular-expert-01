import {
  ChangeDetectorRef,
  Component,
  inject,
  NgZone,
  OnInit,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'edition-2025-01';

  myWorker = new Worker(new URL('./my-worker.worker', import.meta.url));

  ngZone = inject(NgZone);
  changeDetectorRef = inject(ChangeDetectorRef);

  ngOnInit() {
    this.myWorker.onmessage = (result: any) => {
      console.log('Worker completado: ', result);
    };

    this.myWorker.postMessage('Mitocode');

    this.ngZone.runOutsideAngular(() => {
      this.title = 'Mitocode';

      // Proceso intensivo usando el estado del componente...

      this.changeDetectorRef.markForCheck();
    });
  }
}
