import { Component, inject } from '@angular/core';
import { HdiService } from 'src/app/providers/hdi.service';

@Component({
  selector: 'app-hierarchical-dependency-injection',
  templateUrl: './hierarchical-dependency-injection.component.html',
  styleUrls: ['./hierarchical-dependency-injection.component.scss']
})
export class HierarchicalDependencyInjectionComponent {
  hdi = inject(HdiService);
}
