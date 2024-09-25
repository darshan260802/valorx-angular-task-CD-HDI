import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HdiService } from 'src/app/providers/hdi.service';
import { HdiLevel2Component } from "../hdi-level-2/hdi-level-2.component";

@Component({
  selector: 'app-hdi-level-1',
  standalone: true, 
  imports: [CommonModule, HdiLevel2Component],
  providers:[HdiService],
  templateUrl: './hdi-level-1.component.html',
  styleUrls: ['./hdi-level-1.component.scss']
})
export class HdiLevel1Component {
  hdi = inject(HdiService)
}
