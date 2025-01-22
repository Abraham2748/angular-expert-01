import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatamComponent } from './latam.component';

describe('LatamComponent', () => {
  let component: LatamComponent;
  let fixture: ComponentFixture<LatamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
