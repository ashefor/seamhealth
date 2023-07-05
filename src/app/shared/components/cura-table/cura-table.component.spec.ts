import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuraTableComponent } from './cura-table.component';

describe('CuraTableComponent', () => {
  let component: CuraTableComponent;
  let fixture: ComponentFixture<CuraTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CuraTableComponent]
    });
    fixture = TestBed.createComponent(CuraTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
