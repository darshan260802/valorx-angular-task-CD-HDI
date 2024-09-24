import { ChangeDetectionStrategy, Component, inject, Input, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChangeDetectionService } from 'src/app/providers/change-detection.service';

// Implementing Check Counter to run outside angular to prevent unnecessary checks and NG100 error
let checkCounter = 0;

@Component({
  selector: 'app-grand-child-push',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './grand-child-push.component.html',
  styleUrls: ['./grand-child-push.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrandChildPushComponent {
  @Input() childUser:{[key:string]:string|number} = {}
  @Input() index:number = 0
  counter: number = 0;
  cds = inject(ChangeDetectionService);
  user = {
    name: "U5",
    age: 50
  }
  
  ngZone = inject(NgZone);
  checkIncrement(){
    checkCounter++;
    // Implementing Check Counter to run outside angular to prevent unnecessary checks and NG100 error
    this.ngZone.runOutsideAngular(() => {
      checkCounter += 1;
      document.querySelector('#checkCountGP'+this.index)!.innerHTML = '' + checkCounter;
    });
    return true
  }
}
