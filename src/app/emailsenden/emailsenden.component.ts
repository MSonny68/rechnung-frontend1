import { Component } from '@angular/core';

@Component({
  selector: 'app-emailsenden',
  templateUrl: './emailsenden.component.html',
  styleUrls: ['./emailsenden.component.scss']
})
export class EmailsendenComponent {
  attachments: File | undefined;

  openFileExplorer(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.attachments = fileList[0];
      console.log('Selected file:', this.attachments);

      // Hier können Sie die Datei verarbeiten, z.B. hochladen oder weitere Aktionen durchführen
    }

    //inputElement.click();
  }

}
