import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectionComponent } from './change-detection.component';
import { ParentComponent } from "../../components/parent/parent.component";



@NgModule({
  declarations: [
    ChangeDetectionComponent
  ],
  imports: [
    CommonModule,
    ParentComponent
]
})
export class ChangeDetectionModule { }
