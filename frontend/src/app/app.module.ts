import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './componente/home/home.component'; // Import del nuevo componente
import { AppRoutingModule } from './app.routes';
import { NavbarComponent } from './componente/navbar/navbar.component';
import { HechizosComponent } from './componente/hechizos/hechizos.component';
import { RazasComponent } from './componente/razas/razas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RazasComponent,
    HechizosComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
