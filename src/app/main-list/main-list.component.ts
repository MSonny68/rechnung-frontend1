import { Component , OnDestroy, OnInit} from '@angular/core';
import { FileServiceService } from '../file-service.service';
import { Observable , Subscription } from 'rxjs';
import { ExcelServiceService } from '../excel-service.service';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss']
})
export class MainListComponent implements OnInit,OnDestroy{
  renamedPDFArray$: Observable<any> | undefined;
  rechnungsArray: any[] = [];
  gutschriftenArray: any[] = [];
  stornoArray: any[] = [];
  rows: any[] = [];
  fileName: string | null = null;


  renamedPDFArraySubscription: Subscription | undefined;


  constructor(private fileService: FileServiceService,
              private excelService: ExcelServiceService ) {}

  async ngOnInit(): Promise<any>  {
    this.fileName = localStorage.getItem('selectedFileName');
    if (this.fileName) {
      try {
        this.rows = await this.excelService.loadExcelFileFromBackend(this.fileName);
        console.log("main-list, rows", this.rows)
      } catch (error) {
        console.error('Error loading Excel file:', error);
      }
    }
    this.renamedPDFArray$ = this.fileService.renamedPDFArray$;
    this.renamedPDFArraySubscription = this.renamedPDFArray$.subscribe((data) => {
      this.populateTableArray(data);
    });
  }


  populateTableArray(data: any[]): void {

    let anzahl = 1;
    this.rechnungsArray = [];
    data.forEach(item => {
      const regex = /^(\d+)_RE(\d+)_(.*?)\.pdf$/;
      const matches = item.match(regex);
      if (matches && matches.length === 4) {
        const customerNumber = matches[1];
        const invoiceNumber = matches[2];
        const adresse  = item;
        const firma = matches[3].replace(/_/g, ' '); // Ersetze Unterstriche durch Leerzeichen
        const customer = this.findCustomerByCustomerNumber(customerNumber);
        const email = customer ? customer[2] : '';
        this.rechnungsArray.push({ anzahl,customerNumber, invoiceNumber,adresse, email,firma });
        anzahl++
      }
    });

    anzahl = 1;
    this.gutschriftenArray = [];
    data.forEach(item => {
      const regex = /^(\d+)_GS(\d+)_(.*?)\.pdf$/;
      const matches = item.match(regex);
      if (matches && matches.length === 4) {
        const customerNumber = matches[1];
        const invoiceNumber = matches[2];
        const adresse  = item;
        const customer = this.findCustomerByCustomerNumber(customerNumber);
        const email = customer ? customer[2] : '';
        const firma = matches[3].replace(/_/g, ' '); // Ersetze Unterstriche durch Leerzeichen
        this.gutschriftenArray.push({ anzahl,customerNumber, invoiceNumber,adresse, email,firma });
        anzahl++
      }
    });

    anzahl = 1;
    this.stornoArray = [];
    data.forEach(item => {
      const regex = /^(\d+)_ST(\d+)_(.*?)\.pdf$/;
      const matches = item.match(regex);
      if (matches && matches.length === 4) {
        const customerNumber = matches[1];
        const invoiceNumber = matches[2];
        const adresse  = item;
        const customer = this.findCustomerByCustomerNumber(customerNumber);
        const email = customer ? customer[2] : '';
        const firma = matches[3].replace(/_/g, ' '); // Ersetze Unterstriche durch Leerzeichen
        this.stornoArray.push({ anzahl,customerNumber, invoiceNumber,adresse, email,firma });
        anzahl++
      }
    });

  }

  findCustomerByCustomerNumber(customerNumber: string): string[] | null {
    // Durchsuchen Sie das this.rows-Array nach der Kundennummer und geben Sie die entsprechende Zeile zurück
    for (let i = 1; i < this.rows.length; i++) { // Starte bei 1, um die Kopfzeile zu überspringen
      const row = this.rows[i];
      if (row && row.length >= 3 && row[0] === customerNumber) { // Annahme: Die Kundennummer steht in der ersten Spalte
        return row;
      }
    }
    return null; // Kundennummer nicht gefunden
  }

  ngOnDestroy(): void {
    if (this.renamedPDFArraySubscription) {
      this.renamedPDFArraySubscription.unsubscribe();
    }
  }


}
