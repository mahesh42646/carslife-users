import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SelectCarComponent } from './select-car/select-car.component';
import { CarInfoComponent } from './car-info/car-info.component';

const routes: Routes = [
  {
    path: '',
    component:DashboardComponent
  },
  {
    path:'selectcar',
    component:SelectCarComponent
  },
  {
    path:'carinfo',
    component:CarInfoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
