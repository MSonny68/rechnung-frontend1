import { Component, OnInit } from '@angular/core';
import { FileServiceService } from '../file-service.service';
import { ExcelServiceService } from '../excel-service.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selectedFile: File | null = null;
  fileName: string | null = null;
  excelData: any | null = null;
  headers: string[] = [];
  rows: any[] = [];

  constructor(private fileService: FileServiceService,
              private excelService: ExcelServiceService) { }

  async ngOnInit(): Promise<any>  {
    this.fileName = localStorage.getItem('selectedFileName');
    if (this.fileName) {
      this.rows = await this.excelService.loadExcelFileFromBackend(this.fileName);
    }
  }


  async uploadFileToBackend(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await this.fileService.uploadExcelFile(formData);
      console.log('File uploaded successfully:', response);
      this.loadExcelData(file);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  }

  openFileExplorer() {
    const inputElement = document.createElement('input');
    inputElement.type = 'file';
    inputElement.accept = '.xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    inputElement.addEventListener('change', (event: any) => {
      const fileList: FileList = event.target.files;
      if (fileList.length > 0) {
        this.selectedFile = fileList[0];
        this.fileName = this.selectedFile.name;
        localStorage.setItem('selectedFileName', this.fileName);
        console.log('Selected file:', this.selectedFile);
        this.uploadFileToBackend(this.selectedFile);

      }
    });
    inputElement.click();
    console.log("headers:",this.headers)

  }

  processExcelData(excelData: ArrayBuffer) {
    if (excelData) {
        const workbook = XLSX.read(new Uint8Array(excelData), { type: 'array' });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        if (worksheet) {
            const firstRow: any = XLSX.utils.sheet_to_json(worksheet, { header: 0 })[0];
            console.log(firstRow);
            this.headers = Object.keys(firstRow);
            this.rows = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
            console.log('Spaltenüberschriften:', this.headers);
            console.log('Zeilen:', this.rows);
        } else {
            console.error('Arbeitsblatt nicht gefunden.');
        }
    } else {
        console.error('Excel-Daten sind nicht definiert.');
    }
}


  loadExcelData(file: File) {
    const fileReader = new FileReader();
    fileReader.onload = (e: any) => {
      this.excelData = XLSX.read(new Uint8Array(e.target.result), { type: 'array' });
      this.processExcelData(e.target.result);
    };
    fileReader.readAsArrayBuffer(file);
  }
}
