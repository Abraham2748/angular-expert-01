import { Component } from '@angular/core';
import { ArgentinaComponent } from './argentina/argentina.component';
import { EcuadorComponent } from './ecuador/ecuador.component';
import { PeruComponent } from './peru/peru.component';

@Component({
  selector: 'app-latam',
  imports: [ArgentinaComponent, EcuadorComponent, PeruComponent],
  templateUrl: './latam.component.html',
  styleUrl: './latam.component.css',
})
export class LatamComponent {}
