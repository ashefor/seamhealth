import { Injectable } from '@angular/core';
import { ColumnData, data } from '@pages/complaints/mock';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
import { BehaviorSubject, Observable, defaultIfEmpty, delay, filter, map, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ProjectService {
  header$: Observable<{heading: string, parent: string}>
  private _header = new BehaviorSubject<{heading: string, parent: string}>({heading: '', parent: ''});
  constructor() {
    this.header$ = this._header.asObservable();
   }

  getComplaints(): Observable<ColumnData[]> {
    return of(data).pipe(delay(2000));
  }

  filterComplaints(params: { status?: string; start: string; end: string; }): Observable<ColumnData[]> {
    if (params.start && params.end && params.status) {
      return of(data).pipe(map(results=> results.filter(item => item.status.toLowerCase() === params.status && item.date >= params.start && item.date <= params.end)));
    } else if (params.status) {
      return of(data).pipe(map(results=> results.filter(item => item.status.toLowerCase() === params.status)));
    } else {
      return of(data)
    }
  }

  searchComplaints(phone: string): Observable<ColumnData[]> {
    return of(data).pipe(map(results=> results.filter(item => item.phone_number.toLowerCase().includes(phone.toLowerCase()))));
  }

  resetComplaints() {
    return of(data);
  }
   updateHeader(header: { heading: string; parent: string; }) {
    this._header.next(header)
   }

  exportExcel(excelData: { title: any; data: any; headers: any }) {
    //Title, Header & Data
    const title = excelData.title;
    const header = excelData.headers;
    const data = excelData.data;

    //Create a workbook with a worksheet
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('Sales Data');

    //Add Row and formatting
    worksheet.mergeCells('C1', 'F4');
    let titleRow = worksheet.getCell('C1');
    titleRow.value = title;
    titleRow.font = {
      name: 'Calibri',
      size: 16,
      underline: 'single',
      bold: true,
      color: { argb: '0085A3' },
    };
    titleRow.alignment = { vertical: 'middle', horizontal: 'center' };

    //Adding Header Row
    let headerRow = worksheet.addRow(header);
    headerRow.eachCell((cell, number) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '4167B8' },
        bgColor: { argb: '' },
      };
      cell.font = {
        bold: true,
        color: { argb: 'FFFFFF' },
        size: 12,
      };
    });

    // Adding Data with Conditional Formatting
    data.forEach((d: any) => {
      let row = worksheet.addRow(Object.values(d));
    });

    worksheet.getColumn(3).width = 20;
    worksheet.addRow([]);

    //Generate & Save Excel File
    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      fs.saveAs(blob, title + '.xlsx');
    });
  }


}
