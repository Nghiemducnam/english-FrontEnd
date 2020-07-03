import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrrVerbListComponent } from './irr-verb-list.component';

describe('IrrVerbListComponent', () => {
  let component: IrrVerbListComponent;
  let fixture: ComponentFixture<IrrVerbListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrrVerbListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrrVerbListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
