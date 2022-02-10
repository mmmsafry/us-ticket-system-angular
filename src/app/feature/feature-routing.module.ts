import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReservationViewComponent} from "./reservation-view/reservation-view.component";
import {ReservationFormComponent} from "./reservation-form/reservation-form.component";

const routes: Routes = [
  {
    path: 'view',
    data: {
      title: 'Reservations'
    },
    component: ReservationViewComponent
  },
  {
    path: 'book',
    data: {
      title: 'Bus Reservation'
    },
    component: ReservationFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
