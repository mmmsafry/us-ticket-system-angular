import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./shared/components/layout/layout.component";
import {AuthGuard} from "./core/guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'login'
    },
    component: LayoutComponent,
    loadChildren: () => import('../app/core/authenticate/authenticate.module').then(m => m.AuthenticateModule)
  },
  {
    path: 'reservation',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('../app/feature/feature.module').then(m => m.FeatureModule)
  },
  {
    path: '**',
    redirectTo: 'reservation/view'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
