import { ChangeDetectionStrategy, Component, DoCheck, inject, Input, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';

// Implementing Check Counter to run outside angular to prevent unnecessary checks and NG100 error
let checkCounter = 0;

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Input() parentUser:{[key:string]:string|number} = {}
  counter: number = 0;
  user = {
    name: "U1",
    age: 10
  }
  
  ngZone = inject(NgZone);
  checkIncrement(){
    checkCounter++;
    // Implementing Check Counter to run outside angular to prevent unnecessary checks and NG100 error
    this.ngZone.runOutsideAngular(() => {
      checkCounter += 1;
      document.querySelector('#checkCountC')!.innerHTML = '' + checkCounter;
    });
    return true
  }
}
