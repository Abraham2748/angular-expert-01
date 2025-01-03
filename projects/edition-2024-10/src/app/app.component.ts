import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  NgZone,
  OnDestroy,
  signal,
} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ComunicatorComponent } from './comunicator/comunicator.component';
import { TitleService } from './title.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, ComunicatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnDestroy {
  titleService = inject(TitleService);
  changeDetectorRef = inject(ChangeDetectorRef);
  ngZone = inject(NgZone);
  myWorker = new Worker(new URL('./app.worker', import.meta.url));

  constructor() {
    //Comentar este return para probar zoneless, web worker y la función ngZone.runOutsideAngular
    return;

    setTimeout(() => {
      console.log('Title updated with delay');
      this.titleService.title = 'Title updated with delay';
      //avisar a angular que algo cambio
      this.changeDetectorRef.markForCheck();
    }, 3000);

    this.myWorker.postMessage('Hello from main thread');
    this.myWorker.onmessage = ({ data }) => {
      console.log('Worker response', data);
    };

    //running expensive task outside of angular zone
    this.ngZone.runOutsideAngular(() => {
      const start = Date.now();
      console.log('Start of expensive task');
      while (Date.now() - start < 3000) {
        console.log('Expensive task running');
      }
    });
  }

  ngOnDestroy(): void {
    this.myWorker.terminate();
  }
}
