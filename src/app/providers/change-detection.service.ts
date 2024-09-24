import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeDetectionService {
  counter:number = 0;
  constructor() { }
}
