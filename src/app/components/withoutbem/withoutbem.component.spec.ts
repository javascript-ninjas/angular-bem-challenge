import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutbemComponent } from './withoutbem.component';

describe('WithoutbemComponent', () => {
  let component: WithoutbemComponent;
  let fixture: ComponentFixture<WithoutbemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithoutbemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithoutbemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
