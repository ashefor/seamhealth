import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuraTableComponent } from '@shared/components/cura-table/cura-table.component';
import { ColumnData, columns } from './mock';
import { CuraTableBodyDirective } from '@shared/components/cura-table/cura-table-body.directive';
import { CuraTableHeaderDirective } from '@shared/components/cura-table/cura-table-header.directive';
import { AntImports } from '@shared/ant-imports';
import { FormsModule } from '@angular/forms';
import { customDateFormatter } from '@core/utils';
import { ProjectService } from '@core/project.service';
import { startWith, tap } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-complaints',
  standalone: true,
  imports: [CommonModule, FormsModule, CuraTableBodyDirective, CuraTableHeaderDirective, CuraTableComponent,
    ...AntImports
  ],
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComplaintsComponent implements OnInit {
  @ViewChild(CuraTableComponent) table!: CuraTableComponent;
  @Input() heading?: string;
  @Input() parent?: string;
  private readonly chref = inject(ChangeDetectorRef);
  private readonly service = inject(ProjectService);
  private message = inject(NzMessageService)

  data$? = this.service.getComplaints().pipe(tap(() => this.isfetching = false), startWith([]));
  columns = columns;

  nzVisible = false;
  nzStartDateVisible = false;
  nzEndDateVisible = false;
  startDate?: Date;
  enddate?: Date;
  isfetching = true;

  tableParams: { start: number, end: number, size: number } = { start: 0, end: 0, size: 10 };
  filterStatus?: string;
  filtered = false;

  phone_number = '';
  viewModalOpen = false;
  singleItem?: ColumnData;

  ngOnInit(): void {
    this.service.updateHeader({ heading: this.heading!, parent: this.parent! })
  }

  onStartChange(result: Date) {
    this.nzStartDateVisible = false;
    this.startDate = result
  }

  onEndChange(result: Date) {
    this.nzEndDateVisible = false
    this.enddate = result
  }

  goNext() {
    this.table.next()
  }

  goPrevious() {
    this.table.previous()
  }

  getParamsData(params: any) {
    this.tableParams = params;
    this.chref.detectChanges();
  }

  nzVisibleChange(e: any) {
  }

  filterByStatus(status: string) {
    this.nzVisible = false;
    this.filterStatus = status;
  }

  filterTable() {
    const params = {
      start: customDateFormatter(this.startDate),
      end: customDateFormatter(this.enddate),
      status: this.filterStatus
    }
    if (params.start && params.end && params.status) {
      this.filtered = true;
    } else if (params.status) {
      this.filtered = true;
    } else {
      this.message.create('error', `Please select either status or start and end date.`);
      this.filtered = false;
    }
    this.data$ = this.service.filterComplaints(params)
  }

  searchByNumber(phone: string) {
    this.clearFilter();
    this.data$ = this.service.searchComplaints(phone);
  }

  clearFilter() {
    this.filtered = false;
    this.nzVisible = false;
    this.nzStartDateVisible = false;
    this.nzEndDateVisible = false;
    this.startDate = undefined;
    this.enddate = undefined;
    this.filterStatus = undefined;
    this.data$ = this.service.resetComplaints();
  }

  viewDetailsModal(item: ColumnData) {
    this.singleItem = item;
    this.viewModalOpen = true;
  }

  closeDetailsModal() {
    this.viewModalOpen = false;
  }

  exportToExcel() {
   this.data$?.subscribe({
    next: data => {
      if (data.length) {
        let reportData = {
          title: 'Complaints Report',
          data: data,
          headers: Object.keys(data[0]),
        };
        this.service.exportExcel(reportData);
      }
    }
   })
  }
}
