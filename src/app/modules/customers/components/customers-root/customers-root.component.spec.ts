import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomersRootComponent } from './customers-root.component';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { CustomersModule } from '../../customers.module';

describe('CustomersRootComponent', () => {
  let component: CustomersRootComponent;
  let fixture: ComponentFixture<CustomersRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        CustomersModule,
        RouterTestingModule
      ]
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
