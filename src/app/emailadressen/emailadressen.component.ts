import { Component, OnInit } from '@angular/core';
import { EmailDataService } from '../email-data.service';

@Component({
  selector: 'app-emailadressen',
  templateUrl: './emailadressen.component.html',
  styleUrls: ['./emailadressen.component.scss']
})
export class EmailadressenComponent implements OnInit{
  emails: any[] = [];

  constructor(private emailDataService: EmailDataService) {}

  ngOnInit(): void {
    // Hier können Sie auf das emailArray zugreifen
    this.emails = this.addSubjectToEmails(this.emailDataService.emailArray);
    console.log("emails",this.emails);
  }

  addSubjectToEmails(emails: any[]): any[] {
    // Nehmen Sie an, dass die Rechnungsnummer in der emailArray-Struktur als invoiceNumber gespeichert ist
    // Fügen Sie das 'subject' -Feld basierend auf der Rechnungsnummer hinzu
    return emails.map(email => {
      const subject = `${email.text} ${email.invoiceNumber}`;
      return { ...email, subject };
    });
  }


  sendEmail(_t7: any) {
  throw new Error('Method not implemented.');
  }

  toggleAccordion(index: number): void {
    // Schließe alle Akkordeons
    this.emails.forEach((email, i) => {
      if (i !== index) {
        email.open = false;
      }
    });

    // Öffne oder schließe das angeklickte Akkordeon
    const email = this.emails[index];
    email.open = !email.open;
  }

}
