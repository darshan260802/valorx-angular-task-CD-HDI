import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HdiService } from 'src/app/providers/hdi.service';

@Component({
  selector: 'app-hdi-level-2',
  standalone: true,
  imports: [CommonModule],
  providers:[HdiService],
  templateUrl: './hdi-level-2.component.html',
  styleUrls: ['./hdi-level-2.component.scss']
})
export class HdiLevel2Component {
  hdi = inject(HdiService);
}
 