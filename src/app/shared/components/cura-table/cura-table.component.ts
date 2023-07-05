import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuraTableHeaderDirective } from './cura-table-header.directive';
import { CuraTableBodyDirective } from './cura-table-body.directive';
import { ColumnData } from '@pages/complaints/mock';

export const defaultOptions = {
  PAGE_SIZE: 10,
};

export interface PageData {
  start: number;
  end: number;
}

@Component({
  selector: 'app-cura-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cura-table.component.html',
  styleUrls: ['./cura-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CuraTableComponent implements OnInit, OnChanges {
  @ContentChild(CuraTableHeaderDirective) public header!: CuraTableHeaderDirective;
  @ContentChild(CuraTableBodyDirective) public body!: CuraTableBodyDirective;
  private readonly chref = inject(ChangeDetectorRef)
  @Input() columns: any[] = [];
  @Input() data: ColumnData[] = [];
  @Input() pageSize = defaultOptions.PAGE_SIZE;
  @Input() isLoading = false;
  @Output() tableDataParamsEmitter = new EventEmitter<any>()
  @Output() viewModalEmitter = new EventEmitter<any>();

  pageData: PageData = {
    start: 0,
    end: 0,
  };

  page = 0;
  items: any[] = [];

  ngOnInit(): void {
    this.initialPagination();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && changes['data'].currentValue != changes['data'].previousValue) {
      this.data = changes['data'].currentValue;
      this.page = 0;
      this.paginate(this.page, this.pageSize);
    }
  }

  private initialPagination(): void {
    this.paginate(this.page, this.pageSize);
  }

  public get dataSize(): number {
    return this.data?.length;
  }

  public get totalPages(): number {
    return Math.ceil(this.dataSize / this.pageSize);
  }

  private paginate(page: number, pageSize: number) {
    const startIndex = page * pageSize;
    let endIndex = startIndex + pageSize;
    endIndex = endIndex > this.dataSize ? this.dataSize : endIndex;

    this.updatePaginationData(startIndex, endIndex);
    this.items = this.data ? [...this.data.slice(startIndex, endIndex)] : [];
    this.chref.detectChanges();
  }

  updatePaginationData(start: number, end: number) {
    this.pageData = { ...this.pageData, start, end };
    this.tableDataParamsEmitter.emit({
      start: this.pageData.start + 1,
      end: this.pageData.end,
      size: this.dataSize
    })
  }

  previous() {
    if (this.page > 0) {
      this.page -= 1;
      this.paginate(this.page, this.pageSize);
    }
  }

  next() {
    if (this.page < this.totalPages && this.pageData.end < this.dataSize) {
      this.page += 1;
      this.paginate(this.page, this.pageSize);
    }
  }

  viewDetails(item: ColumnData) {
    this.viewModalEmitter.emit(item);
  }
}
