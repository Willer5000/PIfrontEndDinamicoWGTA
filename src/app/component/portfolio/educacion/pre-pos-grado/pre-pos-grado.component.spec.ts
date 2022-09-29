import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrePosGradoComponent } from './pre-pos-grado.component';

describe('PrePosGradoComponent', () => {
  let component: PrePosGradoComponent;
  let fixture: ComponentFixture<PrePosGradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrePosGradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrePosGradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
