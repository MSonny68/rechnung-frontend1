import { Injectable } from '@angular/core';
import { FileServiceService } from '../app/file-service.service';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelServiceService {
  fileName: string | null = null;
  rows: any[] = [];
  excelData: any | null = null;
  headers: string[] = [];

  constructor(private fileService: FileServiceService) { }

  async loadExcelFileFromBackend(savedFile: any): Promise<any[]> {
    const savedFileName = savedFile;
    console.log("savedfile:",savedFileName);
    if (savedFileName) {
      try {
        const { data, fileName } = await this.fileService.downloadExcelFile(savedFileName);
        this.fileName = fileName;
        if (Array.isArray(data)) {
          this.rows = data;
          return data;
        } else {
          console.error('Ungültiges Datenformat:', data);
          return [];
        }
      } catch (error) {
        console.error('Fehler beim Laden der Excel-Datei vom Backend:', error);
        return [];
      }
    }
    return [];
  }

  getCustomerData(){
    
  }

}
