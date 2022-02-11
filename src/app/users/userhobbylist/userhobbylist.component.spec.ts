import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserhobbylistComponent } from './userhobbylist.component';

describe('UserhobbylistComponent', () => {
  let component: UserhobbylistComponent;
  let fixture: ComponentFixture<UserhobbylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserhobbylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserhobbylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
