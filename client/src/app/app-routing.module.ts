import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AncaorInicio } from './pages/inicio/ancaor-inicio.component';
import { AncaorContacto } from './pages/contacto/ancaor-contacto.component';

const ROUTES: Routes = [
    { path: '', component: AncaorInicio },
    { path: 'contacto', component: AncaorContacto }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }