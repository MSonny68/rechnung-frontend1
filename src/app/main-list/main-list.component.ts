import { Component , OnInit} from '@angular/core';
import { FileServiceService } from '../file-service.service';
import { Observable , Subscription } from 'rxjs';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss']
})
export class MainListComponent implements OnInit{
  renamedPDFArray$: Observable<any> | undefined;
  rechnungsArray: any[] = [];
  gutschriftenArray: any[] = [];
  stornoArray: any[] = [];

  renamedPDFArraySubscription: Subscription | undefined;

  constructor(private fileService: FileServiceService) {}

  ngOnInit(): void {
    this.renamedPDFArray$ = this.fileService.renamedPDFArray$;
    this.renamedPDFArraySubscription = this.renamedPDFArray$.subscribe((data) => {
      this.populateTableArray(data);
    });
    //throw new Error('Method not implemented.');
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
        const email = matches[3].replace(/_/g, ' '); // Ersetze Unterstriche durch Leerzeichen
        this.rechnungsArray.push({ anzahl,customerNumber, invoiceNumber,adresse, email });
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
        const email = matches[3].replace(/_/g, ' '); // Ersetze Unterstriche durch Leerzeichen
        this.gutschriftenArray.push({ anzahl,customerNumber, invoiceNumber,adresse, email });
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
        const email = matches[3].replace(/_/g, ' '); // Ersetze Unterstriche durch Leerzeichen
        this.stornoArray.push({ anzahl,customerNumber, invoiceNumber,adresse, email });
        anzahl++
      }
    });

  }

  ngOnDestroy(): void {
    if (this.renamedPDFArraySubscription) {
      this.renamedPDFArraySubscription.unsubscribe();
    }
  }


}
