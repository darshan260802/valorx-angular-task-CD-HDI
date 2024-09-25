import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HierarchicalDependencyInjectionComponent } from './hierarchical-dependency-injection.component';
import { HdiLevel1Component } from "../../components/hdi-level-1/hdi-level-1.component";



@NgModule({
  declarations: [
    HierarchicalDependencyInjectionComponent
  ],
  imports: [
    CommonModule,
    HdiLevel1Component
]
})
export class HierarchicalDependencyInjectionModule { }
