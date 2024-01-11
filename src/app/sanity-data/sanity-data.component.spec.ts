import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanityDataComponent } from './sanity-data.component';

describe('SanityDataComponent', () => {
  let component: SanityDataComponent;
  let fixture: ComponentFixture<SanityDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SanityDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SanityDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
