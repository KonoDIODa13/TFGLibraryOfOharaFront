import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitComponent } from './init.component';

describe('InitComponent', () => {
  let component: InitComponent;
  let fixture: ComponentFixture<InitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
