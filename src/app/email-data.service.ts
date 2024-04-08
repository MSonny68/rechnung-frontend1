import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailDataService {
  private _emailArray: any[] = [];

  constructor() { }

  get emailArray(): any[] {
    return this._emailArray;
  }

  set emailArray(emails: any[]) {
    this._emailArray = emails;
    
  }
}
