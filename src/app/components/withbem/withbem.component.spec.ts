import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithbemComponent } from './withbem.component';

describe('WithbemComponent', () => {
  let component: WithbemComponent;
  let fixture: ComponentFixture<WithbemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithbemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithbemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
