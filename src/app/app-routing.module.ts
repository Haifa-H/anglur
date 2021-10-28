import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppoComponent } from './appo/appo.component';

const routes: Routes = [{ path: '', redirectTo: 'appointment', pathMatch: 'full' },
{ path: 'appointment', component: AppoComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
