import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AncaorInicio } from './pages/inicio/ancaor-inicio.component';
import { AncaorCabecera } from './includes/header/ancaor-cabecera.component';

// Animaciones
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Material
import { MaterialModule } from './app.material';
@NgModule({
  declarations: [
    AppComponent,
    AncaorInicio,
    AncaorCabecera
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
