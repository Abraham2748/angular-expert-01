import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcuadorComponent } from './ecuador.component';

describe('EcuadorComponent', () => {
  let component: EcuadorComponent;
  let fixture: ComponentFixture<EcuadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcuadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcuadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
