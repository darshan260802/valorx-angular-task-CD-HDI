import { ChangeDetectionStrategy, Component, inject, Input, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';

// Implementing Check Counter to run outside angular to prevent unnecessary checks and NG100 error
let checkCounter = 0;

@Component({
  selector: 'app-child-push',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-push.component.html',
  styleUrls: ['./child-push.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildPushComponent {
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
      document.querySelector('#checkCountCP')!.innerHTML = '' + checkCounter;
    });
    return true
  }
}
