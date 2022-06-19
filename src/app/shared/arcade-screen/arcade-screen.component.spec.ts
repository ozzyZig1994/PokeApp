import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcadeScreenComponent } from './arcade-screen.component';

describe('ArcadeScreenComponent', () => {
  let component: ArcadeScreenComponent;
  let fixture: ComponentFixture<ArcadeScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArcadeScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArcadeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
