import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componente/home/home.component';
import { RazasComponent } from './componente/razas/razas.component';
import { HechizosComponent } from './componente/hechizos/hechizos.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'razas', component: RazasComponent },
    { path: 'hechizos', component: HechizosComponent }
  ];


  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
