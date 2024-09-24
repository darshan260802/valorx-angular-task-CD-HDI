import { ChangeDetectionStrategy, Component, inject, Input, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GrandChildComponent } from "../grand-child/grand-child.component";
import { GrandChildPushComponent } from "../grand-child-push/grand-child-push.component";
import { ChangeDetectionService } from 'src/app/providers/change-detection.service';

// Implementing Check Counter to run outside angular to prevent unnecessary checks and NG100 error
let checkCounter = 0;

@Component({
  selector: 'app-child-push',
  standalone: true,
  imports: [CommonModule, FormsModule, GrandChildComponent, GrandChildPushComponent],
  templateUrl: './child-push.component.html',
  styleUrls: ['./child-push.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildPushComponent {
  @Input() parentUser:{[key:string]:string|number} = {}
  counter: number = 0;
  cds = inject(ChangeDetectionService);
  user = {
    name: "U2",
    age: 20
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
