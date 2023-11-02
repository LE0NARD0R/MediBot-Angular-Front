import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicFormComponent } from './medic-form/medic-form.component';

const routes: Routes = [
  {path: '', component: MedicFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
