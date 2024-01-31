import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  constructor() {}

  // check and returns true if a value is null or undefined
  isNullorUndefined(value: any): boolean {
    if (value === null || value === undefined || value === '') {
      return true;
    } else {
      return false;
    }
  }
}
