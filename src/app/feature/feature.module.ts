import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReservationFormComponent} from './reservation-form/reservation-form.component';
import {ReservationViewComponent} from './reservation-view/reservation-view.component';
import {FeatureRoutingModule} from "./feature-routing.module";


@NgModule({
  declarations: [
    ReservationFormComponent,
    ReservationViewComponent,
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule {
}
