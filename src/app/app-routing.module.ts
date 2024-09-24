import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeDetectionComponent } from './pages/change-detection/change-detection.component';
import { HierarchicalDependencyInjectionComponent } from './pages/hierarchical-dependency-injection/hierarchical-dependency-injection.component';

const routes: Routes = [
    {
        path:"",
        pathMatch:'full',
        redirectTo:'change-detection'
    },
    {
        path:"change-detection",
        component: ChangeDetectionComponent
    },
    {
        path:"hierarchical-dependency-injection",
        component: HierarchicalDependencyInjectionComponent
    },
    {
        path:"**",
        pathMatch: 'full',
        redirectTo: 'change-detection'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
