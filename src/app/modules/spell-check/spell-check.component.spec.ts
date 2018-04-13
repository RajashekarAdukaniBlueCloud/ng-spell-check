import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellCheckComponent } from './spell-check.component';

describe('SpellCheckComponent', () => {
  let component: SpellCheckComponent;
  let fixture: ComponentFixture<SpellCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
