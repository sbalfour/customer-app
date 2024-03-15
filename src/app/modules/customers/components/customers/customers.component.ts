import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CustomersService } from '../../services';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { Customer } from '../../models';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent implements OnInit, AfterViewInit, OnDestroy {
  public displayedColumns: string[] = ['id', 'name', 'telephone', 'email', 'actions'];
  public dataSource: MatTableDataSource<Customer[]> = new MatTableDataSource<Customer[]>([]);
  private customersSub?: Subscription;
  private destroyed = new Subject<void>();
  public hideExtraColumn = true;

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(
    private customersService: CustomersService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => result.matches ? this.hideExtraColumn = false : this.hideExtraColumn = true);
  }

  public ngOnInit(): void {
    this.customersSub = this.customersService.customers.subscribe((customers: any) => {
      if (!customers?.length) return;
      this.dataSource = new MatTableDataSource<Customer[]>(customers);
    });
  }

  public ngAfterViewInit() {
    if (this.paginator) this.dataSource.paginator = this.paginator;
  }

  public ngOnDestroy(): void {
    this.customersSub?.unsubscribe();
    this.destroyed?.next();
    this.destroyed?.complete();
  }
}
