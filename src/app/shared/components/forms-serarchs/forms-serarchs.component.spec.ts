import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsSerarchsComponent } from './forms-serarchs.component';

describe('FormsSerarchsComponent', () => {
  let component: FormsSerarchsComponent;
  let fixture: ComponentFixture<FormsSerarchsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsSerarchsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsSerarchsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
