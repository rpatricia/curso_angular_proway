import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeCustumizadoComponent } from './pipe-custumizado.component';

describe('PipeCustumizadoComponent', () => {
  let component: PipeCustumizadoComponent;
  let fixture: ComponentFixture<PipeCustumizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeCustumizadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeCustumizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
