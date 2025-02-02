import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { IonicModule } from '@ionic/angular';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { SelectCarComponent } from './select-car/select-car.component';
import { CarInfoComponent } from './car-info/car-info.component';


@NgModule({
  declarations: [DashboardComponent,SelectCarComponent,CarInfoComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    IonicModule.forRoot(),
    FormsModule,
        
  ]
})
export class DashboardModule {

 
 }
