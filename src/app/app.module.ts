import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AncaorInicio } from './pages/inicio/ancaor-inicio.component';

// Animaciones
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Material
import { MaterialModule } from './app.material';
import { AncaorCabecera } from './pages/includes/header/ancaor-cabecera.component';
import { AncaorFooter } from './pages/includes/footer/ancaor-footer.component';
import { AppAncaor } from './pages/ancaor/app-ancaor.component';
import { AncaorContacto } from './pages/contacto/ancaor-contacto.component';

@NgModule({
	declarations: [
		AppComponent,
		AppAncaor,
		AncaorInicio,
		AncaorContacto,
		AncaorCabecera,
		AncaorFooter
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		MaterialModule
	],
	// entryComponents:[
	// 	AncaorCabecera,
	// 	AncaorFooter
	// ],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
