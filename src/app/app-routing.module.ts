import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicFormComponent } from './medic-form/medic-form.component';
import { HomeComponent } from './home/home.component'
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'list', component: ListComponent},
  {path: 'form', component: MedicFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
