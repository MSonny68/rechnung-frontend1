import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { FileServiceService } from '../file-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-button-select-file',
  templateUrl: './button-select-file.component.html',
  styleUrls: ['./button-select-file.component.scss']
})
export class ButtonSelectFileComponent implements OnInit{
  renamedPDFArray$: Observable<any[]> ;
  renamedPDFArray: any[] = [];
  pathPDF: string = "./";
  fileName: string = '';
  renamedPDFArrayLength: number = 0;

  constructor(private fileService: FileServiceService) {
    this.renamedPDFArray$ = this.fileService.renamedPDFArray$;
  }
  ngOnInit() {
    this.renamedPDFArray$.subscribe(data => {
      //console.log('Received renamedPDFArray data:', data);
      // Hier könnten Sie auf die Daten reagieren, wenn sie empfangen werden
      this.renamedPDFArrayLength = data.length;
      this.renamedPDFArray = data;
    });
  }


  openFileExplorer() {
    const inputElement = document.createElement('input');
    inputElement.type = 'file';
    inputElement.accept = 'application/pdf'; // Nur PDF-Dateien zulassen
    inputElement.onchange = (event: any) => {
      const fileList: FileList = event.target.files;
      if (fileList.length > 0) {
        const file: File = fileList[0];
        console.log('Selected file:', file);
        this.uploadFileToBackend(file);

        // Hier können Sie die Datei verarbeiten, z.B. hochladen oder weitere Aktionen durchführen
      }
    };
    inputElement.click();
  }

  async uploadFileToBackend(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await this.fileService.uploadFile(formData);
      this.fileService.updateRenamedPDFArray(response.renamedPDF);
      console.log('File uploaded successfully:', response, this.renamedPDFArrayLength);
      for (const pdf of this.renamedPDFArray) {
        //console.log("renamesPDFArray :" +this.renamedPDFArray.length)
        //await this.downloadAndSavePDF(`http://localhost:8080/download/${pdf}`);
        //await new Promise(resolve => setTimeout(resolve, 100));
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  }

  async downloadAndSavePDF(pdfUrl: string) {
    try {
      const fileName = await this.fileService.downloadFile(pdfUrl);
      this.fileName = fileName;
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  }

  async downloadExcelFile(){
    
  }

}
