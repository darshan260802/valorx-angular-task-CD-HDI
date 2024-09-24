import { Component, inject, Input, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChangeDetectionService } from 'src/app/providers/change-detection.service';

// Implementing Check Counter to run outside angular to prevent unnecessary checks and NG100 error
let checkCounter = 0;

@Component({
  selector: 'app-grand-child',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.scss']
})
export class GrandChildComponent {
  @Input() childUser:{[key:string]:string|number} = {}
  @Input() index:number = 0
  cds = inject(ChangeDetectionService);
  counter: number = 0;
  user = {
    name: "U4",
    age: 40
  }
  
  ngZone = inject(NgZone);
  checkIncrement(){
    checkCounter++;
    // Implementing Check Counter to run outside angular to prevent unnecessary checks and NG100 error
    this.ngZone.runOutsideAngular(() => {
      checkCounter += 1;
      document.querySelector('#checkCountG'+this.index)!.innerHTML = '' + checkCounter;
    });
    return true
  }
}
