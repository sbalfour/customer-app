import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersRootComponent } from './customers-root.component';

describe('CustomersRootComponent', () => {
  let component: CustomersRootComponent;
  let fixture: ComponentFixture<CustomersRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomersRootComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomersRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
