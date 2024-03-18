import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileServiceService {
  private renamedPDFArraySubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public renamedPDFArray$: Observable<any[]> = this.renamedPDFArraySubject.asObservable();

  constructor(private http: HttpClient) { }

  async uploadFile(formData: FormData): Promise<any> {
    return this.http.post<any>('http://localhost:8080/split', formData).toPromise();
  }

  async downloadFile(pdfUrl: string): Promise<string> {
    try {
      const pdfBlob: Blob | undefined = await this.http.get(pdfUrl, { responseType: 'blob'}).toPromise();
      if (pdfBlob) {
        let fileName = 'document.pdf'; // Standard-Dateiname, falls der Dateiname nicht aus der URL extrahiert werden kann
        const matches = pdfUrl.match(/\/([^\/?#]+)[^\/]*$/);
        if (matches && matches.length > 1) {
          fileName = matches[1];
        }
        const objectUrl = URL.createObjectURL(pdfBlob);
        const a = document.createElement('a');
        a.href = objectUrl;
        a.download = fileName;
        a.click();
        URL.revokeObjectURL(objectUrl);
        return fileName;
      } else {
        console.error('Error: PDF Blob is undefined');
        throw new Error('PDF Blob is undefined');
      }
    } catch (error) {
      console.error('Error downloading PDF: ', error);
      throw error;
    }
  }

  updateRenamedPDFArray(array: any[]): void {
    this.renamedPDFArraySubject.next(array);
  }

}
