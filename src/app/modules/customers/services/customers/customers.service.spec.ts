import { TestBed } from '@angular/core/testing';
import { CustomersService } from './customers.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CustomersService', () => {
  let service: CustomersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
      ]
    });
    service = TestBed.inject(CustomersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
